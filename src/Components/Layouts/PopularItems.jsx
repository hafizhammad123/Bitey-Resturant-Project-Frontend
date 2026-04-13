import React from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const items = [
    {
        title: "Chicken Malai Boti",
        img: "https://hassanzaikoylakarahi.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1770717239-WhatsApp%20Image%202026-02-04%20at%201.53.16%20PM%20(1).jpeg&w=3840&q=75",
        oldPrice: 840,
        newPrice: 756,
    },
    {
        title: "Chicken Dhaga Kabab",
        img: "https://i.ytimg.com/vi/6f485omblws/sddefault.jpg",
        oldPrice: 680,
        newPrice: 612,
    },
    {
        title: "Chicken Resham Kabab",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNBQMxSJtrC2Ik3RFw1PUazPI6o7jYcWjAw&s",
        oldPrice: 720,
        newPrice: 648,
    },
    {
        title: "Beef Dhaga Kabab",
        img: "https://havelikebabandgril.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760082757-Chicken%20Malai%20boti.webp&w=3840&q=75",
        oldPrice: 660,
        newPrice: 594,
    },
];

const PopularItems = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 2 }}>
                {/* Heading */}
                <Typography variant="h6" color="#E53935" fontWeight="bold">
                    Popular Items
                </Typography>
                <Typography variant="body2" color="black" mb={3}>
                    Most ordered right now
                </Typography>

                {/* Cards */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    gap={2}
                >
                    {items.map((item, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: {
                                    xs: "calc(50% - 8px)",  // 👈 2 cards perfect fit
                                    sm: "calc(50% - 8px)",
                                    md: "calc(25% - 12px)", // 👈 4 cards perfect
                                },
                                height: {
                                    xs: "180px",
                                    sm: "220px",
                                    md: "270px",
                                },
                                borderRadius: "16px",
                                overflow: "hidden",
                                position: "relative",
                                cursor: "pointer",

                                transition:
                                    "transform 0.25s ease-out, box-shadow 0.25s ease-out",

                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                                },
                            }}
                        >
                            {/* Image */}
                            <Box
                                component="img"
                                src={item.img}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            {/* Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* Title */}
                                <Typography
                                    variant="h6"
                                    color="white"
                                    fontWeight="bold"
                                    sx={{
                                        fontSize: {
                                            xs: "14px",
                                            sm: "16px",
                                            md: "18px",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Price */}
                                <Box
                                    sx={{
                                        alignSelf: "flex-end",
                                        background: "#fff",
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: "20px",
                                        fontSize: "13px",
                                        fontWeight: "bold",
                                        transition: "all 0.3s ease",

                                        "&:hover": {
                                            background: "#000",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            marginRight: 6,
                                        }}
                                    >
                                        Rs. {item.oldPrice}
                                    </span>
                                    Rs. {item.newPrice}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};

export default PopularItems;