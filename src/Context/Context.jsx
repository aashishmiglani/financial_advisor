import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState({});


    return (
        <UserContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            userLoggedIn, setUserLoggedIn,
        }}>
            {children}
        </UserContext.Provider>
    );
}
