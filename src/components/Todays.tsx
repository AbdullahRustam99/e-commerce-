import React from "react";
import Card from "@/components/Card";
import controler from "@/public/img/controler.png";
import Keyboard from "@/public/img/Keyboard.png";
import chair from "@/public/img/chair.png";
import moniter from "@/public/img/moniter.png";
import Button from "@/components/Button";
import { BiHeart, BiShow } from "react-icons/bi";

const Todays = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] flex overflow-hidden px-20 ">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-[#DB4444] ">Todays</p>
          </div>
          <div className="flex gap-3 pb-5">
            <div className="">
              <p className="font-semibold text-3xl">Flash Sales</p>
              <div className="flex "></div>
            </div>
            <div className="flex justify-center items-center gap-2"></div>
          </div>
          <div className="pl-20 overflow-hidden flex justify-start items-center gap-5 pb-20">
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
              img={controler}
              itemName="HAVIT HV-G92 Gamepad"
              itemdisPries="$120"
              itemPries="$160"
              item="88"
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
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              discount="-35%"
              img={Keyboard}
              itemName="AK-900 Wired Keyboard"
              itemdisPries="$960"
              itemPries="$1160"
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
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              discount="-30%"
              img={moniter}
              itemName="IPS LCD Gaming Monitor"
              itemdisPries="$320"
              itemPries="$460"
              item="20"
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
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              discount="-40%"
              img={chair}
              itemName="S-Series Comfort Chair "
              itemdisPries="$390"
              itemPries="$560"
              item="99"
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
              color="w-12 h-6 text-center bg-[#DB4444] rounded-md text-white"
              discount="-40%"
              img={chair}
              itemName="S-Series Comfort Chair "
              itemdisPries="$390"
              itemPries="$560"
              item="99"
            />
          </div>
        </div>
      </div>
      <div className="px-20 max-w-[1440px] max-lg:w-[848px]">
        <div className="w-[1140px] text-center flex items-center justify-center border-b-2 pb-7 mb-4 max-lg:w-[848px] max-md:w-[572px]">
          <Button text="View All Products" />
        </div>
      </div>
    </>
  );
};

export default Todays;
