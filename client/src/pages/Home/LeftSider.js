import React from "react";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-5 sm:static sm: pb-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/nijole-semele-7392718a/">
            {" "}
            <i className="ri-linkedin-line text-secondary-600 "> </i>
          </a>

          <a href="https://github.com/Niseme">
            <i className="ri-github-line text-secondary-600 "> </i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-tertiary sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
