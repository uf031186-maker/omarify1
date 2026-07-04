"use client";

import { motion } from "framer-motion";

type Word = { text: string; gradient?: boolean };

export default function WordReveal({ words }: { words: Word[] }) {
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`inline-block mr-[0.25em] ${
            word.gradient
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple"
              : ""
          }`}
        >
          {word.text}
        </motion.span>
      ))}
    </>
  );
}
