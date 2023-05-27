import React from 'react';
import Banner from './banner/Banner';
import Products from './products/Products';
import ProductsDetails from './products/ProductsDetails';
// import Card from './card/Card';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         {/* <Card></Card> */}
         {/* <Products></Products> */}
         <ProductsDetails></ProductsDetails>
        </>
    );
};

export default Home;