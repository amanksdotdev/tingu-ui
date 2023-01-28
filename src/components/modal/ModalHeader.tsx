import classNames from "classnames";
import React from "react";
import { IComponentBase } from "../../shared/types";

interface ModalHeaderProps extends IComponentBase {}
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  children,
}) => {
  const classes = classNames("p-4 border-b", className);

  return <header className={classes}>{children}</header>;
};
