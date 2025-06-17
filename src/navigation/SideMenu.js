import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { NavItems } from "./NavItems";
import CloseIcon from "@mui/icons-material/Close";

const SideMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        <div className="mobile-nav-items" onClick={toggleSideDrawer(false)}>
          <CloseIcon onClick={toggleSideDrawer(false)} />
          <NavItems />
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;
