import React from 'react';

const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg p-8 max-w-3xl w-full md:flex shadow-lg md:mx-auto md:my-0 md:px-0">
                        <div className="md:w-1/2 p-4">
                            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                                Expert Financial Guidance Tailored Just for You
                            </h1>
                            <p className="text-gray-700 mb-8">
                                With a wealth of experience and a personalized approach, Lokesh ensures that each client receives tailored strategies to meet their unique financial goals. Whether you're navigating investment decisions, planning for retirement, or seeking to build a robust financial portfolio
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                Get Started
                            </button>
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            <img
                                src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=''
                                className="w-full h-full rounded-r-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
