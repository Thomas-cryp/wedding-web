import { motion } from "framer-motion";
import { DRESSCODE_IMAGE } from "../config/assets";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

const PALETTE_COLORS = [
  "#f0743e",
  "#9ab2d4",
  "#f6c3ae",
  "#f6e3b3",
  "#cdbcdb",
  "#aad59e",
];

export default function SectionDressCode() {
  return (
    <motion.section
      id="dresscode"
      className="scroll-mt-20 bg-bg px-6 py-16 md:py-20"
      {...reveal}
    >
      <div className="mx-auto max-w-6xl">
        {/* One row: left = text, right = moodboard image */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left: title + dress code text */}
          <div className="flex-1 md:max-w-xl">
            <h2
              className="mb-6 text-3xl font-bold uppercase md:text-4xl lg:text-5xl"
              style={{ color: "#f0743e" }}
            >
              VOHÁKNUTÍ
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-dark md:text-xl">
            Chceme, aby ses na naší svatbě cítil*a ve své kůži, takže si vem to, v čem je ti příjemně a cítíš se sám/sama sebou. To ti sluší nejvíc!
            Vynech prosím černou a bílou barvu. Černá je smutná a bílou si už někdo zabral - mrkmrk!. 
            Jinak je ale povolený všechno!
            </p>
            <p className="text-lg leading-relaxed text-dark md:text-xl">
              Pro představu přikládáme moodboard oblečení i barev, ať se máš od
              čeho odpíchnout.
            </p>
          </div>

          {/* Right: moodboard image */}
          <div className="mt-8 shrink-0 md:mt-0 md:w-[55%] lg:w-[50%]">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={DRESSCODE_IMAGE}
                alt="Moodboard oblečení a barevná paleta"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Paleta: only color boxes */}
        <motion.div
          className="mt-14 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-6 text-center text-xl font-bold uppercase tracking-wide text-dark md:text-2xl">
            Paleta
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {PALETTE_COLORS.map((color) => (
              <div
                key={color}
                className="h-14 w-24 rounded-xl border-2 border-black md:h-16 md:w-28"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
