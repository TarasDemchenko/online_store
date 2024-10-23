import { Categories } from '../assets/mockData';
import hero from '../../src/assets/images/fon.jpeg';

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-amber-600 text-white text-xs font-bold px-2 py-2.5 rounded-md">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bd-gray-100 p-3 border rounded-md">
            {Categories.map((category, i) => (
              <li key={i} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-amber-600 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={hero} alt="" className="h-full w-full rounded-md" />
          <div className="absolute top-2/4 left-20 text-white">
            <p>Your | Choice</p>
            <h2 className="text-3xl font-bold">Welcome to t-Shop</h2>
            <p className="text-xl mt-2.5 font-bold ">Best quality</p>
            <button className="bg-amber-600 px-8 py-1.5 mt-4 hover:bg-amber-700 transform transition-transform duration-300 hover:scale-105 rounded-md">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
