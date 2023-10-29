import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../components/Login';
import Dashboard from "../components/Dashboard";
import Register from "../components/Register";
import Layouts from "./Layouts";
import ErrorPage from "../components/Error";
import TenantDetails from "../components/Tenants/TenantDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 't-details/:tenantId',
                        element: <TenantDetails />
                    }
                ]
            },
            
        ]
    }
])

function AppRouter (){
    return <RouterProvider router={routes} />
}

export default AppRouter;