import { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] =
    useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [
    openBookingOptions,
    setOpenBookingOptions,
  ] = useState(false);
  const [
    bookingOptions,
    setBookingOptions,
  ] = useState({
    adults: 1,
    childern: 0,
    room: 1,
  });

  const handleOptions = (name, op)=>{
    setBookingOptions(prev=>{return {
      ...prev, [name]: op === "i" ? bookingOptions[name]+1 : bookingOptions[name]-1
    }
  })

  }
  return (
    <div className="header">
      <div className={type === "list"?"headerContainer listMode":"headerContainer" }>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon
              icon={faBed}
            />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon
              icon={faPlane}
            />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon
              icon={faCar}
            />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon
              icon={faBed}
            />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon
              icon={faBed}
            />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type!=="list" && <>
        <h1 className="headerTitle">
          A lifetime of discounts? It's
          a Genius
        </h1>
        <p className="headerDesc">
          Get Rewarded for your travels
          - unlock instant savings of
          10% or more with a free
          Booking Pk account
        </p>
        <button className="headerBtn">
          Sign In / Register
        </button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faBed}
              className="headerIcon"
            />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem" onClick={() =>{
                setOpenDate(!openDate)
                setOpenBookingOptions(false)
                }
              }>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerIcon"
            />
            <span
              className="headerSearchText"
              
            >
              {`${format(
                date[0].startDate,
                "MM/dd/yyy"
              )} to ${format(
                date[0].endDate,
                "MM/dd/yyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={
                  true
                }
                onChange={(item) =>
                  setDate([
                    item.selection,
                  ])
                }
                moveRangeOnFirstSelection={
                  false
                }
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItem" onClick={()=>{
            setOpenBookingOptions(!openBookingOptions) 
            setOpenDate(false)}}>
            <FontAwesomeIcon
              icon={faPerson}
              className="headerIcon"
            />
            <span className="headerSearchText">
              {`${bookingOptions.adults} Adults - ${bookingOptions.childern} Childern - ${bookingOptions.room} Room`}
            </span>
            {openBookingOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">
                  Adult
                </span>
                <div className="optionCounter">
                  <button disabled={bookingOptions.adults <= 1}  className="optionCounterBtn" onClick={()=>handleOptions("adults", "d")}>-</button>
                  <span className="optionCounterNumber">{bookingOptions.adults}</span>
                  <button className="optionCounterBtn" onClick={()=>handleOptions("adults", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">
                  Childern
                </span>
                <div className="optionCounter">
                  <button disabled={bookingOptions.childern <= 0}  className="optionCounterBtn" onClick={()=>handleOptions("childern", "d")}>-</button>
                  <span className="optionCounterNumber">{bookingOptions.childern}</span>
                  <button className="optionCounterBtn" onClick={()=>handleOptions("childern", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">
                  Room
                </span>
                <div className="optionCounter">
                  <button disabled={bookingOptions.room <= 1} className="optionCounterBtn" onClick={()=>handleOptions("room", "d")}>-</button>
                  <span className="optionCounterNumber">{bookingOptions.room}</span>
                  <button className="optionCounterBtn" onClick={()=>handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">
              Search
            </button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
