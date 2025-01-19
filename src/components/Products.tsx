import React from "react";
import Card from "@/components/Card";
import show1 from "@/img/show (1).png";
import Show2 from "@/img/Shoe(2).png";
import show3 from "@/img/show (3).png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] px-10 py-10">
        <div>
          <div className="flex flex-row gap-1 pb-3 w-full">
            <div className="flex justify-between items-center w-full  ">
              <p className="font-medium text-[22px]">Best of Air Max</p>
            </div>
            <div className="md:flex items-center justify-center gap-3 hidden   ">
              <p className="font-medium"> Shop</p>
              <div className="bg-[#E5E5E5] w-[48px] h-[48px] rounded-[300px] flex justify-center items-center">
                <IoIosArrowBack size={25} />
              </div>
              <div className="bg-[#E5E5E5] w-[48px] h-[48px] rounded-[300px] flex justify-center items-center">
                <IoIosArrowForward size={25} />
              </div>
            </div>
          </div>
            <div className="md:overflow-x-scroll flex justify-center lg:justify-start items-center lg:flex-nowrap flex-wrap gap-5  scrollbar-none">
            <Link href={"/All-Products/Products-Details"}>
              <Card
              img={Show2}
              itemName="Nike Air Max Pulse"
              pries="$1300"
              itemPries="Men's Shoes"
              />
            </Link>

            <Link href={"/All-Products/Products-Details"}>
              <Card
              img={show1}
              itemName="Nike Air Max Pulse"
              pries="$2400"
              itemPries="Men's Shoes"
              />
            </Link>
            <Link href={"/All-Products/Products-Details"}>
              <Card
              img={show3}
              itemName="Nike Air Max Pulse"
              pries="$5500"
              itemPries="Men's Shoes"
              />
            </Link>
            <Link href={"/All-Products/Products-Details"}>
              <Card
              img={show1}
              itemName="Nike Air Max Pulse"
              pries="$2400"
              itemPries="Men's Shoes"
              />
            </Link>
            <Link href={"/All-Products/Products-Details"}>
              <Card
              img={show1}
              itemName="Nike Air Max Pulse"
              pries="$2400"
              itemPries="Men's Shoes"
              />
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Products;
