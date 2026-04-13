import React from "react";
import {
    Box,
    Stack,
    Typography,
    Link,
    IconButton,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../assets/Images/Bitey_burger_and_pizza_logo-removebg-preview.png";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundColor: "#F3A32B",
                color: "#fff",
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, sm: 6 },
                position: "relative"
            }}
        >
            {/* Main Content */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                justifyContent="space-between"
            >
                {/* Left Section */}
                <Stack  gap={isMobile ? 0 : 4} spacing={2} direction={isMobile ? "column" : "row"} maxWidth={600}>
                    <Stack>
                        <Box
                            component="img"
                            src={logo} width={"190px"} >
                        </Box>
                    </Stack>

                    <Box>
                        <Typography fontSize={30} fontFamily={"sans-serif"} fontWeight={900} mt={"10px"} variant="body2">
                          BITEY
                        </Typography>

                        <Typography mt={"10px"} variant="body2">
                            <strong style={{fontWeight:"900"}}>Phone:</strong> +923060899926
                        </Typography>
                        <Typography mt={"10px"}  variant="body2">
                            <strong style={{fontWeight:"900"}}>Email:</strong> aladeebpk@gmail.com
                        </Typography>
                        <Typography mt={"10px"} variant="body2">
                            <strong style={{fontWeight:"900"}}>Address:</strong> Bitey - Yaseenabad, Plot no R 753,
                            Block 9, Karachi
                        </Typography>
                    </Box>
                </Stack>

                {/* Right Section */}
                <Stack spacing={2}>
                    <Typography variant="h6" fontWeight="bold">
                        Our Timings
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Typography>Monday - Sunday</Typography>
                        <Typography>03:00 PM - 04:00 AM</Typography>
                    </Stack>

                    <Stack fontFamily={"sans-serif"} spacing={1}>
                        <Link href="#" underline="hover" color="inherit">
                            Terms and conditions
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Privacy Policy
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Sitemap
                        </Link>
                    </Stack>
                </Stack>
            </Stack>

            {/* Bottom */}
            <Stack
                mt={6}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body2">
                    © 2026 Powered by Hammad Dev Studio
                </Typography>
            </Stack>

            {/* Floating Buttons */}
            <Stack
                spacing={2}
                sx={{
                    position: "absolute",
                    right: 20,
                    bottom: 20
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: "#ff5a3c",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#ff3b1f" }
                    }}
                >
                    <SearchIcon />
                </IconButton>

                <IconButton
                    sx={{
                        backgroundColor: "#ff5a3c",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#ff3b1f" }
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Stack>
        </Box>
    );
};

export default Footer;