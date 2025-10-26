import { cn } from "@/utils";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  LazyLoadImage,
  type LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    <div className={cn("relative overflow-hidden", props.className)}>
      {!isLoaded && blurHash && (
        <Blurhash
          hash={blurHash.hash}
          resolutionX={blurHash.resolutionX || 32}
          resolutionY={blurHash.resolutionY || 32}
          punch={blurHash.punch || 1}
          width={props.width}
          height={props.height}
          className={cn(
            "max-w-full max-h-full inset-0",
            props.className,
            "!absolute"
          )}
        />
      )}

      <LazyLoadImage
        src={src}
        alt={alt}
        afterLoad={() => {
          setIsLoaded(true);
        }}
        {...props}
        width={props.width}
        height={props.height}
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
      />
    </div>
  );
};

export default OptimizedImage;
