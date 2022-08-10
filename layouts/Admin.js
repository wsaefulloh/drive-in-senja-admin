import React from "react";
import { withRouter } from "next/router";
// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import Sidemenu from "components/Sidebar/Sidemenu.js";
import { Container, Row } from "reactstrap";

function HomeLayoutAdmin({ children }) {
  return (
    <>
      <div className="main-content">
        <HomeNavbar />
        <div
          style={{
            marginTop: 15,
            marginBottom: 15,
            // paddingLeft: 7.5,
            // paddingRight: 7.5,
          }}
        >
          <Container>
            <Row>
              <Sidemenu />
              {children}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default withRouter(HomeLayoutAdmin);
