import React, { useContext } from "react";
import { UserContext } from "..";
import { Stepper, StepLabel, Step } from "@mui/material";
import Trip from "../components/Trip";
import { Nav } from "../components";
import whitebg from "../images/whitebg.jpg";
import darkbg from "../images/darkbg.jpg"
import { useTranslation } from "react-i18next";

function Trips() {
  const { t } = useTranslation();
  const steps = [
    t("reservation"),
    t("avaliable_trips"),
    t("customize_trip"),
    t("payment"),
  ];
  const [user] = useContext(UserContext);

  return (
    <div
      style={{
        backgroundImage: `url(${user.theme ? darkbg : whitebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center w-[100vw] h-[100vh]"
    >
      <div className="flex flex-col p-2 items-center w-full justify-evenly">
        <Nav />
        <Stepper
          style={{ width: "100%", margin: "20px" }}
          activeStep={1}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div
        className="w-full flex flex-col scrol items-center gap-4
         p-5 overflow-y-scroll"
      >
        <Trip from={user.reservation.from} to={user.reservation.to} />
        <Trip from={user.reservation.from} to={user.reservation.to} />
        <Trip from={user.reservation.from} to={user.reservation.to} />
        <Trip from={user.reservation.from} to={user.reservation.to} />
        <Trip from={user.reservation.from} to={user.reservation.to} />
        <Trip from={user.reservation.from} to={user.reservation.to} />
      </div>
    </div>
  );
}

export default Trips;
