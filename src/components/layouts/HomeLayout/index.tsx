import { HomeScence } from "@/components/3d/scence";

export default function HomeLayout() {
  return (
    <>
      <HomeScence />

      <div className="fixed top-2/4 w-full container left-0 right-0 mx-auto -translate-y-2/4">
        <div className="grid grid-cols-[40%_1fr_30%] items-center">
          <div className="text-left">
            <h1 className="text-8xl font-semibold font-smart-heading">
              Wai Yan
              <br />
              Min Aung
            </h1>
          </div>
          <div className="h-0" />
          <div className="text-center">
            <h1 className="font-code text-start text-2xl font-light">
              I'm experienced in Web Development and have a passion for crafting
              digital experiences.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
