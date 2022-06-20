import React from "react";
import Source from "../components/Source/Source";
import "./Contacts.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

function Contacts() {
  return (
    <div className="body__container">
      <Source url="https://t.me/samovolkin" Icon={TelegramIcon} />
      <Source url="maksim@samovolkin.com" Icon={EmailIcon} />
    </div>
  );
}

export default Contacts;
