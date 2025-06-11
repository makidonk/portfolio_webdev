import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";

export type Climb = {
  id: number;
  title: string;
  description: string;
  color?: string;
  thumbnail?: Media;
  firstclimb?: string;
  lastclimb?: string;
  media_items?: MediaItem[];
};


export async function fetchClimbs(): Promise<Climb[]> {
  const res = await fetch("http://localhost:1337/api/climbs?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch climbs");
  }

  const json = await res.json();
  return json.data;
}
