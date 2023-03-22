import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import "../styles/summery.css";
import barcode from "../images/barcode.png";
import train from "../images/train.svg";

function Summary({ from, to, seats, qty, total, depart, turn, name, clas, status }) {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col bg-green-100 rounded-lg
     p-2 select-none"
    >
      <div className="container sm:w-full w-[20rem]">
        <div className="ticket basic flex sm:flex-row flex-col items-center justify-end sm:p-2 p-5">
          <img src={barcode} alt="" className="sm:rotate-90 rotate-0 h-[50%]" />
          <div className="text flex flex-col sm:gap-2 gap-1">
            <h1 className="font-extrabold sm:text-[1.6rem] text-[18px]">{status}</h1>

            <p className="sm:text-[130%] text-[20px]">{t("user_name")}</p>
            <h1 className="sm:text-[130%] text-[20px] font-extrabold">
              {name}
            </h1>
            <p className="sm:text-[130%] text-[20px]">{t("class")}</p>
            <h1 className="sm:text-[130%] text-[20px] font-extrabold">
              {total[0].split(" ")[0]}
            </h1>
          </div>
        </div>
        <div className="ticket airline flex flex-col relative p-3">
          <div className="item1 flex justify-between p-2 items-center">
            <div className="from">
              <p className="sm:text-[2.2rem] text-[20px]">{t("from")}</p>
              <h1 className="sm:text-[2.2rem] text-[20px] font-extrabold">
                {from}
              </h1>
            </div>
              <img
                src={train}
                alt=""
                className="absolute left-[40%] sm:w-[100px] sm:h-[100px] w-[60p] h-[60px]"
              />
            <div className="to">
              <p className="sm:text-[2.2rem] text-[20px]">{t("to")}</p>
              <h1 className="sm:text-[2.2rem] text-[20px] font-extrabold">
                {to}
              </h1>
            </div>
          </div>
          <div className="item2 flex sm:flex-row flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="sm:text-[2.2rem] text-[20px]">{t("seat")}</p>
              <h1 className={`${seats.length > 7 ? "sm:text-[1.1rem] text-[12px]" : "sm:text-[2.2rem] text-[20px]"} font-extrabold`}>
                {seats.map((seat) => `${seat} `)}
                {console.log(seats)}
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="sm:text-[2.2rem] text-[20px]">
                {t("boarding_time")}
              </p>
              <h1 className="sm:text-[2.2rem] text-[20px] font-extrabold">
                {moment(depart).format("DD/MM/YYYY HH:MM")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
