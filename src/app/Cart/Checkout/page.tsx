import React from "react";
import Header from "@/components/CheckoutHeader";
import Footer from "@/components/CheckoutFooter";
import men1 from "@/img/men (1).png";
import shoe from "@/img/show (1).png";
import Image from "next/image";
import Button from "@/components/Button";

import { PiPackage } from "react-icons/pi";

const OrderForm = () => {
  return (
    <>
      <Header />
      <div className="px-10 mb-20 max-w-[1440px]">
        <h2 className="text-3xl font-bold mb-6">Place Your Order</h2>

        <div className="grid grid-cols-1 justify-items-center gap-2 justify-between lg:grid-cols-2">
          <div className="2xl:w-[500px] lg:w-[340px] w-[320px]">
            <div>
              <h1 className="text-[52] font-bold md-4">
                How would you like to get your order?
              </h1>
              <p className="text-[14px] mb-3">
                Customs regulation for India require a copy of the recipients
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information. Learn More
              </p>
            </div>

            <form className="flex flex-col gap-5 mb-5 max-w-[295px] md:max-w-[440px]">
              <div className="flex  items-center border-2 border-black p-5 gap-4 rounded-xl">
                <PiPackage size={25} />{" "}
                <p className="text-[16px] font-medium ">Deliver It</p>
              </div>

              <h1 className="font-medium text-[17px]">
                Enter your name and address:
              </h1>
              <div>
                <input
                  placeholder="First Name"
                  type="text"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address1"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address2"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className=" w-[85%] border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Locality"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-medium text-[16px]">
                  Whats your contact information?
                </h1>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    A confirmation email will be sent after checkout.
                  </p>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    A carrier might contact you to confirm delivery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-medium text-[16px]">Whats your PAN?</h1>

                <div>
                  <input
                    type="text"
                    placeholder="PAN"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                  Enter your PAN to enable payment with UPI, Net Banking or
                  local card methods
                </p>
                <div className="flex justify-start gap-2">
                  <input
                    type="checkbox"
                    placeholder="Phone"
                    className="  border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    Save PAN details to Nike Profile
                  </p>
                </div>
                <div className="flex justify-start gap-2">
                  <input
                    type="checkbox"
                    placeholder="Phone"
                    className="  border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the{" "}
                    <span className="underline">Privacy Statement</span> and
                    <span className="underline">Cookie Policy</span>. eShopWorld
                    is a trusted Nike partner.
                  </p>
                </div>
              </div>
            </form>
            <div>
              <Button text="Oder Now" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="border-t-2 py-1 my-2 text-[20px] " >Delivery</div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]" >Shipping</div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]" >Billing</div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]" >Payment</div>
            </div>
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
