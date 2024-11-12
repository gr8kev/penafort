// app/page.tsx

import { Banner } from "@/components/modules/homeModules/Banner";
import Home from "@/components/modules/homeModules/Home";
import React from "react";

const page = () => {
  return (
    <div className="body">
      <Home />
      <Banner />
    </div>
  );
};

export default page;
