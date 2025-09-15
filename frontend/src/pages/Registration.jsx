import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import google from "../assets/google.png";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  //   const strengthCount = Object.values(criteria).filter(Boolean).length;

  //   let strengthLabel = "";
  //   let strengthColor = "";

  //   if (strengthCount <= 2) {
  //     strengthLabel = "Weak";
  //     strengthColor = "bg-red-600 text-red-700";
  //   } else if (strengthCount === 3 || strengthCount === 4) {
  //     strengthLabel = "Medium";
  //     strengthColor = "bg-yellow-300 text-yellow-800";
  //   } else if (strengthCount === 5) {
  //     strengthLabel = "Strong";
  //     strengthColor = "bg-green-600 text-green-700";
  //   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-xl rounded-xl max-w-lg w-full p-10">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
          Create an Account
        </h2>
        <form>
          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-800 mb-1 font-medium tracking-wide"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition text-gray-900"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Enter your full legal name.
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-800 mb-1 font-medium tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition text-gray-900"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Use a valid email address for account verification.
            </p>
          </div>

          {/* Password */}
          <div className="mb-1 relative">
            <label
              htmlFor="password"
              className="block text-gray-800 mb-1 font-medium tracking-wide"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition text-gray-900"
              required
              aria-describedby="password-strength"
              spellCheck="false"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-3 text-gray-500 hover:text-red-600 transition focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
            <p className="mt-1 text-xs text-gray-500">
              Use 8+ characters with uppercase, lowercase, number & symbol.
            </p>
          </div>

          {/* Password strength legend */}
          <legend className="text-gray-700 font-semibold tracking-wide text-sm mb-2 mt-4">
            Password Strength
          </legend>

          {/* Password strength stepper */}
           <div id="password-strength" className="mb-4">
            {/* <div className="flex space-x-3 mb-2" aria-hidden="true">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-3 rounded-full ${
                    strengthCount >= step * (5 / 3)
                      ? strengthColor.split(" ")[0]
                      : "bg-gray-300"
                  } transition-colors`}
                />
              ))}
            </div> */}
            {/* <p className={`text-sm font-semibold ${strengthColor}`}>
              {strengthLabel}
            </p> */}
          </div> 

          {/* Password criteria remarks */}
          <div className="mb-6 space-y-1 text-sm font-medium">
            <p
              className={`${
                criteria.length
                  ? "text-green-600"
                  : "text-gray-400 italic text-xs"
              }`}
            >
              • Minimum 8 characters
            </p>
            <p
              className={`${
                criteria.uppercase ? "text-green-600" : "text-gray-500"
              }`}
            >
              • At least one uppercase letter (A-Z)
            </p>
            <p
              className={`${
                criteria.lowercase ? "text-green-600" : "text-gray-500"
              }`}
            >
              • At least one lowercase letter (a-z)
            </p>
            <p
              className={`${
                criteria.number ? "text-green-600" : "text-gray-500"
              }`}
            >
              • At least one number (0-9)
            </p>
            <p
              className={`${
                criteria.specialChar ? "text-green-600" : "text-gray-500"
              }`}
            >
              • At least one special symbol (!@#$%^&* etc.)
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-800 mb-1 font-medium tracking-wide"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition text-gray-900"
              required
              spellCheck="false"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-10 right-3 text-gray-500 hover:text-red-600 transition focus:outline-none"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? (
                <FiEyeOff size={22} />
              ) : (
                <FiEye size={22} />
              )}
            </button>
            <p className="mt-1 text-xs text-gray-500">
              Re-enter to confirm your password.
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
          >
            Register
          </button>
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            <img src={google} alt="" className="w-[20px]" /> Registration with
            Google
          </div>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline font-medium">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
