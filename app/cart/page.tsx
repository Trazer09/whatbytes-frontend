// app/cart/page.tsx
"use client";

import { useCart, CartItem } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Conditional Rendering: If cart is empty
  if (cartCount === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">
            Start Shopping
        </Link>
      </div>
    );
  }

  // Main Cart View
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="relative h-24 w-24 mr-4">
                <Image src={item.image} alt={item.name} fill className="object-contain"/>
              </div>
              <div className="flex-grow">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border border-gray-300 rounded-md text-center p-1"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm self-start">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t my-2"></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white mt-6 py-3 rounded-md font-semibold hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}