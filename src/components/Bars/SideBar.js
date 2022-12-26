import React from "react";
import { SidebarData } from "../../Data/SideBarData";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const activeLink =
    "hover:bg-orange-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-orange-500";
  const normalLink =
    "hover:bg-orange-500 mt-7 pl-7 w-full h-14 flex justify-start items-center  text-2xl space-x-1 ";

  return (
   
        <div >
       
          
          {SidebarData.map((item, index) => {
            return (
              <div  key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span>{item.icon}</span>
                </NavLink>
              </div>
            );
          })}
           
        </div>
    
  );
};

export default SideBar;
