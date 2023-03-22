import React, { useState, useContext } from "react";
import { UserContext } from "..";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Stepper,
  StepLabel,
  Step,
  Alert,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Nav } from "../components";
import whitebg from "../images/whitebg.jpg";
import "../styles/reservation.css";
import { useTranslation } from "react-i18next";

function Reservation() {
  const [, setUser] = useContext(UserContext);
  const { t } = useTranslation();
  const [trip, setTrip] = useState("return");
  const cities = [
    t("jeddah"),
    t("makka"),
    t("madina"),
    t("dammmam"),
    t("riyadh"),
  ];
  const [reservation, setReservation] = useState({
    from: "From",
    to: "To",
    depart: "",
    return: "empty",
    adults: "",
    kids: "",
    special_needs: "",
  });
  const [error, setError] = useState("");

  function handleChangeRes(e) {
    setReservation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(reservation);
  }

  function handleChange(e) {
    setTrip(e.target.value);
  }

  function search() {
    setUser((prevState) => ({
      ...prevState,
      reservation: reservation,
      active: "",
      way:trip
    }));
    const values = Object.values(reservation);
    for (let i = 0; i < values.length; i++) {
      if (!values[i]) {
        setError(t("reservation_msg"));
        setTimeout(() => setError(""), 5000);
        return;
      }
    }
    window.open("#/trips", "_self");
  }

  const steps = [
    t("reservation"),
    t("avaliable_trips"),
    t("customize_trip"),
    t("payment"),
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col h-[100vh] w-[100vw] items-center">
        {error && (
          <Alert
            style={{ zIndex: 9 }}
            severity="warning"
            className="absolute top-5"
          >
            {error}
          </Alert>
        )}
        <div
          className="flex flex-col justify-between gap-2 p-2 items-center h-full w-full"
          style={{
            backgroundImage: `url(${whitebg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Nav theme={false} />
          <Stepper style={{ width: "100%" }} activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="flex flex-col items-center justify-center p-6 sm:gap-1 gap-2">
            <div
              className="flex items-center sm:flex-row flex-col
                   w-full justify-center sm:gap-0 gap-2"
            >
              <Select
                defaultValue={t("from")}
                className="sm:w-[40%] w-[70%] bg-white"
                name="from"
                onChange={handleChangeRes}
                value={reservation.from}
              >
                <MenuItem value="From" disabled>
                  {t("from")}
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
              <Select
                defaultValue={"To"}
                className="sm:w-[40%] w-[70%] bg-white"
                name="to"
                onChange={handleChangeRes}
                value={reservation.to}
              >
                <MenuItem value="To" disabled>
                  {t("to")}
                </MenuItem>
                {cities
                  .filter((city) => (city === reservation.from ? false : true))
                  .map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
              </Select>
            </div>
            <div className="flex w-full items-center sm:flex-row flex-col sm:gap-0 gap-2">
              <Select
                onChange={handleChange}
                defaultValue={"return"}
                className="sm:w-[40%] w-[70%] bg-white"
              >
                <MenuItem value="oneway">{t("oneway")}</MenuItem>
                <MenuItem value="return">{t("return")}</MenuItem>
              </Select>
              <DateTimePicker
                className="datetime sm:w-[40%] w-[70%]"
                name="depart"
                label={t("depart")}
                value={reservation.depart}
                onChange={(e) =>
                  setReservation((prevState) => ({ ...prevState, depart: e }))
                }
              />
              {trip === "return" && (
                <DateTimePicker
                  className="datetime sm:w-[40%] w-[70%]"
                  name="return"
                  value={reservation.return}
                  label={t("back")}
                  onChange={(e) =>
                    setReservation((prevState) => ({ ...prevState, return: e }))
                  }
                />
              )}
            </div>
            <div className="flex flex-col sm:gap-0 gap-3 items-center ">
              <div
                className="flex sm:flex-row flex-col
                 items-center justify-center sm:gap-0 gap-2"
              >
                <TextField
                  style={{ backgroundColor: "white" }}
                  type={"number"}
                  label={t("adults")}
                  name="adults"
                  onChange={handleChangeRes}
                  value={reservation.adults}
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  type={"number"}
                  label={t("kids")}
                  name="kids"
                  onChange={handleChangeRes}
                  value={reservation.kids}
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  type={"number"}
                  label={t("special")}
                  name="special_needs"
                  onChange={handleChangeRes}
                  value={reservation.special_needs}
                />
              </div>
              <Button
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
                color="success"
                variant="contained"
                onClick={search}
              >
                {t("search")}
              </Button>
              {/* <a
                className='absolute bottom-0 left-0 text-black max-w-[200px] text-center'
                target='_blank'
                rel="noreferrer"
                href="https://www.freepik.com/free-photo/white-painted-wall-texture-background_18416494.htm#page=2&query=website%20background&position=0&from_view=search&track=ais">background by rawpixel.com on Freepik</a>        */}
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Reservation;
