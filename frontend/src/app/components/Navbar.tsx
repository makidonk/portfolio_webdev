import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#D6D2FA] flex flex-row justify-between h-[90px]">
      <div className="flex justify-center align-center p-[20px]">
        <img
          src="./logo/logo_statisk.gif"
          alt="Mathilda Logo"
          className={` object-contain`}
        />
      </div>
      <nav className="max-w-4xl text-[14px] p-4 flex flex-col justify-between items-end  space-y-1 h-[90px]">
        <Link
          href="/"
          className="text-[#4d4d4d] font-normal hover:font-extrabold transition-all"
        >
          HEM
        </Link>
      </nav>
    </header>
  );
}
