import React from "react";
import men1 from "@/img/men (1).png";
import men2 from "@/img/men (2).png";
import women1 from "@/img/women (3).png";
import women2 from "@/img/women (4).png";
import Card from "@/components/Card";

const GearUp = () => {
  return (
    <>
      <div className="px-10 flex flex-col gap-2 mt-20 max-w-[1440px]">
        <h2 className="text-[22px] font-medium mb-6">Gear Up</h2>

        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex flex-wrap gap-5 justify-between w-full lg:w-[48%]">
            <Card
              img={men1}
              itemName="Nike Dri-FIT ADV TechKnit Ultra"
              pries="$1300"
              itemPries="Running Top"
              itemdisPries="Men's Short-Sleeve"
            />
            <Card
              img={men2}
              itemName="Nike Dri-FIT Challenger"
              pries="$1300"
              itemPries="2-in-1 Versatile Shorts"
              itemdisPries="Men's 18cm (approx.)"
            />
          </div>
          <div className="flex flex-wrap gap-5 justify-between w-full lg:w-[48%]">
            <Card
              img={women2}
              itemName="Nike Fast"
              pries="$1300"
              itemPries="Running Leggings with Pockets"
              itemdisPries="Women's Mid-Rise 7/8"
            />
            <Card
              img={women1}
              itemName="Nike Dri-FIT ADV Run Division"
              pries="$1300"
              itemdisPries="Women's Long-Sleeve"
              itemPries="Running Top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GearUp;
