import { clearFavorite } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetFavorite = () => {
  const dispatch = useDispatch();

  const handleResetFavorite = () => {
    const confirm = window.confirm(
      "DESEJA REALMENTE LIMPAR TODOS OS FAVORITOS?"
    );

    if (confirm) {
      dispatch(clearFavorite());
    }
  };

  return (
    <button
      onClick={handleResetFavorite}
      className="w-44 h-10 font-semibold bg-green-500 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Limpar Favoritos
    </button>
  );
};

export default ResetFavorite;
