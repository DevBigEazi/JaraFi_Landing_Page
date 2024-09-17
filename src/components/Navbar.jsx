import { icons } from "../constants";

const Navbar = () => {
  return (
    <header className="bg-linen py-7 px-6 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            className="m-0"
            src={icons.fullLogoBlue}
            alt="logo"
            width={120}
            height={20}
          />
        </a>

        <div className="h-11 w-55 border-[1px] border-primary transition-all duration-[0.5s] hover:bg-whitesmoke rounded-lg flex items-center py-3 px-7 max-sm:hidden">
          <a href="#footer">Join Our Community</a>
        </div>
        <div className="hidden max-sm:block">
          <img src={icons.menuBurger} alt="menu icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
