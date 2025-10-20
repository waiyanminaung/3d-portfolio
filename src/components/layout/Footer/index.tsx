import Button from "@/components/ui/Button";
import FloatingFooterIcons from "./FloatingFooterIcons";

const Footer = () => {
  return (
    <div className="relative bg-transparent flex items-center justify-center overflow-hidden pb-20 pt-36">
      <FloatingFooterIcons
        images={[
          "/images/skill/javascript.svg",
          "/images/skill/docker.svg",
          "/images/skill/git.svg",
          "/images/skill/laravel.svg",
        ]}
      />

      <FloatingFooterIcons
        position="right"
        images={[
          "/images/skill/typescript.svg",
          "/images/skill/github.svg",
          "/images/skill/react.svg",
          "/images/skill/wordpress-light.svg",
        ]}
      />

      <div className="text-center z-10 px-4 max-w-lg mx-auto">
        <div className="mb-32">
          <div className="relative mb-8">
            <div className="rounded-full w-32 h-32 lg:w-36 lg:h-36 mx-auto overflow-hidden bg-white">
              <img
                src="/images/avatar-profile.png"
                alt="Wai Yan Min Aung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-white text-sm lg:text-base leading-relaxed mb-8 max-w-md mx-auto">
            I am the one who moves projects forward and transforms visions into
            reality with precision and passion.
          </p>

          <Button variant="outline">Download Resume</Button>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8 mb-8">
          <a
            href="#"
            className="bg-gray-300 w-20 h-8 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700">
              LinkedIn
            </span>
          </a>
          <a
            href="#"
            className="bg-gray-300 w-20 h-8 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700">
              GitHub
            </span>
          </a>
          <a
            href="#"
            className="bg-gray-300 w-20 h-8 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700">
              Twitter
            </span>
          </a>
          <a
            href="#"
            className="bg-gray-300 w-20 h-8 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700">
              Email
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span>Create with</span>
          <span className="text-white">Passion</span>
          <div className="w-px h-4 bg-white mx-2"></div>
          <span>Developed by</span>
          <span className="text-white">Wai Yan Min Aung</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
