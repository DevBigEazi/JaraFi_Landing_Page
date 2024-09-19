import { images } from "../constants";

const About = () => {
  return (
    <section className="bg-primary max-container grid py-12 md:grid-cols-2 gap-4 text-linen">
      <div className="grid max-md:order-last items-center justify-center max-sm:relative max-sm:w-[150%] max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2">
        <img
          src={images.swapDesktop}
          alt="swap design"
          className="max-sm:-rotate-[10deg]"
        />
      </div>
      <div className="flex flex-col px-4 sm:px-8 md:px-12 mb-4 gap-4 items-center justify-center">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-MerriweatherSans">
            Corem ipsum dolor sit amet, consectetur.
          </h2>
          <p className="text-lg lg:text-xl font-montserrat">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
