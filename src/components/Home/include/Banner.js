import React from 'react';
import  banner1 from './../../../assets/images/bora-bora-3023437_1920.jpg'
import  banner2 from './../../../assets/images/photographer-407068_1920.jpg'
import  banner3 from './../../../assets/images/woman-3640935_1920.jpg'
import './../../../../node_modules/slick-carousel/slick/slick.css'
import './../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (

        <section>
            <div className="container-fluid g-0">
                <div className="banner">
                    <Slider {...settings}>
                        <div>
                           <img src={banner1} alt={'slider'} />
                        </div>
                        <div>
                            <img src={banner2} alt={'slider'} />
                        </div>
                        <div>
                            <img src={banner3} alt={'slider'} />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Banner;
