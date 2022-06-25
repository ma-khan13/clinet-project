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
                <div className="single-item-container border-0">
                  <div className="heading">
                    <h3>14 nights in El Nido</h3>
                    <span>Jul 21, 2022</span>
                    <span className="px-1">-</span>
                    <span>Aug 4, 2022</span>
                  </div>
                  <div className="calender-container mt-4">
                    <DatePicker
                      className="set-calender"
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      selectsDisabledDaysInRange
                      inline
                    />
                    <div className="text-center">
                      <button className="btn-clear">Clear</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div
                  class="card px-2"
                  style={{
                    borderRadius: "17px",
                  }}
                >
                  <div class="card-body">
                    <div className="d-flex my-2 justify-content-between">
                      <h5 class="card-title">$1,837 night</h5>
                      <div className="d-flex align-items-center me-3">
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <small className="ms-1">4.96</small>
                        <span className="mx-1">-</span>
                        <small>126 reviews</small>
                      </div>
                    </div>
                    <div
                      className="border"
                      style={{
                        borderRadius: "7px",
                      }}
                    >
                      <div>
                        <button
                          className="w-100 border-0"
                          style={{ background: "transparent " }}
                        >
                          <div className="p-2">
                            <p className="m-0">CHECKOUT</p>
                            <span>6/21/2022</span>
                          </div>
                        </button>
                        <div className=" justify-content-between border-top"></div>
                        <button
                          className="w-100 border-0"
                          style={{ background: "transparent " }}
                        >
                          <div className="d-flex align-items-center justify-content-between p-2">
                            <div>
                              <p className="m-0">GUESTS</p>
                              <span>1 guest</span>
                            </div>
                            <div>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                        </button>
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
                    <div>
                      <div className="d-flex my-2 justify-content-between">
                        <p>
                          <a href="">$694 x 12 nights</a>
                        </p>
                        <p>$8,331</p>
                      </div>
                      <div className="d-flex my-2 justify-content-between">
                        <p>
                          <a href="">Weekly discount</a>
                        </p>
                        <p className="text-success">-$312</p>
                      </div>
                      <div className="d-flex my-2 justify-content-between">
                        <p>
                          <a href="">Cleaning fee</a>
                        </p>
                        <p>$91</p>
                      </div>
                      <div className="d-flex my-2 justify-content-between">
                        <p>
                          <a href="">Service fee</a>
                        </p>
                        <p>$1,145</p>
                      </div>
                      <div className="d-flex pt-1 mt-2 border-top justify-content-between">
                        <strong>Total before taxes</strong>
                        <strong>$9,255</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="single-item-container border-top">
                  <div>
                    <div className="d-flex review-heading mt-4 align-items-center">
                      <span className="me-1">
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <h4 className="m-0">
                        4.96 <span>-</span> 126 reviews
                      </h4>
                    </div>
                    <div className="row mt-3 gx-5">
                      <div className="col-5 mb-2 review-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="m-0">Cleanliness</p>
                          <div className="d-flex  align-items-center">
                            <div class="progress">
                              <div
                                class="progress-bar"
                                role="progressbar"
                              ></div>
                            </div>
                            <span className="ms-1">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5  mb-2 review-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="m-0">Cleanliness</p>
                          <div className="d-flex  align-items-center">
                            <div class="progress">
                              <div
                                class="progress-bar"
                                role="progressbar"
                              ></div>
                            </div>
                            <span className="ms-1">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5  mb-2 review-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="m-0">Cleanliness</p>
                          <div className="d-flex  align-items-center">
                            <div class="progress">
                              <div
                                class="progress-bar"
                                role="progressbar"
                              ></div>
                            </div>
                            <span className="ms-1">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5  mb-2 review-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="m-0">Cleanliness</p>
                          <div className="d-flex  align-items-center">
                            <div class="progress">
                              <div
                                class="progress-bar"
                                role="progressbar"
                              ></div>
                            </div>
                            <span className="ms-1">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row  mt-3">
                    <div className="col-md-6 mb-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="flex-shrink-0 rounded-pill"
                          style={{ with: "60px", height: "60px" }}
                        >
                          <img
                            className="rounded-pill"
                            style={{ width: "100%", height: "100%" }}
                            src={user}
                            alt="..."
                          />
                        </div>
                        <div class="flex-grow-1 ms-2">
                          <h5 className="m-0">Asif</h5>
                          <small>May 2022</small>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="m-0">
                          My family and I can not say enough about the wonderful
                          time we had. You have read the reviews and it is all
                          true. Simply one of the most relaxing and pampered
                          vacations we.
                        </p>
                        <a href="">Show more</a>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="flex-shrink-0 rounded-pill"
                          style={{ with: "60px", height: "60px" }}
                        >
                          <img
                            className="rounded-pill"
                            style={{ width: "100%", height: "100%" }}
                            src={user}
                            alt="..."
                          />
                        </div>
                        <div class="flex-grow-1 ms-2">
                          <h5 className="m-0">Asif</h5>
                          <small>May 2022</small>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="m-0">
                          My family and I can not say enough about the wonderful
                          time we had. You have read the reviews and it is all
                          true. Simply one of the most relaxing and pampered
                          vacations we.
                        </p>
                        <a href="">Show more</a>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="flex-shrink-0 rounded-pill"
                          style={{ with: "60px", height: "60px" }}
                        >
                          <img
                            className="rounded-pill"
                            style={{ width: "100%", height: "100%" }}
                            src={user}
                            alt="..."
                          />
                        </div>
                        <div class="flex-grow-1 ms-2">
                          <h5 className="m-0">Asif</h5>
                          <small>May 2022</small>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="m-0">
                          My family and I can not say enough about the wonderful
                          time we had. You have read the reviews and it is all
                          true. Simply one of the most relaxing and pampered
                          vacations we.
                        </p>
                        <a href="">Show more</a>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div class="d-flex align-items-center">
                        <div
                          class="flex-shrink-0 rounded-pill"
                          style={{ with: "60px", height: "60px" }}
                        >
                          <img
                            className="rounded-pill"
                            style={{ width: "100%", height: "100%" }}
                            src={user}
                            alt="..."
                          />
                        </div>
                        <div class="flex-grow-1 ms-2">
                          <h5 className="m-0">Asif</h5>
                          <small>May 2022</small>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="m-0">
                          My family and I can not say enough about the wonderful
                          time we had. You have read the reviews and it is all
                          true. Simply one of the most relaxing and pampered
                          vacations we.
                        </p>
                        <a href="">Show more</a>
                      </div>
                    </div>
                    <div className="col-6">
                      <button className={"view-more-button my-4"}>
                        Show all 126 reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-item-container">
                  <div class="d-flex align-items-center">
                    <div
                      class="flex-shrink-0 rounded-pill"
                      style={{ with: "60px", height: "60px" }}
                    >
                      <img
                        className="rounded-pill"
                        style={{ width: "100%", height: "100%" }}
                        src={user}
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h5 className="m-0">Hosted by Philipe</h5>
                      <small>Joined in January 2015</small>
                    </div>
                  </div>
                  <div className="review mt-2 col-md-5 d-flex align-items-center">
                    <div className="me-3">
                      <i
                        class="fa-solid fa-star"
                        style={{ fontSize: "14px" }}
                      ></i>
                      <span className="ms-1">4.96</span>
                      <span className="mx-1">-</span>
                      <span>126 reviews</span>
                    </div>
                    <div>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ fontSize: "14px" }}
                      ></i>
                      <span className="ms-1">4.96</span>
                      <span className="mx-1">-</span>
                      <span>Identity verified</span>
                    </div>
                  </div>
                  <div className="co-hosts mt-2">
                    <div>
                      <h6>Co-hosts</h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <div
                        class="flex-shrink-0 rounded-pill"
                        style={{ with: "40px", height: "40px" }}
                      >
                        <img
                          className="rounded-pill"
                          style={{ width: "100%", height: "100%" }}
                          src={user}
                          alt="..."
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h6 className="m-0">Martin</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="my-2">During your stay</h6>
                      <p>
                        One of our Family member or staff is always available to
                        provide you some tips and advice about all the
                        activities and transfers available in the area and the
                        rest of Palawan islan
                      </p>
                      <a href="">read more</a>
                    </div>
                    <p className="my-2">Response rate: 100%</p>
                    <p>Response time: within an hour</p>
                  </div>
                  <div className="col-6">
                    <button className={"view-more-button my-4"}>
                      Contact Host
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-item-container">
                  <div className="heading">
                    <h5>Things to know</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="my-3">
                        <h6>House rules</h6>
                      </div>
                      <div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-clock"></i>
                          </span>
                          <p>Check-in: After 2:00 PM</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-clock"></i>
                          </span>
                          <p>Checkout: 10:00 AM</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-users-rays"></i>
                          </span>
                          <p>Pets are allowed</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-smoking"></i>
                          </span>
                          <p>Smoking is allowed</p>
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
                    </div>
                    <div className="col-md-4">
                      <div className="my-3">
                        <h6>Health & safety</h6>
                      </div>
                      <div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-clock"></i>
                          </span>
                          <p>Check-in: After 2:00 PM</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-clock"></i>
                          </span>
                          <p>Checkout: 10:00 AM</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-users-rays"></i>
                          </span>
                          <p>Pets are allowed</p>
                        </div>
                        <div className="d-flex my-1 align-items-center">
                          <span className="me-1">
                            <i class="fa-solid fa-smoking"></i>
                          </span>
                          <p>Smoking is allowed</p>
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
                    </div>
                    <div className="col-md-4">
                      <div className="my-3">
                        <h6>Cancellation policy</h6>
                      </div>
                      <div>
                        <div>
                          <p className="mb-2">
                            Free cancellation for 48 hours.
                          </p>
                          <p>
                            Review the Host’s full cancellation policy which
                            applies even if you cancel for illness or
                            disruptions caused by COVID-19.
                          </p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-item-container">
                  <div className="heading my-3">
                    <h3>Explore other options in and around El Nido</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Coron
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Coron Island
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Brother Island
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        West Nalaut Island
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        San Vicente
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Nacpan Beach
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Shimizu Island
                      </button>
                    </div>
                    <div className="col-md-3  mb-2">
                      <button
                        className="border-0"
                        style={{ background: "transparent" }}
                      >
                        Linapacan Island
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span>Airbnb</span>
                    <span className="mx-1">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                    <span>Philippines</span>
                    <span className="mx-1">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                    <span>MIMAROPA</span>
                    <span className="mx-1">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                    <span>Palawan</span>
                    <span className="mx-1">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                    <span>El Nido</span>
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
