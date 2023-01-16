import { LI, UL, Linki } from "./navbar.style";

function NavBar() {
  return (
    <div>
      <nav>
        <UL>
          <LI>
            <Linki to="/">Home</Linki>
          </LI>
          <LI>
            <Linki to="/about">About</Linki>
          </LI>
        </UL>
      </nav>
    </div>
  );
}

export default NavBar;
