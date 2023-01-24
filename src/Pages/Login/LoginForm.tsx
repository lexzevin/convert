import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Inputs } from "../../Components/Inputs/Inputs";
import { Button } from "../../Components/Button/Button";
import CheckboxButton from "../../Components/Checkbox/Checkbox";
import { useNavigate } from "react-router-dom";

interface MyFormValues {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Поле обязательно для заполнения"),
  password: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const onSubmitHandler = (values: MyFormValues) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard/currency");
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
                name="email"
                size="m"
                status="active"
                className="active"
                placeholder="E-mail"
              />
            </div>
            <div className="right__menu__first__input">
              <Field
                component={Inputs}
                name="password"
                size="m"
                status="active"
                className="active"
                placeholder="Пароль"
              />
            </div>
            <div className="right__menu__checkBox">
              <CheckboxButton title="Запомнить меня" />
            </div>
            <div className="right__menu__last__button">
              <Button
                size="m"
                children="Войти"
                disabled={!isValid}
                variant="active"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
