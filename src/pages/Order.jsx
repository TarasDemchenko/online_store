const Order = ({ order }) => {
  return (
    <div>
      <h2>Thank you your order</h2>
      <p>
        Your order has been placed successfully you will recieve an email
        confirmation shortly
      </p>
      <div>
        <h3>Order summery</h3>
        <p>Order number: {order.orderNumber}</p>
        <div>
          <h2>Shipping information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products ordered</h3>
          {order.products.map(pro => (
            <div key={pro.id}>
              <p>
                {pro.name} x {pro.quantity}
              </p>
              <p>{pro.price * pro.quantity} $</p>
            </div>
          ))}
        </div>
        <div>
          <span>Total price:</span>
          <span>{order.totalPrice}</span>
        </div>
        <div>
          <button>Order tracking</button>
          <button>Continue shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
