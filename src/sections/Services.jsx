// import { images } from "../constants";

// const Services = () => {
//   return (
//     <section className="bg-[#EAF206] lg:h-[55vh] h-auto">
//       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-[5rem] px-4 lg:px-[5rem]">
//         {/* Image Section */}
//         <div className="lg:pt-[5rem] lg:ml-[5rem]  max-md:order-last">
//           <img
//             src={images.balanceDesktop}
//             alt="Balance Desktop"
//             className="md:mt-6"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="lg:mt-[6rem] lg:mr-[5rem] text-center lg:text-left lg:pr-[7rem]">
//           <h2 className="text-[3rem] xs:text-[4rem] sm:text-[4rem] md:text-[4rem] lg:text-[5rem] leading-none text-[#0F0140] mb-[1rem] sm:font-MerriweatherSans sm:pt-5">
//             Corem ipsum dolor sit <br /> amet, consectetur.
//           </h2>
//           <p className="text-[14px]  sm:text-[2rem] sm:font-montserrat">
//             Corem ipsum dolor sit amet, consectetur.
//           </p>
//           <p className="text-[14px]  sm:text-[2rem] sm:font-montserrat sm:mb-7">
//             Corem ipsum dolor
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import { images } from "../constants";

const Services = () => {
  return (
    <section className="bg-[#EAF206] lg:h-[55vh] h-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-20 px-4 lg:px-20">
        {/* Image Section */}
        <div className="lg:pt-20 lg:ml-20 max-md:order-last">
          <img
            src={images.balanceDesktop}
            alt="Balance Desktop"
            className="md:mt-6"
          />
        </div>

        {/* Text Section */}
        <div className="lg:mt-24 lg:mr-20 text-center lg:text-left lg:pr-28">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-6xl leading-none text-[#0F0140] mb-4 sm:font-MerriweatherSans sm:pt-5">
            Corem ipsum dolor sit <br /> amet, consectetur.
          </h2>
          <p className="text-sm sm:text-3xl sm:font-montserrat">
            Corem ipsum dolor sit amet, consectetur.
          </p>
          <p className="text-sm sm:text-3xl sm:font-montserrat sm:mb-7">
            Corem ipsum dolor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;