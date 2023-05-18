import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { ComponentChildren } from "preact";

export interface Banner {
  title?: string;
  subtitle?: string;
  image: {
    desktop: LiveImage;
    mobile: LiveImage;
    alt?: string;
    widthDesktop: number;
    heightDesktop: number;
    widthMobile: number;
    heightMobile: number;
  };
}

export interface Props {
  banner: Banner;
  children: ComponentChildren;
}

function BannerWithText({ banner, children }: Props) {
  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture
        preload
        class="col-start-1 col-span-1 row-start-1 row-span-1 "
      >
        <Source
          src={banner.image.mobile}
          width={banner.image.widthMobile}
          height={banner.image.heightMobile}
          media="(max-width: 767px)"
        />
        <Source
          src={banner.image.desktop}
          width={banner.image.widthDesktop}
          height={banner.image.heightDesktop}
          media="(min-width: 767px)"
        />
        <img
          class={`w-screen max-h-[${banner.image.heightDesktop}px] object-fill`}
          src={banner.image.desktop}
          alt={banner.image.alt}
        />
      </Picture>

      {children}
    </div>
  );
}

export default BannerWithText;
