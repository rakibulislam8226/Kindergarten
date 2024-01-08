

export const PlanList = ({ plans }) => {
    return (
        <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Plans List</h1>
            {plans.map(plan => (
                <div key={plan.uid} className="bg-white p-4 shadow-md mb-4 rounded-md cursor-pointer">
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

