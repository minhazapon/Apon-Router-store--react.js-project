import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
            <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white">
                <CardContent>
                    <h2 className="text-xl font-semibold text-center mb-4">Payment Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Cardholder Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 5678 9101 1121"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input
                                    type="text"
                                    id="expiry"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={formData.expiry}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                    type="password"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="123"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <Button type="submit" className=" btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                            Pay Now
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
