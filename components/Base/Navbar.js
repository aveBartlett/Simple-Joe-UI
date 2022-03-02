import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black shadow-lg font-custom">
      <div className="max-w-6xl mx-auto pr-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                {router.pathname == "/" ? (
                  <a className="py-4 px-2 text-orange-200 border-b-2 text-orange-200 font-custom ">
                    Home
                  </a>
                ) : (
                  <a className="py-4 px-2 text-white font-custom hover:text-orange-200 transition duration-300">
                    Home
                  </a>
                )}
              </Link>
              {/* <a
                href=""
                class="py-4 px-2 text-white font-custom hover:text-orange-200 transition duration-300"
              >
                Services
              </a> */}
              <Link href="/about">
                {router.pathname == "/about" ? (
                  <a className="py-4 px-2 text-orange-200 border-b-2 text-orange-200 font-custom ">
                    About
                  </a>
                ) : (
                  <a className="py-4 px-2 text-white font-custom hover:text-orange-200 transition duration-300">
                    About
                  </a>
                )}
              </Link>
              <Link href="/contact">
                {router.pathname == "/contact" ? (
                  <a className="py-4 px-2 text-orange-200 border-b-2 text-orange-200 font-custom ">
                    Contact Us
                  </a>
                ) : (
                  <a className="py-4 px-2 text-white font-custom hover:text-orange-200 transition duration-300">
                    Contact Us
                  </a>
                )}
              </Link>
            </div>
            {/* <!-- Secondary Navbar items --> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
