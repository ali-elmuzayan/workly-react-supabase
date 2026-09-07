import { useEffect, useRef } from "react";

function useFocusRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (document.activeElement === ref.current) return;
    ref.current?.focus();
  }, []);

  return ref;
}

export default useFocusRef;
