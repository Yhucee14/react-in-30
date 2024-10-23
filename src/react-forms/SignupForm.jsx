import { GrMail } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SignupForm = () => {
    const navigate = useNavigate();
    const { signup } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState(""); // State to hold error messages
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error before new signup attempt

        const result = await signup(fullName, email, password); 

        if (result && result.success) {
          navigate('/profile');
        } else {
          setError(result?.message || 'Registration failed. Please try again.');
        }
      };

    return (
        <div className="bg-gray-800 h-screen px-3 flex flex-col justify-center items-center text-gray-200">
            <div className="py-5 font-bold text-2xl">Signup</div>

            <form
                onSubmit={handleSubmit}
                className="container bg-white md:w-[700px] rounded-md p-10 w-full text-gray-800"
            >
                <div className="grid gap-2">
                    <input
                        type="text"
                        placeholder="Enter your name ..."
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required // Make the field required
                    />
                    <input
                        type="email"
                        placeholder="Enter your email ..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required // Make the field required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password ..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required // Make the field required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="flex hover:bg-gray-200 hover:border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 gap-2 items-center p-2 font-semibold text-gray-200 rounded-md bg-gray-800"
                    >
                        <GrMail />
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
