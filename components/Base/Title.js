import React from "react";
import Link from "next/link";
import Coin3D from "../ThreeJs/Coin3D.js";

const Title = () => {
  return (
    <nav className="bg-black shadow-lg font-custom">
      <div className="max-w-6xl mx-auto pr-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* <!-- Website Logo --> */}
            <div>
              <Link href="/">
                <a className="flex items-center py-4 pr-2">
                  <Coin3D />
                  {/* <img src="/coin_logo.png" alt="Logo" class="h-12 w-12 mr-4" /> */}
                  <span className="text-white overline text-base sm:text-2xl">
                    Simple Joe
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Title;
