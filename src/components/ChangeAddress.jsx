import { useState } from 'react';

const ChangeAddress = ({ setIsModalOpen, setAddress }) => {
  const [newAddress, setNewAddress] = useState('');
  const onClose = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };
  return (
    <div>
      <input
        onChange={e => setNewAddress(e.target.value)}
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-700"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-800"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
