import React, { useEffect, useState } from "react";
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

import { useLocation } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Autocomplete } from "@mui/material";

import logo from "../../assets/Images/Bitey_burger_and_pizza_logo-removebg-preview.png";
import ModalLocation from "../Ui/ModalLocation";
import Cart from "../Ui/Cart";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../Redux/Slice/OrdertypeSlice";
import { Navigate, useNavigate } from "react-router-dom";
import FloatingCartBar from "../Ui/FloatingCartBar";
import { noConflict } from "leaflet";
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';


const Navbar = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate()
    const locationReact = useLocation();

    const [open, setOpen] = useState(false);
    const [cart, setCart] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [location, setLocation] = useState(false);
    const [showFLot, setShowFlot] = useState(0)



    const length = useSelector((data) => data.cart.items.length)
    const total = useSelector((data) => data.cart.total)
    console.log(length);

    useEffect(() => {
        setShowFlot(length)
    }, [])



    let orderInfo = localStorage.getItem("orderInfo");
    let orderInfoParse = JSON.parse(orderInfo);




    useEffect(() => {
        try {

            if (!orderInfoParse) {
                setOpenModal(true);
            }
        } catch (error) {
            setOpenModal(true);
        }
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);

        const y = element.getBoundingClientRect().top + window.pageYOffset + -100;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
        setSerach("")
    };

    const menuItems = [
        { menuName: "Burger's", menuId: "burger" },
        { menuName: "Broast", menuId: "broast" },
        { menuName: "Sandwich", menuId: "sandwich" },
        { menuName: "Pizza", menuId: "pizza" },
        { menuName: "Pizza Sandwich", menuId: "pizzaSandwich" },
        { menuName: "Pasta", menuId: "pasta" },
        { menuName: "Lasagna", menuId: "lasagna" },
        { menuName: "BBQ", menuId: "bbq" },
        { menuName: "Roll", menuId: "roll" },
        { menuName: "Fries", menuId: "fries" },
        { menuName: "Extra", menuId: "extra" },
    ];

    const [Serach, setSerach] = useState("")
    const [filterSerach, setFilterSerach] = useState([])
    const [check, setChecked] = useState(false)

    const serachBox = () => {
        if (Serach === "") {
            setFilterSerach([]);
            setChecked(false);
            return;
        }

        let value = menuItems.filter(item =>
            item.menuName.toLowerCase().includes(Serach.toLowerCase())
        );

        setFilterSerach(value);

        setChecked(value.length === 0);
    };

    useEffect(() => {
        serachBox()
    }, [Serach])

    console.log(filterSerach);



    return (
        <>

            <Box sx={{ position: "sticky", top: 0, zIndex: 1200 }}>

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
                    {length > 0 && locationReact.pathname !== "/checkout" && (
                        <FloatingCartBar
                            cart={cart}
                            setCart={setCart}
                            count={length}
                            total={total}
                        />
                    )}
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
                                style={isMobile ? { width: 70 } : { width: 140 }}
                            />

                            <Stack direction="row" alignItems="center" spacing={1} justifyContent={isMobile && "center"} sx={{cursor:"pointer"}} onClick={() => setOpenModal(true)}>
                                <LocationOnIcon  sx={{fontSize:'16px'}}/>

                                <Stack
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => setOpenModal(true)}
                                >
                                    <Stack direction="row" alignItems="center">
                                        <Typography fontWeight="bold"  sx={{fontSize: isMobile && "11px"}}>
                                            {`${orderInfoParse?.type}`} from
                                        </Typography>
                                        <KeyboardArrowDownIcon />
                                    </Stack>

                                    <Typography fontSize={12}>
                                        {orderInfoParse?.address || "Hussainabad Food street, Karachi"}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Cart open={cart} setOpen={setCart} />
                        {/* RIGHT */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {!isMobile && (
                                <>
                                    <IconButton onClick={() => setCart(true)} sx={{ bgcolor: "#fff" }}>
                                        <Badge badgeContent={length} color="error">
                                            <ShoppingBagIcon />
                                        </Badge>
                                    </IconButton>


                                </>
                            )}

                            {localStorage.getItem("orderId") && <>

                                <Typography onClick={() => navigate('/order')} fontSize={14} fontWeight="bold" color="#fff">
                                   <ListAltRoundedIcon sx={{position:'relative', left:isMobile && "16px", top:"4px" ,fontSize:isMobile ?18 : 30 }} />
                                </Typography>

                            </>}

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

                          

                            <IconButton onClick={() => setCart(true)}>
                                <Badge badgeContent={length} color="error">
                                    <ShoppingBagIcon />
                                </Badge>
                            </IconButton>
                        </Stack>
                    </Box>
                </Drawer>
                <Container />

                {/* 🔴 APPBAR */}
                {locationReact.pathname == "/checkout" ? <>

                    <AppBar position="static" sx={{ background: "#E53935", display: "none" }} elevation={0}>

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

                                    <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={0} mt={"10px"} p={0}>
                                        <Button
                                            sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                            onClick={() => handleScroll("burger")}
                                        >
                                            Burgers
                                        </Button>

                                        <Button
                                            sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                            onClick={() => handleScroll("broast")}
                                        >
                                            Broast
                                        </Button>

                                        <Button
                                            sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                            onClick={() => handleScroll("bbq")}
                                        >
                                            B.B.Q
                                        </Button>

                                        <Box
                                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                            onMouseLeave={() => setAnchorEl(null)}
                                        >
                                            <Button sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}>
                                                More Menu <ArrowDropDownIcon />
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
                                                        key={item.menuId}
                                                        onClick={() => {
                                                            handleScroll(item.menuId);
                                                            setAnchorEl(null);
                                                        }}   // ✅ scroll
                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                            },
                                                        }}
                                                    >
                                                        {item.menuName}   {/* ✅ name show */}
                                                    </MenuItem>
                                                ))}

                                            </Menu>
                                        </Box>
                                    </Stack>
                                    :
                                    <>
                                        <Button onClick={() => {
                                            handleScroll("burger");
                                        }} sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }}>Burgers</Button>
                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("broast")}>Broast</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("sandwich")}>Sandwich</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("pizza")}>Pizza</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("pasta")}>Pasta</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("bbq")}>Bbq</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("roll")}>Roll</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("lasagna")}>Lasagna</Button>

                                        <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("extra")}>Extra</Button>
                                        <Box
                                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                            onMouseLeave={() => setAnchorEl(null)}
                                        >
                                            <Button sx={{ color: "#ffa96b", fontSize: isMobile && 10, fontWeight: 800 }}>
                                                More Menu <ArrowDropDownIcon />
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
                                                        key={item.menuId}
                                                        onClick={() => {
                                                            handleScroll(item.menuId);
                                                            setAnchorEl(null);
                                                        }}

                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                            },
                                                        }}
                                                    >
                                                        {item.menuName}   {/* ✅ name show */}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>

                                    </>
                                }

                            </Box>


                            <Box sx={{ width: { xs: "100%", md: "300px" } }}>
                                <div
                                    style={{
                                        width: "100%",
                                        position: "relative",
                                        fontFamily: "Arial",
                                    }}
                                >

                                    {/* INPUT */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            width: "80%",
                                            padding: "6px",
                                            borderRadius: "30px",

                                        }}
                                    >
                                        {/* INPUT */}
                                        <InputBase
                                            placeholder="Search delicious food..."

                                            value={Serach}
                                            onChange={(e) => setSerach(e.target.value)}
                                            sx={{
                                                flex: 1,
                                                px: 2,
                                                color: "#000",
                                                background: "#fff",
                                                borderRadius: "20px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                pt: "4px",

                                                border: "3px solid #f3a32b",
                                            }}
                                        />

                                        {/* SEARCH BUTTON */}

                                    </Box>

                                    {/* DROPDOWN */}
                                    {check && Serach ? (
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "100%",
                                                background: "#fff",
                                                border: "2px solid #000",
                                                borderTop: "none",
                                                borderRadius: "0 0 8px 8px",
                                                zIndex: 999,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    padding: "10px",
                                                    color: "#000",
                                                    textAlign: "center",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Item not found
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {Serach && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: "100%",
                                                        background: "#fff",
                                                        border: "2px solid #f3a32b",
                                                        borderTop: "none",
                                                        borderRadius: "0 0 8px 8px",
                                                        zIndex: 999,
                                                        maxHeight: "200px",
                                                        overflowY: "auto",
                                                    }}
                                                >
                                                    {filterSerach.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() => {
                                                                setSerach(item.menuName);
                                                                handleScroll(item.menuId);
                                                            }}
                                                            style={{
                                                                padding: "10px",
                                                                cursor: "pointer",
                                                                color: "#000",
                                                                fontSize: "14px",
                                                                fontWeight: "500",
                                                                borderBottom: "1px solid #eee",
                                                            }}
                                                            onMouseEnter={(e) =>
                                                                (e.currentTarget.style.background = "#f3a32b")
                                                            }
                                                            onMouseLeave={(e) =>
                                                                (e.currentTarget.style.background = "#fff")
                                                            }
                                                        >
                                                            {item.menuName}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </Box>
                        </Toolbar>

                    </AppBar>

                </> :

                    <>
                        <AppBar position="static" sx={{ background: "#E53935",  }} elevation={0}>

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

                                        <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={0} mt={"10px"} p={0}>
                                            <Button
                                                sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                                onClick={() => handleScroll("burger")}
                                            >
                                                Burgers
                                            </Button>

                                            <Button
                                                sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                                onClick={() => handleScroll("broast")}
                                            >
                                                Broast
                                            </Button>

                                            <Button
                                                sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}
                                                onClick={() => handleScroll("bbq")}
                                            >
                                                B.B.Q
                                            </Button>

                                            <Box
                                                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                                onMouseLeave={() => setAnchorEl(null)}
                                            >
                                                <Button sx={{ color: "#fff", fontSize: isMobile && 10, fontWeight: 700 }}>
                                                    More Menu <ArrowDropDownIcon />
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
                                                            key={item.menuId}
                                                            onClick={() => {
                                                                handleScroll(item.menuId);
                                                                setAnchorEl(null);
                                                            }}   // ✅ scroll
                                                            sx={{
                                                                "&:hover": {
                                                                    backgroundColor: "rgba(0,0,0,0.1)",
                                                                },
                                                            }}
                                                        >
                                                            {item.menuName}   {/* ✅ name show */}
                                                        </MenuItem>
                                                    ))}

                                                </Menu>
                                            </Box>
                                        </Stack>
                                        :
                                        <>
                                            <Button onClick={() => {
                                                handleScroll("burger");
                                            }} sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }}>Burgers</Button>
                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("broast")}>Broast</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("sandwich")}>Sandwich</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("pizza")}>Pizza</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("pasta")}>Pasta</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("bbq")}>Bbq</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("roll")}>Roll</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("lasagna")}>Lasagna</Button>

                                            <Button sx={{ color: "#fff", fontSize: isMobile && 11, fontWeight: 800 }} onClick={() => handleScroll("extra")}>Extra</Button>
                                            <Box
                                                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                                onMouseLeave={() => setAnchorEl(null)}
                                            >
                                                <Button sx={{ color: "#ffa96b", fontSize: isMobile && 10, fontWeight: 800 }}>
                                                    More Menu <ArrowDropDownIcon />
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
                                                            key={item.menuId}
                                                            onClick={() => {
                                                                handleScroll(item.menuId);
                                                                setAnchorEl(null);
                                                            }}

                                                            sx={{
                                                                "&:hover": {
                                                                    backgroundColor: "rgba(0,0,0,0.1)",
                                                                },
                                                            }}
                                                        >
                                                            {item.menuName}   {/* ✅ name show */}
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </Box>

                                        </>
                                    }

                                </Box>


                                <Box sx={{ width: { xs: "100%", md: "300px" } }}>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                            fontFamily: "Arial",
                                            marginTop : isMobile && '-20px'
                                        }}
                                    >

                                        {/* INPUT */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                width: "80%",
                                                padding: "6px",
                                                borderRadius: "30px",

                                            }}
                                        >
                                            {/* INPUT */}
                                            <InputBase
                                                placeholder="Search delicious food..."

                                                value={Serach}
                                                onChange={(e) => setSerach(e.target.value)}
                                                sx={{
                                                    flex: 1,
                                                    px: 2,
                                                    color: "#000",
                                                    background: "#fff",
                                                    borderRadius: "20px",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    pt: "4px",

                                                    border: "3px solid #f3a32b",
                                                }}
                                            />

                                            {/* SEARCH BUTTON */}

                                        </Box>

                                        {/* DROPDOWN */}
                                        {check && Serach ? (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    background: "#fff",
                                                    border: "2px solid #000",
                                                    borderTop: "none",
                                                    borderRadius: "0 0 8px 8px",
                                                    zIndex: 999,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        padding: "10px",
                                                        color: "#000",
                                                        textAlign: "center",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    Item not found
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {Serach && (
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: "100%",
                                                            background: "#fff",
                                                            border: "2px solid #f3a32b",
                                                            borderTop: "none",
                                                            borderRadius: "0 0 8px 8px",
                                                            zIndex: 999,
                                                            maxHeight: "200px",
                                                            overflowY: "auto",
                                                        }}
                                                    >
                                                        {filterSerach.map((item, index) => (
                                                            <div
                                                                key={index}
                                                                onClick={() => {
                                                                    setSerach(item.menuName);
                                                                    handleScroll(item.menuId);
                                                                }}
                                                                style={{
                                                                    padding: "10px",
                                                                    cursor: "pointer",
                                                                    color: "#000",
                                                                    fontSize: "14px",
                                                                    fontWeight: "500",
                                                                    borderBottom: "1px solid #eee",
                                                                }}
                                                                onMouseEnter={(e) =>
                                                                    (e.currentTarget.style.background = "#f3a32b")
                                                                }
                                                                onMouseLeave={(e) =>
                                                                    (e.currentTarget.style.background = "#fff")
                                                                }
                                                            >
                                                                {item.menuName}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </Box>
                            </Toolbar>

                        </AppBar>

                    </>}


                <ModalLocation open={openModal} setOpen={setOpenModal} />
            </Box >
        </>
    );
};

export default Navbar;