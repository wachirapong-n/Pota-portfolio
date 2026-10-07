import Image from "next/image";

type KnotOverlayProps = {
  className?: string;
  position?: "top-left" | "top-right";
};

export default function KnotOverlay({
  className = "",
  position = "top-right",
}: KnotOverlayProps) {
  const positionClass = position === "top-left" ? "left-3 top-3" : "right-3 top-3";

  return (
    <Image
      src="/images/arrows/knot.svg"
      alt=""
      aria-hidden="true"
      width={36}
      height={39}
      className={`pointer-events-none absolute z-20 h-10 w-10 object-contain ${positionClass} ${className}`}
    />
  );
}
