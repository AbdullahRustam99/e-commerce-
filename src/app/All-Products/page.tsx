"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
}
const ProductDetails = () => {
  const api = `*[_type == "product"]{
  _id,
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  "imageUrl": image.asset->url,
  description
}`;
  const [productData, setProductData] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const product = await client.fetch(api);
      console.log(product);
      setProductData(product);
    }
    fetchData();
  });

  return (
    <>
      <Header />
      <div className="flex justify-between px-5 md:px-10 pt-10 pb-5">
        <div>New (500)</div>
        <div className="flex gap-2 md:gap-10">
          <div className="flex justify-center items-center gap-1">
            Hidden{" "}
            <span>
              <HiMiniBars3CenterLeft />
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            Sort by{" "}
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 max-sm:items-center px-10">
        <div className="col-span-1 max-sm:hidden">
          <div className="my-5 ">
            <ul className="font-medium text-[15px] hidden md:flex flex-col gap-2 ">
              <li>Shoes</li>
              <li>Sports Bras</li>
              <li>Tops & T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Trousers & Tights</li>
              <li>Shorts</li>
              <li>Tracksuits</li>
              <li>Jumpsuits & Rompers</li>
              <li>Skirts & Dresses</li>
              <li>Socks</li>
              <li>Accessories & Equipment</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center font-bold text-[15px] border-t-2 w-[50%] mt-4 py-4 pb-4">
              Gender{" "}
              <span>
                <FaChevronUp />
              </span>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Men
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Women
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Unisex
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center font-bold text-[15px] border-t-2 w-[50%] mt-4 py-4 pb-4">
              Kids{" "}
              <span>
                <FaChevronUp />
              </span>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Boys
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Girls
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Unisex
            </div>
          </div>
          <div></div>
          <div>
            <div className="font-bold flex justify-between items-center text-[15px] border-t-2 w-[50%]  mt-4 py-4">
              Shop by price{" "}
              <span>
                <FaChevronUp />
              </span>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              Under $ 2000
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              $2000 - $
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 ">
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-6">
            {productData.map((product) => {
              return (
                <div key={product._id}>
                  <Link href={`/All-Products/${product._id}`}>
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt="Product Img"
                      width={250}
                      height={250}
                    />
                    <h3 className="text-xl font-semibold mb-2 w-[200px]">
                      {product.productName}
                    </h3>
                    <p className="flex justify-between  text-gray-500 mb-4 w-[200px]">
                      {product.category}
                      <p className="text-gray-500">{product.inventory}</p>
                    </p>
                    <p className="text-gray-500">{product.colors}</p>
                    <p className="text-lg font-bold">$ {product.price}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="border-t-2 mt-10 pt-5 mb-20">
            <h1 className="font-medium text-[22px]">Related Categories</h1>
            <div className="mt-6 flex gap-3 flex-wrap">
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                Best Selling Product
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                Best Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                New Basketball Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                New Football Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                New Mens Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                New Running Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                Best Mens Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                New Jordan Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                Best Womens Shoes
              </p>
              <p className="border-2 px-3 text-[12px] py-2  rounded-[300px] inline">
                Best Training & Gym
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
