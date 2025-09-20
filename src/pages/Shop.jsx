import React, { useEffect, useState } from "react";
import Sidebar from "../components/shop/Sidebar";
import Banner from "../components/shop/Banner";
import FilterBar from "../components/shop/FilterBar";
import ProductCard from "../components/shop/ProductCard";
import Pagination from "../components/shop/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchProductByCategory,
  getAllCategories,
} from "../features/productSlice";
import Loader from "../components/shop/Loader";

const Shop = () => {
  const { error, isLoading, items } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(6);
  const [sortBy, setSortBy] = useState("title-asc");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [layout, setLayout] = useState("Grid");
  const [pageNo, setPageNo] = useState(1);
  const [priceRange, setPriceRange] = useState(100);
  const [searchCategory, setSearchCategory] = useState("");

  const [filterByBrand, setFilterByBrand] = useState("");

  useEffect(() => {
    if (items?.products?.length > 0) {
      switch (sortBy) {
        case "title-asc":
          setSortedProducts(
            [...items?.products].sort((a, b) => a.title.localeCompare(b.title))
          );
          break;
        case "title-desc":
          setSortedProducts(
            [...items?.products].sort((a, b) => b.title.localeCompare(a.title))
          );
          break;
        case "price-asc":
          setSortedProducts(
            [...items?.products].sort((a, b) => a.price - b.price)
          );
          break;
        case "price-desc":
          setSortedProducts(
            [...items?.products].sort((a, b) => b.price - a.price)
          );
          break;
        case "rating-asc":
          setSortedProducts(
            [...items?.products].sort((a, b) => a.rating - b.rating)
          );
          break;
        case "rating-desc":
          setSortedProducts(
            [...items?.products].sort((a, b) => b.rating - a.rating)
          );
          break;

        default:
          break;
      }
    }
  }, [items, sortBy]);

  useEffect(() => {
    if (items?.products?.length > 0) {
      setSortedProducts(
        items.products.filter((item) => item.price < priceRange)
      );
    }
  }, [priceRange]);

  useEffect(() => {
    if (searchCategory != "") {
      dispatch(
        fetchProductByCategory({ searchCategory, productCount, pageNo })
      );
    } else {
      dispatch(fetchAllProducts({ productCount, pageNo }));
    }
  }, [productCount, pageNo, searchCategory]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-3 xl:gap-5 sm:mt-5 p-4 md:p-0 ">
      <div className="w-full h-full md:w-[250px] lg:w-[300px] xl:w-[25%]">
        <Sidebar
          setFilterByBrand={setFilterByBrand}
          filterByBrand={filterByBrand}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
      <div className="w-full xl:w-[75%] flex flex-col gap-4">
        <Banner />
        <FilterBar
          setLayout={setLayout}
          layout={layout}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setProductCount={setProductCount}
          productCount={productCount}
          items={items}
        />
        {isLoading ? (
          <div className="w-full py-10 flex items-center justify-center text-2xl">
            <Loader/>
          </div>
        ) : (
          <div
            className={` ${
              layout === "Grid"
                ? "grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
                : "grid-cols-1 gap-5"
            } w-full grid `}
          >
            {sortedProducts?.length > 0 &&
              sortedProducts.map((product) => (
                <ProductCard
                  layout={layout}
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        )}
        <Pagination setPageNo={setPageNo} pageNo={pageNo} />
      </div>
    </div>
  );
};

export default Shop;
