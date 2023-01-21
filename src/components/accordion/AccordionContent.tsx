import classNames from "classnames";
import React, { useContext } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemContext } from "./AccordionItem";

interface AccordionContentProps {
  children?: React.ReactNode;
  className?: string;
}
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  const { totalItems } = useContext(AccordionContext);
  const { isOpen, index } = useContext(AccordionItemContext);
  if (!isOpen) return null;
  const lastItem = index === totalItems - 1;
  const finalClassNames = classNames(
    "bg-white text-gray-500 p-5 border",
    { "rounded-b-xl": lastItem },
    className
  );
  return <div className={finalClassNames}>{children}</div>;
};
