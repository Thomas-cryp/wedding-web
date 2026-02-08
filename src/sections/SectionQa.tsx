import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { QA_PHOTO } from "../config/assets";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

const qaItems = [
  {
    title: "CESTA + PARKOVÁNÍ",
    text: "Svatba bude na Dohnalově mlýně ve vsi Zástřižly. Autem a obytňákem se zaparkuje u mlýna, po D1 to zvládnete. Kdo neřídí, toho ve středu odpoledne svezeme.",
  },
  {
    title: "+ JEDNIČKY",
    text: "Pozvali jsme jen blízké lidi, které známe. Když u tvého jména není jednička, zůstaň tentokrát sám/sama – díky za pochopení. ♥︎",
  },
  {
    title: "SPANÍ",
    text: "Postelí je na místě málo. Většina z vás bude spát ve stanu, v autě nebo v hamace – kempujeme. Kdo nechce pod širákem, můžeme doporučit ubytování v okolí.",
  },
  {
    title: "CHÁLKY",
    text: "Hladovět nebudete. Ve středu večer, ve čtvrtek oběd i večer a v pátek snídaně – to máme. V pátek u snídaně budeme rádi za pomoc.",
  },
  {
    title: "DARY",
    text: "Nejvíc pro nás znamená, že tam budete. Když nám i tak chcete přispět, nejvíc potěší příspěvek do „krabice na cestu“. ✨",
  },
];

export default function SectionQa() {
  return (
    <motion.section
      id="qa"
      className="scroll-mt-20 px-6 py-16 md:py-20"
      {...reveal}
    >
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-stretch">
        {/* Left: lavender block + photo (title overlay), one row */}
        <div
          className="relative flex shrink-0 flex-col md:w-[45%] lg:w-[40%]"
          style={{ backgroundColor: "var(--color-lavender)" }}
        >
          <div className="relative ml-4 mt-4 flex-1 md:ml-6 md:mt-6 lg:ml-8 lg:mt-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={QA_PHOTO}
                alt="Vali & Tomáš"
                className="block h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" aria-hidden />
              <h2 className="absolute left-4 top-4 text-xl font-bold uppercase leading-tight text-accent drop-shadow-md md:left-6 md:top-6 md:text-2xl lg:text-3xl">
                VY SE PTÁTE,
                <br />
                MY ODPOVÍDÁME
              </h2>
            </div>
          </div>
        </div>

        {/* Right: light blue block + text info, one row */}
        <div
          className="relative flex flex-1 flex-col justify-center px-6 py-10 md:min-h-0 md:px-10 md:py-12 lg:px-14"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="space-y-8 md:space-y-10">
            {qaItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="border-b-2 border-dark/20 pb-2 text-lg font-bold uppercase tracking-wide text-dark md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-dark/90 md:text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-end gap-2 md:mt-16">
            <p className="text-sm font-bold uppercase tracking-wide text-dark/80 md:text-base">
              MORE INFO SOON
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
