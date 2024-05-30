import React from 'react';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import Home from '../Comp/Home';
import ContactUs from '../Comp/ContactUs';
import Footer from '../Comp/Footer';
import Services from '../Comp/Services';
import LandingPage from '../Comp/LandingPage';

const MainPage = () => {
    const scrollTo = (target) => {
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <>
            <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div>
                    <Link to="/landingpage" onClick={() => scrollTo('landingpage')}>
                        <div className="flex items-center">
                            <img
                                src="https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Logo"
                                className="w-10 h-10 rounded-full mr-2 cursor-pointer"
                            />
                            <span className="text-3xl font-extrabold text-white">Financial Advisors</span>
                        </div>
                    </Link>
                </div>
                <ul className="flex items-center space-x-4">
                    <li>
                        <button onClick={() => scrollTo('landingpage')} style={{ cursor: 'pointer' }}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('services')} style={{ cursor: 'pointer' }}>
                            Services
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('get-started')} style={{ cursor: 'pointer' }}>
                            Get Started
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('contact')} style={{ cursor: 'pointer' }}>
                            Contact Us
                        </button>
                    </li>
                    <li>
                        <Link to='/login'>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                Login
                            </button>
                        </Link>
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

export default MainPage;
