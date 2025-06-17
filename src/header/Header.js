import { NavItems } from "../navigation/NavItems";
import SideMenu from "../navigation/SideMenu";

const Header = () => {
  return (
    <header>
      <span className="image" />
      <h1>Registration Form</h1>
      <div className="desktop-nav-items">
        <NavItems />
      </div>
      <div className="side-nav-container">
        <SideMenu />
      </div>
    </header>
  );
};

export default Header;
