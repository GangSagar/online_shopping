import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// context
import { CartContext } from "../contexts";

const CartItem = ({ item }) => {
  //
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  // Destructuring the item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>

        {/* Product Details */}
        <div className="w-full flex flex-col">
          {/* title and remove icons */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* Minus Icon */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>

              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">{amount}</div>

              {/* Plus Icon */}
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>

            {/* Item Price */}
            <div className="flex-1 flex items-center justify-center">$ {price}</div>

            {/* Final Price upto 2 decimal places */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium"> {`$ ${parseFloat(price * amount).toFixed(2)}`} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
