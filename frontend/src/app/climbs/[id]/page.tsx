import { fetchClimbById } from "@/lib/fetchClimbById";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default async function ClimbPage({ params }: Props) {
  const climb = await fetchClimbById(Number(params.id));

  return (
    <main className="p-6 space-y-2">
      {!climb ? (
        <div>
          <h1 className="text-xl font-semibold text-red-600">Climb not found</h1>
        </div>
      ) : (
        <>
          <Link href={"/climbs"}>tillbaka</Link>
          <h1 className="text-2xl font-bold">
            {climb.color} – {climb.climbType}
          </h1>
          <p className="text-sm italic">{climb.place}</p>
          <p>Svårighet: {climb.difficulty}</p>
          <p>{climb.description}</p>
          {climb.thumbnail?.url && (
            <img
              src={`http://localhost:1337${climb.thumbnail.url}`}
              alt="Thumbnail"
              className="rounded-md w-64 mt-4"
            />
          )}

        </>
      )}
    </main>
  );
}
