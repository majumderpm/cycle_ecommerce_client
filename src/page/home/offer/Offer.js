import React from 'react';
import placeholder from '../../../assets/img/placeholder-all.png';
import './offer.scss';

const Offer = () => {
    return (
        <>
            <section class="s-banner" style={{backgroundImage: 'url(./assets/img/bg-section-banner.jpg)' }}>
                <span class="mask"></span>
                <div class="banner-img">
                    <div class="banner-img-bg wow fadeIn" data-wow-duration=".6s" style={{backgroundImage: 'url(./assets/img/effect-section-banner.svg)'}}></div>
                    <img class="rx-lazy wow fadeInLeftBlur" src={placeholder} alt="img" />
                </div>
                <div class="container">
                    <h2 class="title">Hyper E-Ride Bike 700C</h2>
                    <p class="slogan">Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem.</p>
                    <div class="banner-price">
                        <div class="new-price">$1.699</div>
                        <div class="old-price">$1.799</div>
                    </div>
                    <div id="clockdiv">
                        <div>
                            <span class="days"></span>
                            <div class="smalltext">Days</div>
                        </div>
                        <div>
                            <span class="hours"></span>
                            <div class="smalltext">Hours</div>
                        </div>
                        <div>
                            <span class="minutes"></span>
                            <div class="smalltext">Minutes</div>
                        </div>
                        <div>
                            <span class="seconds"></span>
                            <div class="smalltext">Seconds</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Offer;