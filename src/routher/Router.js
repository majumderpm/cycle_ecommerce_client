import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../page/home/Home';
import Login from '../page/login/Login';
import Register from '../page/register/Register';
// import { productApi } from '../page/home/products/ProductsDetails';



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>,
                // loader: productApi
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]

    }
])

export default Router