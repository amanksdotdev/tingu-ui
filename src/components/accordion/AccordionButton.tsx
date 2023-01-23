import classNames from "classnames";
import React, { useContext } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemContext } from "./AccordionItem";

interface AccordionButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
  className,
}) => {
  const { totalItems, setActiveIndexes, allowMultiple, focusRings } =
    useContext(AccordionContext);
  const { isOpen, index } = useContext(AccordionItemContext);

  const firstItem = index === 0;
  const lastItem = index === totalItems - 1;

  const finalClassNames = classNames(
    "flex items-center justify-between font-medium p-5 text-gray-500 w-full border border-b-0",
    {
      "rounded-t-xl": firstItem,
      "border-b": lastItem,
      "rounded-b-xl": lastItem && !isOpen,
      "bg-gray-200": isOpen,
      "bg-white": !isOpen,
      "focus:ring-4": focusRings,
      "focus:ring-gray-300": isOpen && focusRings,
      "focus:ring-gray-200": !isOpen && focusRings,
    },
    className
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
      <span className={className}>{children}</span>
      {isOpen ? <CgChevronUp size={20} /> : <CgChevronDown size={20} />}
    </button>
  );
};
