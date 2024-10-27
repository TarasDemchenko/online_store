const Registor = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="" className="block text-grey-700 ">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter name"
          />
        </div>
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

        <div className="mb-4">
          <button className="w-full bg-amber-700 text-white py-2 rounded-lg">
            Sign up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Alredy have an Account?</span>
        <button className="text-amber-900 ml-2" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Registor;
