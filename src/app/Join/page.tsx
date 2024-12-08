import React from "react";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Link from "next/link";

const NikeMember = () => {
  return (
	  <>
		  <Header/>
      <div className="md:px-[200px] lg:px-[200px] px-[50px] my-5">
        <div className="px10 flex justify-center items-center flex-col text-center gap-3">
          <h2 className="text-3xl font-bold mb-6">Become a Nike Member</h2>

          <p className="text-lg mb-4">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>

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

            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <input
                type="date"
                id="dob"
                name="dob"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Get a Nike Member Reward every year on your Birthday.
              </p>
            </div>

            <div>
              <div className="mt-1 flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
									  className="form-radio"
									  placeholder="Male"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                name="emailUpdates"
                className="form-checkbox"
              />
              <span className="ml-2">
                Sign up for emails to get updates from Nike on products, offers,
                and your Member benefits
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              By creating an account, you agree to Nike
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>
              .
            </p>

            <Button text="Join US" />
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Already a Member?
            <Link href={"/Singin"} className="text-blue-500">
              Sign In
            </Link>
            
          </p>
        </div>
		  </div>
		  <Footer/>
    </>
  );
};

export default NikeMember;
