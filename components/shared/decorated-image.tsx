import Image from "next/image";
import { Heart } from "lucide-react";

type DecoratedImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  hasHeart?: boolean;
  className?: string;
  frameClassName?: string;
};

export default function DecoratedImage({
  src,
  alt,
  sizes,
  priority = false,
  hasHeart = false,
  className = "",
  frameClassName = "aspect-[4/4.4]",
}: DecoratedImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-primary/15"
        aria-hidden="true"
      />
      <div
        className={`relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_55px_-30px_rgba(1,21,62,0.45)] ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="rounded-[1.6rem] object-cover"
        />
      </div>
      {hasHeart && (
        <div
          className="absolute -right-4 top-8 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
          aria-hidden="true"
        >
          <Heart size={23} />
        </div>
      )}
    </div>
  );
}
