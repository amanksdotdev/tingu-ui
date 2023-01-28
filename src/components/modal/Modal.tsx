import classNames from "classnames";
import React, { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export interface ModalProps {
  isOpen: boolean;
  className?: string;
  id?: string;
  overlayClassName?: string;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  onRequestClose: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  children?: React.ReactNode;
}

const portalId = "tingu-modal-portal";
export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  className,
  width = 500,
  height,
  minWidth,
  minHeight,
  overlayClassName,
  children,
  onRequestClose,
  closeOnOverlayClick = true,
  showCloseButton = false,
}) => {
  const el = useRef(
    document.getElementById(portalId) || document.createElement("div")
  );

  const [state] = useState(!el.current.parentElement);

  useEffect(() => {
    // if element is created above (not already present), attach id to it and append to the body
    if (state) {
      el.current.id = portalId;
      document.body.appendChild(el.current);
    }

    // remove the portal div when unmounting
    return () => {
      if (state && el.current.parentElement) {
        el.current.parentElement.removeChild(el.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const closeIcon = showCloseButton ? (
    <button className="rounded-lg w-6 h-6 grid place-items-center hover:bg-gray-200 absolute top-5 right-5 text-lg cursor-pointer text-gray-400 hover:text-gray-900">
      <RxCross2 onClick={onRequestClose} />
    </button>
  ) : null;

  const modalClassNames = classNames(
    "fixed top-1/2 -translate-y-1/2 bg-white w-full rounded-lg shadow-sm overflow-hidden",
    className
  );

  const overlayClassNames = classNames(
    "fixed inset-0 h-screen w-screen flex justify-center items-center bg-gray-900 opacity-70",
    overlayClassName
  );

  return createPortal(
    <div className="z-50 h-screen w-screen flex justify-center items-center">
      <div
        className={overlayClassNames}
        onClick={() => {
          closeOnOverlayClick && onRequestClose();
        }}
      ></div>
      <div
        className={modalClassNames}
        id={id}
        style={{ width, height, minHeight, minWidth }}
      >
        {closeIcon}
        {children}
      </div>
    </div>,
    el.current
  );
};

export default Modal;
