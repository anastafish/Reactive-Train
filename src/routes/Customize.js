import React, { useContext, useState, useRef } from "react";
import { UserContext } from "..";
import { Stepper, StepLabel, Step, Alert } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { Nav } from "../components";
import whitebg from "../images/whitebg.jpg";
import "../styles/customize.css";
import { useTranslation } from "react-i18next";

function Customize() {

  function random(){
    const num =  Math.random() * 2
    return num > 1 ?  true : false 
  }


  const { t } = useTranslation();
  const steps = [
    t("reservation"),
    t("avaliable_trips"),
    t("customize_trip"),
    t("payment"),
  ];
  const [user, setUser] = useContext(UserContext);
  const luggage = useRef(0);

  function handleChange(e){
    console.log(e.target.value)
    luggage.current.value = e.target.value
  }

  const qty =
    Number(user.reservation.adults) +
    Number(user.reservation.kids) +
    Number(user.reservation.special_needs);
  const [error, setError] = useState("");

  function handleClick(e) {
    if (e.target.className === `seat sold cursor-not-allowed`) {
      return
    }
    else if (e.target.className === 'seat selected') {
      e.target.className = 'seat'
    }
    
    else {
      e.target.className = "seat selected";
    }
  }

  function selectSeats() {
    const seatsId = [];
    let seatsArr = document.getElementsByClassName("seat selected");
    for (let i = 0; i < seatsArr.length; i++) {
      seatsId.push(seatsArr[i].id);
    }
    if (seatsId.length === qty && luggage.current.value) {
      setUser((prevState) => ({
        ...prevState,
        custom: {
          seats: seatsId,
          luggage: luggage.current.value,
        },
      }));
      console.log(user);
      window.open("#/payment", "_self");
    } else if (seatsId.length > qty) {
      setError(
        `${t("please_select")} ${qty} ${t("seat_msg")} ${
          qty === 1 ? "" : "s"
        } ${t("only")}`
      );
      setTimeout(() => setError(""), 5000);
    } else if (seatsId.length < qty) {
      setError(`${t("please_select")} ${-(seatsId.length - qty)}
            ${t("more")} ${t("seat_msg")} ${
        -(seatsId.length - qty) === 1 ? "" : "s"
      }`);
      setTimeout(() => setError(""), 5000);
    } else if (!luggage.current.value) {
      setError(t("luggage_weight"));
      setTimeout(() => setError(""), 5000);
    }
  }

  return (
    <div
      className="flex flex-col items-center
     w-[100vw] h-[100vh] "
    >
      <div
        className="flex flex-col justify-between p-2 gap-2 items-center w-full"
        style={{
          backgroundImage: `url(${whitebg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Nav />
        <Stepper style={{ width: "100%" }} activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {error && (
          <Alert severity="warning" className="absolute top-5">
            {error}
          </Alert>
        )}
        <div
          className="flex flex-col gap-5 items-center
          rounded-lg border-[1.5px] sm:w-fit w-[80%] bg-white bg-opacity-70 pb-2"
        >
          <div className="flex justify-between gap-2 w-full p-2 rounded-t-lg items-center bg-red-400">
            <div className="flex items-center">
              <div className="seat bg-green-800"></div>
              <h1 className="sm:text-[20px] text-[15px]">{t("your_seat")}</h1>
            </div>
            <div className="flex items-center">
              <div className="seat sold"></div>
              <h1 className="sm:text-[20px] text-[15px]">{t("reserved")}</h1>
            </div>
            <div className="flex items-center">
              <div className="seat "></div>
              <h1 className="sm:text-[20px] text-[15px]">{t("avaliable")}</h1>
            </div>
          </div>
          <div className="">
            <div className="flex justify-evenly gap-3">
              <h1>A</h1>
              <h1>B</h1>
              <h1>C</h1>
              <h1>D</h1>
              <h1>E</h1>
            </div>           

            <div className="row">
              <h1 className="mr-1 text-[20px]">1</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A1" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B1" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C1" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D1" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E1" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">2</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A2" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B2" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C2" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D2" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E2" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">3</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A3" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B3" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C3" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D3" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E3" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">4</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A4" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B4" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C4" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D4" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E4" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">5</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A5" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B5" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C5" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D5" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E5" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">6</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A6" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B6" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C6" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D6" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E6" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">7</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="A7" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="B7" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="C7" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="D7" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="E7" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">8</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="A8" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="B8" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="C8" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="D8" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`} id="E8" onClick={handleClick}></div>
            </div>
            <div className="row">
              <h1 className="mr-1 text-[20px]">9</h1>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="A9" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="B9" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="C9" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="D9" onClick={handleClick}></div>
              <div className={`seat ${random() ? "sold cursor-not-allowed" : ""}`}id="E9" onClick={handleClick}></div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <TextField
              label={t("luggage_weight")}
              name="luggage"
              type="number"
              ref={luggage}
              onChange={handleChange}
            />
            <Button
              color="success"
              variant="contained"
              onClick={selectSeats}
              style={{ margin: "5px" }}
            >
              {t("processed_payment")}
            </Button>
          </div>
        </div>
        <a
          className="absolute bottom-0 left-0 text-black max-w-[200px] text-center"
          target="_blank"
          rel="noreferrer"
          href="https://www.freepik.com/free-photo/white-painted-wall-texture-background_18416494.htm#page=2&query=website%20background&position=0&from_view=search&track=ais"
        >
          background by rawpixel.com on Freepik
        </a>
      </div>
    </div>
  );
}

export default Customize;
