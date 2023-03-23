import React, { useContext } from "react";
import { UserContext } from "..";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Alert,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import bg from '../images/bg.jpg'
import { useTranslation } from "react-i18next";

function Login() {
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
    setUser((prevState) => ({
      ...prevState,
      language: e.target.value,
    }));
  }

  const [user, setUser] = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setLoginInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function login() {
    if (user.userInfo) {
      if (
        loginInfo.email === user.userInfo.email &&
        loginInfo.password === user.userInfo.password
      ) {
        window.open("#/reservation", "_self");
        setUser((prevState) => ({
          ...prevState,
          active: "home",
        }));
      } else {
        setError(t("login_wrong_msg"));
        setTimeout(() => setError(""), 5000);
      }
    } else {
      setError(t("login_msg"));
      setTimeout(() => setError(""), 5000);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center w-[100vw] h-[100vh] gap-5 p-5"
    >
      <div
        className="sm:flex flex-row
            justify-center items-center
            hidden self-end"
      >
        <div className="flex gap-2">
        </div>
        <Select
          onChange={(e) => changeLanguage(e)}
          value={user.language}
          style={{ height: "2rem", fontSize: "15px" }}
          defaultValue={user.language}
          className="bg-white"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </div>
      {error && (
        <Alert
          severity="warning"
          className="absolute top-5"
          style={{ fontSize: "1.2rem" }}
        >
          {error}
        </Alert>
      )}
      <div
        className="bg-white bg-opacity-95 rounded-lg p-5
                        flex flex-col items justify-center gap-3 mt-36"
      >
        <h1 className="text-[33px] self-start font-extrabold">{t("login")}</h1>
        <div className="flex flex-col gap-2 w-[100%]">
          <TextField
            autoFocus
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            label={t("email_address")}
            type="email"
            onKeyDown={(e) => e.key === "Enter" && login()}
          />
          <TextField
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            label={t("password")}
            type="password"
            onKeyDown={(e) => e.key === "Enter" && login()}
          />
        </div>

        <Button color="warning" variant="contained" onClick={login}>
          {t("login")}
        </Button>
        <Link to={"/"}>
          <h4 className="text-blue-400 text-center">{t("dont_have")}</h4>
        </Link>
      </div>
      <a
        className="absolute bottom-0 text-white"
        target="_blank"
        rel="noreferrer"
        href="https://www.freepik.com/free-photo/two-elderly-people-train-station_7629829.htm#query=train%20background&position=3&from_view=keyword&track=ais"
      >
        Image by wirestock on Freepik
      </a>
    </div>
  );
}

export default Login;
