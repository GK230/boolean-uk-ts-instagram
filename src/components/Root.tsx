import React from "react";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";

function Root() {
  return (
    <div id="root">
      {/* <header className="main-header"> */}
        {/* <!-- Go to 2-header-section.html --> */}
        <HeaderSection />
      {/* </header> */}
      <main className="wrapper">
        {/* <!-- Go to 3-header-section.html --> */}
        <MainSection />
      </main>
    </div>
  );
}

export default Root