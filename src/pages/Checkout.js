import React, { useState } from "react";

const Checkout = () => {
    const [formData, setFormData] = useState({ name: "", email: "", address: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://127.0.0.1:8000/orders/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    items: JSON.parse(localStorage.getItem("cartItems")) || [],
                    total: parseFloat(localStorage.getItem("cartTotal")) || 0,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to place the order. Please try again.");
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
                {success ? (
                    <div className="text-green-600 text-center p-4">
                        🎉 Your order has been placed successfully!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${
                                isLoading && "opacity-50 cursor-not-allowed"
                            }`}
                        >
                            {isLoading ? "Placing Order..." : "Place Order"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Checkout;
