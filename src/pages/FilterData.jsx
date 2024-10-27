import { useSelector } from 'react-redux';
import { filteredDataProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';

const FilterData = () => {
  const filterPro = useSelector(filteredDataProducts);
  return (
    <div>
      <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {filterPro.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterData;
