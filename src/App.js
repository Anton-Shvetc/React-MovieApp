import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
// import "./lib/font-awesome/css/all.min.css";
import Routes from "./routes/Routes/index";
import useAuth from "./hooks/useAuth/index";

import { NAVIGATION_URLS } from "./utils/navigationUrls";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="App-header">
          <Typography variant="h6" className="App-logo ">
            SA-App
          </Typography>
          <div className={classes.rightToolbar}>
            {NAVIGATION_URLS.map((navigation) => {
              return (
                (!auth.user && navigation.isPrivate) || (
                  <Button
                    key={navigation.name}
                    color="inherit"
                    component={Link}
                    to={navigation.path}
                  >
                    {navigation.name}
                  </Button>
                )
              );
            })}
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  {auth.user.firstName} {auth.user.lastName}
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Выход
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Вход
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Регистрация
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

      <Routes />
    </div>
  );
}

export default App;
