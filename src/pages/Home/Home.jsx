import React from 'react';
import "./Home.css"
import Banner from "../../assets/images/Banner.svg"
import BannerM from "../../assets/images/BannerM.svg"
import Cards from '../../components/Cards/Cards';

const Home = () => {
    return (
        <div className='body-box'>
            <img className='banner-img' src={Banner} alt="Bannière Kasa" />
            <img className='bannerM-img' src={BannerM} alt="Bannière Kasa" />
            <div className="box-gallery">
                <Cards/>
            </div>
        </div>
    );
};

export default Home;