import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Min klättrings-journal
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Hem
          </Link>
          <Link href="/climbs" className="text-blue-600 hover:underline">
            Mina projekt
          </Link>
        </div>
      </nav>
    </header>
  );
}
