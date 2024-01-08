import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import axios from 'axios';

const Plan = () => {
    const [plans, setPlans] = useState([]);
    const [newPlan, setNewPlan] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/classwork/plan')
            .then(response => {
                setPlans(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching plans:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        setNewPlan(e.target.value);
        setError(null);
    };

    const handleAddPlan = () => {
        if (newPlan.trim() !== '') {
            axios.post('http://127.0.0.1:8000/api/v1/classwork/plan', { items: newPlan })
                .then(response => {
                    setPlans([...plans, response.data]);
                    setNewPlan('');
                    
                    // Show success toast message
                    toast.success('Plan created successfully!', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                })
                .catch(error => {
                    console.error('Error adding plan:', error);
                });
        } else {
            setError('Please enter a plan.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Plans List</h1>

            <div className="mb-4">
                <input type="text" placeholder="Enter a new plan" value={newPlan} onChange={handleInputChange} className="border border-gray-300 p-2 mr-2" />
                <button onClick={handleAddPlan} className="bg-blue-500 text-white p-2 rounded-md"> Add Plan </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>

            {plans.map(plan => (
                <div key={plan.uid} className="bg-white p-4 shadow-md mb-4 rounded-md">
                    <p className="text-lg font-semibold">{plan.items}</p>
                    <p className="text-gray-500">{new Date(plan.created_at).toLocaleString()}</p>
                </div>
            ))}

            {plans.length === 0 && (
                <p className="text-gray-500">No plans available.</p>
            )}
        </div>
    );
}

export default Plan;
