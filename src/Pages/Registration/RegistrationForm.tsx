import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Inputs/Inputs";
import CheckboxButton from "../../Components/Checkbox/Checkbox";

import "./Registration.scss";

interface MyFormValues {
  name: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Минимум 6 символов")
    .max(50, "максимальное количество симоволов 50")
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z0-9]*$/, "Имя может содержать только буквы и цыфры"),
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Поле обязательно для заполнения"),
  password: Yup.string()
    .min(8, "Пароль должен состоять из 8 символов")
    .max(50, "максимальное количество симоволов 50")
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z0-9]*$/, "Пароль может содержать только буквы и цыфры"),
  confirmPassword: Yup.string()
    .min(8, "Пароль должен состоять из 8 символов")
    .max(50, "максимальное количество симоволов 50")
    .oneOf([Yup.ref("password")], "Пароли не совподают")
    .required("Поле обязательно для заполнения"),
});

export const RegistrationForm = () => {
  const initialValues: MyFormValues = {
    name: "",
  };
  const onSubmitHandler = (values: MyFormValues) => {
    console.log("submit", values);
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
            <div className="right__menu__first__input">
              <Field
                component={Inputs}
                name="name"
                placeholder="Имя"
                size="m"
                status="active"
                className="active"
              />
            </div>
            <div className="right__menu__first__input">
              <Field
                component={Inputs}
                name="email"
                size="m"
                status="active"
                className="active"
                placeholder="E-mail"
              />
            </div>
            <div className="second__input">
              <Field
                component={Inputs}
                name="password"
                size="s"
                status="active"
                className="active"
                placeholder="Пароль"
              />
              <Field
                component={Inputs}
                name="confirmPassword"
                size="s"
                status="active"
                className="active"
                placeholder="Подтвердите пароль"
              />
            </div>
            <div className="right__menu__checkBox">
              <CheckboxButton title="I accept the Terms of Service and have read Privacy Policy" />
            </div>
            <div className="right__menu__last__button">
              <Button
                size="m"
                variant="active"
                children="Зарегистрироваться"
                disabled={!isValid}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
