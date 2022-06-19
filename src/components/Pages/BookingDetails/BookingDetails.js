import React from "react";
import photo from "./../../../assets/images/photographer-407068_1920.jpg";
import icon1 from "./../../../assets/images/icons/3.jpg";
import hostImeg from "../../../assets/images/icons/host.webp";
const BookingDetails = () => {
  return (
    <section className={'mt-5'}>
      <div className="container mt-5">
        <div className="row  mt-5">
          <div className="col-12  mt-5">
            <h4>Lily Beach Resort & Spa, Maldives, With Pool, AI</h4>
          </div>
          <div className="col-12 mb-3">
            <div className="row">
              <div className="col-6">
                <a href="#">Maldives</a>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <a className="me-3" href="">
                  Share
                </a>
                <a href="">Save</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row g-3">
              <div className="col-md-6 pe-0">
                <img src={photo} className={"img-thumbnail p-0"} alt="" />
              </div>
              <div className="col-md-6">
                <div className="row g-2">
                  <div className="col-6">
                    <img src={photo} className={"img-thumbnail p-0"} alt="" />
                  </div>
                  <div className="col-6">
                    <img src={photo} className={"img-thumbnail p-0"} alt="" />
                  </div>
                  <div className="col-6">
                    <img src={photo} className={"img-thumbnail p-0"} alt="" />
                  </div>
                  <div className="col-6">
                    <img src={photo} className={"img-thumbnail p-0"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-5">
            <div className="row">
              <div className="col-md-7">
                <div className="row align-items-center mt-5">
                  <div className="col-8">
                    <h4>Dome hosted by Dorothy</h4>
                    <div className="d-flex align-items-center">
                      <span>3 guests</span>
                      <li className="ps-3"></li>
                      <span>1 bedroom</span>
                      <li className="ps-3"></li>
                      <span>1 bed</span>
                      <li className="ps-3"></li>
                      <span>1 bath</span>
                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <a href="">
                      <img src={hostImeg} style={{ width: "60px" }} alt="" />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 py-3">
                    <div className="border-bottom border-top">
                      <div className="d-flex align-items-start mt-3">
                        <span className="me-2">
                          <img src={icon1} style={{ width: "30px" }} alt="" />
                        </span>
                        <div className="mb-2">
                          <h5 className="m-0">Dive right in</h5>
                          <p className="m-0">
                            This is one of the few places in the area with a
                            pool.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start mb-3">
                        <span className="me-2">
                          <img src={icon1} style={{ width: "30px" }} alt="" />
                        </span>
                        <div>
                          <h5 className="m-0">Experienced host</h5>
                          <p className="m-0">
                            Dorothy has 720 reviews for other places.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12"></div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="border-bottom pb-3">
                      <h3 className="m-0">
                        <span style={{ color: "red" }}>DAY</span>FUNA
                      </h3>
                      <p className="m-0">
                        Every booking includes free protection from Host
                        cancellations, listing inaccuracies, and other issues
                        like trouble checking in.
                      </p>
                      <a href="#">Learn more</a>
                    </div>
                    <div className="mt-3 border-bottom">
                      <p>
                        <p className="m-0">ALL INCLUSIVE RESORT AWARD WINNER</p>
                        Lily Beach is proud to have once again won the
                        prestigious All Inclusive Resort Award this year.
                      </p>
                    </div>
                    <div className="my-4 border-bottom">
                      <h2 className="mb-4">Where you'll sleep</h2>
                      <div
                        className="border mb-4"
                        style={{
                          borderRadius: "17px",
                          width: "max-content",
                          padding: "15px 100px 15px 15px",
                        }}
                      >
                        <img src={icon1} style={{ width: "30px" }} alt="" />
                        <h5>Bedroom</h5>
                        <span>1 double bed</span>
                      </div>
                    </div>

                    <div className="row">
                      <h2>What this place offers</h2>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>Wifi</span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>Pool</span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>TV</span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>
                          Air conditioning
                        </span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>Hair dryer</span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>Breakfast</span>
                      </div>
                      <div className="col-6 mb-2 d-flex align-content-center">
                        <img
                          src={icon1}
                          className="me-2"
                          style={{ width: "30px" }}
                          alt=""
                        />
                        <span style={{ fontSize: "20px" }}>
                          Long term stays allowed
                        </span>
                      </div>
                      <div className="col-12">
                        <div className="border-bottom">
                          <button className={"view-more-button my-4"}>
                            Show all 15 amenities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5  mt-5 ">
                <div
                  class="card px-4"
                  style={{
                    borderRadius: "17px",
                  }}
                >
                  <div class="card-body">
                    <h5 class="card-title">$1,837 night</h5>
                    <div
                      className="border"
                      style={{
                        borderRadius: "7px",
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <p className="m-0">CHECK-IN</p>
                          <span>6/21/2022</span>
                        </div>
                        <span
                          style={{
                            width: "1px",
                            height: "65px",
                            background: "#ddd",
                          }}
                        ></span>
                        <div className="p-2">
                          <p className="m-0">CHECKOUT</p>
                          <span>6/21/2022</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top p-2">
                        <div className="text-center ">
                          <p className="m-0">GUESTS</p>
                          <span>1 guest</span>
                        </div>
                        <div>
                          <i class="fa-solid fa-angle-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="my-3 text-center">
                      <button
                        className={"view-more-button mb-2"}
                        style={{ width: "100%" }}
                      >
                        Reserve
                      </button>
                      <span>You won't be charged yet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDetails;
