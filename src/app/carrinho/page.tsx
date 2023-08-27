"use client";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

const page = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center border-b-[1px] justify-between border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-blue-900">
                Lista de compras
              </p>
              <p className="text-lg font-semibold text-blue-900"></p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              {productData.map((item: StoreProduct) => (
                <div key={item._id} className="pt-2 flex flex-col gap-2">
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
            <CartPayment />
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Seu carrinho esta vazio!</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-yellow-500 hover:text-black">
              Continue Comprando
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
