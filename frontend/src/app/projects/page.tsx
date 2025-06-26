import { fetchClimbs } from "@/lib/fetchClimbs";
import ClimbCard from "../components/ClimbCard";
import Link from "next/link";

export default async function ClimbsPage() {

  return (
    <>
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4 flex flex-row flex-wrap gap-4">
         <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Mina projekt</h1>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projects/klatterappen"
                className="text-blue-600 underline"
              >
                Klätterappen
              </Link>
            </li>
            <li>
              <Link
                href="/projects/portfolio"
                className="text-blue-600 underline"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </main>
    </>
  );
}
