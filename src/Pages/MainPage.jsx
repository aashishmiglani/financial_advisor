import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import Home from '../Comp/Home';
import ContactUs from '../Comp/ContactUs';
import Footer from '../Comp/Footer';
import Services from '../Comp/Services';
import LandingPage from '../Comp/LandingPage';
import Sidebar from '../Comp/Sidebar';

const MainPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

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
                <div className="md:hidden">
                    <button onClick={openSidebar} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex items-center space-x-4">
                    <li>
                        <button onClick={() => scrollTo('landingpage')} className="hover:text-gray-300">
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('services')} className="hover:text-gray-300">
                            Services
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('get-started')} className="hover:text-gray-300">
                            Get Started
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('contact')} className="hover:text-gray-300">
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
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} scrollTo={scrollTo} /> {/* Pass scrollTo function as a prop */}
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
