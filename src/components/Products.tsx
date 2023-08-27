"use client";
import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedAmount from "./FmtPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

const Products = ({ products }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((item: ProductProps) => (
        <div
          key={item._id}
          className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg overflow-hidden"
        >
          <div className="w-full h-[260px] relative group">
            <Image
              className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
              src={item.image}
              width={300}
              height={300}
              alt="imagem produto"
            />
            <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              <span
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldprice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-yellow-500 cursor-pointer duration-300"
              >
                <HiShoppingCart />
              </span>
              <span
                onClick={() =>
                  dispatch(
                    addToFavorite({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldprice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-yellow-500 cursor-pointer duration-300"
              >
                <FaHeart />
              </span>
            </div>
            {item.isNew && (
              <p className="absolute top-0 right-0 text-blue-900 font-medium text-sm tracking-wide animate-pulse">
                Desconto <FormattedAmount amount={item.oldPrice - item.price} />
              </p>
            )}
          </div>
          <hr />
          <div className="px-4 py-3 flex flex-col gap-1">
            <p className="text-xs text-gray-500  tracking-wide">
              {item.category}
            </p>
            <p className="text-base font-medium">{item.title}</p>
            <p className="flex items-center gap-2">
              <span className="text-sm line-through">
                <FormattedAmount amount={item.oldPrice} />
              </span>
              <span className="text-blue-800 font-semibold">
                <FormattedAmount amount={item.price} />
              </span>
            </p>
            <p className="text-xs text-gray-500 text-justify">
              {item.description.substring(0, 120)}
            </p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: item._id,
                    brand: item.brand,
                    category: item.category,
                    description: item.description,
                    image: item.image,
                    isNew: item.isNew,
                    oldprice: item.oldPrice,
                    price: item.price,
                    title: item.title,
                    quantity: 1,
                  })
                )
              }
              className="h-10 font-medium bg-blue-800 text-white rounded-md hover:bg-yellow-500 hover:text-black duration-300 mt-2"
            >
              + Carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
