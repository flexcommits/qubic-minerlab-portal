import React from "react";

export const subHeader = (props) => {
  return (
    <div
      className={
        "text-white my-12 flex items-center text-4xl lg:text-6xl sm:text-2xl xs:text-lg text-center justify-center font-bold"
      }
    >
      {/* <img className="mx-1" src="/images/left-step.png" alt="arrow" /> */}
      <div className="flex flex-col montserrat">
        {/* border-b-8 border-dotted border-b-[#10c4d6] */}
        <span className="">{props.label}</span>

        {/* <div className="text-lg">
          <span className="primary">#</span>
          <span>1010</span>
        </div> */}
      </div>

      {/* <img className="mx-1" src="/images/step2.png" alt="arrow" /> */}
    </div>
  );
};

export default subHeader;
