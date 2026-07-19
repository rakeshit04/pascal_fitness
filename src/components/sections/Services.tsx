"use client";

import Image from "next/image";
import AnimatedHeading from "../ui/AnimatedHeading";
import { useState } from "react";

const services = [
  {
    title: "BODY RECOMPOSITION",
    image: "/service1.jpeg",
    description:
      "Lose chest fat, belly fat and build lean muscle.",
  },
  {
    title: "WEIGHT LOSS",
    image: "/service2.jpeg",
    description:
      "Drop unwanted fat, improve fitness and boost confidence.",
  },
  {
    title: "LEAN GAINING",
    image: "/service3.jpeg",
    description:
      "Gain lean muscle without excess fat and build an athletic physique.",
  },
  {
    title: "PCOD/THYROID FAT LOSS",
    image: "/service4.jpeg",
    description:
      "Fix hormones, burn stubborn fat and achieve a toned body.",
  },
];

export default function Services() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section
      id="services"
      className="bg-[#FAFAFA] px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            Our Services
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-[#1C181B] sm:text-5xl lg:text-6xl">
            <AnimatedHeading
              text="My Services"
              delayBase={0.2}
            />
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#666666] sm:text-lg">
            World-class fitness coaching designed to help you
            build strength, lose fat and transform your lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const isOpen = openCard === index;

            return (
              <div
                key={service.title}
                onClick={() => toggleCard(index)}
                className="group relative h-[320px] cursor-pointer overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:640px) 100vw,
                         (max-width:1024px) 50vw,
                         25vw"
                  className={`object-cover transition duration-700 ${
                    isOpen ? "scale-110" : ""
                  } lg:group-hover:scale-110`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isOpen
                      ? "bg-gradient-to-t from-[#1C181B]/90 via-[#1C181B]/40 to-transparent"
                      : "bg-gradient-to-t from-[#1C181B]/70 via-transparent to-transparent"
                  } lg:group-hover:bg-gradient-to-t lg:group-hover:from-[#1C181B]/90 lg:group-hover:via-[#1C181B]/40 lg:group-hover:to-transparent`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className={`text-xl font-black uppercase text-white transition-all duration-300 ${
                      isOpen ? "-translate-y-12" : ""
                    } lg:group-hover:-translate-y-12`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`absolute bottom-6 left-6 right-6 text-sm leading-relaxed text-white/90 transition-all duration-300 ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    } lg:group-hover:translate-y-0 lg:group-hover:opacity-100`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#8ca660]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}