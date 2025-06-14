import { Media } from "@/types/media";

export type Project = {
  id: number;
  title: string;
  description: string;
  image?: Media;
};


export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:1337/api/projects?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const json = await res.json();
  return json.data;
}
