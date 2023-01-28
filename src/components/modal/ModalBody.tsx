import classNames from "classnames";
import React from "react";
import { IComponentBase } from "../../shared/types";

interface ModalBodyProps extends IComponentBase {}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
}) => {
  const classes = classNames(
    "p-6 pb-24 h-[calc(100%_-_64px)] overflow-y-auto space-y-6 text-gray-500 leading-relaxed",
    className
  );
  return <main className={classes}>{children}</main>;
};
