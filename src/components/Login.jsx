const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="" className="block text-grey-700 ">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Password
          </label>
          <input
            type="passeord"
            className="w-full px-3 py-2 border"
            placeholder="Enter password"
          />
        </div>
        <div className=" mb-4 flex items-center justify-between">
          <label htmlFor="" className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="" className="text-amber-700">
            Forgot password?
          </a>
        </div>
        <div className="mb-4">
          <button className="w-full bg-amber-700 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      </form>
      <div className="text-center ">
        <span className="text-gray-700">Don't have an Account?</span>
        <button className="text-amber-900 ml-2" onClick={openSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
