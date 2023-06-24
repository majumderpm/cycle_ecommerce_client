import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../page/home/Home';
import Login from '../page/login/Login';
import Register from '../page/register/Register';
import AllProduct from '../allproduct/AllProduct';
import Details from '../details/Details';
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
                path: '/allproduct',
                element: <AllProduct />,
            },
            {
                path: '/product-details/:_id',
                element: <Details ></Details>
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