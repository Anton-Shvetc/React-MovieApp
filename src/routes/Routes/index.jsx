import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../../components/Login";

import Registration from "../../components/Registration";
import Profile from "../../components/Profile";
import NotFound from "../../components/NotFound";
import useAuth from "../../hooks/useAuth/index";
import PrivateRoute from "../../components/PrivateRoute";
import GuestRoute from "../../components/GuestRoute";
import { MoreInfo } from "../../components/MoreInfo";
import { GlobalProvider } from "../../GlobalContext/GlobalState";
import { NAVIGATION_URLS } from "../../utils/navigationUrls";

import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Routes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <GlobalProvider>
      <Switch>
        {NAVIGATION_URLS.map((navigation) => {
          return navigation.isPrivate ? (
            <PrivateRoute key={navigation.name} exact path={navigation.path}>
              {React.createElement(navigation.component, {})}
            </PrivateRoute>
          ) : (
            <Route
              exact
              key={navigation.name}
              path={navigation.path}
              component={navigation.component}
            />
          );
        })}

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <GuestRoute path="/login">
          <Login />
        </GuestRoute>

        <GuestRoute path="/registration">
          <Registration />
        </GuestRoute>

        <Route path="/moreinfo">
          <MoreInfo />
        </Route>

        <Route path="/not-found-404">
          <NotFound />
        </Route>
        <Redirect to="/not-found-404" />
      </Switch>
    </GlobalProvider>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Routes;
