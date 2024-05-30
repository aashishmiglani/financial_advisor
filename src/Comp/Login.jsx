import React, { useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useUserContext } from '../Context/Context'
import { BASE_URL } from '../BASE_URL'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const {  setIsLoggedIn,} = useUserContext();

    const [showPassword, setShowPassword] = useState(false)
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })


    const handleInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {

        axios.post(`${BASE_URL}/api/token/`, credentials).then((resolve) => {
            sessionStorage.setItem("access", resolve.data.access)
            sessionStorage.setItem("refresh", resolve.data.refresh)
            toast.success("Success!")
            setIsLoggedIn(true)
            navigate("/get-contacts")
        }).catch((err) => {
            toast.error("Try Again")
        })

    }

    return (
        <>


            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Email"
                            name='username'
                            value={credentials.username}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="w-full px-3 py-2 border rounded-md pr-10"
                            placeholder="Password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputs}
                        />
                        <button
                            onClick={() => { setShowPassword(!showPassword) }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
            </div >


        </>

    )
}

export default Login