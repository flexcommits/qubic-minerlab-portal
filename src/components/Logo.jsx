import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-sm font-bold">
        <img
          className="bg-white px-3 py-1 border-1 rounded-full"
          style={{ height: "50px" }}
          src="/images/minerlab-logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
