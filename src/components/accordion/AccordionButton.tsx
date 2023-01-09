import classNames from "classnames";
import React, { useContext } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemContext } from "./AccordionItem";
import { IAccordionItem } from "./types";

interface AccordionButtonProps {
  children?: React.ReactNode;
}

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
}) => {
  const { totalItems, setActiveIndexes, allowMultiple } =
    useContext(AccordionContext);
  const { isOpen, index } = useContext(AccordionItemContext);

  const firstItem = index === 0;
  const lastItem = index === totalItems - 1;

  const finalClassNames = classNames(
    "flex items-center justify-between font-medium text-gray-500 p-5 w-full focus:ring-4 border border-b-0",
    {
      "rounded-t-xl": firstItem,
      "rounded-b-xl": lastItem && !isOpen,
      "bg-gray-200": isOpen,
      "focus:ring-gray-300": isOpen,
      "focus:ring-gray-200": !isOpen,
    }
  );

  const handleClick = (index: number) => {
    setActiveIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((idx) => idx !== index);
      } else {
        if (allowMultiple) {
          return [...prev, index];
        }
        return [index];
      }
    });
  };

  return (
    <button className={finalClassNames} onClick={() => handleClick(index)}>
      <span>{children}</span>
      {isOpen ? <CgChevronUp size={20} /> : <CgChevronDown size={20} />}
    </button>
  );
};
