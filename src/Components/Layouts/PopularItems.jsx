import React, { useEffect } from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../util";


const PopularItems = () => {

    const [popularitems, setPopularItems] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        getPopularItems();
    }, []);

    const getPopularItems = async () => {
        try {
            const getData = await axios.get(`${BaseUrl}/popularItem/get`)
            console.log(getData.data.data);

            setPopularItems(getData.data.data);
        } catch (error) {
            console.log(error);
        }
    }


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
                    {popularitems.map((item, i) => (
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
                                src={item.image}
                                alt={"Popular Item"}
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
                                        Rs. {""}
                                    </span>
                                    Rs. {item.price}
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