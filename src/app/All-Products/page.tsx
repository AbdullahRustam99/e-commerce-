import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center">
    <div>New (500)</div>
    <div></div>
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div>
          <div >
            {/* Content Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Shoe 1 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Nike Air Force 1 Mid 07
                </h3>
                <p className="text-gray-500 mb-4">Mens Shoes</p>
                <img
                  src="/path/to/nike-air-force-1.jpg"
                  alt="Nike Air Force 1 Mid 07"
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="text-gray-500">1 Colour</p>
                <p className="text-lg font-bold">₹10,795.00</p>
              </div>

              {/* Shoe 2 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Nike Court Vision Low Next Nature
                </h3>
                <p className="text-gray-500 mb-4">Mens Shoes</p>
                <img
                  src="/path/to/nike-court-vision.jpg"
                  alt="Nike Court Vision Low Next Nature"
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="text-gray-500">1 Colour</p>
                <p className="text-lg font-bold">₹4,995.00</p>
              </div>

              {/* Shoe 3 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Nike Air Force 1 PLT.AF.ORM
                </h3>
                <p className="text-gray-500 mb-4">Womens Shoes</p>
                <img
                  src="/path/to/nike-air-force-1-plt.jpg"
                  alt="Nike Air Force 1 PLT.AF.ORM"
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="text-gray-500">1 Colour</p>
                <p className="text-lg font-bold">₹8,695.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
