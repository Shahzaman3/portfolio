import React from "react";

export const TiltText = (props) => {
      return ( 
            <div id="tilt" ref={props.abc} className="relative">
                  <h1 className="text-7xl font-[anzo1] text-white">I AM <span className="text-black">FULL STACK</span></h1>
                  <h1 className="text-8xl font-[anzo1] text-white">DEVELOPER</h1>
                  <h1 className="text-7xl font-[anzo1] text-white">TO HIRE!</h1>
            </div>
       );
}

export default TiltText