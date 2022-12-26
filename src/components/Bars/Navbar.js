import React from "react";
import App from "../../App";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="flex">
  
     <div className={'w-24 pt-10   h-screen bg-white'}>
     
       <SideBar/>
     
     </div>
     
     <div className={' text-2xl font-semibold bg-slate-200  flex-1 '}>
        <App/>
     </div>
     
    </div>
  );
};

export default Navbar;
