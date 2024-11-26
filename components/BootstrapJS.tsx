"use client";

import { useEffect } from "react";

const BootstrapJS = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return null; // This component doesn't render anything in the UI
};

export default BootstrapJS;
