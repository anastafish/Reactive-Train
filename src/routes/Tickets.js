import React, { useContext } from "react";
import { UserContext } from "..";
import Summary from "../components/Summary";
import { Nav } from "../components";
import whitebg from "../images/whitebg.jpg";
import { useTranslation } from "react-i18next";

function Tickets() {
  const { t } = useTranslation();
  const [user] = useContext(UserContext);

  return (
    <div
      style={{
        backgroundImage: `url(${whitebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col p-2 items-center h-[100vh] w-[100vw]"
    >
      <Nav />
      <h1 className="sm:text-[70px] text-center text-[30px]">
        {t("your_tickets")}
      </h1>
      <div className="flex flex-col gap-5 p-5 items-center overflow-y-scroll scrol">
        {user.tickets ? (
          user.tickets.map((ticket) => (
            <Summary
              from={ticket.from}
              to={ticket.to}
              seats={ticket.seats}
              qty={ticket.qty}
              total={user.trip.split("\n")}
              depart={ticket.depart}
              turn={ticket.turn}
              name={user.userInfo.name}
              clas={user.trip}
              status={ticket.status}
              // key={}
            />
          ))
        ) : (
          <h1 className="text-[25px]">{t("have_tickets_msg")}</h1>
        )}
      </div>
    </div>
  );
}

export default Tickets;
