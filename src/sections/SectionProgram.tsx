import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

const BLOB_COLORS = {
  peach: "#f6c3ae",
  orange: "#f0743e",
  yellow: "#f6e3b3",
} as const;

const days = [
  {
    label: "STŘEDA",
    sub: "PŘÍPRAVY",
    bg: BLOB_COLORS.peach,
    textColor: "text-dark",
    text: "Od 13:00 na mlýně rádi přivítáme dobrovolníky, kteří se nebojí PPčka = práce a pohody (né prvně pochcat).",
    borderRadius: "58% 42% 52% 48% / 48% 58% 42% 52%",
  },
  {
    label: "ČTVRTEK",
    sub: "PAŘBA",
    bg: BLOB_COLORS.orange,
    textColor: "text-white",
    text: "V poledne se (snad haha) vezmeme, budeme hodně jíst, pít, tančit, povídat si, hrát hry a veselit se.",
    borderRadius: "52% 48% 48% 52% / 50% 52% 48% 50%",
  },
  {
    label: "PÁTEK",
    sub: "ODJEZD",
    bg: BLOB_COLORS.yellow,
    textColor: "text-dark",
    text: "Probudíme se s kócou, dáme snídku, do 12:00 všecko uklidíme a mizíme dom.",
    borderRadius: "48% 52% 55% 45% / 55% 48% 45% 52%",
  },
];

export default function SectionProgram() {
  return (
    <motion.section
      id="program"
      className="scroll-mt-20 px-6 py-10 md:py-14"
      {...reveal}
    >
      <div className="relative mx-auto flex min-h-0 max-w-6xl flex-col justify-center py-4 md:py-6">
        <h2 className="mb-8 text-center text-4xl font-bold uppercase text-accent md:mb-10 md:text-6xl lg:text-7xl">
          Program
        </h2>

        {/* Day bubbles – irregular ellipse / blob shapes */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12 lg:gap-16">
          {days.map((d) => (
            <motion.div
              key={d.label}
              className={`${d.textColor} w-full max-w-sm px-8 py-10 text-center shadow-lg md:max-w-md md:px-10 md:py-12 lg:max-w-lg lg:px-12 lg:py-14`}
              style={{
                backgroundColor: d.bg,
                borderRadius: d.borderRadius,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
                {d.label}
              </p>
              <p className="mb-4 text-base font-semibold uppercase tracking-wide md:text-lg lg:mb-5 lg:text-xl">
                {d.sub}
              </p>
              <p className="text-base leading-relaxed md:text-lg lg:text-xl">
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
