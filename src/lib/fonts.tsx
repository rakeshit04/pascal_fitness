import { Barlow_Condensed, Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const montserrat = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});