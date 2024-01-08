import React, { useState } from 'react';
import Modal from 'react-modal';

const ItemModal = ({ isOpen, onRequestClose }) => {
    const [newItem, setNewItem] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
        setError(null);
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            onRequestClose();
        } else {
            setError('Please enter an item.');
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Create Items</h1>
                <input type="text" placeholder="Enter a new item" value={newItem} onChange={handleInputChange} className="border border-gray-300 p-2 mb-2 w-full" />
                {error && <p className="text-red-500">{error}</p>}
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 w-full"> Add Item </button>
            </div>
        </Modal>
    );
};

export default ItemModal;
