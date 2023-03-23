import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "..";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Alert,
  Select,
  MenuItem,
} from "@mui/material";
import bg from '../images/bg.jpg'
import ClipLoader from "react-spinners/ClipLoader";
import { useTranslation } from "react-i18next";

function Signin() {
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
    setUser((prevState) => ({
      ...prevState,
      language: e.target.value,
    }));
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useContext(UserContext);
  const [error, setError] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function signUp() {
    if (userInfo.password !== userInfo.confirmPassword) {
      setError(t("signup_password_msg"));
      setTimeout(() => setError(""), 5000);
    } else if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.password ||
      !userInfo.confirmPassword
    ) {
      setError(t("signup_missing_msg"));
      setTimeout(() => setError(""), 5000);
    } else {
      setUser((prevState) => ({
        ...prevState,
        userInfo: userInfo,
      }));
      window.open("#/login", "_self");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      {loading && (
        <ClipLoader
          size={125}
          height="20"
          color="#94A9A8 "
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && (
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex flex-col items-center p-5 w-[100vw] h-[100vh] gap-5"
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
                          flex flex-col items justify-center gap-3
                          mt-20 items-center
          "
          >
            <h1 className="text-[33px] self-start font-extrabold">
              {t("signup")}
            </h1>
            <div className="flex flex-col gap-2 w-[100%]">
              <TextField
                name="name"
                autoFocus
                value={userInfo.name}
                onChange={handleChange}
                fullWidth={true}
                label={t("full_name")}
              />
              <TextField
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                label={t("email_address")}
              />
              <TextField
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                label={t("password")}
                type="password"
              />
              <TextField
                name="confirmPassword"
                value={userInfo.confirmPassword}
                onChange={handleChange}
                label={t("confirm_password")}
                type="password"
                onKeyDown={(e) => e.key === "Enter" && signUp()}
              />
            </div>
            <Button color="warning" variant="contained" onClick={signUp}>
              {t("signup_now")}
            </Button>
            <Link to={"/login"}>
              <h4 className="text-blue-400 text-center">{t("already_have")}</h4>
            </Link>
            <a
              className="absolute bottom-0 text-white"
              target="_blank"
              rel="noreferrer"
              href="https://www.freepik.com/free-photo/two-elderly-people-train-station_7629829.htm#query=train%20background&position=3&from_view=keyword&track=ais"
            >
              Image by wirestock on Freepik
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;
