"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  delayBase?: number;
};

export default function AnimatedHeading({
  text,
  className = "",
  delayBase = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.3em]"
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className={`hero-letter inline-block ${
                inView ? "hero-letter-play" : ""
              }`}
              style={{
                animationDelay: `${
                  delayBase +
                  (wordIndex * 5 + charIndex) * 0.05
                }s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}