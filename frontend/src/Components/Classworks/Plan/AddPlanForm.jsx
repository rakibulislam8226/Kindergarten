import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useState } from 'react';


export const AddPlanForm = ({ onAddPlan }) => {
    const [newPlan, setNewPlan] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNewPlan(e.target.value);
        setError(null);
    };

    const handleAddPlan = () => {
        if (newPlan.trim() !== '') {
            axios.post('http://127.0.0.1:8000/api/v1/classwork/plan', { items: newPlan })
                .then(response => {
                    onAddPlan(response.data);
                    setNewPlan('');

                    // Show success toast message
                    toast.success('Plan created successfully!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                })
                .catch(() => {
                    setError('Failed to add plan. Please try again.');
                });
        } else {
            setError('Please enter a plan.');
        }
    };

    return (
        <div className="lg:w-1/2 lg:pl-4">
            <h1 className="text-3xl font-bold mb-4">Add Plan</h1>
            <input type="text" placeholder="Enter a new plan" value={newPlan} onChange={handleInputChange} className="border border-gray-300 p-2 mb-2 w-full" />
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleAddPlan} className="bg-blue-500 text-white p-2 w-full"> Add Plan </button>
        </div>
    );
}
