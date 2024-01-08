import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plan = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/classwork/plan')
            .then(response => {
                setPlans(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching plans:', error);
            });
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Plans List</h1>

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
