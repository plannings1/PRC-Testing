// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // It doesn't render anything visible
};

export default ScrollToTop;
