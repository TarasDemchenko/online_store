import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispath = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispath(addToCart(product));
    alert('Product Added Succesfully!');
  };
  return (
    <div className=" bg-white shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img src={product.image} className="w-full h-48 object-contain mb-4" />
      <h3 className="texxt-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price} $</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-amber-600 group text-white text-sm rounded-full hover:w-32 hover:bg-amber-700 transition-all "
        onClick={e => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
