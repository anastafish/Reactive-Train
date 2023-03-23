import React, { useContext, useState } from "react";
import { UserContext } from "..";
import { MenuItem, Select, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import profile from "../images/profile.svg";
import home from "../images/home.svg";
import ticket from "../images/ticket.svg";
import moon from "../images/moon.png"
import menu from "../images/icon-menu.svg";
import menu_closed from "../images/icon-menu-close.svg";
import { useTranslation } from "react-i18next";

function Nav(theme = false) {
  const { t, i18n } = useTranslation();

  const [user, setUser] = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
    setUser((prevState) => ({
      ...prevState,
      language: e.target.value,
    }));
  }

  function handleChange(){
    setUser(prevState => ({
      ...prevState,
      theme:!user.theme
    }))
  }

  return (
    <div className="flex items-center mb-2 justify-between w-full h-fit">
      <img
        src={toggle ? menu_closed : menu}
        alt=""
        className="sm:hidden block"
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${toggle ? "blcok" : "hidden"}
                  sm:hidden flex flex-col
                   items-center justify-center w-full h-full
                    bg-dark_violet rounded-lg
                   p-5
                   `}
      >
        <ul className="sm:hidden flex items-center justify-center gap-6">
          <li className="flex flex-col items-center">
            <Link to={`${user.userInfo ? "/reservation" : "/"}`} className="flex flex-col items-center">
              <img
                src={home}
                alt="home-icon"
                className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
              />
              <h1 className="sm:text-[18px] text-[16px]">{t("home")}</h1>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to={`${user.userInfo ? "/profile" : "/"}`}
              className="flex flex-col items-center"
            >
              <img
                src={profile}
                alt="profile-icon"
                className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
              />
              <h1 className="sm:text-[18px] text-[16px]">{t("profile")}</h1>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to={`${user.userInfo ? "/tickets" : "/"}`} className="flex flex-col items-center">
              <img
                src={ticket}
                alt="ticket-icon"
                className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
              />
              <h1 className="sm:text-[18px] text-[16px] text-center">
                {t("your_tickets")}
              </h1>
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Select
            onChange={(e) => changeLanguage(e)}
            style={{ height: "2rem", fontSize: "15px" }}
            defaultValue={user.language}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ar">العربية</MenuItem>
          </Select>
          <Switch
           checked={user.theme}
           onChange={handleChange}
           />
          <img src={moon} alt="moon" className='h-[25px] w-[25px]'/>
        </div>
      </div>

      <ul className="sm:flex hidden items-center gap-8 justify-center">
        <li
          onClick={() =>
            setUser((prevState) => ({ ...prevState, active: "home" }))
          }
          className={`flex flex-col items-center`}
        >
          <Link to={`${user.userInfo ? "/reservation" : "/"}`} className="flex flex-col items-center">
            <img
              src={home}
              alt="home-icon"
              className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
            />
            <h1
              className={`sm:text-[25px] ${
                user.userInfo && user.active === "home" && "font-extrabold"
              }  text-[16px]`}
            >
              {t("home")}
            </h1>
          </Link>
        </li>
        <li
          onClick={() =>
            setUser((prevState) => ({ ...prevState, active: "profile" }))
          }
          className={`flex flex-col items-center`}
        >
          <Link
            to={`${user.userInfo ? "/profile" : "/"}`}
            className="flex flex-col items-center"
          >
            <img
              src={profile}
              alt="profile-icon"
              className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
            />
            <h1
              className={`sm:text-[25px] ${
                user.userInfo && user.active === "profile" && "font-extrabold"
              } text-[16px]`}
            >
              {t("profile")}
            </h1>
          </Link>
        </li>
        <li
          onClick={() =>
            setUser((prevState) => ({ ...prevState, active: "ticket" }))
          }
          className={`flex flex-col items-center`}
        >
          <Link to={`${user.userInfo ? "/tickets" : "/"}`} className="flex flex-col items-center">
            <img
              src={ticket}
              alt="ticket-icon"
              className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
            />
            <h1
              className={`sm:text-[25px] ${
                user.userInfo && user.active === "ticket" && "font-extrabold"
              } text-[16px] text-center`}
            >
              {t("your_tickets")}
            </h1>
          </Link>
        </li>
      </ul>
      <div
        className="sm:flex flex-row
            justify-center items-center
            hidden gap-2" 
      >
        <div className="flex">
          <Switch
           checked={user.theme}
           onChange={handleChange}
           />
          <img src={moon} alt="moon" className='h-[27px] w-[27px]'/>
        </div>
        <Select
          onChange={(e) => changeLanguage(e)}
          style={{ height: "2rem", fontSize: "15px" }}
          defaultValue={user.language}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default Nav;
