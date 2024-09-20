import { useState } from "react";
import { icons } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <header className="border-b-[1px] border-b-[#00000080] py-7 px-6 w-full absolute z-10 max-sm:py-4 max-sm:px-3.5">
      <nav className="bg-linen flex justify-between items-center max-container">
        <a href="/">
          <img
            className="max-sm:w-[100px]"
            src={icons.fullLogoBlue}
            alt="logo"
            width={120}
            height={20}
          />
        </a>

        <div className="h-11 w-55 border-[1px] border-primary transition-all duration-[0.5s] hover:bg-whitesmoke rounded-lg flex items-center py-3 px-7 max-sm:hidden">
          <a
            href="#footer"
            className="text-primary text-base font-montserrat font-normal">
            Join Our Community
          </a>
        </div>

        {/* Mobile nav logic */}
        <div className="hidden relative gap-x-28 max-sm:flex border-yellow">
          <img
            src={icons.menuBurger}
            alt="menu icon"
            width={25}
            height={25}
            onClick={() => setToggle(true)}
          />

          {toggle && (
            <div className="fixed py-4 px-3.5 bg-linen inset-y-0 right-0 z-[5] h-screen w-full">
              <div className="flex justify-between mb-20">
                <img
                  src={icons.fullLogoBlue}
                  alt="logo"
                  width={100}
                  height={20}
                />
                <img
                  src={icons.crossSmall}
                  alt="close icon"
                  width={25}
                  height={25}
                  onClick={() => setToggle(false)}
                />
              </div>

              <div className="flex flex-col items-center">
                <div
                  className="
                  w-full 
                  border-b-[1px] 
                  border-b-primary 
                  justify-center flex 
                  items-center 
                  py-3 
                  px-7 
                  "
                  onClick={() => setToggle(false)}>
                  <a
                    href="#footer"
                    className="text-primary text-base font-montserrat font-normal hover:text-black">
                    Join Our Community
                  </a>
                </div>

                <div className="h-[70vh]"></div>

                <p className="text-primary text-base font-montserrat font-normal">
                  Copyright {currentYear}
                </p>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
