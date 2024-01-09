import { useEffect } from 'react';
import { toast } from 'react-toastify';


export const Contact = () => {
    useEffect(() => {
        toast.warning("Contact endpoint is not updated.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        });
    });


    const contactData = [
        {
            id: 1,
            name: 'Rakibul Islam',
            email: 'rakibulislam8226@gmail.com',
            phone: '+8801776068226',
        },
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-lg max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact List</h2>
                <ul>
                    {contactData.map((contact) => (
                        <li key={contact.id} className="mb-4">
                            <div className="bg-gray-200 p-4 rounded-md">
                                <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                                <p className="text-gray-600">Email: {contact.email}</p>
                                <p className="text-gray-600">Phone: {contact.phone}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
