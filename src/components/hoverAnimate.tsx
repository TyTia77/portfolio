import { useState } from "react";

type animations =
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shakeX"
  | "shakeY"
  | "headShake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat";

export default function HoverAnimate({
  animation,
  loop = false,
  children,
}: Readonly<{
  animation: animations;
  loop?: boolean;
  children?: React.ReactNode;
}>) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`animate__animated ${hovered ? `animate__${animation} ${loop ? "animate__infinite" : ""}` : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
