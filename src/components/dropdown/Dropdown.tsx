import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import Button from "../button";
import { ButtonColorScheme } from "../button/types";

type DropdownItem = {
  label: string;
  value: string;
};

interface DropdownProps {
  value: DropdownItem | null;
  onChange: (value: DropdownItem) => void;
  options: DropdownItem[];
  placeholder?: string;
  colorScheme?: ButtonColorScheme;
}
export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  colorScheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option: DropdownItem) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <Button
        colorScheme={colorScheme}
        className="flex gap-4 items-center relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value ? value.label : placeholder}
        <CgChevronDown className="text-lg" />
      </Button>
      {isOpen && (
        <ul className="bg-white border inline-block absolute z-10 top-11 w-full py-2 rounded">
          {options.map((item, idx) => (
            <li
              key={item.value}
              className="p-2 px-4 hover:bg-blue-500 cursor-pointer hover:text-white"
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
