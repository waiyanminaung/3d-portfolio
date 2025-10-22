import Button from "@/components/ui/Button";
import FloatingFooterIcons from "./FloatingFooterIcons";

const Footer = () => {
  return (
    <div className="relative bg-transparent flex items-center justify-center overflow-hidden pb-20 pt-36 ">
      <div className="lg:block hidden">
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
      </div>

      <div className="text-center z-10 px-4 max-w-lg mx-auto container">
        <div className="mb-32">
          <div className="relative mb-8">
            <div className="rounded-full sm:size-32 size-28 lg:w-36 lg:h-36 mx-auto overflow-hidden bg-white">
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
            className="bg-gray-50 sm:w-20 sm:h-8 size-10 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700 sm:inline-block hidden">
              LinkedIn
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="sm:hidden w-5 h-5"
            >
              <path
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-gray-50 sm:w-20 sm:h-8 size-10 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700 sm:inline-block hidden">
              WhatsApp
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="sm:hidden w-5 h-5"
            >
              <path
                d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-gray-50 sm:w-20 sm:h-8 size-10 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700 sm:inline-block hidden">
              Phone
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              className="sm:hidden w-5 h-5"
            >
              <path
                d="M6.08424 11.9158C8.23984 14.0713 11.0787 15.5432 14.2579 15.9883C14.75 16.0572 15.2109 15.726 15.3356 15.245L15.9651 12.8182C16.0879 12.3447 15.8502 11.8518 15.4031 11.6532L12.5339 10.3789C12.1126 10.1918 11.618 10.3169 11.3364 10.6818L10.4574 11.8206C9.57384 11.3015 8.76404 10.6737 8.04524 9.95481C7.32624 9.23601 6.69846 8.42621 6.17946 7.54261L7.31825 6.6636C7.68315 6.3819 7.80824 5.88741 7.62114 5.46611L6.34685 2.597C6.14825 2.1499 5.65534 1.9121 5.18184 2.0349L2.75505 2.6644C2.27415 2.7892 1.94285 3.25001 2.01175 3.74211C2.45685 6.92121 3.92864 9.76021 6.08424 11.9158Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-gray-50 sm:w-20 sm:h-8 size-10 lg:w-24 lg:h-10 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-xs lg:text-sm font-medium text-gray-700 sm:inline-block hidden">
              Email
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              className="sm:hidden w-5 h-5"
            >
              <path
                d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733"
                fill="none"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                data-color="color-2"
              ></path>
              <rect
                x="1.75"
                y="3.25"
                width="14.5"
                height="11.5"
                rx="2"
                ry="2"
                transform="translate(18 18) rotate(180)"
                fill="none"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></rect>
            </svg>
          </a>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>Created with</span>
            <span className="text-white">Passion</span>
          </div>
          <div className="w-px h-4 bg-white mx-2 sm:block hidden"></div>
          <div className="flex items-center gap-2">
            <span>Design & Developed by</span>
            <span className="text-white">Wai Yan Min Aung</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
