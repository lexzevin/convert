import React from "react";

import { ProfileInfoForm } from "./ProfileInfoForm";
import { ProfilePasswordForm } from "./ProfilePasswordForm";

import "./Profile.scss";

export const Profile = () => (
  <>
    <ProfileInfoForm />
    <ProfilePasswordForm />
  </>
);
