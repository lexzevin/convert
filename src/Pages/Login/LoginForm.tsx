import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Inputs } from "../../Components/Inputs/Inputs";
import { Button } from "../../Components/Button/Button";
import CheckboxButton from "../../Components/Checkbox/Checkbox";

interface MyFormValues {
  name: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z0-9]*$/, "Имя может содержать только буквы и цыфры"),
  password: Yup.string()
    .min(8, "Пароль должен состоять из 8 символов")
    .max(50, "Too Long!")
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Z0-9]*$/, "Пароль может содержать только буквы и цыфры"),
});

export const LoginForm = () => {
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
