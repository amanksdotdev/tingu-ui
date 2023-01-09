import React, { useContext } from "react";
import { AccordionItemContext } from "./AccordionItem";

interface AccordionContentProps {
  children?: React.ReactNode;
}
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
}) => {
  const { isOpen } = useContext(AccordionItemContext);
  if (!isOpen) return null;
  return <div className="bg-white text-gray-500 p-5">{children}</div>;
};
