import gsap from "gsap";
import React from "react";

export const Page4 = () => {

      return ( 
            <div className="h-screen p-8 ">
                  <div className="h-full w-full overflow-hidden relative rounded-[30px] flex items-center justify-between">
                        <video autoPlay loop muted className="h-full w-full object-cover" src="/src/assets/skill.mp4"></video>
                        <div className="absolute flex flex-col md:flex-row items-start md:items-end gap-4 left-15 bottom-0 p-8">
                              <a className="text-[28vw] font-[anzo2] text-white" href="http://" target="_blank" rel="noopener noreferrer">SKILLS</a>
                        </div>
                  </div>
                  
            </div>
       );
}

export default Page4