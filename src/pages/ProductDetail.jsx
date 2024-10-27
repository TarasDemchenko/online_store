import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../redux/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const [productId, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find(pro => pro.id == id);

    setProduct(newProduct);
  }, [id, products]);

  return <div>{productId}</div>;
};

export default ProductDetail;
