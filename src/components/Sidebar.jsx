import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// components
import { CartItem } from "../components";
// context
import { SidebarContext, CartContext } from "../contexts";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  // // console.log(useContext(CartContext));

  const handleCheckout = () => {
    setIsOpen(false);
    clearCart();
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] scrollbar scrollbar-thumb-red-600`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/* Icon */}

        <div onClick={handleClose} className="cursor-pointer w-8 h-8  flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-y-2 h-[520px] overflow-y-auto overflow-x-hidden border-b scrollbar-thin scrollbar-webkit">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      {/* Sidebar Bottom */}
      <div className="flex flex-col gap-y-3 py-4 mt-4 bottom-10">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>$ {parseFloat(total).toFixed(2)}
          </div>

          {/* Clear Cart Icon */}
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl rounded-full">
            <FiTrash2 />
          </div>
        </div>

        <Link to={"/"} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">
          View Cart
        </Link>

        {/* Checkout */}
        <Link
          onClick={handleCheckout}
          to={cart.length > 0 ? "/checkout" : "/"}
          className={`${cart.length === 0 ? "cursor-not-allowed" : "cursor-pointer"} bg-primary flex p-4 justify-center items-center text-white w-full font-medium`}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
