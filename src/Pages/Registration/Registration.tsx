import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "./RegistrationForm";

import Login from "../../assets/img/Login.png";
import Google from "../../assets/img/Google.png";
import GitHub from "../../assets/img/GitHub.png";
import LogoBlack from "../../assets/img/Logo.png";

import "./Registration.scss";

export const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className="registration">
      <div className="right__menu">
        <div className="right__menu__text">Регистрация</div>
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
        <RegistrationForm />

        <div className="right__menu__info">
          <div className="right__menu__acc">У вас уже есть учетная запись?</div>
          <div
            className="right__menu__create-acc"
            onClick={() => navigate("/registration")}
          >
            Авторизоваться
          </div>
        </div>
      </div>
      <div className="left__menu">
        <div className="left__menu__logo">
          <img className="test" src={LogoBlack} alt="logo" />
        </div>
        <div className="left__menu__entry">
          <img className="img" src={Login} alt="logo" />
        </div>
      </div>
    </div>
  );
};
