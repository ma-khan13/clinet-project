import React from "react";
import bedroom from './../../../assets/images/bedroom-1285156_1920.jpg'
import hotel from './../../../assets/images/hotel-1330850_1920.jpg'

const About = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <h1 className={'text-uppercase text-center text-theme'}>Welcome to Travel Tour</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img src={bedroom} alt={'Bed room'} className={'img-thumbnail'}/>
                    </div>
                    <div className="col-md-6 align-items-center">
                        <h2 className={'text-uppercase'}>The future of travel</h2>
                        <p className={'lead mt-5'}>
                            The ways people travel, work and live are blurring. From product innovations, to the latest travel trends, discover how the future of travel is being shaped by Airbnb.
                        </p>
                        <div className={'text-end'}>
                            <button className={'view-more-button mt-4'}>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="row section-gap">
                    <div className="col-md-6 align-items-center">
                        <h2 className={'text-uppercase'}>The future of travel</h2>
                        <p className={'lead mt-5'}>
                            The ways people travel, work and live are blurring. From product innovations, to the latest travel trends, discover how the future of travel is being shaped by Airbnb.
                        </p>
                        <button className={'view-more-button mt-4'}>View Details</button>
                    </div>

                    <div className="col-md-6">
                        <img src={hotel} alt={'Bed room'} className={'img-thumbnail'}/>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
