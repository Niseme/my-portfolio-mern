import React from "react";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-600"></div>
      <div className="flex items-center justify-center flex-col mt-10 opacity-70">
        <h1 className="text-quaternary">
            Designed and Developed by
        </h1>
        <h  className="text-quaternary">
            <span className="text-quaternary">Nijole Semele</span>
        </h>
      </div>
    </div>
  );
}

export default Footer;
