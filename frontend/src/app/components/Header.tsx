import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Min Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Hem
          </Link>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Projekt
          </Link>
        </div>
      </nav>
    </header>
  );
}
