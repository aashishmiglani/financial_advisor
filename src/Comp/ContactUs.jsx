import React, { useState } from 'react'
import { BASE_URL } from '../BASE_URL'
import { toast } from 'react-toastify'
import axios from 'axios'


const ContactUs = () => {
    const [conatct, setContact] = useState({})

    const handleChange = (e) => {
        setContact({ ...conatct, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/apis/v1/contact-form/`, conatct);
            toast.success("Submited Succesfuly")
        } catch (error) {
            toast.error("Error")
        }

    }

    const email = "lokeshmiglani@yahoo.co.in";
    const phoneNumber = "+91 9815969798"

    return (
        <>
            {/* <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} method="POST" action="">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-600">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            onChange={handleChange}
                            name="first_name"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="John"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            onChange={handleChange}
                            name="last_name"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-600">State</label>
                        <input
                            type="text"
                            id="state"
                            onChange={handleChange}
                            name="state"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="California"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-600">City</label>
                        <input
                            type="text"
                            id="city"
                            onChange={handleChange}
                            name="city"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Los Angeles"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            onChange={handleChange}
                            name="phonenumber"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="123-456-7890"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleChange}
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="john.doe@example.com"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div> */}
            <div className="flex flex-col items-center p-6 bg-gray-100 pt-5 pb-5">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <p className="text-lg mb-4">If you have any questions or need further information, feel free to contact us:</p>
                    <ul className="list-none p-0">
                        <li className="mb-2">
                            Email: <a className="text-blue-500 hover:underline" href={`mailto:${email}`}>{email}</a>
                        </li>
                        <li>
                            Phone: <a className="text-blue-500 hover:underline" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContactUs