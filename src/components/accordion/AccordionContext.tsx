import React, { createContext, useState } from "react";
import { AccordionProps } from "./types";

interface IAccordionContext extends AccordionProps {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  totalItems: number;
}

export const AccordionContext = createContext<IAccordionContext>({
  activeIndexes: [],
  totalItems: -1,
  setActiveIndexes: () => {},
  allowMultiple: false,
});
