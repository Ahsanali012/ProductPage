import * as React from "react";

import { FaRegSun } from "react-icons/fa";

export const OrderDetails = () => {
  const productItems = [
    {
      id: 1,
      Description: "Almond Brown Sugar Croissant",
      ShortDescription: "Sweet croissant with topping almonds and brown sugar",
      Price: "12.98",
      Quantity: "3 pcs",
      PictureUrl:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/01/cozy-time-with-croissants-and-figs.jpg",
    },
    {
      id: 2,
      Description: "Almond Brown Sugar Croissant",
      ShortDescription: "Sweet croissant with topping almonds and brown sugar",
      Price: "12.98",
      Quantity: "3 pcs",
      PictureUrl:
        "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438__480.jpg",
    },
    {
      id: 3,
      Description: "Smoke Tenderloin Slice Croissant",
      ShortDescription:
        "Plain croissant with smoke tenderloin beef sliced and vegetable",
      Price: "10.01",
      Quantity: "2 pcs",
      PictureUrl:
        "https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812__480.jpg",
    },
  ];

  return (
    <div className="flex  bg-white min-h-full  px-5 pt-10  ">
      <div>
        <div className="flex flex-row justify-evenly">
          <div>
            <h1>Current Order</h1>
          </div>
          <div className="pl-10">
            <FaRegSun />
          </div>
        </div>
        <div>
          {productItems.map((products) => (
            <div
              className="flex flex-row  pt-10 justify-start "
              key={products.id}
            >
              <div className="pr-4">
                <img
                  style={{ width: 50, height: 50, borderRadius: 5 }}
                  src={products.PictureUrl}
                />
              </div>
              <div>
                <p style={{ fontSize: 15 }}> {products.Description}</p>
                <p style={{ fontSize: 15, color: "#ffa500" }}>
                  {" "}
                  ${products.Price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className=" mt-14 bg-slate-200 rounded-lg">
            <div className="p-4">
              <div className="flex flex-row justify-between ">
                <p style={{ fontSize: 12, color: "gray" }}> Subtotal</p>
                <span style={{ fontSize: 22 }}>$322</span>
              </div>
              <div className="flex flex-row justify-between">
                <p style={{ fontSize: 12, color: "gray" }}>Discount sales</p>
                <span style={{ fontSize: 22 }}>$-200</span>
              </div>
              <div className="flex flex-row justify-between">
                <p style={{ fontSize: 12, color: "gray" }}>Total sales tax</p>
                <span style={{ fontSize: 22 }}>$122</span>
              </div>
            </div>
          
            <div className="flex flex-row justify-evenly">
              <p style={{ fontSize: 22 }}>Total</p>
              <span style={{ fontSize: 22 }}>$344</span>
            </div>
          </div>
          <div
            className="pt-10 flex align-middle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className="inline-block   px-7 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Continue To Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
