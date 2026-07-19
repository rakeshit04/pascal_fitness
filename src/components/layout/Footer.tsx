import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#d4dab4] px-6 py-10 text-[#1F1F1F] md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight text-[#8ca660]">
            PASCAL fitness
          </h3>

          <p className="mt-3 ">
            Transform your body. Transform your life.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 md:items-end">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-3 transition-all duration-300 hover:bg-[#C04E60] hover:text-white"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-3 transition-all duration-300 hover:bg-[#C04E60] hover:text-white"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-3 transition-all duration-300 hover:bg-[#C04E60] hover:text-white"
            >
              <FaYoutube size={20} />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:contact@pascalfitness.com"
            className="flex items-center gap-3  transition hover:text-[#FFAE56]"
          >
            <FaEnvelope />
            contact@pascalfitness.com
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3  transition hover:text-[#FFAE56]"
          >
            <FaPhoneAlt />
            +971 4 123 4567
          </a>
        </div>
      </div>
    </footer>
  );
}