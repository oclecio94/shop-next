import Image from "next/image";
import FmtPrice from "./FmtPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface CartProductProps {
  item: Item;
}

const CartProduct = ({ item }: CartProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        alt="imagem do produto"
        width={150}
        height={150}
        src={item.image}
      />

      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-blue-900">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Preço{" "}
            <span className="font-semibold text-blue-900">
              <FmtPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() => {
                  dispatch(
                    increaseQuantity({
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
                  );
                }}
                className="w-6 h-5 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-500"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() => {
                  dispatch(
                    decreaseQuantity({
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
                  );
                }}
                className="w-6 h-5 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-500"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 border-gray-400 hover:text-red-700 cursor-pointer duration-300 border p-1 hover:border-red-700 rounded-md"
            >
              Remover
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-blue-900">
          <FmtPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
