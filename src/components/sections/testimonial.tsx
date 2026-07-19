"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  "1-on-1 Coaching",
  "Online Training",
  "Calisthenics Coaching",
  "Nutrition Plans",
  "Body Transformation",
  "Fat Loss",
  "Muscle Building",
  "Mobility Training",
];

const testimonials = [
  {
    name: "JOHN DOE",
    text: "I achieved my first muscle-up within 3 months of coaching.",
    image: "/transformation.jpeg",
  },
  {
    name: "JANE SMITH",
    text: "Lost 12kg and completely transformed my physique.",
    image: "/transformation2.jpeg",
  },
  {
    name: "ALEX JOHNSON",
    text: "The coaching structure changed my entire fitness journey.",
    image: "/transformation3.jpeg",
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#F8F8F8] py-20"
    >
      {/* Moving Services */}
      <div className="overflow-hidden border-y border-[#E5E5E5] py-7">
        <div className="flex w-max animate-services items-center">

          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center"
            >
              <span
                className="
                  whitespace-nowrap
                  px-8
                  text-xl
                  font
                  uppercase
                  tracking-[0.15em]
                  text-[#1C181B]
                  md:text-xl
                "
              >
                {service}
              </span>

              <span className="text-2xl text-[#8ca660]">
                ●
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-20 max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-[#1C181B] sm:text-5xl lg:text-6xl">
            Real Client Results
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#666666]">
            See how our coaching has helped clients transform their
            strength, physique and confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="
        rotate-[-2deg]
        bg-white
        p-4
        shadow-[0_15px_40px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:rotate-0
      "
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Polaroid Bottom */}
      <div className="pt-4 pb-2 text-center">
        <div className="text-[#8ca660] text-lg">
          ★★★★★
        </div>

        <p className="mt-3 text-sm leading-7 text-[#666666]">
          "{item.text}"
        </p>

        <h3 className="mt-5 text-lg font-bold text-[#1C181B]">
          {item.name}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#888]">
          Client Transformation
        </p>
      </div>
    </div>
  ))}
</div>
        <div className="mt-14 text-center">
          <Link
            href="/testimonials"
            className="
              inline-flex
              rounded-full
              bg-[#8ca660]
              px-8
              py-4
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-[#8ca660]/20
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#86a559]
            "
          >
            VIEW ALL TESTIMONIALS
          </Link>
        </div>
      </div>
    </section>
  );
}