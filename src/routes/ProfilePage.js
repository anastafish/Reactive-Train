import React, { useContext, useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import { UserContext } from "..";
import { Nav } from "../components";
import profile from "../images/profile.svg";
import whitebg from "../images/whitebg2.jpg";
import darkbg from "../images/darkbg.jpg"
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation();
  const [user, setUser] = useContext(UserContext);
  const [popUp, setPopUp] = useState(false);

  const [newUserInfo, setNewUserInfo] = useState({
    name: user.userInfo.name,
    email: user.userInfo.email,
    password: user.userInfo.password,
    confirmPassword: user.userInfo.password,
  });

  function handleChange(e) {
    setNewUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function editUserInfo() {
    setUser((prevState) => ({
      ...prevState,
      userInfo: newUserInfo,
    }));
    setPopUp(false);
  }

  function logOut() {
    setUser((prevState) => ({
      theme: prevState.theme,
      active: "home",
      language: prevState.language,
     }));
    window.open("#/", "_self");
  }

  return (
    <div
      style={{
        backgroundImage: `url(${user.theme ? darkbg : whitebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" p-2 items-center justify-center w-[100vw] h-[100vh] overflow-hidden"
    >
      <Modal open={popUp}>
        <Box className="absolute sm:top-[40%] sm:right-[40%] right-[15%] top-[40%]">
          <div
            className="bg-white border-[2px] items-center gap-4
                 flex flex-col border-black p-4 rounded-sm"
          >
            <TextField
              name="name"
              label={t("user_name")}
              value={newUserInfo.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label={t("email")}
              value={newUserInfo.email}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              style={{ width: "50%" }}
              onClick={editUserInfo}
            >
              {t("save")}
            </Button>
          </div>
        </Box>
      </Modal>
      <Nav className="" />
      <div className="mt-20 w-full h-full">
        <div className="flex flex-col items-center justify-center mt-20 gap-5 ">
          <h1 className="text-[50px]">{t("profile")}</h1>
          <div className="flex items-center bg-gray-400 gap-4 rounded-lg p-5">
            <img src={profile} alt="user-icon" className="w-[60px] h-[70px]" />
            <div className="flex flex-col items-center">
              <h1 className="text-[20px]">
                {t("user_name")}: {user.userInfo.name}
              </h1>
              <h1 className="text-[20px]">
                {t("email_address")}: {user.userInfo.email}
              </h1>
            </div>
          </div>
          <Button
            onClick={() => setPopUp(true)}
            variant="contained"
            color="warning"
          >
            {t("edit_profile")}
          </Button>
          <Button onClick={() => logOut()} variant="contained" color="error">
            {t("logout")}
          </Button>
        </div>
      </div>
    </div>
  );
}
