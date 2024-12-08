import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import men1 from "@/img/men (1).png";
import shoe from "@/img/show (1).png";
import Image from "next/image";

const OrderForm = () => {
  return (
    <>
      <Header />
      <div className="px-10 mb-20">
        <h2 className="text-3xl font-bold mb-6">Place Your Order</h2>

        <div className="grid grid-cols-1 justify-between lg:grid-cols-2">
          <div className="2xl:w-[500px] lg:w-[340px] w-[320px]">
            <div>
              <h1 className="text-[52] font-bold">
                How would you like to get your order?
              </h1>
              <p className="text-[14px]">
                Customs regulation for India require a copy of the recipient's
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information. Learn More
              </p>
            </div>

            <form className=" mb-5">
             
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How would you like to get your order?
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option>Delivery</option>
                  <option>Pickup</option>
                </select>
              </div>

              
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

             
              <div>
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="locality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Locality
                </label>
                <input
                  type="text"
                  id="locality"
                  name="locality"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="pan"
                  className="block text-sm font-medium text-gray-700"
                >
                  PAN
                </label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </form>
          </div>
          <div>
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
              <div className="flex justify-between mb-4 items-center">
                <p className="text-gray-500 border-t-2 border-b-2 py-3 w-full">
                  Total
                </p>
                <p className="text-lg font-bold">₹10,690.00</p>
              </div>
              <div>
                <p>
                  The total reflects the price of your order, including all
                  duties and taxes
                </p>
                <h1 className="font-bold mb-5">
                  Arrives Mon, 27 Mar - Wed, 12 Apr
                </h1>
                <div className="flex justify-between flex-col gap-7 pb-4 md:flex-row">
                  <div>
                    <Image src={men1} alt="MEn" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">
                      Nike Dri-FIT ADV Aeroswift
                    </h3>
                    <p className="text-gray-500">
                      Mens Short-Sleeve Running Top
                    </p>
                    <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>

                    <div className=" ">
                      <p className="text-gray-500">Size: L</p>
                      <p className="text-gray-500">Quantity: 1</p>
                      <p className="text-lg font-bold">$3,695.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col gap-7 pb-4 md:flex-row">
                  <div>
                    <Image src={shoe} alt="MEn" width={280} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">
                      Nike Dri-FIT ADV Aeroswift
                    </h3>
                    <p className="text-gray-500">
                      Mens Short-Sleeve Running Top
                    </p>
                    <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>

                    <div className=" ">
                      <p className="text-gray-500">Size: L</p>
                      <p className="text-gray-500">Quantity: 1</p>
                      <p className="text-lg font-bold">$3,695.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderForm;
