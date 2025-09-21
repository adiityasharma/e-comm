import { Truck, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeToCart,
} from "../features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items || items.length === 0) return;

    const totalPrice = items?.reduce((acc, curr) => {
      return acc + parseInt(curr.discountedPrice) * parseInt(curr.quantity);
    }, 0);

    setSubtotal(totalPrice);
  }, [items]);

  return (
    <div className="w-full md:mt-5 flex flex-col gap-4 p-4 md:p-0">
      <div className="flex items-center gap-2 font-[600] text-2xl">
        <h1>My Bag</h1>
        <h1>({items.length} Item)</h1>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between gap-4">
        {items.length > 0 ? (
          <div className="lg:w-240 flex flex-col gap-1 md:gap-3">
            {items?.length > 0 &&
              items.map((item) => (
                <div
                  key={item?.id}
                  className="relative w-full md:h-50 lg:h-60 flex gap-5 rounded border-2 border-[#ececec] p-4"
                >
                  <Link to={`/products/${item.id}`} className="w-20 md:w-45 h-full overflow-hidden rounded">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt="product image"
                    />
                  </Link>

                  <div className="flex flex-col md:gap-1 lg:gap-2">
                    <h1 className="text-[14px] font-[500] md:text-lg ">
                      {item.title}
                    </h1>

                    <div className="flex items-center text-[12px] md:text-sm gap-2">
                      <Truck size={18} className="hidden md:block" />
                      <h1>{item.shippingInformation}</h1>
                    </div>

                    <h1 className=" text-[12px] md:text-[15px] ">
                      Qty: {item.quantity}
                    </h1>

                    <div className="text-[12px] md:text-[15px] lg:text-[20px] font-[500]  flex gap-1 items-center ">
                      <h1>${item.discountedPrice}</h1>
                      <h1 className="text-sm font-[500] line-through text-neutral-500 ">
                        ${item.price}
                      </h1>
                    </div>

                    <div className=" flex gap-2 mt-2 md:mt-0">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-7 lg:w-10 md:h-7 lg:h-10 cursor-pointer rounded bg-neutral-100 hover:bg-neutral-200"
                      >
                        -
                      </button>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="w-7 lg:w-10 md:h-7 lg:h-10 cursor-pointer rounded bg-neutral-100 hover:bg-neutral-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeToCart(item.id))}
                    className="absolute top-4 right-5 text-neutral-400 cursor-pointer hover:text-neutral-700"
                  >
                    <X />
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full py-10 text-2xl font-bold flex items-center justify-center text-neutral-600 ">
            <h1>Cart is Empty</h1>
          </div>
        )}

        <div className="w-full lg:w-130 flex flex-col gap-3 h-fit border-2 rounded border-[#ececec] p-4">
          <div className="flex flex-col gap-2 border-b border-[#c9c9c9]">
            <h1 className="text-lg">Price Summary</h1>
            <div className="w-full flex items-center justify-between mb-1">
              <h1>Subtotal</h1>
              <h1>${subtotal}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-2  text-neutral-600">
            <div className="flex w-full justify-between">
              <h1>Delivery Fee</h1>
              <h1>Free</h1>
            </div>
          </div>

          <button className="w-full py-3 cursor-pointer bg-[#40BFFF] rounded mt-2 font-[600] text-white">
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
