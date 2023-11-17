import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

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
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    }
];

export default AppRoutes;
