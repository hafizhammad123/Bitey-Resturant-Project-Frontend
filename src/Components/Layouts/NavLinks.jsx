import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
    TextField,
    InputAdornment,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavLinks = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleHoverOpen = (e) => setAnchorEl(e.currentTarget);
    const handleHoverClose = () => setAnchorEl(null);

    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    const menuItems = [
        "Burger's",
        "Broast",
        "Sandwich",
        "Fries",
        "Pizza",
        "Pizza Sandwich",
        "Pasta",
        "Lasagna",
        "B.B.Q",
        "Roll",
        "Crispy Roll",
        "Extra",
    ];

    return (
        <>



            <AppBar
                position="static"
                sx={{
                    background: "#E53935",
                    color: "#000",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.5)", // soft shadow
                    // vertical padding

                    position: "sticky",   // 👈 ADD THIS
                    top: 100,               // 👈 ADD THIS
                    zIndex: 1100,         // 👈 IMPORTANT (Drawer/AppBar ke upar rahe)
                }}
            >
                <Container>
                    {/* TOP NAV */}
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 3,
                        }}
                    >
                        {/* Desktop Links */}
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center"
                            }}
                        >
                            <Button sx={{
                                color: "#fff", fontWeight: "800", fontSize: { xs: "11px", sm: "12px", md: "16px" },
                                minWidth: "auto"
                            }}>Home</Button>
                            <Button sx={{
                                color: "#fff", fontWeight: "800", fontSize: { xs: "11px", sm: "12px", md: "16px" },
                                minWidth: "auto"
                            }}>About</Button>
                            <Button sx={{
                                color: "#fff", fontWeight: "800", fontSize: { xs: "11px", sm: "12px", md: "16px" },
                                minWidth: "auto"
                            }}>Contact</Button>

                            {/* Dropdown */}
                            <Box
                                onMouseEnter={handleHoverOpen}
                                onMouseLeave={handleHoverClose}
                            >
                                <Button
                                    sx={{
                                        color: "#fff",
                                        fontSize: { xs: "11px", sm: "12px", md: "16px" },
                                        minWidth: "auto",
                                        fontWeight: "800",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    Menu <ArrowDropDownIcon />
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleHoverClose}
                                    MenuListProps={{ onMouseLeave: handleHoverClose }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "rgb(243,163,43)", // 🔥 your color
                                            borderRadius: "8px",
                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                                            color: "white"
                                        },
                                    }}
                                >
                                    {menuItems.map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "rgba(0,0,0,0.1)", // hover effect
                                                },
                                            }}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>


                    </Toolbar>

                    {/* 🔍 SEARCH BAR (IMAGE STYLE) */}

                </Container >
            </AppBar>
            <Container>
                <Box
                    sx={{
                        px: 3,
                        pb: 1,
                        pt: 2,
                    }}
                >
                    <TextField
                        fullWidth
                        variant="standard"
                        color="black"
                        placeholder="Search for "
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#000" }} />
                                </InputAdornment>
                            ),
                            disableUnderline: false,
                        }}
                        sx={{
                            "& input": {
                                fontSize: "14px",

                            },
                        }}
                    />
                </Box>
            </Container>


        </>
    );
};

export default NavLinks;