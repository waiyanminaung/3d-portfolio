export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  tech_stacks: string[];
}

export interface SelectedProject extends Project {
  tab: string;
  tab_icon: string;
}
