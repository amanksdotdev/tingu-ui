import React from "react";
import classNames from "classnames";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const classes = classNames("container mx-auto", className);
  return <div className={classes}>{children}</div>;
};

export default Container;
