import { useDispatch, useSelector } from 'react-redux';
import {
  decreseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
  selectPrice,
  selectQuantity,
} from '../redux/cartSlice';
import CartEmpty from '../assets/images/cart_empty.jpeg';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';

const Cart = () => {
  const cart = useSelector(selectCart);
  const total = useSelector(selectPrice);
  const quantity = useSelector(selectQuantity);
  const [address, setAddress] = useState('main stret, 0012');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  return (
    <div className="conteiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p className="ml-4">Products</p>

                <div className="flex space-x-10">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.map(pro => (
                  <div
                    key={pro.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={pro.image}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{pro.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-11 items-center">
                      <p>{pro.price} $</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-sm font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreseQuantity(pro.id))}
                        >
                          -
                        </button>
                        <p className="text-sm px-2">{pro.quantity}</p>
                        <button
                          className="text-sm px-1 border-1"
                          onClick={() => dispatch(increaseQuantity(pro.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>{(pro.quantity * pro.price).toFixed(2)} $</p>
                      <button
                        className="text-amber-600 hover:text-amber-800"
                        onClick={() => dispatch(removeFromCart(pro.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">Cart total:</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total items:</span>
                <span>{quantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to:
                  <span className="text-sm font-bold"> {address}</span>
                </p>
                <button
                  className="text-amber-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total price:</span>
                <span>{total.toFixed(2)} $</span>
              </div>
              <button className="w-full bg-amber-600 text-white py-2 hover:bg-amber-800 rounded-lg" onClick={()=>navigate('/checkout')}>
                Proced to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setIsModalOpen={setIsModalOpen}
              setAddress={setAddress}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center mt-3">
          <img src={CartEmpty} className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
