import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="h-[86vh] flex flex-col items-center justify-center gap-y-6">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl">Thank You for purchasing the products from Our Website.</h1>
        </div>
      </div>

      <div className="cursor-pointer">
        <Link to={"/"} className="hover:underline hover:text-red-400">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
