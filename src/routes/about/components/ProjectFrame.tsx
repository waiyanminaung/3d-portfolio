import { cn } from "@/utils";

interface ProjectFrameProps {
  tab?: string;
  no?: number;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Tab = ({ label, className }: { label: string; className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center px-4 py-3.5 border border-vscode-border text-sm relative -bottom-[1px] text-vscode bg-vscode-dark text-vscode-text ",
        "group-[.active]:text-white group-[.active]:bg-vscode-base group-[.active]:!border-b-transparent",
        className
      )}
    >
      <div className="absolute top-0 w-full bg-transparent group-[.active]:bg-vscode-blue h-[1px] left-0 right-0" />
      <img src="/images/skill/react.svg" className="size-4 mr-2 shrink-0" />
      <span className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
        {label}
      </span>
    </div>
  );
};

const ProjectFrame: React.FC<ProjectFrameProps> = ({
  tab = "Untitled",
  no = 1,
  children,
  className,
}) => {
  const tabWidth = 180;
  const left = (no - 1) * tabWidth;
  const paddingLeft = no > 1 ? left - no : left;

  return (
    <div className={cn("flex flex-col group", className)}>
      <div style={{ paddingLeft: `${paddingLeft}px` }}>
        <Tab label={tab} className="w-[180px]" />
      </div>
      {/* Page Content */}
      <div className="border border-vscode-border bg-vscode-base px-6 pt-10 pb-6 text-sm sm:text-base flex-1 text-white relative">
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
          <span>{tab}</span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProjectFrame;
