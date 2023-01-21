import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import { AccordionItemProps, AccordionProps } from "./types";
import ChildrenUtilities from "react-children-utilities";

const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  items,
  children,
  allowMultiple = false,
  animate = false,
  hideFocusRings = false,
  expanded = false,
}) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [totalItems, setTotalItems] = useState(() =>
    items ? items.length : -1
  );

  useEffect(() => {
    if (expanded) {
      setActiveIndexes([0]);
    }
  }, [expanded]);

  const getChildrenWithProps = () => {
    let actualIndex = 0;
    const childrenWithProps = ChildrenUtilities.deepMap(children, (child) => {
      if (
        React.isValidElement(child) &&
        typeof child.type !== "string" &&
        child.type.name === AccordionItem.name
      ) {
        const newChild = React.cloneElement(
          child as React.ReactElement<AccordionItemProps>,
          { index: actualIndex++ }
        );
        return newChild;
      }
      return child;
    });
    setTotalItems(actualIndex);
    return childrenWithProps;
  };

  const childrenWithProps = useMemo(() => {
    if (items) return;
    return getChildrenWithProps();
  }, [children]);

  const renderItems = items
    ? items.map((item, index) => (
        <AccordionItem key={index} index={index} item={item} />
      ))
    : childrenWithProps;

  return (
    <AccordionContext.Provider
      value={{
        activeIndexes,
        setActiveIndexes,
        totalItems,
        allowMultiple,
        animate,
        hideFocusRings,
      }}
    >
      <div className="rounded-xl">{renderItems}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
