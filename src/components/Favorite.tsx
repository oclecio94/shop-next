import Image from "next/image";
import FmtPrice from "./FmtPrice";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "@/store/nextSlice";

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

interface FavoriteProps {
  item: Item;
}

const CartProduct = ({ item }: FavoriteProps) => {
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
            <div
              onClick={() => dispatch(deleteFavorite(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 border-gray-400 hover:text-red-700 cursor-pointer duration-300 border p-1 hover:border-red-700 rounded-md"
            >
              Remover
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
