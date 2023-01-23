import React, { useLayoutEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

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
    "0",
    <ExchangeRates className="iconEffect" />
  ),
  getItem(
    <Link to="/dashboard/profile">Мой профиль</Link>,
    "1",
    <User className="iconEffect" />
  ),
  getItem(
    <Link to="/dashboard/convert">Обмен валют</Link>,
    "2",
    <TwoArrow className="iconEffect" />
  ),
  getItem(
    <Link to="/dashboard/wallet">Кошельки</Link>,
    "3",
    <Wallet className="iconEffect" />
  ),
  getItem(
    <Link to="/dashboard/transactions">Транзакции</Link>,
    "4",
    <Transactions className="iconEffect" />
  ),
  getItem(<Link to="/">Выход</Link>, "5", <Out className="iconEffect" />),
];

export const Dashboard: React.FC = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState("");

  useLayoutEffect(() => {
    if (pathname.includes("/dashboard/currency")) setCurrent("0");
    else if (pathname.includes("/dashboard/profile")) setCurrent("1");
    else if (pathname.includes("/dashboard/convert")) setCurrent("2");
    else if (pathname.includes("/dashboard/wallet")) setCurrent("3");
    else if (pathname.includes("/dashboard/transactions")) setCurrent("4");
  }, [pathname]);

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
          selectedKeys={[current]}
        />
      </div>
    </div>
  );
};
