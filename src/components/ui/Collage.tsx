import Image from "next/image";

export type CollageImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function Collage({ images }: { images: CollageImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto columns-2 gap-1.5 [column-fill:balance]">
      {images.map((img) => (
        <div key={img.src} className="mb-1.5 break-inside-avoid shadow-sm bg-paper">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            unoptimized
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  );
}
