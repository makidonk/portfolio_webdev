import { fetchClimbs } from "@/lib/fetchClimbs";
import ClimbCard from "../components/ClimbCard";
import Link from "next/link";

export default async function ClimbsPage() {
  const climbs = await fetchClimbs();
  return (
    <>
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4 flex flex-row flex-wrap gap-4">
          {climbs.map((climb, i) => {
            if (!climb || !climb) return null;
            return (
              // gör egna sidor href
              <Link href={`/climbs/${climb.id}`} key={climb.id}>
                <ClimbCard
                  color={climb.color}
                  thumbnail={climb?.thumbnail}
                  climbType={climb.climbType}
                  place={climb.place}
                  difficulty={climb.difficulty}
                />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
