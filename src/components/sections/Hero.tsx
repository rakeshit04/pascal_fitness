"use client";

import { useRef } from "react";
import { bebas, montserrat } from "@/lib/fonts";
import AnimatedHeading from "../ui/AnimatedHeading";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  return (
    <section
      id="home"
      className="bg-[#FAFAFA] px-6 pt-28 pb-16 md:px-12 lg:px-24 lg:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side - Text */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {/* Tag */}
            <p
              className={`${montserrat.className}
              text-sm font-semibold uppercase tracking-[0.25em]
              text-[#8ca660]`}
            >
              PROFESSIONAL FITNESS TRAINER
            </p>

            {/* Heading */}
            <h1
              className={`${bebas.className}
              mt-6 text-5xl leading-[0.9]
              tracking-tight text-[#1C181B]
              sm:text-7xl lg:text-8xl`}
            >
              <AnimatedHeading
                text="MASTER YOUR BODY. TRANSFORM YOUR LIFE."
                delayBase={0.2}
              />
            </h1>

            {/* Description */}
            <p
              className={`${montserrat.className}
              mx-auto mt-6 max-w-2xl
              text-sm leading-8 text-[#666666]
              sm:text-lg lg:mx-0`}
            >
              Stop guessing and start transforming. Get personalized
              training, custom nutrition plans and one-on-one coaching
              designed to help you build strength and achieve your dream
              physique faster.
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="
                mt-10 inline-flex items-center justify-center
                rounded-full bg-[#8ca660]
                px-8 py-4 text-xl font-semibold text-white
                shadow-lg shadow-[#8ca660]/20
                transition-all duration-300
                hover:scale-105 hover:bg-[#86a559]
              "
            >
              TRANSFORM TODAY
            </a>
          </div>

          {/* Right Side - Video */}
          <div className="w-full lg:w-1/2">
            <div className="mx-auto w-full max-w-[320px] sm:max-w-none">
              <div
                className="
                  relative overflow-hidden
                  rounded-[32px]
                  border border-[#E5E5E5]
                  bg-white
                  shadow-2xl
                "
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onClick={handleVideoClick}
                  className="
                    w-full
                    aspect-[9/16]
                    sm:aspect-video
                    lg:aspect-[4/5]
                    object-cover
                    cursor-pointer
                  "
                >
                  <source src="hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}