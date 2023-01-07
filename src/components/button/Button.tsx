import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";
import { getSizeClasses, getUIClasses } from "./helpers";

const Button: React.FC<ButtonProps> = ({
  colorScheme = "default",
  variant = "contained",
  size = "medium",
  shape = "rounded",
  type = "button",
  children,
  className,
  ...rest
}) => {
  const finalClassNames = classNames(
    "text-sm font-medium transition-colors focus:ring focus:ring-4 focus:outline-none focus:ring-offset-0",
    getUIClasses(colorScheme, variant),
    getSizeClasses(size),
    "border",
    {
      "rounded-full": shape === "pill",
      "rounded-lg": shape === "rounded",
      className: className,
    }
  );
  return (
    <button type={type} className={finalClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
