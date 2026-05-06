import * as React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    IconButton,
    Container,
    Stack
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BannerImage from "./ImageBox";
import dealsImage from "../../assets/Images/1x/image.png";
import { useEffect } from "react";
import { BaseUrl } from "../util";
import axios from "axios";
import { useState } from "react";
import DetailModal from "./DetailModal";

export default function BurgersCard() {
    const [products, setProducts] = React.useState([]);

    const [open, setOpen] = useState(false)
    const [detailData, setDetailData] = useState([])

    const openDetailPage = async (id) => {
        setOpen(true)
        console.log("detail Api fun Call");

        try {
            const res = await axios.get(`${BaseUrl}/burgerItem/detail/${id}`)
            console.log(res.data.data)
            setDetailData(res.data.data)
        }
        catch (error) {
            console.log(error); // full error console me

            let message = "";

            if (error.response) {
                // server ne response diya (4xx, 5xx)
                message = error.response.data?.message || error.response.statusText;
            } else if (error.request) {
                // request gayi lekin response nahi aaya
                message = "No response from server";
            } else {
                // request setup error
                message = error.message;
            }

            alert(message);
        }

    }




    useEffect(() => {
        getBurgerItems()
    }, [])

    const getBurgerItems = async () => {
        try {
            const getData = await axios.get(`${BaseUrl}/burgerItem/get`)
            console.log(getData.data.data);
           

            setProducts(getData.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <DetailModal open={open} setOpen={setOpen} deatailData={detailData} />


            <BannerImage image={dealsImage} />
            <Stack direction={"row"} flexWrap="wrap" gap={3} justifyContent="center" py={4}>
                {products?.map((item, i) => {
                    return <Card onClick={() => openDetailPage(item._id)}
                        sx={{
                            display: "flex",
                            p: 1.5,
                            borderRadius: 3,
                            maxWidth: 350,
                            height: 180,
                            width: "100%",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                            alignItems: "center",
                        }}
                    >
                        {/* Image */}
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt="food"
                            sx={{
                                width: { xs: 100, sm: 140 },
                                height: { xs: 100, sm: 140 },
                                borderRadius: 2,
                            }}
                        />

                        {/* Content */}
                        <CardContent
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                p: "0 12px !important",
                                height: '200px',
                                justifyContent: "space-between",
                                pt: "20px !important",
                                pb: "20px !important"
                            }}
                        >
                            <Typography fontWeight={900} fontSize={18}>
                                {item.title}
                            </Typography>

                            <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>

                                <Box>
                                    {/* Price */}
                                    <Box
                                        sx={{
                                            backgroundColor: "#e60000",
                                            color: "#fff",
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 2,
                                            width: "fit-content",
                                            fontWeight: 800,
                                            fontSize: 12,
                                            mb: 1,
                                            fontFamily: "Roboto, sans-serif",
                                        }}
                                    >
                                        Rs. {item.price}
                                    </Box>

                                    {/* Actions */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#F3A32B",
                                                borderRadius: 2,
                                                textTransform: "none",
                                                fontWeight: 700,
                                                px: 2,
                                                "&:hover": {
                                                    backgroundColor: "#e60000",
                                                },
                                                fontSize: "13px",

                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </Box>
                                </Box>
                                <IconButton>
                                    <FavoriteBorderIcon />
                                </IconButton>

                            </Stack>
                        </CardContent>
                    </Card>
                })}
            </Stack>
        </Container>
    );
}

