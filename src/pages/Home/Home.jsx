import React from 'react';
import "./Home.css"
import Banner from "../../assets/images/Banner.png"

const Home = () => {
    return (
        <body className='body-box'>
            <img className='banner-img' src={Banner} alt="Bannière Kasa" />
        </body>
    );
};

export default Home;