import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";

import Entry from "../../assets/img/Entry.png";
import Google from "../../assets/img/Google.png";
import GitHub from "../../assets/img/GitHub.png";
import LogoBlack from "../../assets/img/Logo.png";

import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="right__menu">
        <div className="right__menu__text">Вход</div>
        <div className="right__menu__button">
          <button className="right__menu__first-button">
            <img src={Google} alt="Google" />
            <span>Sing up with Google</span>
          </button>
          <button className="right__menu__second-button">
            <img src={GitHub} alt="GitHub" />
            <span>Sing up with GitHub</span>
          </button>
        </div>
        <div className="right__menu__write">
          <div className="right__menu__first-border"></div>
          <div className="right__menu__or">Or</div>
          <div className="right__menu__first-border"></div>
        </div>
        <LoginForm />

        <div className="right__menu__info">
          <div className="right__menu__acc">Нет аккаунта?</div>
          <div
            className="right__menu__create-acc"
            onClick={() => navigate("/registration")}
          >
            Создать аккаунт
          </div>
        </div>
      </div>
      <div className="left__menu">
        <div className="left__menu__logo">
          <img className="test" src={LogoBlack} alt="logo" />
        </div>
        <div className="left__menu__entry">
          <img className="img" src={Entry} alt="cardInfo" />
        </div>
      </div>
    </div>
  );
};
