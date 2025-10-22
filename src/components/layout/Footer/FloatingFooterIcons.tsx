export default function FloatingFooterIcons({
  images,
  position = "left",
}: {
  images: string[];
  position?: "left" | "right";
}) {
  const isRight = position === "right";

  return (
    <div
      className={`absolute ${isRight ? "right-0" : "left-0"} top-1/2 -translate-y-1/2`}
    >
      {/* Top small icon */}
      <div
        className={`absolute bg-white rounded-lg shadow-lg w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 p-2 sm:p-3 lg:p-4 -top-32 lg:-top-44 ${
          isRight ? "right-0" : "left-0"
        }`}
      >
        <img
          src={images[0]}
          alt="JavaScript"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Large Docker icon */}
      <div
        className={`absolute bg-white rounded-lg shadow-lg w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 p-3 sm:p-4 lg:p-5 top-8 lg:top-12 ${
          isRight
            ? "right-12 sm:right-16 lg:right-44"
            : "left-12 sm:left-16 lg:left-44"
        }`}
      >
        <img
          src={images[1]}
          alt="Docker"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Medium icon */}
      <div
        className={`absolute bg-white rounded-lg shadow-lg w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 p-2 lg:p-3 -top-12 lg:-top-28 ${
          isRight
            ? "right-20 sm:right-24 lg:right-36"
            : "left-20 sm:left-24 lg:left-36"
        }`}
      >
        <img
          src={images[2]}
          alt="Git"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom icon */}
      <div
        className={`absolute bg-white rounded-lg shadow-lg w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 p-2 sm:p-3 lg:p-4 top-32 lg:top-40 ${
          isRight ? "right-0" : "left-0"
        }`}
      >
        <img
          src={images[3]}
          alt="Laravel"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
