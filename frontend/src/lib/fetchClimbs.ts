import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";

export type Climb = {
  id: number;
  description: string;
  color: string;
  climbType: string;
  thumbnail?: Media;
  media_items?: MediaItem[];
  place: string;
  difficulty: string;
};


export async function fetchClimbs(): Promise<Climb[]> {
  const res = await fetch("http://localhost:1337/api/climbs?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch climbs");
  }

  const json = await res.json();
  return json.data;
}
