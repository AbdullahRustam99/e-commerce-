import React from "react";
import PS5 from "@/public/img/ps5-slim-goedkope-playstation_large 1.png";
import Woman from "@/public/img/attractive-woman-wearing-hat-posing-black-background 1.png";
import Speaker from "@/public/img/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import perfume from "@/public/img/652e82cd70aa6522dd785109a455904c.png";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineHeadsetMic } from "react-icons/md";


const Newarivals = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] overflow-hidden px-20 mb-5">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-[#DB4444] ">Featured</p>
          </div>
          <div className="flex gap-3 pb-6">
            <div className="">
              <p className="font-semibold text-3xl">New Arrival</p>
              <div className="flex "></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 max-lg:grid-rows-2 max-lg:grid-cols-3 gap-6">
          <div className="col-span-4 lg:col-span-2 lg:row-span-2 ">
            <div className="bg-black relative px-4 sm:px-6 pt-12 sm:pt-16 rounded h-full">
              <div className="flex justify-center">
                <Image src={PS5} alt="ps5" />
              </div>
              <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
                <h2 className="text-lg sm:text-2xl font-semibold">
                  PlayStation 5
                </h2>
                <p className="text-xs sm:text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a className="underline underline-white" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="block lg:col-span-2 lg:row-span-1 ">
            <div className="bg-black relative px-4 sm:px-6 pt-12 sm:pt-16 rounded h-full">
              <div className="flex justify-center">
                <Image src={Woman} alt="ps5" />
              </div>
              <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
                <h2 className="text-lg sm:text-2xl font-semibold">
                  Womens Collections
                </h2>
                <p className="text-xs sm:text-sm">
                  Featured woman collections that give you another vibe.
                </p>
                <a className="underline underline-white" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="block lg:col-span-1 lg:row-span-1 ">
            <div className="bg-black relative px-4 sm:px-6 pt-12 sm:pt-16 rounded h-full">
              <div className="flex justify-center">
                <Image src={Speaker} alt="ps5" />
              </div>
              <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
                <h2 className="text-lg sm:text-2xl font-semibold">Speakers</h2>
                <p className="text-xs sm:text-sm">Amazon wireless speakers</p>
                <a className="underline underline-white" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="block lg:col-span-1 lg:row-span-1 ">
            <div className="bg-black relative px-4 sm:px-6 pt-12 sm:pt-16 rounded h-full">
              <div className="flex justify-center">
                <Image src={perfume} alt="ps5" />
              </div>
              <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
                <h2 className="text-lg sm:text-2xl font-semibold">Perfume</h2>
                <p className="text-xs sm:text-sm">GUCCI INTENSE OUD EDP</p>
                <a className="underline underline-white" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 max-md:gap-16 max-lg:gap-20 max-lg:flex-nowrap py-20 px-4">
          <div className="flex flex-col justify-center items-center text-center max-w-[300px]">
            <div className="bg-[#c0c0c0] p-1 flex flex-col justify-center items-center rounded-full">
              <div className="text-4xl bg-button group-hover:bg-text group-hover:text-white p-2 rounded-full">
                <CiDeliveryTruck
                  className="bg-black text-white  rounded-full w-14 h-14 p-2"
                  size={40}
                />
              </div>
            </div>
            <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold mt-4">
              FREE AND FAST DELIVERY
            </h3>
            <p className="font-poppins text-[14px] md:text-[16px] mt-2">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-[300px]">
            <div className="bg-[#c0c0c0] p-1 flex flex-col justify-center items-center rounded-full">
              <div className="text-4xl bg-button group-hover:bg-text group-hover:text-white p-2 rounded-full">
                <MdOutlineHeadsetMic
                  className="bg-black text-white  rounded-full w-14 h-14 p-2"
                  size={40}
                />
              </div>
            </div>
            <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold mt-4">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="font-poppins text-[14px] md:text-[16px] mt-2">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-[300px]">
            <div className="bg-[#c0c0c0] p-1 flex flex-col justify-center items-center rounded-full">
              <div className="text-4xl bg-button group-hover:bg-text group-hover:text-white p-2 rounded-full">
                <GoShieldCheck
                  className="bg-black text-white  rounded-full w-14 h-14 p-2"
                  size={40}
                />
              </div>
            </div>
            <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold mt-4">
              MONEY BACK GUARANTEE
            </h3>
            <p className="font-poppins text-[14px] md:text-[16px] mt-2">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newarivals;
