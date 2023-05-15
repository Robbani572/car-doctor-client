import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import BookServices from "../pages/BookServices/BookServices";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'book/:id',
                element: <BookServices></BookServices>,
                loader: ({params}) => fetch(`http://localhost:5444/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivetRoutes><Bookings></Bookings></PrivetRoutes>
            }
        ]
    }
])

export default router;