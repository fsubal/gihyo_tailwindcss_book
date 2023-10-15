import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { animate } from "framer-motion/dom";

export function AnimatedList({ children }: React.PropsWithChildren) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { opacity: 1 }, { duration: 1 });
  });

  return <ul ref={scope}>{children}</ul>;
}

export function fadeout() {
  const box = document.getElementById("box");
  if (box) {
    animate(box, { opacity: 0 }, { duration: 0.5 });
  }
}
