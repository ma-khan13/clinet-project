import React from 'react';
import Slider from "react-slick";
import photo from './../../../assets/images/photographer-407068_1920.jpg'
import icon1 from './../../../assets/images/icons/1.jpg'
import icon2 from './../../../assets/images/icons/2.jpg'
import icon3 from './../../../assets/images/icons/3.jpg'
import icon4 from './../../../assets/images/icons/4.jpg'
import icon5 from './../../../assets/images/icons/5.jpg'
import icon6 from './../../../assets/images/icons/6.jpg'
import icon7 from './../../../assets/images/icons/7.jpg'
import icon8 from './../../../assets/images/icons/8.jpg'
import icon9 from './../../../assets/images/icons/9.jpg'
import icon10 from './../../../assets/images/icons/10.jpg'
import icon11 from './../../../assets/images/icons/11.jpg'
import icon12 from './../../../assets/images/icons/12.jpg'
import icon13 from './../../../assets/images/icons/13.jpg'
import icon14 from './../../../assets/images/icons/14.jpg'
import icon15 from './../../../assets/images/icons/15.jpg'
import icon16 from './../../../assets/images/icons/16.jpg'
import icon17 from './../../../assets/images/icons/17.jpg'
import icon18 from './../../../assets/images/icons/18.jpg'
import icon19 from './../../../assets/images/icons/19.jpg'
import icon20 from './../../../assets/images/icons/20.jpg'
import icon21 from './../../../assets/images/icons/21.jpg'
import icon22 from './../../../assets/images/icons/22.jpg'


const HomeItemCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9
    };

    return (
        <div className={'container section-gap'}>
            <div className="row">
                <div className="col-md-12 my-5">
                    <h1 className={'text-center text-uppercase text-theme'}>Find your best match</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11">
                    <div className="category-area">
                        <Slider {...settings}>
                            <a href={'/'} className="category-item">
                                <img src={icon1}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon2}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon3}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon4}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon5}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon6}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon7}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon8}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon9}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon10}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon11}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon12}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon13}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon14}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon15}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon16}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon17}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon18}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon19}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon20}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon21}/>
                                <p>Category 1</p>
                            </a>
                            <a href={'/'}  className="category-item">
                                <img src={icon22}/>
                                <p>Category 1</p>
                            </a>
                        </Slider>
                    </div>
                </div>
                <div className="col-md-1">
                    <button>Filter</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="home-card-item">
                        <div className="image-container">
                            <button><i className="fa-solid fa-heart"></i></button>
                            <img src={photo} className={'img-thumbnail'} alt={'photo'}/>
                        </div>
                        <div className="content">
                            <h6>Gardone Riviera, Italy</h6>
                            <p>Designed by David Chipperfield</p>
                            <p>Aug 1 – 7</p>
                            <p><strong>$12,761 USD</strong> Night</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 my-4 text-center">
                <button className={'view-more-button mt-4'}>View More</button>
            </div>

        </div>
    );
};

export default HomeItemCard;
