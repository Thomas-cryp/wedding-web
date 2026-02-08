import { motion } from "framer-motion";
import { FOOTER_IMAGE } from "../config/assets";

/* Same irregular blob shapes as SectionProgram – each bubble different (not uniform) */
const BUBBLE_SHAPES = [
  "58% 42% 52% 48% / 48% 58% 42% 52%",
  "52% 48% 48% 52% / 50% 52% 48% 50%",
  "48% 52% 55% 45% / 55% 48% 45% 52%",
] as const;

const BUBBLE_COLORS = ["#f6c3ae", "#cdbcdb", "#aad59e"] as const;

const bubbles = [
  "Těšíme se na tebe nejvíc jak jen to jde!",
  "A ty se můžeš brzo těšit na další updaty naší veselky.",
  "Tak pa!",
];

export default function Footer() {
  return (
    <footer className="w-full bg-bg">
      {/* Bubbles – moved from SectionLast */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
          {bubbles.map((b, i) => (
            <motion.div
              key={b}
              className="max-w-sm px-8 py-5 text-center text-base font-medium shadow-lg md:px-10 md:py-6 md:text-lg"
              style={{
                backgroundColor: BUBBLE_COLORS[i],
                borderRadius: BUBBLE_SHAPES[i],
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer image */}
      <div className="relative w-full">
        <img
          src={FOOTER_IMAGE}
          alt="Vali & Tomáš"
          className="block h-96 w-full object-cover md:h-[32rem] lg:h-[36rem]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <p className="absolute right-8 bottom-6 text-2xl font-bold text-white md:text-3xl">
          Vali &amp; Tomáš
        </p>
      </div>
    </footer>
  );
}
