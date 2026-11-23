import React, { useContext } from "react";

import { ShoppingBag } from "lucide-react";

import CartCard from "../components/CartCard";
import { MyStore } from "../Context/MyContext";

const CartScreen = () => {

  const { cartItems, setIsCartOpen } = useContext(MyStore);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-extrabold mb-8">
        Your Shopping Cart 🛒
      </h1>

      {cartItems.length === 0 ? (

        <div className="text-center bg-white rounded-2xl p-16 shadow-sm">

          <ShoppingBag
            size={65}
            className="mx-auto text-gray-300 mb-5"
          />

          <h2 className="text-2xl font-bold">
            Your cart is empty!
          </h2>

          <p className="text-gray-500 mt-2">
            Add some products to get started.
          </p>

          <button
            onClick={() => setIsCartOpen(false)}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            Continue Shopping
          </button>

        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (

              <CartCard
                key={item.id}
                product={item}
              />

            ))}

          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-orange-500">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl mt-6 font-bold hover:bg-orange-500 transition">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>

  );
};

export default CartScreen;