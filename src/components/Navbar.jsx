import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectCart } from '../redux/cartSlice';
import { useState } from 'react';
import Modal from './Modal';
import Registor from './Registor';
import Login from './Login';
import { setSearchTerm } from '../redux/productSlice';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('filter-data');
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  const products = useSelector(selectCart);

  return (
    <nav className="bg=white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">t-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
              onChange={e => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-amber-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-amber-500 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline decoration-amber-600">
          Home
        </Link>
        <Link to="/shop" className="hover:underline  decoration-amber-600">
          Shop
        </Link>
        <Link to="/" className="hover:underline  decoration-amber-600">
          Contact
        </Link>
        <Link to="/" className="hover:underline  decoration-amber-600">
          About
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Registor openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
