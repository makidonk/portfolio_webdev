import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";

export type Climb = {
  id: number;
  color: string;
  climbType: string;
  thumbnail?: Media;
  media_items?: MediaItem[];
  place: string;
  difficulty: string;
  description: string;
};

export async function fetchClimbById(id: number): Promise<Climb | null> {
  const res = await fetch(`${process.env.API_URL}/climbs?populate=*`);

  if (!res.ok) return null;

  const json = await res.json();
  const all = json.data;

  const match = all.find((climb: any) => climb.id === id);

  return match ?? null;
}
