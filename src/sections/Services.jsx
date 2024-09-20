import { images } from "../constants";

const Services = () => {
  return (
    <section className="bg-yellow h-auto overflow-hidden">
      <div className="container mx-auto px-4 2xl:px-0 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Image Section */}
          <div className="lg:w-2/5 pl-6 sm:pl-8 lg:pl-12 max-md:order-last lg:mt-8  lg:mr-8">
            <img
              src={images.balanceDesktop}
              alt="Balance Desktop"
              className="max-w-md lg:max-w-full"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-3/5 text-center lg:text-left lg:pl-8 xl:pl-16 2xl:pl-24 pt-8 lg:pt-24">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#0F0140] mb-4 font-MerriweatherSans">
              Corem ipsum dolor sit amet, consectetur.
            </h2>
            <p className="text-sm sm:text-xl lg:text-sm xl:text-sm mb-2 leading-4 font-montserrat text-primary">
              Corem ipsum dolor sit amet, consectetur.
            </p>
            <p className="text-sm sm:text-xl lg:text-sm xl:text-sm font-montserrat text-primary">
              Corem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;