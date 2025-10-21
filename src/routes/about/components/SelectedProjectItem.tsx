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
  const tabWidth = 180;
  const left = (no - 1) * tabWidth;
  const paddingLeft = no > 1 ? left - no : left;

  return (
    <div className={cn("flex flex-col group", className)}>
      {/* Tab  */}
      <div style={{ paddingLeft: `${paddingLeft}px` }}>
        <div
          className={cn(
            "inline-flex items-center px-4 py-3.5 border border-vscode-border text-sm relative -bottom-[1px] text-vscode bg-vscode-dark text-vscode-text z-10",
            "group-[.active]:text-white group-[.active]:bg-vscode-base group-[.active]:!border-b-transparent w-[180px]"
          )}
        >
          <div className="absolute top-0 w-full bg-transparent group-[.active]:bg-vscode-blue h-[1px] left-0 right-0" />
          <img src={data.tab_icon} className="size-4 mr-2 shrink-0" />
          <span className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
            {data.tab}
          </span>
        </div>
      </div>

      {/* Page Content */}
      <div className="border border-vscode-border bg-vscode-base px-6 pt-10 pb-6 text-sm sm:text-base flex-1 text-white relative overflow-hidden">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{data.tab}</span>
        </div>

        <div className="grid grid-cols-[40%_1fr] gap-10 h-full">
          <div className="space-y-8 pt-2">
            <div>
              <h1 className="font-semibold text-vscode-primary mb-2">
                ## {data.name}
              </h1>
              <p className="text-sm leading-6 font-light">{data.description}</p>
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
          <div className="relative h-full overflow-hidden -mr-6">
            <div
              className="aspect-video bg-gray-500 h-full ms-auto rounded-l-xl"
              style={{ backgroundImage: `url(${data.image})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectItem;
