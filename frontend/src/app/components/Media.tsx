import { Media } from "@/types/media";

type Props = {
  media?: Media;
  alt?: string;
  className?: string;
};

export default function MediaComponent({ media, alt = "image", className = "" }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!media?.url) {
    return (
      <div
        className={`bg-gray-200 w-[200px] h-[200px] rounded-md ${className}`}
      />
    );
  }

  return (
    <img
      src={`${baseUrl}${media.url}`}
      alt={alt}
      className={className}
    />
  );
}
