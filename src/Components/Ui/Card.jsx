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

export default function FoodCard() {
    return (
        <Container>
            <Stack direction={"row"} justifyContent="center" alignItems={"center"} mt={4}>
                <Typography variant="h5" fontWeight={900} textAlign="center" mt={4}>
                    Delicious Bites, Just for You
                </Typography>
            </Stack>
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
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8B_B2OV26TBhGd0IcfNDnhsrILbYdAMVDZg&s"
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
                            Full Broast
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            2 Legs, 2 Thighs, 2 Chests, 2 Wings, 4 Buns, 4 Garlic Sauces
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
                            Rs. 2,599.00
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
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card> <Card
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
                        }}
                    >
                        <Typography fontWeight={900} fontSize={18}>
                            Zinger Burger
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            1 Zinger Patty, 1 Bun, Lettuce, Fries
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
                                    fontWeight: 600,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "#e60000",
                                    },
                                }}
                            >
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
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
                        image="https://i.pinimg.com/736x/d6/da/29/d6da2979f6a0bf6df058854c7b73b2f7.jpg"
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
                            Club Sandwich
                        </Typography>

                        <Typography width={150} fontSize={11} color="text.secondary" mb={1}>
                            2 Slices of Bread, 1 Chicken Patty, Lettuce, Fries
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
                            Rs. 360.00
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
                                Add To Cart
                            </Button>

                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}

