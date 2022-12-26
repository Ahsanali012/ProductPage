import React from "react";
import {
  FaFilter,
  FaStar,
  FaCoffee,
  FaIceCream,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-1  ml-10 pt-10">
        <div>
          <div className="flex flex-row justify-between mr-7">
            <div>
              <h1>Welcome , Gory</h1>
              <p className="text-slate-500 text-base">
                Discover whatever you need easily
              </p>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className=" flex   h-12 rounded-lg  bg-white ">
                <div className="grid place-items-center   w-20 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 rounded-lg "
                  type="text"
                  id="search"
                  placeholder="Search Product ..."
                />
              </div>

              <div className="pl-5">
                <div className="rounded-lg h-12 w-12 p-3 bg-white items-center">
                  <FaFilter />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-row justify-between  items-center mr-10">
          <div className=" flex flex-row justify-evenly items-center bg-white w-1/5 rounded-lg text-lg">
            <span>
              <FaStar />
            </span>
            <p>Signature</p>
          </div>
          <div className=" flex flex-row justify-evenly items-center bg-orange-500 w-1/6 rounded-lg text-lg text-white">
            <span>
              <FaPizzaSlice />
            </span>
            <p>Pizza</p>
          </div>
          <div className=" flex flex-row justify-evenly items-center bg-white w-1/5 rounded-lg text-lg">
            <span>
              <FaHamburger />
            </span>
            <p>Burger</p>
          </div>
          <div className=" flex flex-row justify-evenly items-center bg-white w-1/5 rounded-lg text-lg">
            <span>
              <FaIceCream />
            </span>
            <p>Ice Cream</p>
          </div>

          <div className=" flex flex-row justify-evenly items-center bg-white w-1/5 rounded-lg text-lg">
            <span>
              <FaCoffee/>
            </span>
            <p>Coffe</p>
          </div>
        </div>

        <div>
          <Products />
        </div>
      </div>

      <div>
        <OrderDetails />
      </div>
    </div>
  );
};

export default Home;
