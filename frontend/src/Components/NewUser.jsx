import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";



const NewUser = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const nextStep = () => {
    if (step === 1 && mobile.length !== 10) return;
    if (step === 2 && otp.length !== 6) return;
    setStep(step + 1);
  };
  
  const prevStep = () => setStep(step - 1);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
      // Redirect user or store user data in state/context
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <p className="mb-6 text-gray-400">
        Already have an account? {" "}
        <Link to="/signin" className="text-blue-600 underline">
          Sign In
        </Link>
      </p>

      {/* Stepper */}
      <div className="flex space-x-4 mb-6">
        {["Enter Number", "Verify OTP", "User Info"].map((label, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              className={`w-4 h-4 rounded-full ${
                step > index ? "bg-green-400" : "bg-gray-500"
              }`}
            />
            {index < 2 && <div className="w-12 h-1 bg-gray-500" />}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        {step === 1 && (
          <div>
            <label className="block text-sm mb-2">Mobile Number *</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Your Mobile Number"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
            <button
              onClick={nextStep}
              disabled={mobile.length !== 10}
              className={`mt-4 w-full p-2 rounded ${
                mobile.length === 10 ? "bg-blue-600" : "bg-gray-500 cursor-not-allowed"
              }`}
            >
              Send OTP
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block text-sm mb-2">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
            <button
              onClick={nextStep}
              disabled={otp.length !== 6}
              className={`mt-4 w-full p-2 rounded ${
                otp.length === 6 ? "bg-blue-600" : "bg-gray-500 cursor-not-allowed"
              }`}
            >
              Verify OTP
            </button>
            <button
              onClick={prevStep}
              className="mt-2 w-full p-2 bg-gray-600 rounded"
            >
              Back
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
            />
            <button
              onClick={() => navigate("/dashboard")}
              disabled={fullName.trim() === ""}
              className={`w-full p-2 rounded ${
                fullName.trim() !== "" ? "bg-green-600" : "bg-gray-500 cursor-not-allowed"
              }`}
            >
              Complete Signup
            </button>
          </div>
        )}
      </div>

      {/* Google Auth Button */}
      <button 
        onClick={handleGoogleLogin}
        className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded mt-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg"
          alt="Google"
          className="w-5 h-5 cursor-pointer"
        />
        <span>Continue with Google</span>
      </button>

      {/* Footer */}
      <p className="text-gray-400 mt-6 text-sm">
        By creating an account you accept our {" "}
        <Link to="/privacy-policy" className="text-blue-400 underline">
          privacy policies
        </Link>{" "}
        & {" "}
        <Link to="/terms-and-conditions" className="text-blue-400 underline">
          terms and conditions
        </Link>
        .
      </p>
    </div>
  );
};

export default NewUser;
