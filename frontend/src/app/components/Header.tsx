import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#D6D2FA] flex flex-row justify-center h-[90px]">
      <h1 className="text-[60px] font-extrabold text-[#4d4d4d] ">
        MINA PROJEKT
      </h1>
      <nav className="max-w-4xl text-[14px] p-4 flex flex-col justify-between items-end absolute right-0 space-y-1 h-[90px]">
        <Link
          href="/"
          className="text-[#4d4d4d] font-normal hover:font-extrabold transition-all"
        >
          HEM
        </Link>
        <Link
          href="/climbs"
          className="text-[#4d4d4d] font-normal hover:font-extrabold transition-all"
        >
          MINA PROJEKT
        </Link>
      </nav>
    </header>
  );
}
