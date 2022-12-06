import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        //To Do
        setCurrentUser({ id: 1, name: "Girish Tiwale", profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyFHOw8dO_4vTwdIEx6VeI-2U6mBz7YTQgjWVJcvT_sx3C3MMSkJ-Q8wlEeANOyTtGhY&usqp=CAU" });
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
};