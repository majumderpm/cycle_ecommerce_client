import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ProductsDetails = ({ service }) => {
    console.log(service);
    const { _id, image, price, title, rating } = service;
   
    return (
        <>
            <div className="product-item">
                <span className="top-sale">top sale</span>
                <ul className="product-icon-top">
                    <li><Link href="#"><BiRefresh /></Link> </li>
                    <li><Link href="#"><AiOutlineHeart /></Link> </li>
                </ul>
                {/* <Link to="#" className="product-img">
                    <img className="rx-lazy" src={image} data-src={image} alt="product" /></Link> */}
                    <PhotoProvider >
                    <PhotoView src={image}>
                        <img src={image} alt="" className="product-img"/>
                    </PhotoView>
                </PhotoProvider>
                <div className="product-item-cover">
                    <div className="price-cover">
                        <div className="new-price">{price}</div>
                    </div>
                    <h6 className="prod-title"><Link href="single-shop.html">{title}</Link> </h6>
                    <div className='rate'>
                        <AiFillStar />
                        <span>{rating.rate}</span>
                    </div>
                    <div className='btn_groupCart'>
                    <Link class="submit_btn" to={`/product-details/${service._id}`}>
                        {/* <BiCart /> */}
                        <span>details</span>
                    </Link>
                    <Link class="submit_btn" to="/">
                        <BiCart />
                        <span>add to cart</span>
                    </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductsDetails;

// export const productApi = async()=> {
//     const responses = await fetch('http://localhost:5000/services');

//     if(!responses.ok) {
//         throw json({messsage: 'found error'}, {status: 404})
//     }else{
//         return responses
//     }

// }