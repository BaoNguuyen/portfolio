"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animFrame: number;
    let target = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.12);
      current.y = lerp(current.y, target.y, 0.12);
      setRingPos({ x: current.x, y: current.y });
      animFrame = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], .project-card, .testimonial-card")) {
        setHovering(true);
      }
    };

    const onLeave = () => setHovering(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${hovering ? "hovering" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y }}
      />
    </>
  );
}
