"use client"
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/cartContext/createContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import men1 from "@/img/men (1).png";
import men2 from "@/img/men (2).png";
import { Heart, Trash } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        Math.round(acc + item.price * item.quantity),
      0
    );
    setSum(total);
  }, [cart]);
  return (
    <>
      <Header />
      <div className=" bg-white p-8 max-w-[1440px]">
        <h2 className="text-3xl font-bold mb-6">Bag</h2>

        <div className="flex justify-evenly flex-col lg:flex-row">
          <div className="">
            <div className="flex flex-col justify-between gap-7 pb-4 md:flex-row">
              <div>
                <Image src={men1} alt="MEn" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  Nike Dri-FIT ADV Aeroswift
                </h3>
                <p className="text-gray-500">Mens Short-Sleeve Running Top</p>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>

                <div className="flex gap-4">
                  <p className="text-gray-500">Size: L</p>
                  <p className="text-gray-500">Quantity: 1</p>
                </div>

                <div className="flex gap-4">
                  <Heart />
                  <Trash />
                </div>
              </div>
              <p className="text-lg font-bold">$3,695.00</p>
            </div>
            <div className="flex justify-between flex-col gap-7 pb-4 md:flex-row">
              <div>
                <Image src={men2} alt="MEn" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  Nike Dri-FIT ADV Aeroswift
                </h3>
                <p className="text-gray-500">Mens Short-Sleeve Running Top</p>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>

                <div className="flex gap-4">
                  <p className="text-gray-500">Size: L</p>
                  <p className="text-gray-500">Quantity: 1</p>
                </div>

                <div className="flex gap-4">
                  <Heart />
                  <Trash />
                </div>
              </div>
              <p className="text-lg font-bold">$3,695.00</p>
            </div>
          </div>
          <div className="lg:w-[344px] w-full">
            <h3 className="text-xl font-semibold pb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-lg font-bold">₹10,690.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Estimated Delivery & Handling</p>
              <p className="text-lg font-bold">Free</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">Total</p>
              <p className="text-lg font-bold">₹10,690.00</p>
            </div>
            <Link href={"/Cart/Checkout"}>
              <Button text=" Member Checkout" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
