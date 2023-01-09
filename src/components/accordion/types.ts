import React from "react";

export interface IAccordionItem {
  title: string;
  content: string;
}

export interface AccordionItemProps {
  /**
   * internal use item prop
   */
  item?: IAccordionItem;
  /**
   * internal use index prop
   */
  index?: number;
  /**
   *  <AccordionButton/> and <AccordionContent/> element as children
   */
  children?: React.ReactNode;
}

export interface AccordionProps {
  /**
   * Array of objects: { title: string, content: string }
   * for basic accordion containing paragraph only
   */
  items?: IAccordionItem[];
  /**
   * <AccordionItem> component as children
   */
  children?: React.ReactNode;
  /**
   *  allow multiple accordion to open at a time
   */
  allowMultiple?: boolean;
}
