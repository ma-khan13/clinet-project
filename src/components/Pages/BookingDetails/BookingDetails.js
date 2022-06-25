import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import photo from "./../../../assets/images/photographer-407068_1920.jpg";
import icon1 from "./../../../assets/images/icons/3.jpg";
import hostImeg from "../../../assets/images/icons/host.webp";
import user from "../../../assets/images/user.jpg";

const BookingDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="single-page-header col-12 mt-3">
            <h3>Exclusive & Private Island Resort: Floral Island</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="review ms-2 col-md-5 d-flex align-items-center">
                    <i
                      class="fa-solid fa-star"
                      style={{ fontSize: "14px" }}
                    ></i>
                    <span>4.96</span>
                    <span className="mx-1">-</span>
                    <span>
                      <a href="">126 reviews</a>
                    </span>
                  </div>
                  <div className="col-md-7 location">
                    <span className="mx-1">-</span>
                    <span>
                      <a href="">El Nido, MIMAROPA, Philippines</a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Shear and save button */}

              <div className="col-md-6 d-flex justify-content-end">
                <div className="me-2">
                  <button className="btn-shear">
                    <div className="d-flex align-items-center">
                      <span className="me-1">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                      </span>
                      <span>
                        <a href="">Shear</a>
                      </span>
                    </div>
                  </button>
                </div>
                <div>
                  <button className="btn-shear">
                    <div className="d-flex align-items-center">
                      <span className="me-1">
                        <i class="fa-solid fa-heart"></i>
                      </span>
                      <span>
                        <a href="">Save</a>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* image gallery */}
          <div className="col-12 mt-4">
            <div className="single-page-gallery">
              <div className="row gx-2">
                <div className="col-md-6">
                  <div>
                    <img className="image-radius" src={photo} alt="" />
                  </div>
                </div>
                <div className="col-md-6  mt-md-0 mt-2">
                  <div className="row g-2">
                    <div className="col-6">
                      <div>
                        <img className="image-radius" src={photo} alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <img className="image-radius" src={photo} alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <img className="image-radius" src={photo} alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <img className="image-radius" src={photo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <div className="single-item-container d-flex justify-content-between align-items-center">
                  <div className="text-container">
                    <div className="heading">
                      <h3>Island hosted by Philipe</h3>
                    </div>
                    <div>
                      <span>16 guests</span>
                      <span className="px-1">-</span>
                      <span>8 bedrooms</span>
                      <span className="px-1">-</span>
                      <span>8 beds</span>
                      <span className="px-1">-</span>
                      <span>9 baths</span>
                    </div>
                  </div>

                  <div class="rounded-pill image-container">
                    <img
                      className="rounded-pill img-fluid"
                      src={user}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="single-item-container">
                  <div className="items-container d-flex">
                    <div className="icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="content">
                      <h5>Great location</h5>
                      <p>
                        100% of recent guests gave the location a 5-star rating.
                      </p>
                    </div>
                  </div>
                  <div className="items-container d-flex">
                    <div className="icon">
                      <i class="fa-solid fa-key"></i>
                    </div>
                    <div className="content">
                      <h5>Great check-in experience</h5>
                      <p>
                        100% of recent guests gave the check-in process a 5-star
                        rating.
                      </p>
                    </div>
                  </div>
                  <div className="items-container d-flex">
                    <div className="icon">
                      <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="content">
                      <h5>Free cancellation before 2:00 PM on Jun 26.</h5>
                    </div>
                  </div>
                </div>
                <div className="single-item-container">
                  <div className="heading">
                    <h2>
                      <span style={{ color: "red" }}>DAY</span>FUNA
                    </h2>
                    <p className="py-2">
                      Every booking includes free protection from Host
                      cancellations, listing inaccuracies, and other issues like
                      trouble checking in.
                    </p>
                    <a href="">Learn more</a>
                  </div>
                </div>
                <div className="single-item-container">
                  <div>
                    <p>
                      We can accommodate up to 24+ Persons. Accepts Weddings and
                      Events
                    </p>
                  </div>
                  <div>
                    <p className="pt-3">Inclusions</p>
                    <p>-Inclusions</p>
                    <p>-All Meals (Filipino Cuisine)</p>
                    <p>-Coffee/Tea/Water</p>
                  </div>
                  <div className="mt-2">
                    <button
                      className="border-0"
                      style={{ background: "transparent" }}
                    >
                      <div className="d-flex align-items-center">
                        <a href="">Show more</a>
                        <span className="ms-1 pt-1">
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="single-item-container">
                  <div>
                    <div className="mb-4">
                      <h3>Where you'll sleep</h3>
                    </div>
                    <div class="row">
                      <div class="card-container col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <div className="icon">
                              <i class="fa-solid fa-bed"></i>
                            </div>
                            <div>
                              <h5 class="card-text">Bedroom 1</h5>
                              <span>1 queen bed, 1 floor mattress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-container col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <div className="icon">
                              <i class="fa-solid fa-bed"></i>
                            </div>
                            <div>
                              <h5 class="card-text">Bedroom 2</h5>
                              <span>1 queen bed, 1 floor mattress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-container col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <div className="icon">
                              <i class="fa-solid fa-bed"></i>
                            </div>
                            <div>
                              <h5 class="card-text">Bedroom 3</h5>
                              <span>1 king bed, 1 floor mattress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-container">
                  <div className="my-2">
                    <h3>What this place offers</h3>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Bay view</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Beach access – Beachfront</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Kitchen</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Wifi</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Free parking on premises</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 items-container d-flex align-items-center">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <h5>Garden view</h5>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className={"view-more-button my-4"}>
                        Show all 15 amenities
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-4">
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
                        <div className=" justify-content-between border-top p-2"></div>
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
    // <section className={"mt-5"}>
    //   <div className="container mt-5">
    //     <div className="row  mt-5">
    //       <div className="col-12  mt-5">
    //         <h4>Lily Beach Resort & Spa, Maldives, With Pool, AI</h4>
    //       </div>
    //       <div className="col-12 mb-3">
    //         <div className="row">
    //           <div className="col-6">
    //             <a href="#">Maldives</a>
    //           </div>
    //           <div className="col-6 d-flex justify-content-end">
    //             <a className="me-3" href="">
    //               Share
    //             </a>
    //             <a href="">Save</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12">
    //         <div className="row g-3">
    //           <div className="col-md-6 pe-0">
    //             <img src={photo} className={"img-thumbnail p-0"} alt="" />
    //           </div>
    //           <div className="col-md-6">
    //             <div className="row g-2">
    //               <div className="col-6">
    //                 <img src={photo} className={"img-thumbnail p-0"} alt="" />
    //               </div>
    //               <div className="col-6">
    //                 <img src={photo} className={"img-thumbnail p-0"} alt="" />
    //               </div>
    //               <div className="col-6">
    //                 <img src={photo} className={"img-thumbnail p-0"} alt="" />
    //               </div>
    //               <div className="col-6">
    //                 <img src={photo} className={"img-thumbnail p-0"} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12 mb-5">
    //         <div className="row">
    //           <div className="col-md-7">
    //             <div className="row align-items-center mt-5">
    //               <div className="col-8">
    //                 <h4>Dome hosted by Dorothy</h4>
    //                 <div className="d-flex align-items-center">
    //                   <span>3 guests</span>
    //                   <li className="ps-3"></li>
    //                   <span>1 bedroom</span>
    //                   <li className="ps-3"></li>
    //                   <span>1 bed</span>
    //                   <li className="ps-3"></li>
    //                   <span>1 bath</span>
    //                 </div>
    //               </div>
    //               <div className="col-4 d-flex justify-content-end">
    //                 <a href="">
    //                   <img src={hostImeg} style={{ width: "60px" }} alt="" />
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="col-12 py-3">
    //                 <div className="border-bottom border-top">
    //                   <div className="d-flex align-items-start mt-3">
    //                     <span className="me-2">
    //                       <img src={icon1} style={{ width: "30px" }} alt="" />
    //                     </span>
    //                     <div className="mb-2">
    //                       <h5 className="m-0">Dive right in</h5>
    //                       <p className="m-0">
    //                         This is one of the few places in the area with a
    //                         pool.
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="d-flex align-items-start mb-3">
    //                     <span className="me-2">
    //                       <img src={icon1} style={{ width: "30px" }} alt="" />
    //                     </span>
    //                     <div>
    //                       <h5 className="m-0">Experienced host</h5>
    //                       <p className="m-0">
    //                         Dorothy has 720 reviews for other places.
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-12"></div>
    //             </div>

    //             <div className="row">
    //               <div className="col-12">
    //                 <div className="border-bottom pb-3">
    //                   <h3 className="m-0">
    //                     <span style={{ color: "red" }}>DAY</span>FUNA
    //                   </h3>
    //                   <p className="m-0">
    //                     Every booking includes free protection from Host
    //                     cancellations, listing inaccuracies, and other issues
    //                     like trouble checking in.
    //                   </p>
    //                   <a href="#">Learn more</a>
    //                 </div>
    //                 <div className="mt-3 border-bottom">
    //                   <p>
    //                     <p className="m-0">ALL INCLUSIVE RESORT AWARD WINNER</p>
    //                     Lily Beach is proud to have once again won the
    //                     prestigious All Inclusive Resort Award this year.
    //                   </p>
    //                 </div>
    //                 <div className="my-4 border-bottom">
    //                   <h2 className="mb-4">Where you'll sleep</h2>
    //                   <div
    //                     className="border mb-4"
    //                     style={{
    //                       borderRadius: "17px",
    //                       width: "max-content",
    //                       padding: "15px 100px 15px 15px",
    //                     }}
    //                   >
    //                     <img src={icon1} style={{ width: "30px" }} alt="" />
    //                     <h5>Bedroom</h5>
    //                     <span>1 double bed</span>
    //                   </div>
    //                 </div>

    //                 <div className="row">
    //                   <h2>What this place offers</h2>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>Wifi</span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>Pool</span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>TV</span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>
    //                       Air conditioning
    //                     </span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>Hair dryer</span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>Breakfast</span>
    //                   </div>
    //                   <div className="col-6 mb-2 d-flex align-content-center">
    //                     <img
    //                       src={icon1}
    //                       className="me-2"
    //                       style={{ width: "30px" }}
    //                       alt=""
    //                     />
    //                     <span style={{ fontSize: "20px" }}>
    //                       Long term stays allowed
    //                     </span>
    //                   </div>
    //                   <div className="col-12">
    //                     <div className="border-bottom">
    //                       <button className={"view-more-button my-4"}>
    //                         Show all 15 amenities
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="col-12">
    //                   <div className="mt-4">
    //                     <h4 className="m-0">5 nights in MV</h4>
    //                     <p className="m-0">
    //                       <span>Jun 23</span>
    //                       <span>2022 - Jun 28</span>
    //                       <span> 2022</span>
    //                     </p>
    //                   </div>
    //                   <div className="mt-3">
    //                     <div className="col check-in-card">
    //                       <DatePicker
    //                         className="calender-body"
    //                         selected={startDate}
    //                         onChange={onChange}
    //                         startDate={startDate}
    //                         endDate={endDate}
    //                         selectsRange
    //                         selectsDisabledDaysInRange
    //                         inline
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-5  mt-5 ">
    //             <div
    //               class="card px-4"
    //               style={{
    //                 borderRadius: "17px",
    //               }}
    //             >
    //               <div class="card-body">
    //                 <h5 class="card-title">$1,837 night</h5>
    //                 <div
    //                   className="border"
    //                   style={{
    //                     borderRadius: "7px",
    //                   }}
    //                 >
    //                   <div className="d-flex justify-content-between">
    //                     <div className="p-2">
    //                       <p className="m-0">CHECK-IN</p>
    //                       <span>6/21/2022</span>
    //                     </div>
    //                     <span
    //                       style={{
    //                         width: "1px",
    //                         height: "65px",
    //                         background: "#ddd",
    //                       }}
    //                     ></span>
    //                     <div className="p-2">
    //                       <p className="m-0">CHECKOUT</p>
    //                       <span>6/21/2022</span>
    //                     </div>
    //                   </div>
    //                   <div className="d-flex align-items-center justify-content-between border-top p-2">
    //                     <div className="text-center ">
    //                       <p className="m-0">GUESTS</p>
    //                       <span>1 guest</span>
    //                     </div>
    //                     <div>
    //                       <i class="fa-solid fa-angle-down"></i>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="my-3 text-center">
    //                   <button
    //                     className={"view-more-button mb-2"}
    //                     style={{ width: "100%" }}
    //                   >
    //                     Reserve
    //                   </button>
    //                   <span>You won't be charged yet</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12">
    //         <div className="border-top border-bottom">
    //           <div className="d-flex reviews mt-4 align-items-center">
    //             <span className="me-1">
    //               <i class="fa-solid fa-star"></i>
    //             </span>
    //             <h4 className="m-0">4.96 · 126 reviews</h4>
    //           </div>
    //           <div className="row mt-3 gx-5">
    //             <div className="col-6">
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Cleanliness</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "95%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">4.5</span>
    //                 </div>
    //               </div>
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Communication</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "100%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">5.0</span>
    //                 </div>
    //               </div>
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Cleanliness</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "80%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">4.0</span>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-6">
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Accuracy</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "100%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">5.0</span>
    //                 </div>
    //               </div>
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Location</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "98%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">4.9</span>
    //                 </div>
    //               </div>
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <p className="m-0">Value</p>
    //                 <div className="d-flex  align-items-center">
    //                   <div
    //                     class="progress"
    //                     style={{ width: "150px", height: "5px" }}
    //                   >
    //                     <div
    //                       class="progress-bar"
    //                       role="progressbar"
    //                       style={{ width: "100%", background: "black" }}
    //                     ></div>
    //                   </div>
    //                   <span className="ms-1">5.0</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-6 mt-4">
    //               <div class="d-flex align-items-center">
    //                 <div
    //                   class="flex-shrink-0 rounded-pill"
    //                   style={{ with: "60px", height: "60px" }}
    //                 >
    //                   <img
    //                     className="rounded-pill"
    //                     style={{ width: "100%", height: "100%" }}
    //                     src={user}
    //                     alt="..."
    //                   />
    //                 </div>
    //                 <div class="flex-grow-1 ms-2">
    //                   <h5 className="m-0">Asif</h5>
    //                   <small>May 2022</small>
    //                 </div>
    //               </div>
    //               <div className="mt-2">
    //                 <p className="m-0">
    //                   My family and I can not say enough about the wonderful
    //                   time we had. You have read the reviews and it is all true.
    //                   Simply one of the most relaxing and pampered vacations we
    //                 </p>
    //                 <a href="">Show more</a>
    //               </div>
    //             </div>
    //             <div className="col-6 mt-4">
    //               <div class="d-flex align-items-center">
    //                 <div
    //                   class="flex-shrink-0 rounded-pill"
    //                   style={{ with: "60px", height: "60px" }}
    //                 >
    //                   <img
    //                     className="rounded-pill"
    //                     style={{ width: "100%", height: "100%" }}
    //                     src={user}
    //                     alt="..."
    //                   />
    //                 </div>
    //                 <div class="flex-grow-1 ms-2">
    //                   <h5 className="m-0">Asif Khan</h5>
    //                   <small>Jun 2022</small>
    //                 </div>
    //               </div>
    //               <div className="mt-2">
    //                 <p className="m-0">
    //                   A stay at Floral island is without a doubt a
    //                   once-in-a-lifetime experience! Fifteen of us stayed there
    //                   for our good friends' joint bachelor/bachelorette party.
    //                   The hosts and staff were
    //                 </p>
    //                 <a href="">Show more</a>
    //               </div>
    //             </div>
    //             <div className="col-4">
    //               <button className={"view-more-button my-4"}>
    //                 Show all 126 reviews
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default BookingDetails;
