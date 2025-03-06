import { useState } from "react";

export default function PaymentForm() {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment Submitted Successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
                <h2 className="text-xl font-semibold text-center mb-4">Payment Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9101 1121"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                id="expiry"
                                name="expiry"
                                placeholder="MM/YY"
                                value={formData.expiry}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="password"
                                id="cvv"
                                name="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
}
