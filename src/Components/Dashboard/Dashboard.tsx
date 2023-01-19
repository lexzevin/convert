import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import Logo from "../../assets/img/Logo.png";
import { ExchangeRates } from "../../assets/svg/ExchangeRates";
import { User } from "../../assets/svg/User";
import { TwoArrow } from "../../assets/svg/TwoArrow";
import { Out } from "../../assets/svg/Out";
import { Wallet } from "../../assets/svg/Wallet";
import { Transactions } from "../../assets/svg/Transactions";

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
    <div style={{ width: 240 }}>
      <div className="menu__logo">
        <img src={Logo} alt="logo" />
      </div>

      <div>
        <Menu className="menu" mode="inline" theme="light" items={items} />
      </div>
    </div>
  );
};
