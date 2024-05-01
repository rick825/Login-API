import React, { createContext, useContext, useState } from 'react';


const LoginContext =  createContext();


export const LoginProvider = ({ children }) =>{
    const [loggedInUser,setLoggedInUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    return(
    <LoginContext.Provider value={{ loggedIn, setLoggedIn,loggedInUser,setLoggedInUser}}>
        {children}
    </LoginContext.Provider>
    );
};

export const useLoginStatus = () => useContext(LoginContext);