import {useRoutes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import OneMovie from "../pages/OneMovie/OneMovie";
import Cartoons from "../pages/Cartoons/Cartoons";
export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {path: '/', element: <Home/>},
                {path: '/movies', element: <Movies/>},
                {path: '/cartoons', element: <Cartoons/>},
                {path: '/movies/:id', element: <OneMovie/>}
            ]
        }
    ])
    return routes
}