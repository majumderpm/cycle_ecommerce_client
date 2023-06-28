import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { CiHome } from "react-icons/ci";
import './details.scss';
import { AiFillStar } from 'react-icons/ai';

const Details = () => {

  const { _id } = useParams();
  console.log(_id);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [selectedImg, setSelectedImg] = useState(null);


  const [singleProduct, setSingleProduct] = useState({});
  console.log(singleProduct);


  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data?.[0]));
      // .then(data => console(data));

  }, [])

  return (
    <>
      <section className='quick_view'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/"><CiHome /></Link></li>
                  <li className="breadcrumb-item"><Link to="#">Products</Link></li>
                </ol>
              </nav>
            </div>
            <div className='col-lg-5 col-md-12'>
              <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div className='for_img'>
                  <img src={selectedImg ? selectedImg : singleProduct.image} alt="" />
                </div>

              </Slider>
              {/* <h4>Second Slider</h4> */}
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {
                  singleProduct.thumbnail?.map((img) => {
                    return (
                      <div className='nav_img'>
                        <img onClick={() => setSelectedImg(img)} src={img} alt="" />
                      </div>
                    )
                  })
                }


              </Slider>
            </div>
            <div className="col-lg-7 col-md-6 product-single-details">
              <h1 className="product-title">{singleProduct.title}</h1>
              <hr className="short-divider" />
              <div className="price-box">
                <span className="new-price">${singleProduct.price}</span>
              </div>
              <div className="product-desc">
                <p>
                  {singleProduct.description} 
                 
                </p> <NavLink to=''>see all</NavLink>
              </div>
              {/* <div className='rate'>
                        <AiFillStar />
                        <span>{singleProduct.rating.rate}</span>
                    </div> */}

              
            
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Details;