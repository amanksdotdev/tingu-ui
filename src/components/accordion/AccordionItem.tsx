import React, { useContext, useEffect, useRef, createContext } from "react";
import autoAnimate from "@formkit/auto-animate";

import { AccordionItemProps } from "./types";
import { AccordionContext } from "./AccordionContext";
import { AccordionButton } from "./AccordionButton";
import { AccordionContent } from "./AccordionContent";

interface IAccordionItemContext {
  isOpen: boolean;
  index: number;
}
export const AccordionItemContext = createContext<IAccordionItemContext>({
  isOpen: false,
  index: -1,
});

export const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index = -1,
  children,
}) => {
  const parent = useRef(null);
  const { activeIndexes } = useContext(AccordionContext);
  const isOpen = activeIndexes.includes(index);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const childrenJsx = item ? (
    <>
      <AccordionButton>{item.title}</AccordionButton>
      <AccordionContent>{item.content}</AccordionContent>
    </>
  ) : (
    children
  );

  return (
    <AccordionItemContext.Provider value={{ isOpen, index }}>
      <div data-index={index} ref={parent}>
        {childrenJsx}
      </div>
    </AccordionItemContext.Provider>
  );
};
