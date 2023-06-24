import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BiCart, BiRefresh } from 'react-icons/bi';
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const AllProductDetails = ({ allProduct }) => {
    const { _id, image, price, title, description, rating } = allProduct;
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
                    <p className='shortDes'>{description}</p>
                    <div className='rate'>
                        <AiFillStar />
                        <span>{rating.rate}</span>
                    </div>
                    <div className='btn_groupCart'>
                        <Link class="submit_btn" to={`/product-details/${allProduct._id}`}>
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

export default AllProductDetails;