export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "work", label: "Work Experience" },
  { id: "research", label: "Research & Project" },
  { id: "organization", label: "Organizational Experience" },
  { id: "footer", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
