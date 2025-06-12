import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";

export type Props = {
  color: string;
  thumbnail?: Media;
  climbType: string;
  place: string;
};

export default function ClimbCard({ color, thumbnail, climbType, place }: Props) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{color}</h2>
      <h2 className="text-l font-semibold">{climbType}</h2>
     {thumbnail?.url ? (
        <img
          src={`http://localhost:1337${thumbnail.url}`}
          alt={"no thumbnail"}
          className="rounded-xl w-full mt-4 h-100 object-contain"
        />
      ) : (
        <div
          className="rounded-xl w-full mt-4 bg-gray-200 h-100"
        />
      )
      }
      <h2 className="text-l text-gray-500">📍{place}</h2>
    </div>
  );
}
