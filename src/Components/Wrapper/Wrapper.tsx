import React from "react";

import { Avatar } from "../Avatar/Avatar";
import { Wallet } from "../Wallet/Wallet";
import { RecentTransactions } from "../RecentTransactions/RecentTransactions";
import { Dashboard } from "../Dashboard/Dashboard";
import AddPhoto from "../../assets/svg/AddPhoto";
import PlusPhoto from "../../assets/svg/PlusPhoto";

import "./Wrapper.scss";

type PropsWrapper = {
  title: string;
  children: React.ReactNode;
  isWallet: boolean;
  isTransaction: boolean;
};

export const Wrapper: React.FC<PropsWrapper> = ({
  title,
  children,
  isWallet,
  isTransaction,
}) => (
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
      <Wallet isWallet={isWallet} />
      <div className="right__dashboard__transactions">
        Последние транзацкции
      </div>
      <RecentTransactions isTransaction={isTransaction} />
    </div>
  </div>
);
