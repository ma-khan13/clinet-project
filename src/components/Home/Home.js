import React from 'react';
import About from './include/About';
import Banner from './include/Banner';
import HomeItemCard from "./include/HomeItemCard";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <HomeItemCard/>
        </div>
    );
};

export default Home;
