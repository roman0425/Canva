import { useLayoutEffect, useEffect, useState } from "react";

const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 630);
      setIsTablet(window.innerWidth < 900 && window.innerWidth >= 630)
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return { isMobile, isTablet };
};

export default useIsMobile;
