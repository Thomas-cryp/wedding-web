import { HERO_VIDEO } from "../config/assets";

export default function Hero() {
  return (
    <section className="relative min-h-[80dvh] w-full border-0 border-none md:min-h-screen">
      <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-black">
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-label="Hero background"
        />
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
      </div>

      {/* Small wave at bottom – visible transition to blue section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-12 w-full md:h-16 lg:h-20"
        aria-hidden
      >
        <svg
          className="block h-full w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120 C240 80 480 120 720 80 C960 40 1200 80 1440 120 L1440 120 L0 120 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
