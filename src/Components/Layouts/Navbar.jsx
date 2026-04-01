import React, { useState } from "react";
import {
    Stack,
    Typography,
    Button,
    IconButton,
    Badge,
    useMediaQuery,
    Container,
    Drawer,
    Box,
    TextField,
    InputAdornment,
    Menu,
    MenuItem,
} from "@mui/material";

import { AppBar, Toolbar } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../assets/Images/Bitey_burger_and_pizza_logo-removebg-preview.png";
import ModalLocation from "../Ui/ModalLocation";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

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
            <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>

                {/* 🔶 TOP BAR */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        backgroundColor: "#f3a32b",
                        color: "#fff",
                        px: { xs: 2, sm: 3, md: 5 },
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1,
                        }}
                    >
                        {/* LEFT */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <img
                                src={logo}
                                alt="logo"
                                style={isMobile ? { width: 60 } : { width: 140 }}
                            />

                            <Stack direction="row" alignItems="center" spacing={1}>
                                <LocationOnIcon />

                                <Stack
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => setOpenModal(true)}
                                >
                                    <Stack direction="row" alignItems="center">
                                        <Typography fontWeight="bold">
                                            Pick-up from
                                        </Typography>
                                        <KeyboardArrowDownIcon />
                                    </Stack>

                                    <Typography fontSize={12}>
                                        Hussainabad Food street, Karachi
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* RIGHT */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {!isMobile && (
                                <>
                                    <IconButton sx={{ bgcolor: "#fff" }}>
                                        <Badge badgeContent={1} color="error">
                                            <ShoppingBagIcon />
                                        </Badge>
                                    </IconButton>

                                    <Button
                                        variant="outlined"
                                        sx={{ color: "#fff", borderColor: "#fff" }}
                                    >
                                        Sign In / Register
                                    </Button>
                                </>
                            )}

                            {isMobile && (
                                <IconButton onClick={() => setOpen(true)} sx={{ color: "#fff" }}>
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Stack>
                    </Container>
                </Stack>

                {/* 📱 DRAWER */}
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    <Box sx={{ width: 250, p: 2, bgcolor: "#f3a32b", color: "#fff" }}>
                        <Stack spacing={2}>
                            <Stack direction="row" justifyContent="space-between">
                                <img src={logo} width={70} alt="" />
                                <IconButton onClick={() => setOpen(false)}>
                                    <CloseIcon sx={{ color: "#fff" }} />
                                </IconButton>
                            </Stack>

                            <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
                                Sign In / Register
                            </Button>

                            <IconButton>
                                <Badge badgeContent={1} color="error">
                                    <ShoppingBagIcon />
                                </Badge>
                            </IconButton>
                        </Stack>
                    </Box>
                </Drawer>

                {/* 🔴 APPBAR */}
                <AppBar position="static" sx={{ background: "#E53935" }}>
                    <Container>
                        <Toolbar
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 2,
                                flexWrap: "wrap", // 🔥 responsive
                            }}
                        >
                            {/* LEFT MENU */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 0 : 2 }}>
                                {isMobile ?

                                    <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={1}>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 10 }}>Home</Button>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 10 }}>About</Button>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 10 }}>Contact</Button>


                                        <Box
                                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                            onMouseLeave={() => setAnchorEl(null)}
                                        >
                                            <Button sx={{ color: "#fff", fontSize: isMobile && 10 }}>
                                                Menu <ArrowDropDownIcon />
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={() => setAnchorEl(null)}
                                                PaperProps={{
                                                    sx: {
                                                        backgroundColor: "#f3a32b", // 🔥 yahan color set
                                                        color: "#fff",
                                                        borderRadius: "10px",
                                                        mt: 1,
                                                    },
                                                }}
                                            >
                                                {menuItems.map((item, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: "rgba(0,0,0,0.1)", // hover effect 🔥
                                                            },
                                                        }}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    </Stack>
                                    :
                                    <>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11 }}>Home</Button>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11 }}>About</Button>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11 }}>Contact</Button>

                                        <Box
                                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                            onMouseLeave={() => setAnchorEl(null)}
                                        >
                                            <Button sx={{ color: "#fff", fontSize: isMobile && 10 }}>
                                                Menu <ArrowDropDownIcon />
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={() => setAnchorEl(null)}
                                                PaperProps={{
                                                    sx: {
                                                        backgroundColor: "#f3a32b", // 🔥 yahan color set
                                                        color: "#fff",
                                                        borderRadius: "10px",
                                                        mt: 1,
                                                    },
                                                }}
                                            >
                                                {menuItems.map((item, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: "rgba(0,0,0,0.1)", // hover effect 🔥
                                                            },
                                                        }}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>

                                    </>
                                }

                            </Box>


                            {/* 🔍 SEARCH BAR */}
                            <Box
                                sx={{
                                    flexGrow: { xs: 1, md: 0 },
                                    width: { xs: "100%", md: "300px" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="Search for food..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: "#fff" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& input": { color: "#fff" },
                                        "& .MuiInput-underline:before": {
                                            borderBottomColor: "#fff",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#fff",
                                        },
                                    }}
                                />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

                <ModalLocation open={openModal} setOpen={setOpenModal} />
            </Box>
        </>
    );
};

export default Navbar;