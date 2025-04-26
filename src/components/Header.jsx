import React from "react";
import 'remixicon/fonts/remixicon.css'

export const Header = () => {
      return ( 
            <div className="w-full flex items-center px-10 py-24 z-10 fixed">
                  <img className="h-20 w-20 rounded-full absolute z-11 object-cover" src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" />
                  <div className="absolute w-full  p-24 flex items-center justify-end">
                        <button className="bg-black text-amber-50 px-4 py-2.5 hover:bg-gray-500 border-3 rounded-full"> Hire ME! </button>
                        <i className="ri-menu-line text-2xl ml-4"></i>
                  </div>
            </div>
       );
}

export default Header