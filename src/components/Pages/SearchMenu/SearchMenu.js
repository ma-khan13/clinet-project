import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchMenu = ({ active }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [activeMenu, setActiveMenu] = useState(active);
  let [count, setCount] = useState(0);
  const [handleShowRegion, setHandleShowRegion] = useState(false);
  const [handleShowchooseDate, setHandleShowchooseDate] = useState(false);
  const [handleShowGuest, setHandleShowGuest] = useState(false);

  useEffect(() => {
    if (activeMenu === "where") {
      setHandleShowRegion(true);
    } else if (activeMenu === "checkIn") {
      setHandleShowchooseDate(true);
    } else if (activeMenu === "who") {
      setHandleShowGuest(true)
    } else {
      setHandleShowRegion(false);
    }
  }, [activeMenu]);

  const handleSearch = () => {
    setActiveMenu("where");
    setHandleShowGuest(false);
    setHandleShowchooseDate(false);
    if (handleShowRegion === "where") {
      setHandleShowRegion(false);
    } else {
      setHandleShowRegion(true);
    }
  };
  const handleChooseDate = () => {
    setActiveMenu("checkIn");
    setHandleShowGuest(false);
    setHandleShowRegion(false)
    if (handleShowchooseDate) {
      setHandleShowchooseDate(false);
    } else {
      setHandleShowchooseDate(true);
    }
  };

  const handleGuests = () => {
    setActiveMenu("who");
    setHandleShowchooseDate(false);
    setHandleShowRegion(false);
    if (handleShowGuest) {
      setHandleShowGuest(false);
    } else {
      setHandleShowGuest(true);
    }
  };

  return (
    <div className="search-menu row">
      <div className="col-md-8 mx-auto">
        <div className="row search-menu-items">
          <div
            onClick={handleSearch}
            className={`${
              activeMenu === "where" && "active"
            } col-md-4 menu-item-container`}
          >
            <div className="menu-item">
              <small>Where</small>
              <input type="text" placeholder="Search destinations" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div
                onClick={handleChooseDate}
                // onClick={() => setActiveMenu("checkIn")}
                className={`${
                  activeMenu === "checkIn" && "active"
                } col menu-item-container`}
              >
                <div className="menu-item">
                  <small>Check in</small>
                  <p>Add dates</p>
                </div>
              </div>
              <div
                onClick={() => [
                  setActiveMenu("checkOut"),
                  setHandleShowchooseDate(true),
                  setHandleShowGuest(false),
                ]}
                // onClick={handleChooseDate}
                className={`${
                  activeMenu === "checkOut" && "active"
                } col menu-item-container`}
              >
                <div className="menu-item">
                  <small>Check out</small>
                  <p>Add dates</p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleGuests}
            className={`${
              activeMenu === "who" && "active"
            } col-md-4 menu-item-container`}
          >
            <div className="menu-item d-flex align-items-center">
              <div>
                <small>Who</small>
                <p>Add guests</p>
              </div>
              <div className="ms-3 icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {handleShowRegion && (
        <div className="search-region-card col-md-5">
          <p>Search by region</p>
          <div className="row row-cols-1 row-cols-md-3 g-2 justify-content-between">
            <div className="col">
              <div className="card">
                <button className="p-0">
                  <img
                    src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </button>
                <div className="card-body p-0">
                  <p>
                    <small>United Kingdom</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <button className="p-0">
                  <img
                    src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </button>
                <div className="card-body p-0">
                  <p>
                    <small>United States</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <button className="p-0">
                  <img
                    src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </button>
                <div className="card-body p-0">
                  <p>
                    <small className="card-title">Canada</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <button className="p-0">
                  <img
                    src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </button>
                <div className="card-body p-0">
                  <p>
                    <small className="card-title">Europe</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Choose Date Section */}

      {handleShowchooseDate && (
        <div className="choose-date col-md-9">
          <p className="text-center">Choose Date</p>
          <div className="row  g-2 justify-content-around">
            <div className="col check-in-card">
              <DatePicker
                className="calender-body"
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                selectsDisabledDaysInRange
                inline
              />
            </div>
            <div className="col check-out-card">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
              />
            </div>
            <div className="col-12 text-center btn-choose-package">
              <button>Exact dates</button>
              <button>+- 1day </button>
              <button>+- 2days</button>
              <button>+- 3days</button>
              <button>+- 7days</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Guest Section */}
      {handleShowGuest && (
        <div className="guests-card col-md-5">
          <div className="col-12">
            <div className="row align-items-center guests-card-item">
              <div className="col-6 guest-text-container">
                <p className="m-0 fw-bolder">Adults</p>
                <small>Ages 13 or above</small>
              </div>
              <div className="col-6 btn-count-container">
                <button
                  onClick={() => setCount(count - 1)}
                  className=" btn-decrease"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn-increase"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row align-items-center guests-card-item">
              <div className="col-6 guest-text-container">
                <p className="m-0 fw-bolder">Children</p>
                <small>Ages 2–12</small>
              </div>
              <div className="col-6 btn-count-container">
                <button
                  onClick={() => setCount(count - 1)}
                  className="btn-increase"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn-decrease"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMenu;
