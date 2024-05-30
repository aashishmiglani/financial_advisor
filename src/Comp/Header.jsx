import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src="https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Logo"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <span className="text-3xl font-extrabold text-white">Financial Advisors</span>
                    </div>
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out">
                        <img
                            src="/path-to-home-icon.png"
                            alt="Home"
                            className="w-6 h-6 mr-1"
                        />
                        Home
                    </Link>
                    <Link to="/services" className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out">
                        <img
                            src="/path-to-services-icon.png"
                            alt="Services"
                            className="w-6 h-6 mr-1"
                        />
                        Services
                    </Link>
                    <Link to="/contact" className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out">
                        <img
                            src="/path-to-contact-icon.png"
                            alt="Contact"
                            className="w-6 h-6 mr-1"
                        />
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
