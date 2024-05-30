import React from 'react'
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../Context/Context';

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn, userLoggedIn, setUserLoggedIn } = useUserContext();
    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-between items-center  cursor-pointer px-1 py-2 ' style={{ backgroundColor: "#353535", color: "white" }}>
                <div>
                    Advance-DBMS
                </div>
                <div className='flex justify-center items-center gap-5 '>
                    <div onClick={() => { navigate("about") }}>About</div>
                    <div onClick={() => { navigate("contact-us") }}>Contact Us</div>
                    <div onClick={() => {

                        if (!isLoggedIn)
                            navigate("login")
                        else {
                            sessionStorage.clear()
                            navigate("")
                            setIsLoggedIn(false)

                        }

                    }}>{!isLoggedIn ? "Login" : "Logout"}</div>
                </div>
            </div>



        </>
    )
}

export default Navbar