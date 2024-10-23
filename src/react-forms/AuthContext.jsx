import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://agrolux.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setLoggedIn(true); // Update loggedIn state
      } else {
        console.error('Login failed:', data.message);
        setLoggedIn(false); // Ensure loggedIn is false on failure
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoggedIn(false); // Ensure loggedIn is false on error
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SIGNUP}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      console.log("Registration response:", data);

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user to localStorage
        setUser(data.user);
        setLoggedIn(true);
        return { success: true }; // Indicate successful registration
      } else {
        console.error("Registration failed:", data.message);
        return {
          success: false,
          message: data.message || "Registration failed",
        }; // Return object with success and message
      }
    } catch (error) {
      console.error("Error during registration:", error); // Log the full error object
      return { success: false, message: "An unexpected error occurred." }; // Always return an object
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false); // Update loggedIn state on logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loggedIn,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Updated to node for broader compatibility
};

export const useAuth = () => useContext(AuthContext);
