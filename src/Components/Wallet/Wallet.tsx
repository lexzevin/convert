import React from "react";

import { Cards } from "../Cards/Cards";
import Rus from "../../assets/svg/Rus";
import Add from "../../assets/img/Add.png";

type WalletProps = {
  isWallet: boolean;
};

export const Wallet: React.FC<WalletProps> = ({ isWallet }) => (
  <>
    {isWallet ? (
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
  </>
);
