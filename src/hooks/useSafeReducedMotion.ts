import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function useSafeReducedMotion() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? reduce : false;
}
