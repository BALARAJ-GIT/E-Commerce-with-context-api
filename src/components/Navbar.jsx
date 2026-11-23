import React, { useContext } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Menu
} from "lucide-react";

import { MyStore } from "../Context/MyContext";

const Navbar = () => {

  const { cartItems, toggleCart, isCartOpen } =
    useContext(MyStore);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-orange-500" size={30} />

          <h1 className="text-2xl font-extrabold text-gray-900">
            Shop<span className="text-orange-500">Ease</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-600">

          <button onClick={() => toggleCart() && isCartOpen}>
            Home
          </button>

          <button
            onClick={() => {
              if (isCartOpen) toggleCart();
            }}
          >
            Products
          </button>

        </div>

        {/* Cart */}
        <button
          onClick={toggleCart}
          className="relative flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-orange-500 transition"
        >
          <ShoppingCart size={22} />

          <span className="font-semibold">
            {isCartOpen ? "Shop" : "Cart"}
          </span>

          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        </button>

      </div>

    </nav>
  );
};

export default Navbar;