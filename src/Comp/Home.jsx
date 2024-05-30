import React from 'react';


const Home = () => {


    return (<>

     

        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
            <div className="container mx-auto flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 max-w-3xl w-full md:flex shadow-lg">
                    <div className="md:w-1/2 p-4">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Welcome to XYZ Financial Advisors
                        </h1>
                        <p className="text-gray-700 mb-8">
                            Your trusted partner for financial advice and planning.
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
