import React from 'react';
import Advise from '../components/Advise/Advise';
import Banner from '../components/Banner/Banner';
import CardExpress from '../components/CardsExpress/CardExpress';
import Contact from '../components/Contact/Contact';
import Feauter from '../components/Feauter/Feauter';
import FeedBack from '../components/FeedBack/FeedBack';
import Header from '../components/Header/Header';
import Information from '../components/Information/Information';
import Transport from '../components/Transport/Transport';

const HomeSreen = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Transport />
            <Information />
            <Feauter />
            <CardExpress />
            <Advise />
            <FeedBack />
            <Contact />
        </React.Fragment>
    );
};

export default HomeSreen;
