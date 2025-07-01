import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { NavItems } from "./NavItems";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../utils/UserContext";

const SideMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const data = useContext(UserContext);

  const toggleSideDrawer = (isOpen) => () => {
    setDrawerOpen(isOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleSideDrawer(true)} />
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleSideDrawer(false)}
      >
        <div className="mobile-nav-items-container" onClick={toggleSideDrawer(false)}>
          <div  className="header-user-mobile">
            <h4>
              Welcome
              <span className="user-name"> {data.loggedInUser}</span>
            </h4>
            <CloseIcon className="close-icon" onClick={toggleSideDrawer(false)} />
          </div>
          <div className="mobile-nav-items">
            <NavItems />
          </div>
        </div>
        
      </Drawer>
    </>
  );
};

export default SideMenu;
