import React, { useState, useContext } from "react";
import { UserContext } from "..";
import {
  TextField,
  Button,
  Stepper,
  StepLabel,
  Step,
  Modal,
  Box,
  Alert,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import bank from "../images/bank.svg";
import card from "../images/card.svg";
import moment from "moment";
import Summary from "../components/Summary";
import front from "../images/bg-card-front.png";
import back from "../images/bg-card-back.png";
import { Nav } from "../components";
import whitebg from "../images/whitebg.jpg";
import { useTranslation } from "react-i18next";

function Payment() {
  const { t } = useTranslation();
  const steps = [
    t("reservation"),
    t("avaliable_trips"),
    t("customize_trip"),
    t("payment"),
  ];
  const [user, setUser] = useContext(UserContext);
  const total = user.trip.split("\n");
  const [payed, setPayed] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    cvv: "",
    expire: "",
  });
  const [error, setError] = useState("");
  const qty =
    Number(user.reservation.adults) +
    Number(user.reservation.kids) +
    Number(user.reservation.special_needs);

  function hadnleChange(e) {
    if (e.target.name === "cardNumber") {
      setPaymentInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value.slice(0, 16),
      }));
    } else if (e.target.name === "cvv") {
      setPaymentInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value.slice(0, 3),
      }));
    } else if (e.target.name === "cardHolder") {
      setPaymentInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value.slice(0, 20),
      }));
    }

    console.log(paymentInfo);
  }

  function pay() {
    console.log(user.way)
    if (!user.tickets && user.way === 'oneway') {
      setUser((prevState) => ({
        ...prevState,
        tickets: [
          {
            status:'Depart',
            from: user.reservation.from,
            to: user.reservation.to,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.depart,
            turn: user.reservation.return,
          },          
        ],
      }));
    }
    else if (!user.tickets && user.way === 'return') {
      setUser((prevState) => ({
        ...prevState,
        tickets: [
          {
            status:'Depart',
            from: user.reservation.from,
            to: user.reservation.to,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.depart,
            turn: user.reservation.return,
          },
          {
            status:'Return',
            from: user.reservation.to,
            to: user.reservation.from,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.return,
            turn: user.reservation.return,
          }
        ],
      }));
    }

    else if (user.tickets && user.way === 'return') {
      setUser((prevState) => ({
        ...prevState,
        tickets: [
          ...prevState.tickets,
          {
            status:'Depart',
            from: user.reservation.from,
            to: user.reservation.to,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.depart,
            turn: user.reservation.return,
          },
          {
            status:'Return',
            from: user.reservation.to,
            to: user.reservation.from,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.return,
            turn: user.reservation.return,
          }
        ],
      }));
    }
     else {
      setUser((prevState) => ({
        ...prevState,
        tickets: [
          ...prevState.tickets,
          {
            status:'Depart',
            from: user.reservation.from,
            to: user.reservation.to,
            seats: user.custom.seats,
            qty: qty,
            total: total,
            depart: user.reservation.depart,
            turn: user.reservation.return,
          },
        ],
      }));
    }
    const values = Object.values(paymentInfo);
    for (let i = 0; i < values.length; i++) {
      if (!values[i]) {
        setError(t("payment_error_msg"));
        setTimeout(() => setError(""), 5000);
        return;
      }
    }
    setPayed(true);
    setUser((prevState) => ({
      ...prevState,
      active: "ticket",
    }));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Modal open={payed}>
        <Box className="absolute sm:top-[50%] top-[40%] sm:right-[33%]">
          <div
            className="bg-white border-[2px] items-center gap-4
                 flex flex-col border-black p-4 rounded-sm"
          >
            <h1 className="text-[20px] text-center">{t("payment_msg")}</h1>
            <Button
              onClick={() => window.open("#/tickets", "_self")}
              variant="contained"
              style={{ width: "50%" }}
            >
              {t("show_tickets")}
            </Button>
          </div>
        </Box>
      </Modal>
      <div
        className="flex flex-col items-center
    w-[100vw] h-[100vh]"
      >
        {error && (
          <Alert severity="warning" className="absolute top-[50%]">
            {error}
          </Alert>
        )}
        <div
          className="flex flex-col justify-between gap-2 p-2 items-center sm:h-auto h-full w-full"
          style={{
            backgroundImage: `url(${whitebg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Nav />
          <Stepper
            style={{ width: "100%", margin: "20px" }}
            activeStep={3}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div
            className="flex flex-col items-center gap-5 p-4
             rounded-lg h-full bg-opacity-50 scrol "
          >
            <Summary
              from={user.reservation.from}
              to={user.reservation.to}
              seats={user.custom.seats}
              qty={qty}
              total={total}
              depart={user.reservation.depart}
              turn={user.reservation.return}
              name={user.userInfo.name}
            />
            <div className="flex flex-col gap-5">
              <div className="flex-col gap-5 sm:flex hidden">
                <div className="flex gap-5">
                  <div className="relative select-none">
                    <img src={front} alt="" className="w-[250px]" />
                    <img
                      src={bank}
                      alt=""
                      className="absolute bottom-[94px] left-2 w-[35px] h-[35px]"
                    />
                    <h1 className="absolute bottom-16 left-10  text-white text-[20px]">
                      {paymentInfo.cardNumber.slice(0, 4)}{" "}
                      {paymentInfo.cardNumber.slice(4, 8)}{" "}
                      {paymentInfo.cardNumber.slice(8, 12)}{" "}
                      {paymentInfo.cardNumber.slice(12, 16)}
                    </h1>
                    <h1 className="absolute bottom-10 left-20 text-[15px]  text-white ">
                      {paymentInfo.expire &&
                        moment(paymentInfo.expire).format("MM/YYYY")}
                    </h1>
                    <h1 className="absolute bottom-3 left-10 text-white text-[18px]">
                      {paymentInfo.cardHolder.split(" ")[0]}{" "}
                      {paymentInfo.cardHolder.split(" ")[1]}
                    </h1>
                    <img
                      src={card}
                      alt=""
                      className="absolute bottom-1 right-2 w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="relative select-none">
                    <img src={back} alt="" className="w-[250px]" />
                    <h1
                      className="absolute bottom-[58px] right-6
                                  text-white "
                    >
                      {paymentInfo.cvv ? paymentInfo.cvv : "CVV"}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex sm:flex-row flex-col gap-4">
                  <TextField
                    name="cardNumber"
                    className="bg-white"
                    value={paymentInfo.cardNumber}
                    type="number"
                    onChange={hadnleChange}
                    label={t("card_number")}
                  />
                  <DatePicker
                    className="bg-white"
                    views={["year", "month"]}
                    inputProps={{ width: "50px" }}
                    na12me="expire"
                    value={paymentInfo.expire}
                    onChange={(e) =>
                      setPaymentInfo((prevState) => ({
                        ...prevState,
                        expire: e,
                      }))
                    }
                    label=""
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4">
                  <TextField
                    className="bg-white"
                    name="cvv"
                    value={paymentInfo.cvv}
                    label="CVV"
                    onChange={hadnleChange}
                    type="number"
                    inputProps={{ max: 3 }}
                  />
                  <TextField
                    className="bg-white"
                    autoCapitalize="words"
                    name="cardHolder"
                    value={paymentInfo.cardHolder.toUpperCase()}
                    onChange={hadnleChange}
                    label={t("card_holder")}
                    inputProps={{ maxLength: 20, autoCapitalize: "words" }}
                  />                  
                </div>               
              </div>              
            </div>            
          </div>   
          <Button onClick={pay} color="success" variant="contained">
            {t("pay")}
          </Button>
          {/* <a
            className="absolute bottom-0 left-0 text-black max-w-[200px] text-center"
            target="_blank"
            rel="noreferrer"
            href="https://www.freepik.com/free-photo/white-painted-wall-texture-background_18416494.htm#page=2&query=website%20background&position=0&from_view=search&track=ais"
          >
            background by rawpixel.com on Freepik
          </a>        */}
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Payment;
