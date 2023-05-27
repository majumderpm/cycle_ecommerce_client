import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Link, json } from 'react-router-dom';

const ProductsDetails = ({ product }) => {
    return (
        <>
            <div className="product-item">
                <span className="top-sale">top sale</span>
                <ul className="product-icon-top">
                    <li><Link href="#"><BiRefresh /></Link> </li>
                    <li><Link href="#"><AiOutlineHeart /></Link> </li>
                </ul>
                <Link href="single-shop.html" className="product-img"><img className="rx-lazy" src={product.image} data-src={product.image} alt="product" /></Link> 
                <div className="product-item-cover">
                    <div className="price-cover">
                        <div className="new-price">{product.price}</div>
                    </div>
                    <h6 className="prod-title"><Link href="single-shop.html">{product.title}</Link> </h6>
                    <Link class="submit_btn" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg><span>buy now</span></Link> 
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