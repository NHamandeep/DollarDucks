import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "./firebase";

const signin = () => {
  const [option, setOption] = useState("phone");
  const [formData, setFormData] = useState({ phone: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success:", result.user);
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      console.error("Google Login Error:", err);
      setError("Failed to sign in with Google");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignIn Data:", formData);
    navigate("/dashboard"); // Redirect to another page after signup
  };

  return (
    <div className="flex justify-center items-center h-screen  text-white">
      <div className="bg-black p-8 rounded-xl w-96 border border-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

        <div className="flex justify-center mb-4 border-b border-gray-700">
          <button
            className={`px-4 py-2 ${option === "phone" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"}`}
            onClick={() => setOption("phone")}
          >
            Phone
          </button>
          <button
            className={`px-4 py-2 ${option === "email" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"}`}
            onClick={() => setOption("email")}
          >
            Email
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {option === "phone" ? (
            <div>
              <label className="block text-gray-400">Mobile Number *</label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 border rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          ) : (
            <>
              <div>
                <label className="block text-gray-400">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400">Password *</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full p-2 border rounded-lg text-white hover:bg-gray-800 transition"
        >
          <FcGoogle className="mr-2 text-2xl" /> Continue with Google
        </button>

        <button
          onClick={() => navigate("/signup/newuser")}
          className="flex items-center justify-center w-full p-2 mt-2 border rounded-lg text-white hover:bg-gray-800 transition"
        >
          <FaUser className="mr-2 text-lg" /> Create a New Account
        </button>
      </div>
    </div>
  );
};

export default signin;
