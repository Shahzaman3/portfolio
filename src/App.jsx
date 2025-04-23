import React from "react";
import Page1 from "/src/pages/Page1";
import Header from "/src/components/Header";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

export const App = () => {
  return ( 
    <>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    </>
   );
}

export default App