import React, { useEffect, useState } from 'react';
import './Products.scss';
// import prod from '../../../assets/img/prod-8.png';
import ProductsDetails from './ProductsDetails';

const Products = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json)
        .then(data => setproducts(data.products));

    }, [])

    return (
        <>
            <section className="s-products">
                <div className="container">
                    <div className="row g-2">
                    {
                                  products?.map((product) => 
                                  <div className="col-lg-4 col-md-4 col-sm-12 gy-4">
                                    <ProductsDetails
                                    key={product.id}
                                    product={product}
                                  ></ProductsDetails>
                                  </div>
                                  ) 
                            }
                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="product-item">
									<span className="top-sale">top sale</span>
									<ul className="product-icon-top">
										<li><a href="#"><BiRefresh/></a></li>
										<li><a href="#"><AiOutlineHeart /></a></li>
									</ul>
									<a href="single-shop.html" className="product-img"><img className="rx-lazy" src={prod} data-src="assets/img/prod-1.png" alt="product"/></a>
									<div className="product-item-cover">
										<div className="price-cover">
											<div className="new-price">$1.699</div>
											<div className="old-price">$1.799</div>
										</div>
										<h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
										<a class="submit_btn" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg><span>buy now</span></a>
									</div>
									
								</div>
                        </div> */}
                    </div>
              
                    </div>                
            </section>

        </>
    );
};

export default Products;