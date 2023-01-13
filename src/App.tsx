import React from "react";

import { AutoCompletes } from "./Components/AutoComplete/AutoComplete";
import { Button } from "./Components/Button/Button";
import { Inputs } from "./Components/Inputs/Inputs";
import { Selects } from "./Components/Select/Select";
import { Cards } from "./Components/Cards/Cards";
import { Indicators } from "./Components/Indicators/Indicators";
import { Avatar } from "./Components/Avatar/Avatar";
import { selectMock } from "./Components/Select/SelectMocks";

import Rus from "./assets/svg/Rus";
import ArrowTop from "./assets/svg/ArrowTop";
import Usd from "./assets/svg/Usd";
import Cny from "./assets/svg/Cny";
import ArrowBottom from "./assets/svg/ArrowBottom";
import PlusPhoto from "./assets/svg/PlusPhoto";
import Person from "./assets/img/Person.png";
import AddPhoto from "./assets/svg/AddPhoto";
import DeletePhoto from "./assets/svg/DeletePhoto";

import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Button
          className="error"
          children="Call to action"
          type="button"
          size="s"
          variant="error"
        />
        <Button
          className="disabled"
          children="Call to action"
          type="button"
          size="s"
          variant="disabled"
        />
        <Button
          className="active"
          children="Call to action"
          type="button"
          size="s"
          variant="active"
        />
        <Button
          className="inactive"
          children="Call to action"
          type="button"
          size="s"
          variant="inactive"
        />
      </div>
      <div className="input">
        <Inputs status="error" className="error" placeholder="Имя" />
        <Inputs
          disabled
          status="disabled"
          className="disabled"
          placeholder="Имя"
        />
        <Inputs status="active" className="active" placeholder="Имя" />
        <Inputs status="inactive" className="inactive" placeholder="Имя" />
        <Inputs status="Meaning" className="Meaning" placeholder="Имя" />
      </div>
      <div className="select">
        <Selects title="Выберите кошелек" options={selectMock} />
      </div>
      <div>
        <Cards country="RUS" flag={<Rus />} price="120 000, 00 ₽" />
        <Cards country="USD" flag={<Usd />} price="10 000, 00 $" />
        <Cards country="СNY" flag={<Cny />} price="20 000, 00 ¥" />
      </div>
      <div>
        <Indicators
          type=""
          price="83,6055"
          country="USD / RUB"
          height="+0,2380"
          arrow={<ArrowTop />}
          interest="0,13%"
        />

        <Indicators
          type="downgrade"
          price="91,2828"
          country="USD / RUB"
          height="-0,4548"
          arrow={<ArrowBottom />}
          interest="0,50%"
        />
        <Indicators
          type=""
          price="0,6674"
          country="JPY / RUB"
          height="+0,0020"
          arrow={<ArrowTop />}
          interest="0,30%"
        />
      </div>
      <div>
        <Avatar
          name="Алексей Иванов"
          avatar={<AddPhoto />}
          add={<PlusPhoto />}
        />
      </div>
      <div>
        <Avatar
          name="Алексей Иванов"
          avatar={<img src={Person} alt="Person" />}
          add={<DeletePhoto />}
        />
      </div>
      <div>
        <AutoCompletes />
      </div>
    </>
  );
}

export default App;
