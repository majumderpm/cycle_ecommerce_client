import React from 'react';
import Banner from './banner/Banner';
import Products from './products/Products';
import ProductsDetails from './products/ProductsDetails';
import Offer from './offer/Offer';
// import Card from './card/Card';

const Home = () => {
    return (
        <>
            <Banner></Banner>

            <Products></Products>
            <Offer />
        </>
    );
};

export default Home;