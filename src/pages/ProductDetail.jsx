import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../redux/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find(product => product.id == parseInt(id));

    setProduct(newProduct);
  }, [id, products]);

  return <div>{product.name}</div>;
};

export default ProductDetail;
