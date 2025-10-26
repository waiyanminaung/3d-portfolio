import useDeviceSize from "@/hooks/useDeviceSize";
import type { SelectedProject } from "@/types/Project";
import { cn } from "@/utils";

interface SelectedProjectItemProps {
  data: SelectedProject;
  no?: number;
  className?: string;
}

const SelectedProjectItem: React.FC<SelectedProjectItemProps> = ({
  data,
  no = 1,
  className,
}) => {
  const { width } = useDeviceSize();
  const tabWidth = width > 768 ? 180 : 50;
  const left = (no - 1) * tabWidth;
  const paddingLeft = no > 1 ? left - no : left;

  return (
    <div className={cn("flex flex-col group", className)}>
      {/* Tab  */}
      <div style={{ paddingLeft: `${paddingLeft}px` }}>
        <div
          className={cn(
            "inline-flex items-center px-4 py-3.5 border border-vscode-border text-sm relative -bottom-[1px] text-vscode bg-vscode-dark text-vscode-text z-10",
            "group-[.active]:text-white group-[.active]:bg-vscode-base group-[.active]:!border-b-transparent lg:w-[180px]"
          )}
        >
          <div className="absolute top-0 w-full bg-transparent group-[.active]:bg-vscode-blue h-[1px] left-0 right-0" />
          <img src={data.tab_icon} className="size-4 mr-2 shrink-0" />
          <span className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden md:inline-block hidden">
            {data.tab}
          </span>
        </div>
      </div>

      {/* Page Content */}
      <div className="border border-vscode-border bg-vscode-base sm:px-6 px-4 pt-10 sm:pb-6 pb-4 text-sm sm:text-base flex-1 text-white relative overflow-hidden">
        <div className="flex items-center gap-1 text-xs text-vscode-text mb-2 absolute top-2">
          <span>wyma</span>
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>projects</span>
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{data.tab}</span>
        </div>

        <div className="grid lg:grid-cols-[40%_1fr] gap-10 h-full">
          <div className="md:space-y-8 space-y-4 pt-2">
            <div>
              <h1 className="font-semibold text-vscode-primary mb-2">
                ## {data.name}
              </h1>
              <p className="md:text-sm text-xs leading-6 font-light">
                {data.description}
              </p>
            </div>

            <div>
              <h1 className="font-semibold text-vscode-primary mb-3">
                ## Tech stacks
              </h1>
              <div className="flex gap-2 flex-wrap">
                {data.tech_stacks.map((tech, index) => (
                  <span
                    key={`tech-stack-${index}`}
                    className="px-4 py-2 border border-vscode-border text-white rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-full overflow-hidden lg:-mr-6 lg:block">
            <div
              className="aspect-video lg:bg-gray-500 h-full ms-auto lg:rounded-l-xl bg-contain bg-bottom bg-no-repeat lg:w-auto w-full lg:bg-cover lg:bg-center"
              style={{ backgroundImage: `url(${data.image})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectItem;
