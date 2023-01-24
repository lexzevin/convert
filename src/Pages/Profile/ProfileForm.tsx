import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Inputs/Inputs";

interface MyFormValues {
  name: string;
  email: string;
}

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
    .matches(/^[0-9]*$/, "Дата может содержать только цыфры")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
  phone: Yup.string()
    .min(11, "Номер должен содержать минимум 11 символов")
    .matches(/^[0-9]*$/, "Телефон может содержать только цыфры")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
});

export const ProfileForm = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || ""));

  const initialValues: MyFormValues = {
    name: user?.name,
    email: user?.email,
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
                variant="active"
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
                />
              </div>
              <div className="profile__third-input">
                <Field
                  component={Inputs}
                  size="m"
                  status="active"
                  className="active"
                  name="phone"
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
