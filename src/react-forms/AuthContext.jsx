import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>  {
    const [user, setUser] = useState(null);

    const signup = async (email, password, fullName) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SIGNUP}` , {
                email,
                password,
                fullName,
            })

            const { data } = response;
            setUser(data.user);

            localStorage.setItem("user", JSON.stringify(data.user));
        } catch (error) {
            console.error("Registration failed: ", error.response.data);
        }
    }

    return (
        <AuthContext.Provider 
        value={{
            user,
            signup
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}