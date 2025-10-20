
import testimonial1 from "../assets/testimonial1.svg";
import testimonial2 from "../assets/testimonial2.svg";
import testimonial3 from "../assets/testimonial3.svg";


const TestimonialCards = () => {
  return (
    <section className="bg-[#0F0F0F] px-3 xs:px-4 mb-10 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24">

      {/* Testimonial Cards */}
      <div className="flex flex-col lg:flex-row gap-4 xs:gap-6 sm:gap-8 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-8 mx-auto">
        <div className="relative rounded-2xl overflow-hidden flex-1">
          <img
            src={testimonial2}
            alt="Thomas41 testimonial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden flex-1">
          <img
            src={testimonial3}
            alt="Olivier testimonial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden flex-1">
          <img
            src={testimonial1}
            alt="Thomas testimonial"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialCards;
