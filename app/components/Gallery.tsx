"use client";

import { artworks } from "@/data/artworks";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

import "yet-another-react-lightbox/styles.css";

const slides = artworks.map((a) => ({
  src: a.src,
  width: a.width,
  height: a.height,
  alt: a.title,
}));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="portfolio" className="px-8 py-8">
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {artworks.map((artwork, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative block w-full overflow-hidden rounded-sm break-inside-avoid cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Image
              src={artwork.src}
              alt={artwork.title}
              width={artwork.width}
              height={artwork.height}
              className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 ease-out flex items-end">
              <div className="w-full px-4 py-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <p className="text-white font-display text-lg leading-snug">
                  {artwork.title}
                </p>
                <p className="text-white/80 text-xs mt-0.5">{artwork.year}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
