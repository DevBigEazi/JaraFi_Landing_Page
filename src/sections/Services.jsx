import { images } from "../constants";

const Services = () => {
  return (
    <section className="bg-yellow h-auto overflow-hidden">
      <div className="max-container mx-auto px-4 2xl:px-0 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Image Section */}
          <div className="md:w-2/5 md:mt-8 md:mr-8 max-md:order-last">
            <img
              src={images.balanceDesktop}
              alt="Balance Desktop"
              className="max-w-md md:max-w-full h-auto mx-auto" // Centering image with mx-auto
            />
          </div>
          {/* Text Section */}
          <div className="md:w-3/5 text-center md:text-left md:pl-8 xl:pl-16 2xl:pl-24 pt-8 md:pt-24">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight text-[#0F0140] mb-4 font-MerriweatherSans">
              Corem ipsum dolor sit amet, consectetur.
            </h2>
            <p className="text-sm sm:text-xl md:text-sm xl:text-sm mb-2 leading-4 font-montserrat text-primary">
              Corem ipsum dolor sit amet, consectetur.
            </p>
            <p className="text-sm sm:text-xl md:text-sm xl:text-sm font-montserrat text-primary">
              Corem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
