import React, { useContext } from "react";

import {
  Star,
  ShoppingCart,
  Check
} from "lucide-react";

import { MyStore } from "../Context/MyContext";

const ProductCards = ({ product }) => {

  const {
    cartItems,
    addToCart,
    incrementQuantity,
    decrementQuantity
  } = useContext(MyStore);

  const isInCart = cartItems.find(
    (item) => item.id === product.id
  );

  return (

    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs capitalize">
          {product.category}
        </span>

      </div>

      {/* Details */}
      <div className="p-5 space-y-3">

        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-bold">
            {product.rating?.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating?.count} reviews)
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </h3>

        </div>

        {/* Add Cart */}
        {isInCart ? (

          <div className="flex justify-between items-center bg-black text-white rounded-xl p-2">

            <button
              onClick={() => decrementQuantity(product.id)}
              className="px-4 text-2xl hover:text-orange-400"
            >
              -
            </button>

            <span className="font-bold text-lg">
              {isInCart.quantity}
            </span>

            <button
              onClick={() => incrementQuantity(product.id)}
              className="px-4 text-2xl hover:text-orange-400"
            >
              +
            </button>

          </div>

        ) : (

          <button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold transition"
          >
            <ShoppingCart size={19} />
            Add to Cart
          </button>

        )}

      </div>

    </div>

  );
};

export default ProductCards;