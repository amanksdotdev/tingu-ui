import classNames from "classnames";
import React from "react";
import { IComponentBase } from "../../shared/types";

interface ModalFooterProps extends IComponentBase {
  rightAligned?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  rightAligned = false,
  children,
  className,
}) => {
  const classes = classNames(
    "p-4 flex gap-2 items-center border-t absolute bottom-0 w-full bg-white min-h-16",
    { "justify-end": rightAligned },
    className
  );
  return <footer className={classes}>{children}</footer>;
};
