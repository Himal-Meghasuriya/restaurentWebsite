import React from "react";
import Logo from "../Assets/Logo.svg";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <header className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </header>

      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <a key={index}>{item.text}</a>
        ))}

        <a href="">
          <BsCart2 className="Navbar-cart-items" />
        </a>

        <button className="primary-button">Booking Now</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu((prev) => !prev)} />
      </div>

      {OpenMenu && (
        <>
          <drawer
            open={OpenMenu}
            onClose={() => setOpenMenu(false)}
            anchor="right"
          >
            <box role="presentation" onClick={() => setOpenMenu(false)}>
              <list>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </list>
            </box>
          </drawer>
        </>
      )}
    </nav>
  );
};

export default Navbar;
