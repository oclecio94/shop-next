"use client";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import Favorite from "@/components/Favorite";
import ResetFavorite from "@/components/ResetFavorite";
import Link from "next/link";

const page = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {favoriteData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center border-b-[1px] justify-between border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-blue-900">Favoritos</p>
              <p className="text-lg font-semibold text-blue-900"></p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              {favoriteData.map((item: StoreProduct) => (
                <div key={item._id} className="pt-2 flex flex-col gap-2">
                  <Favorite item={item} />
                </div>
              ))}
              <ResetFavorite />
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Seus Favoritos esta vazio!</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-yellow-500 hover:text-black">
              Voltar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
