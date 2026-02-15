import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // This forces the scroll to the top
  }, [pathname]); // This runs every time the URL path changes
  return null;
};

export default ScrollToTop;
