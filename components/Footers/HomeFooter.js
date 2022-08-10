import React, { useEffect, useState } from "react";
import Link from "next/link";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

function HomeFooter() {
  const [eventsPromotions, setEventsPromotions] = useState([]);

  const getEventsPromotions = async () => {
    const data = await fetchWrapper.get(`../api/events-promotions`);
    if (data) {
      let newData = data.data;
      if (newData.length <= 6) {
        newData.slice(0, 5);
        setEventsPromotions(newData);
      } else {
        setEventsPromotions(newData);
      }
    }
  };

  useEffect(() => {
    getEventsPromotions();
  }, []);

  return (
    <>
      <footer className="footer__custom">
        <Container className="py-4">
          <Row className="pt-4">
            <Col lg="3" className="mr-5">
              <div>
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="mt-3 mb-4 pr-3" style={{ color: "#ffffff" }}>
                <span>
                  Menjadi bagian dari Katarsis Experience, Drive-In Senja
                  berkomitmen untuk menyajikan thematic drive-in theatre pertama
                  di Indonesia yang dapat membawa para penikmat film dan hiburan
                  nonton layar tancap yang seru dengan suasana baru.
                </span>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Navigasi</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    <Link href="/">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Home
                      </div>
                    </Link>
                    <Link href="/film-list">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Now Playing
                      </div>
                    </Link>
                    <Link href="/event-promotion">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Event & Promotions
                      </div>
                    </Link>
                    <Link href="/booking-partnership">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Booking & Partnership
                      </div>
                    </Link>
                    <Link href="/film-festival">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Film Festival
                      </div>
                    </Link>
                    <Link href="/location">
                      <div
                        className="mt-2"
                        style={{ color: "#ffffff", cursor: "pointer" }}
                      >
                        Location
                      </div>
                    </Link>
                  </div>
                </Col>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Event & Promotions</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    {eventsPromotions.map((val) => {
                      return (
                        <Link href={`/event-promotion/${val.id}`}>
                          <div
                            className="mt-2"
                            style={{ color: "#ffffff", cursor: "pointer" }}
                          >
                            {val.title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </Col>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Hubungi Kami</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Ruko Crystal 8, Alam Sutera, Jalan Bhayangkara
                      Pusdiklantas nomor 10-11, Kota Tangerang Selatan, Provinsi
                      Banten
                    </div>
                    <div className="mt-3" style={{ color: "#ffffff" }}>
                      partnerships@driveinsenja.id
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      +62 812 8410 0312
                    </div>
                    <div className="mt-2 d-flex align-items-center">
                      <Link href="https://www.instagram.com/driveinsenja/">
                        <a target="_blank">
                          <div className="mr-1 ml-0">
                            <img
                              style={{ width: "30px" }}
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAKMElEQVRoge2Za6xU1RXHf2vvM2ceFy4gUnkpFeHKS8WCgo/0kRYVH4CtQkPSxsbUpom1aVP6pWm16eODWKutbVKVpI1tbYIVqkaEYsRqRUACVKAgRFvkIS953rlzz8zZqx/2PjNz8c6t0CZ+YSUre+7Z5+z5/9f7zIWzclbOyln5KEU+7I0/unXlzYfy8oODcTypK7J5J2oip0QKOefIKUTqyDkl5xS/58g5iFSJnWK1sedX/KpKpK47l7I3Vn0xX9VfXffarRv/LwQWXre8bd9A89I7/YpXOBFAMKoYlJwDSwDrlJw6ojrI5s8aPtODVNRMwqk3glNyqmmU6mODKgfvmbr+a9UzJrDwuuVtuwdF2/eX4hGK4BRECAT8ap0jQrF1TzRb2hE1QBEFAh60C38rsSomxRNIqRPPOV5sSw7O7IuE6YvAsXZ54VhsR+RTR96lFDQl77zGLiXWlBgldo5YUyJNseqIXIrVFKMOqymWFIPD4vctDhPUohinWBSLw0qKQRFVBP1sEg9eeEYeeGj2c9e/1VZalhpEAURQABRUMQhGHUZ9GFn11rbaCJ8oCy8F61yId29h65Rc6u+PFe/B1HsycopNCd6jpkYuuXr1bdt6wxm1ItBpWBC7VBTBAUqIHxRRaG/P8cnrRzHp8iGcO7REnLd9GeoDUqvUOLH7JPvX7uNff95J7WgFiydiFaJ6qEqkjjuBBadFoGrM5LymqAMVUAUVRYBLpw1l7l2TyBdbPv5fJSpEDBozkEFjBjJmzhjevH8Nh17ejVXB4D1jAREBlRktz2m1YY22F7SGU08AAKdMnD6MefdMRgS2r9/Pmud2sm/nEdJKDYsPHaP4+KdRgaKQxFZ9mBRiy+COcxj7hQl8bNoIJt97DVvufYWjq97FqhCRxbcBGNUKZ685cNddv8ld+P55iYZthyICbQNivv6LGcTFiFVPbmbNku0IGdiwhhJr1ce7cRkRmq5BTp0PFwcXzb+Mi75yOWlnwqb5S0gPd2NVUDUoAirpFa/P79XYvV4cPrxDC4cO+6QVH/+KMu2GDuJixNtv7GXj05spoPWeIAG0CSXVh4CGuA4kwHsHGH/HVEbNmcjup7ewa9E6zhk3mEFXXcDQWzs48PgGFAOioAakdbHsdedTQMHVKGqVgksoakLJVRk7ZSgAW57dTEkTii6hqFWK6u8pklDQhKJ2U9CEgksoaDd5TchrlZhuCiQUSBg1ewK2EDFyzgRiqhxcvAmAQdecj5G0h/oy0rv0ngOroDgg8ZUHkOCB9qH9ADixYx8FTUK9BkPDC6X2PGNvuoShUy+k37ABAJT3HuXQ2nfY88wG0iNdRCq8t3QjQ+dM5sCSjeSpkmzbB0B+xACENFhfsyBvWe57JXBwyK+11H0DqOLEF1FQcoUcALnKSd89RUHBiiLqGHH1WC67ewZRMe5xXv/RQ+g/eggXzJrM2w8+z/FXt3Pgty9xeNEqDJBXQcq+2ZpSDiMpinq7K4ROdBoeAApa8c+KA6eIabixpN0YFHBhpHCcd9XFXPqdm0Dg/XU72LN0DeUde7AK/TqGM2z2NAZc2cHY781m14+fovzKNsSATQUwqDT6iEjqm2XIP9caf+8Ebp84UVeu60YE1DkEhzSd0qYVjCiqDqOOeGAbE78xEwTe/f1f2f/U37BOyeOTOd10jD0bt1Gd92nO/fIMRn77Fva8uRN3pIxKGCiarGykhiMK1u973mnpgRLdIQYdgiKaNgjQBRpmFlGG33gttpjn+LqtHFv8Am0IBhcqk2DE94byn16gcvEICtMmMHD2FRz73UocFhHFaU8CAA6bkWiZA72Tu+8+LWk3JanQ5iqU6KJEpYlcmbag/Sgz6MpxAHT+ZQVtUqbEycY9pkxJy+GMMpWlKwEoTB+PkRrW1DBSq4P2BNJwLUUk9Ul92h7QCqL+YcH1KGVtdPpBThyoEg891x+245/0164AIuvIoCIo1ofLjp3+3uGDsaaKUwdkhSIj0CAD4PqY+lsS6EcXaA0kxWjaI4n7ayciITckBfV7bXISkS584fUvPyrGd1RJcWrAhAqlYKRaB98MsScBoa/XlpYEYql4N1LDkPbIgZJ0BvC+EvHePrhwNHHHKNzmf4AGAhLGgUBCxGI6RgLg9u3HSjV4V3u0KiNpE2gJg0zv0msOCKiVKlaqWFPFmAQrSX3fSoI1CVa6sSaBN1b767Nmhb1ur/X7kvoZ+TkzAaitXY8xVYypeZXGS1eWEyIpEnLhtAj4Q6p1zYjUCZikrpFJkOWLoasTmTode/u8+vUMvF+rxHM/j536CbRcJn3+eTIjGfFE6gYMyVsfJ84kiT3wzBI9rWBNAlbwIyhQPQ6P3w933wdfvBPGTYBli5Ed25BUYfR4zM3zkCnTQJXaLx5CTryPkYjm5G18dxZCEkLvDAh48NW6O5stREH8K5MFTOg0W1+Fx34IX1oAk6/y2iQCUO7EPbIQ1q75APhmGkZqKIKoCWPFGSRx5tY6CZtCpQyFEgxsg1pXeO8LJATY/nf46Wa4djZMnA5DRvpmeGAPbFgNy57GHD4KJkJcBiuAK5U8kXLFgw7JLwgGg6IivQxFfRCoqZGaWKkhUQqxwMG9cP4Y6BgH72zyT2ceyLLJHYeXn4CXnoBUoQbUFKoKiUJeMEnwpmuUWzPWv3S5fftD/GczrkHU0aqU9pHEKUaqiA3g8wY2v+43P3ebD6OCgaJASaBovJbCtaKEe4Lme6pp6sBGasSzbwSgtnYDhqwC+Z9e+sqBPgjUMCYDL35dvRS6yzB+OsyYH4AG4HUi4Vqhac2fQiL2mpGI5t6GnToFLZdJnlvum2QYISTMYq2kZQiJqZ4gJ+3EArnwxdXjsOQBmPd9+MwdMGo8bFoKh96CWsV7WQGnkIoPHUsj2bN2pUCuCOMuxs6cC1OmgyrJw4/AiaOIxBi1qDhUHSLpSemtXPVJwLKLnEwiFyyWrW+/Bs/8BGZ+C0ZP8/q/SrmT2i9/jluzHiMxqg4Vh6jzHnC6q9WjrX/YsawgYhJRBp4GiV2vwZNb4LJZcMGV0D4CosLpga6UYf8eWL8afXYpHOuqg5dm8OoQ65afPgGJFhHpN4mwRKHu55pI6AnY+kfY+WSjJ2QhlFWeRKE7aMVBRYM66AqfuxxSAST2Q6G4U1atCebxVjBbJrH84cWtWB6pg8s80UwiS85Tk7l4SsJmz+TEm8xKo5NbAaP14VDCS5KQqXtk2LKfbT1tAgDUji3AsKLHl0UBREYibiYRSmsGPiOceTA7ozmxQyOU8CtsBhwURJcPOZB+ty+IfRKQR9dXOXbkZow8HKYq/0QGImoiURTfAwpN4JutnXXs5lWaNCsyooDWBPfgOe9Ft8j6R8/8HxzNog/MnECBr1IyMyjIxymatkYDC17ISYh3H9uUw9rVy9/lputdinabozUX/9u5eEWi+UXtzyze/mGxnZWzclbOykcn/wEvyw5egRmpIwAAAABJRU5ErkJggg=="
                            />
                          </div>
                        </a>
                      </Link>
                      <Link href="https://www.tiktok.com/@driveinsenja">
                        <a target="_blank">
                          <div className="mr-1">
                            <img
                              style={{ width: "30px" }}
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEmElEQVRoge2YW2wUVRjHf7PbLW2Xlh1bKLXUtosFmlILBFYM6YuIFoiEW9JIiEpUgggh8RLEgE8kxgcStbHyYDRpNBIfJEqqJcREFOWWtpRAW6TsLralLTUw3WUv7M7O+NDS2rAzuLOzxYf9vc35zvnO/59zmXMOpEmTJs3DRHhQBafTuUVV1V3AIiA79ZIACKmq2g40eL3eI3oVdQ2UlZU1CoLwuqnSEudTj8ezSyto1Qo4nc4twAcpkZQYLofD0S1J0uV4QYtWq7Fp879AEITdWjFNA0BNCrQYZZFWIEOnUY4ZPefPrZr0fcvThaooiaaxawX0DCSNIAg8/9F3hIZ6UeQIAJ3v7cAt3SCkyKb0kVID99g4x8KyeQsAOHNiA4eaj9AaHjIlt94aSAnTN62gOjPftHxTbmDh8qW4XlxPriXTlHxTbgCg7s1XeffAfnLEgqRzTckaiMcLL21FrKzhhw437rbT/Hn8W0N5HpoBgDpXNXWuao42Rbl29gqNUkfCOaZ8Cg0NDN5X9uiMXJ7KLjKUz5QRECxWChcuo7ByCdliATc7W3H/2hy3bui1RppXlbJkUx1Fc4qT7jtpA6UrnmPZtr3YZxYR7LuKKPvImCYQuOCmyd99X/1pUZXDhw9T8vnXPDt/MYWPl2HzhzH6W0vKwOKte6ip30ngeherbSqu1QsBOHcsgGwvjWsAQFVVWgJeWtq8iB1ZVGaKhjUYNlCxajM19TuRe9o4uHYptgzNk7kut2Nh/ggNGJVhzECmPY+l294hcL1rXHwsFqPt+C+Er/ZjHRwxLChRDBkor11Npj2PdTP82DKsRCIRLu35GGe3xMlgH+13hwkoUbO1xsWQgdlPLCfUd5Unx+b8+a++Z0G3xIG/T9MS8I7XE4QHXrmTxtB/wJ5fiCj7xr8zLvZxMtg3STwAcQyYbcmQgUjwDnm2iaZKlpX2u8P31cstegyYEB0OhbBFFFQjnWpgyIB/sJeIMiEjZ60Le5zTZcUzm1CVGPOKCwHo9/wFgE+NGOk2LoYMeE/9xO3oxGSoqV2Oa+/LZOeM3vwsGTaqN2+nauMryO4O8uyjz0kDv7URUmVuykETpI9iaBHf7Gxl2BcgKsfG9/+n69fzYWk5J3oDOCpqsFityO4O3lpZDYDf52POsS5OBW8QVRO+E2uiuabKy8t1p2ru7BLe2H+Q7WtqJ5XHFIWe/iGK80Wm52QBo3/eM/samHtmkK0DLfREpYSFejyeuFoNn0b9g718eeggV3rck8qtFgvzS4rGxYfDYU6/38i8s0N8NnLRkHg9DI/APQpmiOzbsZvaDWsomDVrvNw34qPz598RvzmPOBymcaSDppEuw0K1RiBpAwBWBNblzmVlWRXF+YVMuxPhkVsR7spRTgX7+WLkMteiyR0vUmrg3+RaMplpzSY8ttvIJu36Wgb0dqEgBl7n/EoEv2LePj9GQCug97h7wWwVSdCuFdDbhRpSIMQon2gFNG8hkiRdEkVxJuBKiaT/ToPH4zmkFdS9RkmS9KPD4egWBKEIKABsZqvTIAicA97WE58mTZo0D59/AIQHkL0Ze9qXAAAAAElFTkSuQmCC"
                            />
                          </div>
                        </a>
                      </Link>
                      <Link href="https://twitter.com/driveinsenja">
                        <a target="_blank">
                          <div>
                            <img
                              style={{ width: "30px" }}
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2YTUxcVRiGnzP3zl8HSiwIBH+iNlFD1YWFmnZRqNYYkyJpYju6aVxou67GtAnqCpsulBgX6q7ppilqUhOENCDEBWlTShMwxAZSoygRsJRCM1OYuXPnuACiwJy5c88wA5r7bL/z877f+c499xzw8PDw2EyEUwPjYrwZIU8CdUCk8JIAiCO4jhRtdjTSka1hVgNme+yshFMbq80dAnkmFS1tUccVLGf+u8LIcokUTfYbke8zhXzKTktlszUQ8l1VSG0AsbsQWjSpUwWyGJAlhVCiSakqkMXAfwPPwGZTFAOmgJNP+hl5NczC6xEmm7fxzb4gu3csTR824MgjJh/W+l2PrT4H2mNSFWup9XN5yubGbDqnCb7eF+Tww+a6WDIN/bdt9lYY/BJLc/DHRWYSmae1oyUZtWqtwLHHTLr2h9hV5tz9rcfNjOIBAj54scrgyozN52MWbz6auV02tAxUhgTlAUFPY4iGSiNr27efcC6Ll6oMPtgV4NJEyrUWLQMjc0ulUxkUdDeEOPW0X1mLz+SwSmkJB/oWmFhQVq0SLQNtY/9kyhDw8XMBeg+EeP6B9cNFcqgKCYzfdy8eNA1cmkhx/rfVy73/QYOBl8P0NoY4vtOkdrsvJ/EAd5J64gHc7xrgh8YQ7b+nqA4JXqlevQcaKg3HfbGWaY3SWUHLgAS+rAtqT7qW4Xnnz7EKrRI6/VMSWz9p67g8aWv31TJwYzZNc7/60HHDfRu6p4psAKBv2qahb5GuPLIH8NUti9lib2KAc3uCRDVOzn9zz5J8OmrlNYb2CpwYTHLu1xT5FNHxwSTTi/mVobaBWEryzvUE9T0LfDJqMXQ3zZyVu5jPxiy+/cP9r8Na8v6dHrqb5vRwkmPXElydye1z2PqzxftDyXynBjT3QNiA8oDgqe0+6nf4aKoxeaHcORe3E5L3hpJcGM8/8yu4NrC3wsdHtQEOVhvOz3rLxFPwxS2Lszct5l2UWS5oXWgAasKC12pM9pT7eLbMx0PbBGV+gQDmLcl4XDI8l6bvL5vOP21iqfyEqy402gaKzYbeyLYS/2cDIlY8GY7cUwWyPe4OFkSKHkotagNStBVEig5CrUVpwI5GOgTyTGEU5Y5AttpHI53quAPGxfihpfd5UV+8F2sRAzmAEG3ZxHt4eHhsPn8DqBANPFcO8MIAAAAASUVORK5CYII="
                            />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default HomeFooter;
