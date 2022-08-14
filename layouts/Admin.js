import React, { useEffect } from "react";
import { useRouter, withRouter } from "next/router";
// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import Sidemenu from "components/Sidebar/Sidemenu.js";
import { Container, Row } from "reactstrap";
import { useCookies } from "react-cookie";

function HomeLayoutAdmin({ children }) {
  const [cookies] = useCookies(["token"]);
  const router = useRouter();

  useEffect(() => {
    const isLogin = cookies.token;

    if (!isLogin) {
      router.push("/auth");
    }
  }, [router]);

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
