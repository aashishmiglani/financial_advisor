import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full mx-8 p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Welcome to Our Landing Page
                    </h1>
                    <p className="text-gray-700 mb-8">
                        Discover amazing content, services, and more.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/12955547/pexels-photo-12955547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image 1"
                                className="w-full h-full rounded-lg object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image 2"
                                className="w-full h-full rounded-lg object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-blue-600 opacity-20 transform rotate-45 z-10"></div>
                <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-blue-400 opacity-20 transform -rotate-45 z-10"></div>
                <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-blue-200 opacity-20 transform rotate-45 z-10"></div> */}
            </div>
        </div>
    );
};

export default LandingPage;
