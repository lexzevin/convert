import React from "react";
import { Avatar } from "../Avatar/Avatar";
import TwoArrow from "../../assets/img/TwoArrow.png";
import Add from "../../assets/img/Add.png";
import AddPhoto from "../../assets/svg/AddPhoto";
import PlusPhoto from "../../assets/svg/PlusPhoto";

import "./RightDashboard.scss";

export const RightDashboard = () => (
  <div className="right__dashboard">
    <div className="right__dashboard__avatar">
      <Avatar avatar={<AddPhoto />} add={<PlusPhoto />} name="Алексей Иванов" />
    </div>
    <div className="right__dashboard__text">Мой баланс</div>
    <div>
      <div className="right__dashboard__add">
        <p>Добавьте кошелек</p>
        <img src={Add} alt="plus" />
      </div>
    </div>
    <div className="right__dashboard__transactions">Последние транзацкции</div>
    <div>
      <div className="right__dashboard__last-transactions">
        <img src={TwoArrow} alt="arrow" />
        <p className="right__dashboard__action">
          Вы не совершили не одной транзакции
        </p>
      </div>
    </div>
  </div>
);
