import { fetchProjects } from "@/lib/fetchProjects";
import ProjectCard from "@/app/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  return (
    <>
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold mb-4">Mina projekt</h1>
          {projects.map((proj, i) => {
            if (!proj || !proj) return null;

            return (
              <ProjectCard
                key={i}
                title={proj.title}
                description={proj.description}
                image={proj.image}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
