import NavbarComp from "./NavbarComp";

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavbarComp />
      <main>{children}</main>
    </>
  );
}
