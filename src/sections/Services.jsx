import { images } from "../constants";

const Services = () => {
  return (
    <section className="bg-yellow h-auto overflow-hidden max-container">
      <div className=" mx-auto px-4 2xl:px-0 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Image Section */}
          <div className="md:w-2/5 mt-8 md:mr-8 max-md:order-last max-md:mt-10">
            <img
              src={images.balanceDesktop}
              alt="Balance Desktop"
              className="max-w-md md:max-w-full h-auto mx-auto" // Centering image with mx-auto
            />
          </div>
          {/* Text Section */}
          <div className="md:w-3/5 text-left md:pl-8 xl:pl-16 2xl:pl-24 pt-8 md:pt-24  ">
            <h2 className="max-sm:text-3xl text-4xl text-primary mb-4 font-MerriweatherSans font-bold ">
              Corem ipsum dolor sit amet, consectetur.
            </h2>
            <p className="text-base mb-2 font-montserrat text-primary font-normal max-sm:text-xl">
              Corem ipsum dolor sit amet, consectetur.
              Corem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
