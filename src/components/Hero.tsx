import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import collage from "@/assets/hero-collage.jpg";
import art2 from "@/assets/art-2.jpg";
import research from "@/assets/research.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.p
            className="eyebrow mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Vol. 01 — An Editorial Practice
          </motion.p>

          <h1 className="display-xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
              className="block"
            >
              Art as a Lens
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 }}
              className="block italic-serif"
              style={{ color: "var(--burgundy)" }}
            >
              on Inequality.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Exploring how value is created, perceived, and distributed —
            through painting, teaching, and quiet research at the intersection
            of creativity and economics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-[var(--forest)] transition-colors duration-500"
            >
              View My Work
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-foreground/30 text-sm tracking-wide hover:border-foreground transition-colors story-link"
            >
              Read Research
            </Link>
          </motion.div>
        </div>

        {/* Collage */}
        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh]">
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
            className="absolute inset-0"
          >
            <img src={collage} alt="" className="w-full h-full object-cover object-center" />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.9 }}
            className="absolute -left-10 bottom-10 w-40 md:w-56 aspect-[3/4] shadow-2xl ring-1 ring-border/40 hidden md:block"
          >
            <img src={art2} alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="absolute -right-6 top-6 w-32 md:w-44 aspect-[4/3] shadow-2xl ring-1 ring-border/40 hidden md:block bg-background"
          >
            <img src={research} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="eyebrow">Scroll</span>
        <motion.div
          className="w-px h-10 bg-foreground/40 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
