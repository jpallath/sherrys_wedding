import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="details-greeter">
          <div className="parallax image-one" />
          <div className="home-text">
            <h1>A SWEET ENDING TO A NEW BEGINNING </h1>
            <p>
              MAY 01, 2017 MARKS THE DATE WHEN THE COUPLE FIRST STARTED TEXTING.
              TEXTING LEAD TO CALLS THEN VIDEO CHATS (THE OCCASIONAL SNAPCHAT)
              THEN FINALLY THE CONNECTION WAS STRONG ENOUGH FOR JONES TO FINALLY
              TAKE A FLIGHT OUT TO NEWARK, NEW JERSEY. SHERRY MADE THE 2 HOUR
              TRIP FROM PHILADELPHIA, PENNSYLVANIA TO PICK UP (NOT KNOWING AT
              THE TIME) HER FUTURE FIANCE. THE 2 HOUR TRIP THE COUPLE FINALLY
              TALKED SIDE FACE TO SIDE FACE AND CHECKING EACH OTHER OUT
              SNEAKINGLY. THAT WEEKEND JUNE 9 -11 2017 THE COUPLE WAS THEMSELVES
              FOR THE FIRST TIME BUT STILL HAD THE GOOSEBUMPS EVERY TIME THE
              OTHER LOOKED AT THEM. FROM JUNE EACH WOULD BE TRAVELING FROM COAST
              TO COAST.. JULY 4, 2017, WE FELL IN LOVE EACH OTHER ON A PHONE
              CALL. JONES FELL DEEPLY IN LOVE AND WAS READY TO LOCK HER DOWN AND
              SPEND THE REST OF THEIR LIVES TOGETHER.
            </p>
          </div>
          <div className="parallax image-two" />
          <h1>He proposed!</h1>
        </div>
      </div>
    );
  }
}

export default Home;
