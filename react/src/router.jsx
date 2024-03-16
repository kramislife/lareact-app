import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/login";
import Signup from "./views/signup";
import Surveys from "./views/surveys";
import ErrorPage from "./views/404";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Dashboard />
    },

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/surveys',
        element: <Surveys />
    },

    {
        path: '/404',
        element: <ErrorPage />
    },

])



export default router;