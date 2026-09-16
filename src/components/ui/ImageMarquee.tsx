import Image from "next/image";

export type MarqueeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ImageMarquee({ images }: { images: MarqueeImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
      <div className="flex items-center gap-8 w-max animate-marquee-ltr group-hover:[animation-play-state:paused]">
        {[...images, ...images].map((img, i) => (
          <div key={`${img.src}-${i}`} className="h-64 shrink-0 flex items-center bg-paper shadow-sm">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              unoptimized
              className="h-64 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
