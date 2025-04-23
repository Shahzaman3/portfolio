import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

export const Page2 = () => {

      gsap.registerPlugin(ScrollTrigger)
      useGSAP(function(){
            gsap.from(".animation",{
                  transform : `rotateX(100deg)`,
                  opacity: 0,
                  duration: 2.5,
                  stagger: 1,
                  scrollTrigger:{
                        trigger: `animation`,
                        start: "top 40%",
                        end: "bottom 270%",
                        ease: "power2.out",
                        scrub: true
                  }
            })
      })


      return ( 
            <div className="p-15 text-black flex items-center flex-col">
                  <div className="animation mt-5">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">IMPACTFUL</h1>
                  </div>
                  <div className="animation">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">design</h1>
                  </div>
                  <div className="animation">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">is the</h1>
                  </div>
                  <div className="animation">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">design</h1>
                  </div>
                  <div className="animation">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">that</h1>
                  </div>
                  <div className="animation">
                        <h1 className=" text-[42vw] font-[anzo2] uppercase leading-[34vw]">works</h1>
                  </div>
            </div>
       );
}

export default Page2