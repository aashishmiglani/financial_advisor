import React from 'react'
import { Element, scroller, } from 'react-scroll';
import Home from '../Comp/Home';
import Header from '../Comp/Header';
import ContactUs from '../Comp/ContactUs';
import Footer from '../Comp/Footer';
import Services from '../Comp/Services';
import LandingPage from '../Comp/LandingPage';
import { Outlet, Link } from "react-router-dom";

const MainPage = () => {

    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToServices = () => {
        scroller.scrollTo('services', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToGetStarted = () => {
        scroller.scrollTo('get-started', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToHome = () => {
        scroller.scrollTo('landingpage', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };



    return (
        <>
            <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div>
                    <a to="landingpage" smooth={true} duration={800}>
                        <div className="flex items-center">
                            <img
                                src="https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Logo"
                                className="w-10 h-10 rounded-full mr-2 cursor-pointer"
                            />
                            <span className="text-3xl font-extrabold text-white">Financial Advisors</span>
                        </div>
                    </a>
                </div>
                <ul className="flex items-center space-x-4">
                    <li>
                        <a onClick={scrollToHome} style={{ cursor: 'pointer' }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a onClick={scrollToServices} style={{ cursor: 'pointer' }}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a onClick={scrollToGetStarted} style={{ cursor: 'pointer' }}>
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a onClick={scrollToContact} style={{ cursor: 'pointer' }}>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <Link to='login' onClick={() => { }}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                Login
                            </button>
                        </Link>
                        <Outlet />
                    </li>
                </ul>
            </nav>

            <Element name="landingpage">
                <LandingPage />
            </Element>

            <Element name="services">
                <Services />
            </Element>

            <Element name="get-started">
                <Home />
            </Element>

            <Element name="contact">
                <ContactUs />
            </Element>
            <Footer />
        </>
    );
}

export default MainPage