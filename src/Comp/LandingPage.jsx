import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center mb-8">
                <div className="max-w-3xl w-full mx-8 p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">
                    Unlock Your Financial Potential with Lokesh Miglani
                    </h1>
                    <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-8">
                    Empower your financial journey with Lokesh Miglani, a seasoned financial advisor dedicated to providing personalized guidance and strategies. Whether you're planning for retirement, managing investments, or seeking to optimize your financial health, Lokesh offers expert insights and tailored solutions to help you achieve your goals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/12955547/pexels-photo-12955547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="w-full h-48 md:h-64 rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="w-full h-48 md:h-64 rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-lg flex items-center justify-center">
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
