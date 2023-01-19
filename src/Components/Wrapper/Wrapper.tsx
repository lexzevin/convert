import React, { useState } from "react";

import { Avatar } from "../Avatar/Avatar";
import { Cards } from "../Cards/Cards";
import { Wallet } from "../Wallet/Wallet";
import { RecentTransactions } from "../RecentTransactions/RecentTransactions";
import { TwoArrow } from "../../assets/svg/TwoArrow";
import { Dashboard } from "../Dashboard/Dashboard";
import AddPhoto from "../../assets/svg/AddPhoto";
import PlusPhoto from "../../assets/svg/PlusPhoto";
import Rus from "../../assets/svg/Rus";
import Add from "../../assets/img/Add.png";

import "./Wrapper.scss";
type PropsWrapper = {
  title: string;
  children: React.ReactNode;
};

const itemCardModifier = [
  "first-color",
  "second-color",
  "third-color",
  "fourth-color",
];

export const Wrapper: React.FC<PropsWrapper> = ({ title, children }) => {
  const [wallet] = useState(false);
  const [recentTransactions] = useState(false);
  return (
    <div className="dashboard">
      <div>
        <Dashboard />
      </div>
      <div className="mid__dashboard">
        <div className="mid__dashboard__title">{title}</div>
        <div>{children}</div>
      </div>
      <div className="right__dashboard">
        <div className="right__dashboard__avatar">
          <Avatar
            avatar={<AddPhoto />}
            add={<PlusPhoto />}
            name="Алексей Иванов"
          />
        </div>
        <div className="right__dashboard__text">Мой баланс</div>
        <Wallet>
          {wallet ? (
            <div>
              <Cards price="120 000, 00 ₽" country="RUB" flag={<Rus />} />
            </div>
          ) : (
            <div>
              <div className="right__dashboard__add">
                <p>Добавьте кошелек</p>
                <img src={Add} alt="plus" />
              </div>
            </div>
          )}
        </Wallet>
        <div className="right__dashboard__transactions">
          Последние транзацкции
        </div>
        <RecentTransactions>
          {recentTransactions ? (
            <div>
              {itemCardModifier.map((color) => (
                <div className="right__dashboard__item">
                  <p className="right__dashboard__well">
                    -123,02 USD / +10 000 RUB
                  </p>
                  <div className={`right__dashboard__${color}`} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="right__dashboard__last-transactions">
                <TwoArrow />
                <p className="right__dashboard__action">
                  Вы не совершили не одной транзакции
                </p>
              </div>
            </div>
          )}
        </RecentTransactions>
      </div>
    </div>
  );
};
