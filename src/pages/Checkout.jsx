import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCart, selectPrice } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
  const [billingTogle, setBillingTogle] = useState(true);
  const [shippingTogle, setShippingTogle] = useState(false);
  const [paymentTogle, setPaymentTogle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: '',
  });
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const total = useSelector(selectPrice);

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: '1234',
      shippingInformation: shippingInfo,
      totalPrice: total,
    };
    setOrder(newOrder);
    navigate('/order-confirmation');
  };

  return (
    <div className="conteiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingTogle(!billingTogle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing information
              </h3>
              {billingTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingTogle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter imail"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingTogle(!shippingTogle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping information
              </h3>
              {shippingTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingTogle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  className="w-full px-3 py-2 border"
                  onChange={e =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    className="w-full px-3 py-2 border"
                    onChange={e =>
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Zip code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Enter zip code"
                    className="w-full px-3 py-2 border"
                    onChange={e =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.zip.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentTogle(!paymentTogle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment method</h3>
              {paymentTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentTogle ? '' : 'hidden'}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <label className="block text-gray-700 ml-1" htmlFor="">
                  Cash on delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'dc'}
                  onChange={() => setPaymentMethod('dc')}
                />
                <label className="block text-gray-700 ml-1" htmlFor="">
                  Debit card
                </label>
              </div>
            </div>
          </div>
          {paymentMethod === 'dc' && (
            <div className="bg-amber-500 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-4">
                Debit card information
              </h3>
              <div className="mb-4">
                <label htmlFor="" className="block  font-semibold mb-2">
                  Card number
                </label>
                <input
                  type="text"
                  placeholder="Enter card number"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block  font-semibold mb-2">
                  Card holder name
                </label>
                <input
                  type="text"
                  placeholder="enter card holder name"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 mr-2">
                  <label htmlFor="" className="block  font-semibold mb-2">
                    Expire date
                  </label>
                  <input
                    type="text"
                    placeholder="mm/yy"
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="" className="block font-semibold mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="cvv"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order summery</h3>
          <div className="space-y-4">
            {cart.map(pro => (
              <div key={pro.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{pro.name}</h4>
                    <p>
                      {pro.price} $ x {pro.quantity}
                    </p>
                  </div>
                </div>
                <div className="">{pro.price * pro.quantity} $</div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total price:</span>
              <span className="font-semibold">{total.toFixed(2)} $</span>
            </div>
          </div>
          <button
            className="w-full bg-amber-700 text-white py-2 mt-6 hover:bg-amber-900 rounded-lg"
            onClick={handleOrder}
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
