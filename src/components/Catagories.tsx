import React from "react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import Card from "@/components/Card";
import { BiHeart, BiShow } from "react-icons/bi";
import coat from "@/public/img/coat.png";
import cupboard from "@/public/img/cupboard.png";
import purs from "@/public/img/purs.png";
import speaker from "@/public/img/speaker.png";

const Catagories = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[100%]  px-20 ">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-[#DB4444] ">Catagories</p>
          </div>
          <div className="flex gap-3 pb-5">
            <div className="">
              <p className="font-semibold text-3xl">Browse By Category</p>
              <div className="flex "></div>
            </div>
            <div className="flex justify-center items-center gap-5"></div>
          </div>
          <div className="pl-20 overflow-hidden flex justify-center items-center gap-8 pb-10 max-lg:gap-3">
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <BsPhone size={40} />
              <p>Computers</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <HiOutlineComputerDesktop size={40} />
              <p>Computers</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <IoWatchOutline size={40} />
              <p>SmartWatch</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <CiCamera size={40} />
              <p>Camera</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <CiHeadphones size={40} />
              <p>Headphnes</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border-2 border-[#0000004D] p-8 rounded-md max-lg:p-5">
              <LuGamepad size={40} />
              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 max-w-[1440px] ">
        <div className="w-[1140px] text-center flex items-center justify-center border-b-2 pb-1 mb-4 max-lg:w-[848px] max-md:w-[572px]"></div>
      </div>

      <div className="max-w-[1440px] w-[100%] flex overflow-hidden px-20 ">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-[#DB4444] ">This Month</p>
          </div>
          <div className="flex gap-3 pb-5">
            <div className="">
              <p className="font-semibold text-3xl">Best Selling Products</p>
              <div className="flex "></div>
            </div>
            <div className="flex justify-center items-center gap-2"></div>
          </div>
          <div className="pl-20 overflow-hidden flex justify-start items-center gap-5 pb-10">
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2  "
                  size={35}
                />
              }
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              discount="-40%"
              img={coat}
              itemName="The north coat"
              itemdisPries="$260"
              itemPries="$360"
              item="68"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={cupboard}
              itemName="Small BookSelf"
              itemdisPries="$360"
              item="75"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={purs}
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              itemName="Gucci duffle bag"
              discount="-35%"
              itemdisPries="$920"
              itemPries="$1160"
              item="28"
            />

            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={speaker}
              itemName="RGB liquid CPU Cooler"
              itemdisPries="$190"
              itemPries="$560"
              item="39"
            />
          </div>
        </div>
        <div className="px-20 max-w-[1440px]">
          <div className="w-[1140px] text-center flex items-center justify-center border-b-2 pb-7 mb-4 max-lg:w-[842px] max-md:w-[572px]"></div>
        </div>
      </div>
    </>
  );
};

export default Catagories;
