import React from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { BsFillCaretDownFill, BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";

const Header = () => {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

  return (
    <div className="w-full h-16 bg-blue-900 text-white sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 md:gap-3 px-4">
        <Link href={"/"}>
          <div className="text-2xl font-bold">SHOP-NEXT</div>
        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] xl:inline-flex gap-1 hidden md:flex">
          <CiLocationOn size={25} />
          <div>
            <p>Selecione o endereço</p>
            <p className="text-white font-bold">BRA</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-center relative">
          <input
            type="text"
            placeholder="pesquisar produtos..."
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-yellow-500"
          />
          <span className="w-12 h-full bg-yellow-500 text-black text-2xl flex items-center absolute right-0 rounded-tr-md rounded-br-md justify-center">
            <CiSearch />
          </span>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 duration-300 h-[70%] border border-transparent hover:border-white cursor-pointer">
          <p>Olá, Login</p>
          <p className="text-white font-bold flex items-center">
            Conta & Lista
            <span>
              <BsFillCaretDownFill />
            </span>
          </p>
        </div>
        <Link
          href={"/favoritos"}
          className="relative text-xs text-gray-100 flex flex-col justify-center px-2 duration-300 h-[70%] border border-transparent hover:border-white cursor-pointer"
        >
          <p>Marcados</p>
          <p className="text-white font-bold">& Favoritos</p>
          {favoriteData.length > 0 && (
            <span className="absolute font-bold right-0 top-2 w-4 h-4 flex items-center justify-center text-lg text-yellow-500">
              {favoriteData.length}
            </span>
          )}
        </Link>
        <Link
          href={"/carrinho"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <BsFillCartFill size={30} />
          <p className="text-sm text-white font-bold mt-3">Carrinho</p>
          <span className="absolute text-yellow-500 text-lg top-0 left-[18px] font-bold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
