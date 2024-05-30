import React from 'react';

const Services = () => {
    const serviceData = [
        {
            title: "Financial Planning",
            description: "Personalized financial plans to meet your goals and secure your future.",
            image: "https://images.pexels.com/photos/732444/pexels-photo-732444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with the actual image path
        },
        {
            title: "Investment Management",
            description: "Expert investment strategies to grow your wealth.",
            image: "https://images.pexels.com/photos/7788004/pexels-photo-7788004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with the actual image path
        },
        {
            title: "Retirement Planning",
            description: "Plan for a comfortable retirement with our guidance.",
            image: "https://images.pexels.com/photos/6158648/pexels-photo-6158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with the actual image path
        },
    ];

    return (
        <div className='flex justify-center'>
            <section className="py-16" style={{ width: "90%" }}>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <div key={index} className="bg-white rounded p-4 shadow-md transition-transform hover:scale-105 duration-300 ease-in-out transform hover:shadow-lg">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
