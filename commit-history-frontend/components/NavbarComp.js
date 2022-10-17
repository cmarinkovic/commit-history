import Link from "next/link";
import { useRouter } from "next/router";

import { Navbar } from "flowbite-react";

export default function NavbarComp() {
  const router = useRouter();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Commit History Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Commit History
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={router.pathname === "/"}>
          <Link href="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={router.pathname === "/about"}>
          <Link href="about">About </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
