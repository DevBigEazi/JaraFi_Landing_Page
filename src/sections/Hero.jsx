import { images } from "../constants";

const Hero = () => {
  return (
    <section className="min-h-screen bg-linen pt-28 max-sm:pt-16">
      <div className="container mx-auto sm:pl-4 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col gap-4 sm:gap-6 px-3 lg:gap-8 w-full sm:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Corem ipsum dolor sit amet, consectetur.
          </h1>
          <div className="space-y-2">
            <p className="text-base sm:text-lg lg:text-xl font-normal">
              Corem ipsum dolor sit amet, consectetur.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-normal">
              Corem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <button className="self-start mt-2 sm:mt-4 h-11 max-sm:w-full text-center border border-primary transition-all duration-500 hover:bg-whitesmoke rounded-lg text-primary text-base max-sm:text-center font-montserrat font-normal items-center py-3 px-7 ">
            Join Our Community
          </button>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            className="hidden sm:block w-full h-auto object-cover"
            src={images.heroDesktop}
            alt="hero"
          />
          <img
            className="sm:hidden w-full h-auto object-cover"
            src={images.heroMobile}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
