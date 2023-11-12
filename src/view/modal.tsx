import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
const ModalPortal: React.FC<{ children: ReactNode }> = (
  { children },
) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-5 flex justify-center items-center">
      {children}
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
export default ModalPortal;
