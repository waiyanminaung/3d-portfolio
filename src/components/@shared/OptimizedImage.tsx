import { cn } from "@/utils";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
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
  className,
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
            className,
            "!absolute inset-0 transition-opacity duration-500 overflow-hidden",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        width={props.width}
        height={props.height}
        className={cn(
          "overflow-hidden filter transition-all duration-300 ease-out",
          isLoaded ? "filter-none" : "blur-lg",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
