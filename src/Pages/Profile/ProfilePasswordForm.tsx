import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Inputs/Inputs";

interface MyFormValues {
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;
}

const schema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(50, "Максимальное количество символов 50")
    .oneOf([Yup.ref("confirmPassword")], "Пароли не совпадают")
    .required("Поле обязательно для заполнения"),
  confirmPassword: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
  oldPassword: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(50, "Максимальное количество символов 50")
    .required("Поле обязательно для заполнения"),
});

export const ProfilePasswordForm = () => {
  const initialValues: MyFormValues = {
    newPassword: "",
    confirmPassword: "",
    oldPassword: "",
  };

  const onSubmitHandler = (values: MyFormValues) => {
    localStorage.setItem("userPassword", JSON.stringify(values));
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
            <div className="profile__password">Пароль</div>
            <div className="profile__examination">
              <Field
                component={Inputs}
                size="m"
                status="active"
                className="active"
                name="oldPassword"
                placeholder="Введите старый пароль"
              />
              <Field
                component={Inputs}
                size="m"
                status="active"
                className="active"
                name="confirmPassword"
                placeholder="Повторите новый пароль"
              />
            </div>
            <div className="profile__active">
              <Field
                component={Inputs}
                size="m"
                status="active"
                className="active"
                name="newPassword"
                placeholder="Введите новый пароль"
              />
              <Button
                children="Изменить пароль"
                size="l"
                variant="disabled"
                disabled={!isValid}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
