import React from "react";

const Login = () => {
  return (
    <div className="pt-[-16] min-h-screen flex items-center justify-center bg-gray-200 px-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/forgot-password" className="text-red-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-600 hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
