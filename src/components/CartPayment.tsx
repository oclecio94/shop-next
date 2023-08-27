"use client";
import React, { useState, useEffect } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import FmtPrice from "./FmtPrice";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../type";

const CartPayment = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  const [totalAmount, setTotalAmount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm">
          <BsFillCreditCardFill />
        </span>
        <p className="text-sm text-green-700">
          Frete gratis pagando com cartão
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FmtPrice amount={totalAmount} />
        </span>
      </p>
      <div className="flex flex-col items-center">
        <button className="w-full h-8 text-sm font-semibold bg-blue-900 text-white rounded-lg hover:bg-yellow-500 hover:text-black duration-300">
          Pagar
        </button>
      </div>
      <div className="flex flex-col items-center">
        {/* <button className="w-full h-8 text-sm font-semibold bg-blue-900 bg-opacity-50 text-white rounded-lg cursor-not-allowed">
          Comprar +
        </button> */}
        <p className="text-xs mt-1 text-red-500 font-semibold animate-pulse">
          Favor fazer login
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
