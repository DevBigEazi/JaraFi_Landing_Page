import { icons } from "../constants";

const socialCommunities = [
  {
    name: "telegram icon",
    icon: icons.telegram,
    link: "https://t.me/Jarafixyz",
  },
  {
    name: "linked in icon",
    icon: icons.linkedin,
    link: "https://www.linkedin.com/company/jarafi",
  },
  {
    name: "x/twitter icon",
    icon: icons.x,
    link: "https://x.com/JaraFi_xyz",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white ">
      <div className="py-4 px-6 max-sm:px-3.5 max-container">
        <img
          src={icons.fullLogoBlue}
          alt="logo"
          width={120}
          height={20}
          className="mb-2"
        />

        <div className="flex justify-between items-center py-4">
          <p className="text-black text-base font-montserrat font-normal">
            Copyright {currentYear}
          </p>

          <div className="flex gap-x-5 max-[345px]:gap-x-2">
            {socialCommunities.map(({ name, icon, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={name}
                className="h-12 w-12 max-[345px]:h-8 max-[345px]:w-8 flex justify-center items-center rounded-full border-[1px] border-primary transition-all duration-[0.5s] hover:bg-linen">
                <img
                  src={icon}
                  alt={name}
                  width={25}
                  height={25}
                  className="max-[345px]:w-5 max-[345px]:h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
