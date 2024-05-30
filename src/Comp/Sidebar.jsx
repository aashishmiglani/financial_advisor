import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, scrollTo }) => {
    const handleClick = (target) => {
        scrollTo(target);
        onClose(); // Close the sidebar after clicking a link
    };

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
            <div className="p-4">
                <button className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none" onClick={onClose}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className="space-y-4">
                    <li>
                        <button onClick={() => handleClick('landingpage')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('services')}>Services</button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('get-started')}>Get Started</button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('contact')}>Contact Us</button>
                    </li>
                    <li>
                        <Link to="/login" onClick={onClose}>
                            <button>Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
