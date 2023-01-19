import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { ReactComponent as ExchangeRates } from "../../assets/img/ExchangeRates.svg";
import { ReactComponent as User } from "../../assets/img/User.svg";
import { ReactComponent as TwoArrow } from "../../assets/img/TwoArrow.svg";
import { ReactComponent as Out } from "../../assets/img/Out.svg";
import { ReactComponent as Wallet } from "../../assets/img/Wallet.svg";
import { ReactComponent as Transactions } from "../../assets/img/Transactions.svg";

import Logo from "../../assets/img/Logo.png";

import "./Dashboard.scss";

type DashboardItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: DashboardItem[],
  type?: "group"
): DashboardItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as DashboardItem;
}

const items: DashboardItem[] = [
  getItem("Курсы валют", "1", <ExchangeRates />),
  getItem("Мой профиль", "2", <User />),
  getItem("Обмен валют", "3", <TwoArrow />),
  getItem("Кошельки", "4", <Wallet />),
  getItem("Транзакции", "5", <Transactions />),
  getItem("Выход", "6", <Out />),
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="menu__logo">
        <img src={Logo} alt="logo" />
      </div>

      <div>
        <Menu className="menu" mode="inline" theme="light" items={items} />
      </div>
    </div>
  );
};
