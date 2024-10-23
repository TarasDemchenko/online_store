import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-amber-600" />,
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost',
    },
    {
      icon: <FaHeadset className="text-3xl text-amber-600" />,
      title: 'Support 24/7',
      description: 'We are here to assist you anytime',
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-amber-600" />,
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied',
    },
    {
      icon: <FaShippingFast className="text-3xl text-amber-600" />,
      title: 'Free Shipping',
      description: 'get your orders delivered with no extra cost',
    },
    {
      icon: <FaLock className="text-3xl text-amber-600" />,
      title: 'Payment Secure',
      description: 'Your payment information is safe with us',
    },
    {
      icon: <FaTag className="text-3xl text-amber-600" />,
      title: 'Discount',
      description: 'Enjoy the best prices on our products',
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;