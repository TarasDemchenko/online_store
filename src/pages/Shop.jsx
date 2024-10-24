import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { selectProducts, setProducts } from '../redux/productSlice';
import { useEffect } from 'react';
import { mockData } from '../assets/mockData';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);
  return (
    <div>
      <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
