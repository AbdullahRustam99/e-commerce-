import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Logo from "@/img/logo.png";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Header />
      <div className="md:px-[200px] lg:px-[200px] px-[50px] my-5">
        <div className="px10 flex justify-center items-center flex-col text-center gap-3">
          <Image src={Logo} alt="logo"></Image>
          <h2 className="text-3xl font-bold mb-6">
            Your Account For Everything Nike
          </h2>
          <form className="flex flex-col gap-5 ">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <input
                  type="checkbox"
                  name="emailUpdates"
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-600 ">Keep me Singin</span>
              </div>
              <p className="text-gray-400">Forgetten Your Password?</p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              By logging in, you agree to Nikesss
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              and
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>
              .
            </p>

            <Button text="Sing In" />
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Not a Memmber
            <Link href={"/Join"} className="text-blue-500">
              Join Us
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
