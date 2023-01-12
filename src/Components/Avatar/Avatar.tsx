import React from "react";

import "./Avatar.scss";

type AvatarProps = {
  avatar: React.ReactNode;
  add: React.ReactNode;
  name: string;
};

export const Avatar: React.FC<AvatarProps> = ({ avatar, add, name }) => (
  <div>
    <div className="avatar">
      <div className="avatar__border">
        <div className="avatar__main">{avatar}</div>
      </div>
      <div className="avatar__add">{add}</div>
      <div className="avatar__name">{name}</div>
    </div>
  </div>
);
