"use client";

import { useEffect, useState } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type TypedWordProps = {
  children: string;
  className: string;
  delayMs: number;
  x: number | MotionValue<string>;
  reducedMotion: boolean | null;
};

function TypedWord({
  children,
  className,
  delayMs,
  x,
  reducedMotion,
}: TypedWordProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCharacters(children.length);
      return;
    }

    setVisibleCharacters(0);
    let typingTimer: ReturnType<typeof setInterval> | undefined;
    const startTimer = setTimeout(() => {
      let characterCount = 0;
      typingTimer = setInterval(() => {
        characterCount += 1;
        setVisibleCharacters(characterCount);

        if (characterCount === children.length && typingTimer) {
          clearInterval(typingTimer);
        }
      }, 80);
    }, delayMs);

    return () => {
      clearTimeout(startTimer);
      if (typingTimer) clearInterval(typingTimer);
    };
  }, [children, delayMs, reducedMotion]);

  const isTyping = !reducedMotion && visibleCharacters < children.length;

  return (
    <motion.span className={className} style={{ x }}>
      {children.slice(0, visibleCharacters)}
      {isTyping && (
        <motion.span
          className="typewriter-caret"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}

export function BackgroundTypography() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const driftRight = useTransform(scrollYProgress, [0, 1], ["-2%", "8%"]);
  const driftLeft = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-12 top-[38rem] z-0 flex select-none flex-col justify-between overflow-hidden sm:top-[30rem]"
    >
      <TypedWord
        className="background-word background-word-solid ml-[3%] self-start"
        delayMs={150}
        x={prefersReducedMotion ? 0 : driftRight}
        reducedMotion={prefersReducedMotion}
      >
        Full Stack
      </TypedWord>
      <TypedWord
        className="background-word background-word-solid mr-[3%] self-end"
        delayMs={1100}
        x={prefersReducedMotion ? 0 : driftLeft}
        reducedMotion={prefersReducedMotion}
      >
        Engineer
      </TypedWord>
      <TypedWord
        className="background-word background-word-solid ml-[3%] self-start"
        delayMs={2000}
        x={prefersReducedMotion ? 0 : driftRight}
        reducedMotion={prefersReducedMotion}
      >
        Building
      </TypedWord>
      <TypedWord
        className="background-word background-word-solid mr-[3%] self-end"
        delayMs={2900}
        x={prefersReducedMotion ? 0 : driftLeft}
        reducedMotion={prefersReducedMotion}
      >
        Ideas
      </TypedWord>
    </div>
  );
}
