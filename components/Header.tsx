import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">
          <Image
            src="https://avatars.githubusercontent.com/u/66319691?v=4"
            className="rounded-full"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
