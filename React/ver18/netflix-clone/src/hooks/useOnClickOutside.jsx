import React, { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listenr = (event) => {
      console.log("ref", ref);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listenr);
    document.addEventListener("touchstart", listenr);
    return () => {
      document.removeEventListener("mousedown", listenr);
      document.removeEventListener("touchstart", listenr);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
