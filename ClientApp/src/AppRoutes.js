import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";

const AppRoutes = [
  {
    index: true,
    element: <LandingPage />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
