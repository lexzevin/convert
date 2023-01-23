import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Avatar } from "../Avatar/Avatar";
import { Wallet } from "../Wallet/Wallet";
import { RecentTransactions } from "../RecentTransactions/RecentTransactions";
import { Dashboard } from "../Dashboard/Dashboard";
import AddPhoto from "../../assets/svg/AddPhoto";
import PlusPhoto from "../../assets/svg/PlusPhoto";

import "./Wrapper.scss";

type PropsWrapper = {
  isWallet?: boolean;
  isTransaction?: boolean;
};

export const Wrapper: React.FC<PropsWrapper> = ({
  isWallet = false,
  isTransaction = false,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <div>
        <Dashboard />
      </div>
      <div className="mid__dashboard">
        <div>
          <Outlet />
        </div>
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
};
