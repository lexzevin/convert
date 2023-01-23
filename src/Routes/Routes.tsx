import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Main } from "../Pages/Main/Main";
import { Wrapper } from "../Components/Wrapper/Wrapper";
import { Registration } from "../Pages/Registration/Registration";
import { Login } from "../Pages/Login/Login";
import { ExchangeRates } from "../Pages/ExchangeRates/ExchangeRates";
import { Profile } from "../Pages/Profile/Profile";
import { Convert } from "../Pages/Convert/Convert";
import { Wallet } from "../Pages/Wallet/Wallet";
import { Transactions } from "../Pages/Transactions/Transactions";
import { Out } from "../Pages/Out/Out";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <div>Курсы валют</div>,
      },
      {
        path: "currency",
        element: <ExchangeRates />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "convert",
        element: <Convert />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "out",
        element: <Out />,
      },
    ],
  },
]);

export default router;
