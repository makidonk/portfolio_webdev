import { fetchClimbs } from "@/lib/fetchClimbs";
import ProjectCard from "@/app/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await fetchClimbs();
  return (
    <>
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold mb-4">Mina climbs!!</h1>
          {/* add climbcard */}
        </div>
      </main>
    </>
  );
}
