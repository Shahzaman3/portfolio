import React, { useRef, useState } from "react";
// import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

export const Page1 = () => {

      const tiltRef = useRef (null)
      const [xVal, setXVal] = useState(0);
      const [yVal, setYVal] = useState(0);

      const mouseMoving = (e) => {
            setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40)
            setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)
            tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`     
      }

      useGSAP(function(){
            gsap.to(tiltRef.current,{
                  transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
                  duration : 2,
                  ease : `elastic.out(1, 0.4)`
            })
      },[xVal,yVal])


      return ( 
            <div onMouseMove={(e)=>{
                  mouseMoving(e)
            }} className="h-screen  p-3 bg-white ">
                  <div id="page1-in" className="h-full w-full px-24 py-80 shadow-2xl bg-cover rounded-[50px] bg-[url(/src/assets/choice2.jpg)]">
                        <TiltText abc={tiltRef} />
                        <Page1Bottom />
                  </div>
            </div>
       );
}

export default Page1