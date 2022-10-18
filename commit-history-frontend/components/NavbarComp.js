import Link from "next/link";
import { useRouter } from "next/router";

import { Navbar } from "flowbite-react";

export default function NavbarComp() {
  const router = useRouter();

  const getClass = (route) => {
    return router.pathname === route ? activeClass : inactiveClass;
  };

  const activeClass =
    "cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inactiveClass =
    "cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <div className="mb-6">
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
          <Link href="/">
            <span className={getClass("/")}>Home</span>
          </Link>
          <Link href="/about" className={getClass("/about")}>
            <span className={getClass("/about")}>About</span>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
