import { motion } from "framer-motion";
import { INTRO_PHOTO } from "../config/assets";

const DOHNALUV_MLYN_URL =
  "https://www.google.com/maps/place/Dohnal%C5%AFv+ml%C3%BDn/@49.1616334,17.2152273,17z/data=!3m1!4b1!4m6!3m5!1s0x47131d83961caf25:0xbafdfca8a9efeb3c!8m2!3d49.1616299!4d17.2178022!16s%2Fg%2F11h1dsspgy?coh=277534&entry=tts&g_ep=EgoyMDI1MTEwNC4xIMuAESoASAFQAw%3D%3D&skid=27405a81-bd51-4619-9c86-c9075cf7e285";
const DOTAZNIK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc8Ix3-Qtno4Ech8SKL8INQLV75agliF3k7uJ3zn18u7u-T9Q/viewform";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

function StarDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M40 0 C44 30 50 36 80 40 C50 44 44 50 40 80 C36 50 30 44 0 40 C30 36 36 30 40 0Z" />
    </svg>
  );
}

export default function SectionIntro() {
  return (
    <motion.section
      id="intro"
      className="scroll-mt-20 flex min-h-[70vh] flex-col justify-center px-6 py-16 md:py-20"
      {...reveal}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header */}
        <h2
          className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-dark md:mb-16 md:text-5xl lg:text-6xl"
        >
          BUDE SVATBAAAAAAAA!
        </h2>

        {/* One row: image 1/3 left (natural aspect), text 2/3 right */}
        <div className="grid min-h-[320px] grid-cols-1 items-start gap-10 md:min-h-[50vh] md:grid-cols-3 md:gap-14">
          <div className="relative md:col-span-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={INTRO_PHOTO}
                alt="Vali & Tomáš"
                className="block h-auto w-full max-w-full"
              />
            </div>
            <StarDecor className="absolute -bottom-2 -left-2 h-14 w-14 text-peach opacity-90 md:h-16 md:w-16" />
            <StarDecor className="absolute -right-2 top-1/4 h-10 w-10 text-peach opacity-70 md:h-12 md:w-12" />
          </div>

          <div className="relative flex flex-col justify-center md:col-span-2">
            <p className="text-xl leading-relaxed text-dark md:text-2xl lg:text-3xl">
              Moravská veselka Pražáků se blíží a my tě, ty magore, chceme u toho!
            </p>
            <p className="mt-6 text-xl leading-relaxed text-dark md:mt-8 md:text-2xl lg:text-3xl">
              Svatba se bude konat 22.-24.7.2026 na{" "}
              <a
                href={DOHNALUV_MLYN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-dark underline decoration-2 underline-offset-2 transition-colors hover:text-accent"
              >
                Dohnalově mlýně
              </a>
              .
            </p>
            <p className="mt-6 text-xl leading-relaxed text-dark md:mt-8 md:text-2xl lg:text-3xl">
              Abychom o tvojí účasti zjistili co nejvíce informací, hoď nám odpovědi do dotazníku{" "}
              <a
                href={DOTAZNIK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-dark underline decoration-2 underline-offset-2 transition-colors hover:text-accent"
              >
                hýr
              </a>
              .
            </p>
            <StarDecor className="absolute -top-2 right-4 h-12 w-12 text-peach opacity-80 md:h-14 md:w-14" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
