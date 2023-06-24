import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import slider1 from '../../../assets/img/img-slider.png';
import slider2 from '../../../assets/img/img-slider-2.png';
import slider3 from '../../../assets/img/img-slider-3.png';
import './Banner.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import info1 from '../../../assets/img/bike-info-slide.jpg';
import { BiCart } from "react-icons/bi";
import svg1 from '../../../assets/img/bg-slider.svg';
import svg2 from '../../../assets/img/bg-slider-2.svg';
import svg3 from '../../../assets/img/bg-slider-3.svg';


const Banner = () => {



    var settings = {
        dots: true,
        arrow: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };







    return (
        <>

            <section className="s-main-slider">

                <div className="main-slide-navigation"></div>

                <ul className="main-soc-list">
                    <li><a href="https://www.facebook.com/rovadex">facebook</a></li>
                    <li><a href="https://twitter.com/RovadexStudio">twitter</a></li>
                    <li><a href="https://www.instagram.com/rovadex/">instagram</a></li>
                </ul>
                <div className="main-slider">
                    <Slider {...settings}>
                        <div className="main-slide">
                            <div className="main-slide-bg"><img src={svg1} alt='' /></div>
                            <div className="container">
                                <div className="main-slide-info">
                                    <h2 className="title">best bikes for you</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <Link to="#" className="submit_btn"><BiCart /><span>buy now</span></Link>
                                </div>
                                <div className="slide-img-cover">
                                    <Link to="#" className="lable-bike">
                                        <div className="lable-bike-img"><img src={info1} alt="img" /></div>
                                        <div className="lable-bike-item">
                                            <div className="model">model SX-200</div>
                                            <div className="price">$1399</div>
                                        </div>
                                    </Link>
                                    <img src={slider1} alt="img" className="slide-img" />
                                </div>
                            </div>
                        </div>
                        <div className="main-slide">
                            <div className="main-slide-bg"><img src={svg2} alt='' /></div>
                            <div className="container">
                                <div className="main-slide-info">
                                    <h2 className="title">best bikes for you</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consectetur sint iure id expedita saepe.</p>
                                    <Link to="#" className="submit_btn"><BiCart /><span>buy now</span></Link>
                                </div>
                                <div className="slide-img-cover">
                                    <Link to="#" className="lable-bike">
                                        <div className="lable-bike-img"><img src={info1} alt="img" /></div>
                                        <div className="lable-bike-item">
                                            <div className="model">model M-300</div>
                                            <div className="price">$1199</div>
                                        </div>
                                    </Link>
                                    <img src={slider2} alt="img" className="slide-img" />
                                </div>
                            </div>
                        </div>
                        <div className="main-slide">
                            <div className="main-slide-bg"><img src={svg3} alt='' /></div>
                            <div className="container">
                                <div className="main-slide-info">
                                    <h2 className="title">best bikes for you</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio tenetur ab ut! Qui, facilis.</p>
                                    <Link to="#" className="submit_btn"><BiCart /><span>buy now</span></Link>
                                </div>
                                <div className="slide-img-cover">
                                    <Link to="#" className="lable-bike">
                                        <div className="lable-bike-img"><img src={info1} alt="img" /></div>
                                        <div className="lable-bike-item">
                                            <div className="model">model X-230</div>
                                            <div className="price">$1099</div>
                                        </div>
                                    </Link>
                                    <img src={slider3} alt="img" className="slide-img" />
                                </div>
                            </div>
                        </div>



                    </Slider>
                </div>
                {/* </div> */}
            </section>


            <section className='form_part'>
                <div className='container'>
                    <div className='row g-2'>
                        <div className='col-lg-12'>
                            <div className='form_area'>
                                <h2>FIND THE BIKE</h2>
                                <form>
                                    <div className="row align-items-end">
                                        <div className="col">
                                            <label htmlFor="basic-url" className="form-label">Type</label>
                                
                                            <select defaultValue={'DEFAULT'} className="form-select select_home_input">
                                                <option value="DEFAULT" disabled>Choose a salutation ...</option>
                                                <option>Hybrid/Comfort Bike</option>
                                                <option>Cyclocross Bike</option>
                                                <option>BMX/Trick Bike</option>
                                                <option>Road Bike</option>
                                                <option>Track Bike</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <label htmlFor="basic-url" className="form-label">Wheel Size</label>
                                    
                                            <select defaultValue={'DEFAULT'} className="form-select select_home_input">
                                                <option value="DEFAULT" disabled>Choose a salutation ...</option>
                                                <option>24</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>27.5</option>
                                                <option>28</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <label htmlFor="basic-url" className="form-label">Brand</label>
                                      
                                            <select defaultValue={'DEFAULT'} className="form-select select_home_input">
                                                <option value="DEFAULT" disabled>Choose a salutation ...</option>
                                                <option>Eddy Merckx</option>
                                                <option>Specialized</option>
                                                <option>Giant</option>
                                                <option>Trek</option>
                                                <option>BMC</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <button type="submit" className="submit_btn">Get Consultion</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Banner;
