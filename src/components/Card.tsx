import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
interface CardProps {
  img: StaticImageData;
  itemName: string;
  pries: string;
  itemdisPries: string;
  itemPries: string;
  discount?: string; // Optional prop
  color?: string; // Optional prop for discount styling
  icon1?: JSX.Element; // Assuming the icons are React components
  icon2?: JSX.Element; // Assuming the icons are React components
}
const Card = (props:CardProps) => {
  return (
    <>
      <div className="max-w-[1440px]">
        <div className="w-[270px] h-[270px] p-2 bg-[#F5F5F5] rounded-sm max-md:basis-1/2 ">
          <div className="flex justify-between">
            <div className={props.color}>{props.discount}</div>
            <div>
              <span>{props.icon1}</span>
              <span>{props.icon2}</span>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Image src={props.img} alt="item pic" />
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-5">
            <h1 className="font-medium pt-">{props.itemName}</h1>
            <p>{props.pries} </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#757575]">{props.itemdisPries}</p>
            <p className="text-[#757575]  ">{props.itemPries}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
