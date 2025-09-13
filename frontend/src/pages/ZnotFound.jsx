import React from "react";
import { useNavigate } from "react-router-dom";

const ZnotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-10 text-center">
        <h1 className="text-9xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! No Page Available
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
          aria-label="Go back to homepage"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ZnotFound;
