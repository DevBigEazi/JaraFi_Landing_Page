import { images } from "../constants";

const Services = () => {
  return (
    <section className="bg-[#EAF206] lg:h-[55vh] h-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-[5rem] px-4 lg:px-[5rem]">
        {/* Image Section */}
        <div className="lg:pt-[5rem] lg:ml-[5rem] max-md:order-last ">
          <img
            src={images.balanceDesktop}
            alt="Balance Desktop"
            className="md:mt-6"
          />
        </div>

        {/* Text Section */}
        <div className="lg:mt-[6rem] lg:mr-[5rem] text-center lg:text-left  lg:pr-[7rem]">
          <h2 className="sm:text-[4rem] md:text-[4rem] lg:text-[5rem] leading-none text-[#0F0140] mb-[1rem] sm:font-MerriweatherSans sm:pt-5">
            Corem ipsum dolor sit <br /> amet, consectetur.
          </h2>
          <p className="text-[14px] sm:font-montserrat sm:text-[2rem]">
            Corem ipsum dolor sit amet, consectetur.
          </p>
          <p className="sm:font-montserrat sm:text-[2rem] sm:mb-7">
            Corem ipsum dolor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
