import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
} from "@mui/material";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Order", path: "/order" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
        color: "#000",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={LOGO_URL}
            alt="Company Logo"
            sx={{ width: 50, height: 50, mr: 2 }}
          />
        </Box>

        {/* Navigation */}
        <Box>
          <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
            {navLinks.map(({ label, path }) => (
              <ListItem key={label} disablePadding sx={{ width: "auto" }}>
                <ListItemButton
                  component={Link}
                  to={path}
                  sx={{
                    color: "#000",
                    borderRadius: "8px",
                    whiteSpace: "normal", // Allow text to wrap
                    wordBreak: "break-word",
                    textAlign: "center",
                    minWidth: "auto", // Don't force a fixed width
                    px: 2,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: 500,
                        lineHeight: 1.2,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
