import React from "react";
export const Page3 = () => {


      return ( 
            <div className="h-screen p-8 ">
                  <div className="h-full w-full overflow-hidden relative rounded-[30px] flex items-center justify-between">
                        <video autoPlay loop muted className="h-full w-full object-cover" src="/src/assets/backgroundstars.mp4"></video>
                        <div className="absolute flex flex-col md:flex-row items-start md:items-end gap-4 left-15 bottom-0 p-8">
                              <h1 className="text-[28vw] font-[anzo2] text-white">ABOUT</h1>
                              <div>
                              <h3 className="text-xl font-[anzo3] text-gray-400 ml-65 mb-20">FULL STACK DEVELOPER</h3>
                              <p className="text-white font-[anzo3] ml-40 mb-54 text-base md:text-lg max-w-[500px]">
                              I'm a FrontEnd Developer with a passion for turning ideas into interactive and accessible websites. I can build sleek UI designs using React, TailwindCSS, GSAP and Three.js.
                              </p>
                              </div>
                        </div>
                  </div>
                  
            </div>
       );
}

export default Page3