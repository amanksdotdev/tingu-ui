import { ButtonColorScheme } from "../button/types";

export type DropdownItem = {
  label: string;
  value: string;
};

export interface DropdownProps {
  /**
   * selected value
   */
  value: DropdownItem | null;
  /**
   * the function get called with the dropdown item being clicked
   */
  onChange: (value: DropdownItem) => void;
  /**
   * array of dropdown items
   */
  options: DropdownItem[];
  /**
   * placehodler for dropdown when no value is selected
   */
  placeholder?: string;
  /**
   * colorScheme of the dropdown button
   */
  colorScheme?: ButtonColorScheme;
  /**
   * className that applies to the dropdown button
   */
  className?: string;
  /**
   * className that applies to the dropdown container
   */
  dropdownClassName?: string;
  /**
   * className that applies to dropdown item
   */
  dropdownItemClassName?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  /**
   * should dropdown close when user clicks outside
   */
  closeWhenClickedOutside?: boolean;
}
