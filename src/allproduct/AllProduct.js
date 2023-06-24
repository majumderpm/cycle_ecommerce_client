import React, { useEffect, useState } from 'react';
import AllProductDetails from './AllProductDetails';

const AllProduct = () => {

const [allProducts, setAllProducts ] = useState([]);

useEffect(() => {

    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setAllProducts(data));

  }, [])

    return (
        <>
             <section className="s-products">
                <div className="container">

                    <h2 className='secondary_heading'>Our best product</h2>
                    <div className="row g-4">
                       

                        {
                            allProducts.map(allProduct => 
                                <div className="col-lg-4 col-md-4 col-sm-12 gy-4">
                                    <AllProductDetails
                                key={allProduct._id}
                                allProduct={allProduct}
                            ></AllProductDetails>
                            </div>
                            )
                        }
                    </div>
                        
                </div>
            </section>
        </>
    );
};

export default AllProduct;