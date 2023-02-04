import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import Button from "../button";
import { DropdownItem, DropdownProps } from "./types";

export const Dropdown: React.FC<DropdownProps> = ({
  value = null,
  onChange,
  options,
  placeholder = "Select",
  colorScheme,
  className,
  dropdownClassName,
  dropdownItemClassName,
  width,
  minWidth,
  maxWidth,
  closeWhenClickedOutside = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (option: DropdownItem) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current || !closeWhenClickedOutside) return;
      if (ref.current.contains(e.target as Node)) return;
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const btnClasses = classNames(
    "flex justify-between items-center gap-1 relative w-full",
    className
  );
  const dropdownClasses = classNames(
    "bg-white border inline-block absolute z-10 top-11 w-full py-2 rounded",
    dropdownClassName
  );
  const dropdownItemClases = classNames(
    "p-2 px-4 hover:bg-blue-500 cursor-pointer hover:text-white",
    dropdownItemClassName
  );

  return (
    <div
      className="relative inline-block w-full"
      style={{ width, minWidth, maxWidth }}
      ref={ref}
    >
      <Button
        colorScheme={colorScheme}
        className={btnClasses}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-ellipsis whitespace-nowrap overflow-hidden">
          {value ? value.label : placeholder}
        </span>
        <CgChevronDown className="text-lg shrink-0" />
      </Button>
      {isOpen && (
        <ul className={dropdownClasses}>
          {options.map((item) => (
            <li
              key={item.value}
              className={dropdownItemClases}
              onClick={() => handleChange(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
