import React from "react";
import { useNavigate } from "react-router-dom";

import Star from "../../assets/img/Star.png";
import CardInfo from "../../assets/img/CardInfo.png";
import MainImg from "../../assets/img/MainImg.png";
import Logo from "../../assets/img/Logo.png";

import "./Main.scss";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main">
        <div className="main__header">
          <div className="main__label">
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <button className="main__button" onClick={() => navigate("/login")}>
              Войти
            </button>
          </div>
        </div>
        <div className="main__star">
          <img src={Star} alt="MainImg" />
        </div>
      </div>
      <div className="main__main">Обменивайте валюту по выгодному курсу</div>
      <div className="main__footer">
        <img src={MainImg} alt="MainImg" />
        <div className="main__footer-card">
          <img src={CardInfo} alt="cardInfo" />
        </div>
      </div>
    </div>
  );
};
