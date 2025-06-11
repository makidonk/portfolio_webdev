import { Media } from "@/types/media";

type Props = {
  title: string;
  description: string;
  image?: Media;
};

export default function ProjectCard({ title, description, image }: Props) {
  console.log("Image data:", image);

  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      {image?.url && (
        <img
          src={`http://localhost:1337${image.url}`}
          alt={title}
          className="rounded-xl w-full mt-4"
        />
      )}
    </div>
  );
}
