import { Media } from "@/types/media";
import { MediaItem } from "@/types/mediaItem";

export type Props = {
  color: string;
  thumbnail?: Media;
  climbType: string;
  place: string;
};

export default function ClimbCard({
  color,
  thumbnail,
  climbType,
  place,
}: Props) {
  return (
    <>
      {" "}
      <div className="">
        {thumbnail?.url ? (
          <img
            src={`http://localhost:1337${thumbnail.url}`}
            alt={"no thumbnail"}
            className=" w-[200px] h-[200px]   object-cover rounded-0 shadow-sm hover:rounded-2xl transition-all duration-500"
          />
        ) : (
          <div className=" w-[200px] h-[200px] object-cover rounded-0 shadow-sm hover:rounded-2xl transition-all bg-[#D6D2FA]  duration-500" />
        )}
      </div>
      <div className="relative">
        bild 
      </div>
    </>
  );
}
