import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h1" | "h2" | "p";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (d: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: d },
  }),
};

export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      custom={delay}
    >
      {children}
    </Comp>
  );
}

export function StaggerWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ y: "1.1em", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.05 }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
