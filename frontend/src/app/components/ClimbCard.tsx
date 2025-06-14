import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";
import MediaComponent from "./Media";

export type Props = {
  color: string;
  thumbnail?: Media;
  climbType: string;
  place: string;
  difficulty: string;
};

const borderColor: Record<string, string> = {
  grön: "border-[#A3BAA9]",
  blå: "border-[#97C6E8]",
  röd: "border-[#F58F8F]",
  svart: "border-[#4d4d4d]",
};

export default function ClimbCard({
  color,
  thumbnail,
  climbType,
  place,
  difficulty,
}: Props) {
  return (
    <>
      <div
        className={`cursor-pointer object-cover relative group overflow-hidden rounded-0 hover:rounded-2xl transition-all duration-600 border-6 w-[200px] h-[200px] ${
          borderColor[color] || "border-gray-300"
        }`}
      >
        {thumbnail?.url ? (
          <>
            <MediaComponent
              media={thumbnail}
              alt={"no thumbnail"}
              className={`w-[200px] h-[200px] object-cover`}
            />
          </>
        ) : (
          <div className={`bg-gray-400 w-[200px] h-[200px]`} />
        )}
        {/* Hover-overlay  */}
        <div className="absolute inset-0 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-600 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold uppercase">{climbType}</h3>
          <div className="flex items-center gap-1 mt-1">
            {/* lägg till svårighet i strapi o sen här */}
            <span className={`w-2 h-2 rounded-full bg-white border border-1 border-white`} />
            <span
              className={`w-2 h-2 rounded-full border border-1 border-white ${
                difficulty === "medium" || difficulty === "hard"
                  ? "bg-white"
                  : "bg-white/0"
              }`}
            />

            <span
              className={`w-2 h-2 rounded-full border border-1 border-white ${
                difficulty === "hard" ? "bg-white" : "bg-white/0"
              }`}
            />
          </div>
          <p className="pt-5 text-xs mt-2 text-white/90">{place}</p>
        </div>
      </div>
    </>
  );
}
