import React, { useEffect, useState } from 'react';
import './Products.scss';
import 'react-photo-view/dist/react-photo-view.css';
// import prod from '../../../assets/img/prod-8.png';
import ProductsDetails from './ProductsDetails';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";

const Products = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <>
            <section className="s-products">
                <div className="container">

                    <h2 className='secondary_heading'>Our best product</h2>
                    <div className="row g-4">
                       

                        {
                            services.slice(0, 3).map(service => 
                                <div className="col-lg-4 col-md-4 col-sm-12 gy-4">
                                    <ProductsDetails
                                key={service._id}
                                service={service}
                            ></ProductsDetails>
                            </div>
                            )
                        }
                    </div>
                        <div className='btn_group'>
                        <NavLink className="submit_btn" to={`/allproduct`}><span><FiChevronDown />see all</span></NavLink> 
                        </div>
                </div>
            </section>

        </>
    );
};

export default Products;