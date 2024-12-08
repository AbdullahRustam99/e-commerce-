import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import img1 from "@/img/ProductPageImg/Rectangle (1).png";
import img2 from "@/img/ProductPageImg/Rectangle (2).png";
import img3 from "@/img/ProductPageImg/Rectangle (3).png";
import img4 from "@/img/ProductPageImg/Rectangle (4).png";
import img5 from "@/img/ProductPageImg/Rectangle (5).png";
import img6 from "@/img/ProductPageImg/Rectangle (6).png";
import img7 from "@/img/ProductPageImg/Rectangle (7).png";
import img8 from "@/img/ProductPageImg/Rectangle (8).png";
import img9 from "@/img/ProductPageImg/Rectangle (9).png";
import img10 from "@/img/ProductPageImg/Rectangle (10).png";
import img11 from "@/img/ProductPageImg/Rectangle (11).png";
import img12 from "@/img/ProductPageImg/Rectangle (12).png";
import img13 from "@/img/ProductPageImg/Rectangle (13).png";
import img14 from "@/img/ProductPageImg/Rectangle (14).png";
import img15 from "@/img/ProductPageImg/Rectangle (15).png";
import img16 from "@/img/ProductPageImg/Rectangle (16).png";
import img17 from "@/img/ProductPageImg/Rectangle (17).png";
import img18 from "@/img/ProductPageImg/Rectangle (18).png";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between px-10 pt-10 pb-5">
        <div>New (500)</div>
        <div className="flex gap-10">
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
            <div>
              <Image src={img1} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 Mid 07
              </h3>
              <p className="text-gray-500 mb-4">Mens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$10,795.00</p>
            </div>

            <div>
              <Image src={img4} alt="Product ImgNature" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Standard Issue
              </h3>
              <p className="text-gray-500 mb-4">Women's Basketball Jersey</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold"> $ 2 895.00</p>
            </div>

            <div>
              <Image src={img3} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img2} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img6} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Dri-FIT UV Hyverse
              </h3>
              <p className="text-gray-500 mb-4">
                Mens Short-Sleeve Graphic Fitness Top
              </p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$2,695.00</p>
            </div>
            <div>
              <Image src={img5} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Dunk Low Retro SE
              </h3>
              <p className="text-gray-500 mb-4">Mens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$1,695.00</p>
            </div>
            <div>
              <Image src={img7} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img8} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">Nike Dri-FIT Ready</h3>
              <p className="text-gray-500 mb-4">
                Mens Short-Sleeve Fitness Top
              </p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$1,445.00</p>
            </div>
            <div>
              <Image src={img9} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike One Leak Protection: Period
              </h3>
              <p className="text-gray-500 mb-4">
                Womens Mid-Rise 18cm (approx.) Biker Shorts
              </p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$4,695.00</p>
            </div>
            <div>
              <Image src={img10} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 LV8 3
              </h3>
              <p className="text-gray-500 mb-4">Older Kids Shoe</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$3,035.00</p>
            </div>
            <div>
              <Image src={img11} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img12} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img13} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img14} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img15} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img16} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-gray-500 mb-4">Womens Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img17} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">Nike Air Max SYSTM</h3>
              <p className="text-gray-500 mb-4">Older Kids Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$8,695.00</p>
            </div>
            <div>
              <Image src={img18} alt="Product Img" />
              <h3 className="text-xl font-semibold mb-2">
                Nike Dri-FIT Run Division Rise 365
              </h3>
              <p className="text-gray-500 mb-4">Men's Running Tank</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="text-lg font-bold">$18,695.00</p>
            </div>
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
