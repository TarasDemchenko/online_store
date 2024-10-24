import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">t-Shop</h3>
          <p className="mt-4">
            Your one-step fot all your needs. Shop with use and experience the
            best online shopping experiences
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="hover:underline decoration-amber-200" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline decoration-amber-200" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline decoration-amber-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline decoration-amber-200"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-amber-400 text-xl">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-amber-400 text-xl">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-amber-400 text-xl">
              <FaGithub />
            </a>
            <a href="" className="hover:text-amber-400 text-xl">
              <FaLinkedin />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded-l-lg bg-amber-100 border border-amber-600"
            />
            <button className="bg-amber-500 text-white px-4 py-2 rounded-r-lg border border-amber-600 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-amber-200 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 t-shop All rights reserved</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:underline decoration-amber-200 cursor-pointer">
              Privecy Policy{' '}
            </a>
            <a className="hover:underline decoration-amber-200 cursor-pointer">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
