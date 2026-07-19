"use client";

import AnimatedHeading from "../ui/AnimatedHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FAFAFA] px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            Contact Us
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-[#1C181B] sm:text-5xl lg:text-6xl">
            <AnimatedHeading
              text="Get in Touch"
              delayBase={0.2}
            />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
            Ready to start your transformation?
            Fill out the form and take the first step
            toward achieving your fitness goals.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
            Whether your goal is fat loss, muscle gain,
            strength improvement or building a healthier
            lifestyle, we will help create the perfect
            plan for you.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-black text-[#8ca660]">
                90+
              </h3>

              <p className="text-sm text-[#666666]">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#8ca660]">
                4+
              </h3>

              <p className="text-sm text-[#666666]">
                Years Exp.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#8ca660]">
                100%
              </h3>

              <p className="text-sm text-[#666666]">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[32px] border border-[#E5E5E5] bg-white p-8 shadow-xl">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                rounded-2xl
                border
                border-[#E5E5E5]
                bg-[#FAFAFA]
                px-5
                py-4
                text-[#1C181B]
                outline-none
                transition-all
                duration-300
                focus:border-[#8ca660]
                focus:ring-4
                focus:ring-[#8ca660]/10
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                rounded-2xl
                border
                border-[#E5E5E5]
                bg-[#FAFAFA]
                px-5
                py-4
                text-[#1C181B]
                outline-none
                transition-all
                duration-300
                focus:border-[#8ca660]
                focus:ring-4
                focus:ring-[#8ca660]/10
              "
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="
                w-full
                rounded-2xl
                border
                border-[#E5E5E5]
                bg-[#FAFAFA]
                px-5
                py-4
                text-[#1C181B]
                outline-none
                transition-all
                duration-300
                focus:border-[#B11A32]
                focus:ring-4
                focus:ring-[#B11A32]/10
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your goals..."
              className="
                w-full
                rounded-2xl
                border
                border-[#E5E5E5]
                bg-[#FAFAFA]
                px-5
                py-4
                text-[#1C181B]
                outline-none
                transition-all
                duration-300
                focus:border-[#8ca660]
                focus:ring-4
                focus:ring-[#8ca660]/10
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-full
                bg-[#8ca660]
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-[#8ca660]/20
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#86a559]
              "
            >
              Start Your Transformation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}