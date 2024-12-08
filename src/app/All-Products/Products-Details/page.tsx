import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import produtimg from "@/img/Rectangle.png";
import Button from "@/components/Button";
import { BiCart } from "react-icons/bi";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <div className="px-10 py-20 flex gap-20 justify-center flex-col lg:flex-row">
        <div>
          <Image src={produtimg} alt="productImg" />
        </div>
        <div>
          <h1 className="text-[48px] font-medium pb-5">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
          <p className="text-[15px] w-[375px] pb-4">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside out-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>

          <p className="text-[36px] font-medium pb-3">$ 8 695.00</p>
          <div className="flex items-center bg-black rounded-[200px]  cursor-pointer text-white pl-3 w-44">
            <BiCart size={25} className="" />
            <Link href={"/Cart"}>
            
            <Button text="Add to Cart" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
