import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import { ReactComponent as User } from "../../assets/img/User.svg";
import { ReactComponent as TwoArrow } from "../../assets/img/TwoArrow.svg";
import { ReactComponent as Out } from "../../assets/img/Out.svg";
import { ReactComponent as Wallet } from "../../assets/img/Wallet.svg";
import { ReactComponent as Transactions } from "../../assets/img/Transactions.svg";
import { ReactComponent as ExchangeRates } from "../../assets/img/ExchangeRates.svg";

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

const onClick: MenuProps["onClick"] = (e) => {
  if (e.key === "Выход") {
    localStorage.removeItem("user");
  }
};

const items: DashboardItem[] = [
  getItem(
    <Link to="/dashboard/currency">Курсы валют</Link>,
    "Курсы валют",
    <ExchangeRates />
  ),
  getItem(
    <Link to="/dashboard/profile">Мой профиль</Link>,
    "Мой профиль",
    <User />
  ),
  getItem(
    <Link to="/dashboard/convert">Обмен валют</Link>,
    "Обмен валют",
    <TwoArrow />
  ),
  getItem(<Link to="/dashboard/wallet">Кошельки</Link>, "Кошельки", <Wallet />),
  getItem(
    <Link to="/dashboard/transactions">Транзакции</Link>,
    "Транзакции",
    <Transactions />
  ),
  getItem(<Link to="/">Выход</Link>, "Выход", <Out />),
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="menu__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <Menu
          className="menu"
          mode="inline"
          theme="light"
          items={items}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
