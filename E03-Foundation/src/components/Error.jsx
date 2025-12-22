const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-[#f9f9f9] px-4">
      {/* Main heading */}
      <h1 className="text-5xl font-bold text-[#ff4d4f]">Oops! 😵</h1>

      {/* Sub heading */}
      <h2 className="mt-3 text-2xl font-semibold text-gray-800">
        Something went wrong
      </h2>

      {/* Description */}
      <p className="mt-2 mb-6 text-gray-600 max-w-md">
        The page you are looking for does not exist or an error occurred.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-[#e5d0af] text-white rounded-md font-medium hover:bg-[#db9560] transition "
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
