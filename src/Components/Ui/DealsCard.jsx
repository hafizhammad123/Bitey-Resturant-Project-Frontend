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
import dealsImage from "../../assets/Images/1x/imagedeals.png";
import { useEffect } from "react";
import { BaseUrl } from "../util";
import axios from "axios";
import DetailModal from "./DetailModal";
import { useState } from "react";

export default function DealCards() {

    const [products, setProducts] = React.useState([]);
    const [open, setOpen] = useState(false)
    const [detailData, setDetailData] = useState([])

    const openDetailPage = async (id) => {
        setOpen(true)
        console.log("detail Api fun Call");

        try {
            const res = await axios.get(`${BaseUrl}/dealItem/detail/${id}`)
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
        getDealItems()
    }, [])

    const getDealItems = async () => {
        try {
            const getData = await axios.get(`${BaseUrl}/dealItem/get`)
            console.log(getData.data.data);

            setProducts(getData.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>

            <BannerImage image={dealsImage} />
            <DetailModal open={open} setOpen={setOpen} deatailData={detailData} />


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
                            }}
                        >
                            <Typography fontWeight={900} fontSize={18}>
                                {item.title}
                            </Typography>

                            <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                                {item.itemDescription}
                            </Typography>

                            {/* Price */}
                            <Box
                                sx={{
                                    backgroundColor: "#e60000",
                                    color: "#fff",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 2,
                                    width: "fit-content",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    mb: 1,
                                    fontFamily: "Roboto, sans-serif",
                                }}
                            >
                                Rs. {item.price?.toLocaleString()}
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
                                        fontWeight: 600,
                                        px: 2,
                                        "&:hover": {
                                            backgroundColor: "#e60000",
                                        },
                                    }}
                                >
                                    View Details
                                </Button>

                                <IconButton>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                })}

            </Stack>
        </Container>
    );
}

