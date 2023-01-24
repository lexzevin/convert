import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Inputs/Inputs";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Поле обязательно для заполнения"),
  name: Yup.string()
    .min(8, "Имя должно содержать минимум 8 символов")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
  city: Yup.string()
    .max(50, "Максимальное количество символов 50")
    .matches(/^[a-zA-Z]*$/, "Город может содержать только буквы")
    .required("Поле обязательно для заполнения"),
  data: Yup.string()
    .min(6, "Дата может содержать минимум 6 символов")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
  phone: Yup.string()
    .min(11, "Номер должен содержать минимум 11 символов")
    .required("Поле обязательно для заполнения"),
});

interface MyFormValues {
  email: string;
  name: string;
  city: string;
  data: string;
  phone: string;
}

export const ProfileInfoForm = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || ""));

  const initialValues: MyFormValues = {
    email: user?.email,
    name: "",
    city: "",
    data: "",
    phone: "",
  };

  const onSubmitHandler = (values: MyFormValues) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={schema}
      >
        {({ isValid }) => (
          <Form>
            <div className="profile">
              <div className="profile__title">Мой профиль</div>
              <Button
                children="Сохранить изменения"
                size="l"
                disabled={!isValid}
              />
            </div>
            <div className="profile__info">
              Информация о вашей учетной записи
            </div>
            <div>
              <div className="profile__first-input">
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="name"
                  placeholder="Имя"
                />
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="profile__two-input">
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="city"
                  placeholder="Город"
                />
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="data"
                  placeholder="Дата рождения"
                  type="date"
                />
              </div>
              <div className="profile__third-input">
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="phone"
                  isMask={true}
                  placeholder="Номер телефона"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
