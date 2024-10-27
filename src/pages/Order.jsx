import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you your order</h2>
      <p>
        Your order has been placed successfully you will recieve an email
        confirmation shortly
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-500">
        <h3 className=" text-lg font-semibold mb-2">Order summery</h3>
        <p className="text-white">Order number: {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping information:</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Products ordered</h4>
          {order.products.map(pro => (
            <div key={pro.id} className="nt-4 flex justify-between">
              <p className="text-white">
                {pro.name} x {pro.quantity}
              </p>
              <p className="text-white">{pro.price * pro.quantity} $</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total price:</span>
          <span className="font-semibold text-white">
            {order.totalPrice.toFixed(2)} $
          </span>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded-lg">
            Order tracking
          </button>
          <button
            className="ml-4 bg-amber-500 text-white py-2 px-4 hover:bg-amber-600 rounded-lg"
            onClick={() => navigate('/')}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
