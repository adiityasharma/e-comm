import React, { useEffect, useState } from "react";
import RatingStar from "../components/shop/RatingStar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductById } from "../features/productSlice";
import { findDiscountedPrice } from "../components/shop/ProductCard";
import Loader from "../components/shop/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    singleProductDetails: product,
  } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    dispatch(getSingleProductById(id));
  }, [id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setProductImages(product.images);
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="w-full py-10">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-0 flex flex-col md:flex-row items-start justify-between gap-8 md:mt-5">
      <div className="md:w-160 flex flex-col-reverse lg:flex-row md:flex-col-reverse lg:justify-between gap-2">
        <div className="w-full lg:w-30 h-fit lg:px-4 flex flex-row lg:flex-col gap-2 ">
          {productImages?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className=" cursor-pointer w-full h-25 border border-[#d4d4d4] rounded-xl overflow-hidden p-2"
            >
              <img
                className="w-full h-full object-cover"
                src={item}
                alt="product image"
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-90 xl:w-120 rounded-2xl border-2 border-[#ededed]">
          <div className="w-full h-fit overflow-hidden">
            <img
              className="w-full h-fit object-cover"
              src={selectedImage}
              alt={product?.title}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-200">
        <div>
          <h1 className="text-3xl font-[500]">{product?.brand}</h1>
          <h1 className="text-xl text-[#3c4044] mt-2">{product?.title}</h1>
        </div>

        <div className="flex gap-3 mt-3">
          <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#40BFFF]">
            ${findDiscountedPrice(product?.price, product?.discountPercentage)}
          </h1>
          <h1 className="line-through text-[14px] xl:text-[16px] font-[500] text-[#9098B1] ">
            ${product?.price}
          </h1>
          <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#FB7181]">
            {product?.discountPercentage}% Off
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-1 md:mt-3">
          <RatingStar ratingValue={product?.rating} />
          <p className="text-[13px] md:text-normal">({product?.rating}/5)</p>
        </div>

        <div className="flex items-center text-[13px] md:text-[17px] gap-1 md:gap-3 mt-3">
          <h1 className="font-[500]">Dimensions:</h1>
          <p>Width-{product?.dimensions?.width}</p>|
          <p>Height-{product?.dimensions?.height}</p>|
          <p>Depth-{product?.dimensions?.depth}</p>
        </div>

        <div className="flex items-center text-[10px] md:text-[17px] gap-1 md:gap-3 mt-3">
          <p>{product?.warrantyInformation}</p>|
          <p>{product?.shippingInformation}</p>|<p>{product?.returnPolicy}</p>
        </div>

        {product?.reviews?.length > 0 && (
          <div className="mt-3">
            <h1 className="font-[500] md:text-[20px] text-[16px] ">
              Hear what our customers say ({product?.reviews?.length})
            </h1>
            <div className="flex flex-col gap-2 mt-2 text-neutral-700">
              {product?.reviews?.map((item, index) => (
                <div
                  key={index}
                  className="border-b-2 w-fit border-neutral-300 "
                >
                  <h1 className="text-[15px] ">{item.reviewerName}</h1>
                  <div className="flex items-center gap-2 ">
                    <RatingStar ratingValue={item.rating} /> ({item.rating}/5)
                  </div>
                  <p className="text-[15px]">{item.comment}</p>
                  <p className="my-1 text-[11px] md:text-[13px] ">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 text-[11px] md:text-[13px]">
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
