import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import logo2 from "@/public/images/logo2.svg";
import logo3 from "@/public/images/logo3.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo2} alt="Cruip Logo" width={32} height={32} />
      <Image src="/images/DigPatho.svg" alt="Logo" width={100} height={40}  className="ml-4 translate-y-1 hidden md:block"/>
    </Link>
  );
}
