import Image from "next/image";
import AnimatedHeading from "../ui/AnimatedHeading";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F5] px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            About Us
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-[#1C181B] sm:text-5xl lg:text-6xl">
            <AnimatedHeading
              text="Transform Your Body"
              delayBase={0.2}
            />
            <br />
            <AnimatedHeading
              text="Transform Your Life"
              delayBase={0.4}
            />
          </h2>

          <p className="mt-8 text-base leading-8 text-[#666666] sm:text-lg">
            We believe fitness is more than just exercise.
            It is about building confidence, discipline,
            and creating a lifestyle that helps you become
            the strongest version of yourself.
          </p>

          <p className="mt-6 text-base leading-8 text-[#666666] sm:text-lg">
            Through personalized coaching, structured
            training programs, and continuous support,
            we help individuals achieve sustainable
            transformations and long-term success.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[#E5E5E5] pt-8">
            <div>
              <h3 className="text-4xl font-black text-[#8ca660]">
                100+
              </h3>

              <p className="mt-2 text-sm text-[#666666]">
                Clients Trained
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#8ca660]">
                5+
              </h3>

              <p className="mt-2 text-sm text-[#666666]">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#8ca660]">
                95%
              </h3>

              <p className="mt-2 text-sm text-[#666666]">
                Success Rate
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border border-[#E5E5E5]
              bg-white
              shadow-2xl
            "
          >
            <div className="relative h-[650px] w-[350px] sm:w-[420px]">
              <Image
                src="/about.jpeg"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}