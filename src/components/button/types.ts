import { ButtonHTMLAttributes } from "react";

export const Button_Color_Scheme = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  dark: "dark",
  light: "light",
} as const;

export type ButtonColorScheme = keyof typeof Button_Color_Scheme;

export const Button_Variant = {
  contained: "contained",
  outlined: "outlined",
} as const;

export type ButtonVariant = keyof typeof Button_Variant;

export const Button_Shape = {
  pill: "pill",
  sharp: "sharp",
  rounded: "rounded",
} as const;

export type ButtonShape = keyof typeof Button_Shape;

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * button content
   */
  children?: React.ReactNode;
  /**
   * color scheme of button
   */
  colorScheme?: ButtonColorScheme;
  /**
   * shape of button - rounded by default
   */
  shape?: ButtonShape;
  /**
   * variant of button to determine its styling
   */
  variant?: ButtonVariant;
  /**
   * button size
   */
  size?: ButtonSize;
}
