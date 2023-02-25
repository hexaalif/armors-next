import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="logo">
        {/* <img src="/logo.png" alt="#" /> */}
        <Image src="/logo.png" alt="0" height={150} width={177} />
      </Link>
      <Link href="/"> Home</Link>
      <Link href="/about"> About</Link>
      <Link href="/ninjas"> Armor List</Link>
    </nav>
  );
};

export default Navbar;
