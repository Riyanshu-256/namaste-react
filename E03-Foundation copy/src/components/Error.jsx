const Error = () => {
  return (
    <div className="error-page">
      <h1>Oops! 😵</h1>
      <h2>Something went wrong</h2>
      <p>The page you are looking for does not exist or an error occurred.</p>

      <button onClick={() => window.location.reload()} className="error-btn">
        Try Again
      </button>
    </div>
  );
};

export default Error;
