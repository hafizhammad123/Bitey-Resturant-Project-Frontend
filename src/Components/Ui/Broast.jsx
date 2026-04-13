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
import dealsImage from "../../assets/Images/1x/BROAST'.jpg";
import DetailModal from "./DetailModal";
import { useState } from "react";


export default function Broast() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <Container>
            <DetailModal open={open} setOpen={setOpen} image={"https://images.deliveryhero.io/image/fd-pk/LH/sq4w-listing.jpg"} />
            <BannerImage image={dealsImage} />


            <Stack direction={"row"} flexWrap="wrap" gap={3} justifyContent="center" py={4}>
                <Card
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
                        image="https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/c9dr/product/83751906/327db213-db6a-4fac-a269-1a61d797cfbf.jpg?width=%s"
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
                            Zinger Burger
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
                                    Rs. 370.00
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
                                            fontWeight: 800,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e60000",
                                            },
                                            fontSize: "13px",
                                            
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                </Box>
                            </Box>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>

                        </Stack>
                    </CardContent>
                </Card>

                 <Card
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
                        image="https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/c9dr/product/83751906/327db213-db6a-4fac-a269-1a61d797cfbf.jpg?width=%s"
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
                            Zinger Burger
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
                                    Rs. 370.00
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
                                            fontWeight: 800,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e60000",
                                            },
                                            fontSize: "13px",
                                            
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                </Box>
                            </Box>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>

                        </Stack>
                    </CardContent>
                </Card>

                 <Card
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
                        image="https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/c9dr/product/83751906/327db213-db6a-4fac-a269-1a61d797cfbf.jpg?width=%s"
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
                            Zinger Burger
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
                                    Rs. 370.00
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
                                            fontWeight: 800,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e60000",
                                            },
                                            fontSize: "13px",
                                            
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                </Box>
                            </Box>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>

                        </Stack>
                    </CardContent>
                </Card>
                 <Card
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
                        image="https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/c9dr/product/83751906/327db213-db6a-4fac-a269-1a61d797cfbf.jpg?width=%s"
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
                            Zinger Burger
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
                                    Rs. 370.00
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
                                            fontWeight: 800,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e60000",
                                            },
                                            fontSize: "13px",
                                            
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                </Box>
                            </Box>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>

                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Container >
    );
}

