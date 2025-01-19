"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "@/components/Button";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

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
const ProductDetails = ({params}: { params: { id: string; }; }) => {
  let { id } = params;
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
        setProductData(product);
      }
      fetchData();
    });
  
   const productItem = productData.find((item:Product) => item._id === id);
  console.log(productItem);

  return (
    <>
      <Header />
      {productItem ? (
        <div className="px-10 py-20 flex gap-20 justify-center flex-col lg:flex-row">
          <div>
            <Image src={urlFor(productItem.imageUrl).url()} alt="productImg" width={400} height={400} />
          </div>
          <div>
            <h1 className="text-[48px] font-medium pb-5 w-[350px]" >
              {productItem.productName}
            </h1>
            <p className="text-[15px] w-[375px] pb-4">
              {productItem.description}
            </p>
            <p className="text-[36px] font-medium pb-3">$ {productItem.price}</p>
            <div className="flex items-center bg-black rounded-[200px] cursor-pointer text-white pl-3 w-44">
              <BiCart size={25} className="" />
              <Link href={"/Cart"}>
                <Button text="Add to Cart" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
       
      <Footer />
    </>
  );
};

export default ProductDetails;
