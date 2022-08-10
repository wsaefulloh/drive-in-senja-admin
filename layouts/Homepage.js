import React from "react";
import { withRouter } from "next/router";
// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeFooter from "components/Footers/HomeFooter.js";

function HomeLayout({ children }) {
  return (
    <>
      <div className="main-content">
        <HomeNavbar />
        {children}
      </div>
    </>
  );
}

export default withRouter(HomeLayout);
