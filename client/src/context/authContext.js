import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    // const [currentUser, setCurrentUser] = useState(null);

    // const verifyLogin = async () => {
    //     await fetch("http://localhost:8800/api/auth/verify", {
    //         credentials: "include",
    //     })
    //         .then(res => {
    //             if (res.ok) return res.json();
    //             return res.json().then(errorMessage => {
    //                 throw new Error(errorMessage);
    //             })
    //         })
    //         .then(data => {
    //             setCurrentUser(data._doc);
    //         })
    // };
    // // verifyLogin();

    const login = async (inputs) => {
        await fetch('http://localhost:8800/api/auth/login', {
            method: "POST",
            body: JSON.stringify(inputs),
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) return res.json();
                return res.json().then(errorMessage => {
                    throw new Error(errorMessage);
                })
            })
            .then(data => {
                setCurrentUser(data._doc);
            })
    };



    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
};