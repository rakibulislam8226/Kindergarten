import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { PlanList } from "../Plan/PlanList";
import { AddPlanForm } from "../Plan/AddPlanForm";


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

    const handleAddPlan = (newPlan) => {
        setPlans([...plans, newPlan]);
    };

    return (
        <div className="container mx-auto p-4 flex flex-col-reverse lg:flex-row lg:justify-between gap-3">
            <PlanList plans={plans} />
            <AddPlanForm onAddPlan={handleAddPlan} />
        </div>
    );
};

export default Plan;
