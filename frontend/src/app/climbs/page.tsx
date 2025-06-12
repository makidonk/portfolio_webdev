import { fetchClimbs } from "@/lib/fetchClimbs";
import ClimbCard from "../components/ClimbCard";

export default async function ClimbsPage() {
  const climbs = await fetchClimbs();
  return (
    <>
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold mb-4">Mina climbs!!</h1>
          {climbs.map((climb, i) => {
            if (!climb || !climb) return null;
            return (
              <ClimbCard
                key={i}
                color={climb.color}
                thumbnail={climb?.thumbnail}
                climbType={climb.climbType} place={climb.place}                
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
