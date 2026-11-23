import React, { useContext } from "react";

import { Trash2 } from "lucide-react";

import { MyStore } from "../Context/MyContext";

const CartCard = ({ product }) => {

  const {
    incrementQuantity,
    decrementQuantity
  } = useContext(MyStore);

  return (

    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center gap-6">

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-28 object-contain"
      />

      {/* Details */}
      <div className="flex-1">

        <h2 className="font-bold text-gray-800 text-lg">
          {product.title}
        </h2>

        <p className="text-orange-500 font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-5 mt-4">

          <button
            onClick={() => decrementQuantity(product.id)}
            className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-orange-100"
          >
            -
          </button>

          <span className="font-bold">
            {product.quantity}
          </span>

          <button
            onClick={() => incrementQuantity(product.id)}
            className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-orange-100"
          >
            +
          </button>

        </div>

      </div>

      {/* Total */}
      <div className="font-bold text-xl">
        ${(product.price * product.quantity).toFixed(2)}
      </div>

    </div>

  );
};

export default CartCard;