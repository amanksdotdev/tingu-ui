import classNames from "classnames";
import { ButtonColorScheme, ButtonSize, ButtonVariant } from "./types";

export const getUIClasses = (
  colorScheme: ButtonColorScheme,
  variant: ButtonVariant
): string => {
  const classNamesArr: string[] = [];

  const isContained = variant === "contained";
  const isOutlined = variant === "outlined";

  let classNamesStr: string = "";
  switch (colorScheme) {
    case "default": {
      classNamesArr.push("hover:bg-gray-100 focus:ring-gray-200");
      if (variant === "contained") {
        classNamesArr.push("bg-white hover:bg-gray-100 border");
      }
      break;
    }
    case "primary": {
      classNamesStr = classNames({
        "bg-blue-500 hover:bg-blue-700 text-white": isContained,
        "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "secondary": {
      classNamesArr.push("focus:ring-gray-300");
      classNamesStr = classNames({
        "bg-gray-600 hover:bg-gray-700 text-white": isContained,
        "text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "success": {
      classNamesArr.push("focus:ring-green-300");
      classNamesStr = classNames({
        "bg-green-600 hover:bg-green-700 text-white": isContained,
        "text-green-600 border-green-600 hover:bg-green-600 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "danger": {
      classNamesArr.push("focus:ring-red-300");
      classNamesStr = classNames({
        "bg-red-500 hover:bg-red-700 text-white": isContained,
        "text-red-500 border-red-500 hover:bg-red-500 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "warning": {
      classNamesArr.push("focus:ring-yellow-400 ");
      classNamesStr = classNames({
        "bg-yellow-500 hover:bg-yellow-600 text-white": isContained,
        "text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "info": {
      classNamesArr.push("focus:ring-cyan-300");
      classNamesStr = classNames({
        "bg-cyan-500 hover:bg-cyan-700 text-white": isContained,
        "text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white":
          isOutlined,
      });
      break;
    }
    case "light": {
      classNamesArr.push("focus:ring-gray-300");
      classNamesStr = classNames({
        "bg-white border text-gray-900 hover:bg-gray-100": isContained,
        "border-gray-900 hover:bg-gray-900 hover:text-white": isOutlined,
      });
      break;
    }
    case "dark": {
      classNamesArr.push("focus:ring-gray-500");
      classNamesStr = classNames({
        "bg-gray-900 text-white hover:bg-gray-800": isContained,
        "border-gray-900 hover:bg-gray-900 hover:text-white": isOutlined,
      });
      break;
    }
  }
  classNamesArr.push(classNamesStr);
  return classNamesArr.join(" ");
};


export const getSizeClasses = (size: ButtonSize = "medium"): string => {
  if (size === "large") {
    return "px-8 py-3";
  } else if (size === "small") {
    return "px-4 py-1.5";
  } else {
    return "px-5 py-2.5";
  }
};