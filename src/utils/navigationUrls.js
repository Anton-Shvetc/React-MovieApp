import { Add } from "../components/Add";
import { Watchlist } from "../components/Watchlist";
import { Watched } from "../components/Watched";
import { TopFilms } from "../components/TopFilms";
import { TopSeries } from "../components/TopSeries";
import { Home } from "../components/Home";

export const NAVIGATION_URLS = [
  { name: "Главная", path: "/", component: Home, isPrivate: false },

  { name: "Поиск", path: "/add", component: Add, isPrivate: false },

  {
    name: "Фильмы",
    path: "/topfilms",
    component: TopFilms,
    isPrivate: false,
  },
  {
    name: "Сериалы",
    path: "/topseries",
    component: TopSeries,
    isPrivate: false,
  },
  {
    name: "Хочу посмотреть",
    path: "/watchlist",
    component: Watchlist,
    isPrivate: true,
  },
  {
    name: "Просмотрено",
    path: "/watched",
    component: Watched,
    isPrivate: true,
  },
];
