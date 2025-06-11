import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">Hej, jag är [Ditt Namn]</h1>
          <p className="text-lg text-gray-700">
            Jag är webbutvecklare med fokus på frontend. Här är några projekt
            jag har jobbat med.
          </p>
          <a
            href="/projects"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Se mina projekt
          </a>
        </div>
      </main>
    </>
  );
}
