import { JSX } from "preact";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface IImage {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href?: string;
  /** @description Image's alt text */
  alt: string;
  /** @description sizes */
  imageSize: {
    /** @description width desktop */
    wdesktop: number;
    /** @description height desktop */
    hdesktop: number;
    /** @description width mobile */
    wmobile: number;
    /** @description height mobile */
    hmobile: number;
  };
}

export interface Props extends JSX.HTMLAttributes<HTMLImageElement> {
  image?: IImage;
  preloadImage?: boolean;
}

export default function Image({ image, preloadImage: preload }: Props) {
  if (!image) return null;

  const {
    desktop,
    mobile,
    alt,
    imageSize: size,
  } = image;

  return (
    <Picture class="block" preload={preload}>
      <Source
        media="(max-width: 767px)"
        fetchPriority={preload ? "high" : "auto"}
        src={mobile}
        width={size.wmobile}
        height={size.hmobile}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={preload ? "high" : "auto"}
        src={desktop}
        width={size.wdesktop}
        height={size.wdesktop}
      />
      <img
        loading={preload ? "eager" : "lazy"}
        src={desktop}
        alt={alt}
      />
    </Picture>
  );
}
