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

const Navbar = ({
  homeRef,
  aboutRef,
  testimonialRef,
  contactRef,
  cartRef,
  scrollToSection,
}) => {
  const [OpenMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      ref: homeRef,
    },
    {
      text: "About",
      icon: <InfoIcon />,
      ref: aboutRef,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      ref: testimonialRef,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      ref: contactRef,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      ref: cartRef,
    },
  ];

  return (
    <nav className="Nav-CSS">
      <header className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </header>

      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <a key={index} onClick={() => scrollToSection(item.ref)}>
            {item.text}
          </a>
        ))}

        {/* <a href="">
          <BsCart2 className="Navbar-cart-items" />
        </a> */}

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
                    <ListItemButton onClick={() => scrollToSection(item.ref)}>
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
