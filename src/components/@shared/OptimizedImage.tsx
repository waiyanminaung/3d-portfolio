import { cn } from "@/utils";
import { useState } from "react";
import {
  LazyLoadImage,
  type LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Blurhash } from "react-blurhash";

interface OptimizedImageProps extends LazyLoadImageProps {
  blurHash?: {
    hash: string;
    resolutionX?: number;
    resolutionY?: number;
    punch?: number;
  };
}

const OptimizedImage = ({
  src,
  alt,
  blurHash,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {isLoaded === false && blurHash && (
        <Blurhash
          hash={blurHash.hash}
          resolutionX={blurHash.resolutionX ?? 32}
          resolutionY={blurHash.resolutionY ?? 32}
          punch={blurHash.punch ?? 1}
          width="100%"
          height="100%"
          className={cn(
            props.className,
            "!absolute inset-0 transition-opacity duration-500 overflow-hidden",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        />
      )}
      <LazyLoadImage
        src={src}
        alt={alt}
        afterLoad={() => setIsLoaded(true)}
        effect="opacity"
        {...props}
        width={props.width}
        height={props.height}
        wrapperClassName={cn(
          "filter transition-all duration-300 ease-out",
          isLoaded ? "filter-none" : "blur-lg"
        )}
      />
    </div>
  );
};

export default OptimizedImage;
