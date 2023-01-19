import React from "react";

import { ReactComponent as TwoArrow } from "../../assets/img/TwoArrow.svg";

type RecentTransactionProps = {
  isTransaction: boolean;
};

const itemCardModifier = [
  "first-color",
  "second-color",
  "third-color",
  "fourth-color",
];

export const RecentTransactions: React.FC<RecentTransactionProps> = ({
  isTransaction,
}) => (
  <>
    {isTransaction ? (
      <div>
        {itemCardModifier.map((color) => (
          <div className="right__dashboard__item">
            <p className="right__dashboard__well">-123,02 USD / +10 000 RUB</p>
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
  </>
);
