import { resetCard } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();

  const handleResetCard = () => {
    const confirm = window.confirm(
      "DESEJA REALMENTE LIMPAR TODOS OS PRODUTOS DO CARRINHO?"
    );

    if (confirm) {
      dispatch(resetCard());
    }
  };

  return (
    <button
      onClick={handleResetCard}
      className="w-44 h-10 font-semibold bg-green-500 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Limpar Carrinho
    </button>
  );
};

export default ResetCart;
