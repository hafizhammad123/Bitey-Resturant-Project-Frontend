import * as React from "react";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Button,
    Divider,
    IconButton,
   
} from "@mui/material";
import MainLayout from "../Components/Layouts/MainLayout";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import AdderssModal from "../Components/Ui/AdderssModal";


export default function CheckoutPage() {

    const [open, setOpen] = useState(false);

    const pickUp = false

    return (
        <MainLayout>

            < AdderssModal open={open} setOpen={setOpen} />
            <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                    {/* LEFT SIDE */}
                    <Stack flex={1} spacing={3}>

                        {pickUp ? <>

                            <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
                                <Typography fontWeight="bold">This is a pick-up order.</Typography>
                                <Typography fontSize={13} color="#666" mt={1}>
                                    Collect from branch: Al Adeeb - Hussainabad, Plot no R915,
                                    Hussainabad Food street, Karachi
                                </Typography>
                            </Box>


                        </> :
                            <>
                                <Box
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                        p: 3,
                                        borderRadius: 2,
                                    }}
                                >
                                    {/* Header */}
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        mb={2}
                                    >
                                        <Typography fontWeight="600">
                                            Your Delivery Addresses
                                        </Typography>

                                        <Button
                                            sx={{
                                                color: "#F3A32B",
                                                textTransform: "none",
                                                fontWeight: 500,
                                            }}
                                            onClick={() => setOpen(true)}
                                        >
                                            + Add new Address
                                        </Button>
                                    </Stack>

                                    {/* Address Card */}
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                        sx={{
                                            backgroundColor: "#fff",
                                            borderRadius: 3,
                                            p: 2,
                                            width: "300px",
                                            boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {/* Icon */}
                                        <LocationOnIcon sx={{ color: "#555" }} />

                                        {/* Text Content */}
                                        <Stack flex={1}>
                                            <Typography fontWeight="600">
                                                trimax hospital R #645 plot
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Federal B Area Block 9, Karachi
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{ color: "red", fontSize: "12px", mt: 0.5 }}
                                            >
                                                This address is not in range
                                            </Typography>
                                        </Stack>

                                        {/* Delete Icon */}
                                        <IconButton size="small">
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </>

                        }
                        {/* PICKUP */}


                        {/* INSTRUCTIONS */}
                        <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
                            <Typography fontWeight="bold">Special Instructions (Optional)</Typography>
                            <TextField
                                fullWidth
                                placeholder="Add any comments here (e.g allergies, delivery instructions, our number)."
                                multiline
                                rows={3}
                                sx={{ mt: 2 }}
                            />
                        </Box>

                        {/* PAYMENT */}
                        <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
                            <Typography fontWeight="bold" mb={2}>
                                Select Payment Method
                            </Typography>

                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#F3A32B",
                                    color: "#F3A32B",
                                    borderRadius: 2,
                                    px: 3,
                                }}
                            >
                                Cash
                            </Button>
                        </Box>
                    </Stack>

                    {/* RIGHT SIDE CART */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: 350 },
                            bgcolor: "#fff",
                            borderRadius: 2,
                            p: 2,
                            height: "fit-content",
                        }}
                    >
                        <Stack spacing={2}>
                            <Typography fontWeight="bold">Your Cart</Typography>

                            {/* ITEMS */}
                            <Stack spacing={2}>
                                {[1, 2].map((item, i) => (
                                    <Stack key={i} spacing={1}>
                                        <Stack direction="row" spacing={1}>
                                            <Box
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 2,
                                                    bgcolor: "#ddd",
                                                }}
                                            />

                                            <Stack flex={1}>
                                                <Typography fontSize={13} fontWeight="bold">
                                                    {i === 0 ? "Quarter Chest Broast" : "Full Broast"}
                                                </Typography>
                                                <Typography fontSize={11} color="#777">
                                                    1 Chest, 1 Wing, 1 Bun...
                                                </Typography>
                                            </Stack>

                                            <Typography fontSize={12}>
                                                Rs. {i === 0 ? "749.00" : "2,599.00"}
                                            </Typography>
                                        </Stack>

                                        <Divider />
                                    </Stack>
                                ))}
                            </Stack>

                            <Typography fontSize={12} sx={{ cursor: "pointer", color: "#666" }}>
                                + Add more items
                            </Typography>

                            {/* POPULAR */}
                            <Typography fontWeight="bold">Popular Items</Typography>

                            <Stack spacing={1}>
                                {["Peri Peri Dip", "Honey Mustard Dip", "Garlic Mayo Dip"].map(
                                    (item, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                p: 1,
                                                borderRadius: 2,
                                                bgcolor: "#f9f9f9",
                                            }}
                                        >
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Box
                                                    sx={{ width: 45, height: 45, bgcolor: "#ddd", borderRadius: 2 }}
                                                />

                                                <Stack flex={1}>
                                                    <Typography fontSize={12} fontWeight="bold">
                                                        {item}
                                                    </Typography>
                                                    <Typography fontSize={10} color="#777">
                                                        A tasty dip
                                                    </Typography>
                                                </Stack>

                                                <Box
                                                    sx={{
                                                        bgcolor: "#F3A32B",
                                                        color: "#fff",
                                                        px: 1,
                                                        py: 0.3,
                                                        borderRadius: 1,
                                                        fontSize: 10,
                                                    }}
                                                >
                                                    Rs. 100
                                                </Box>
                                            </Stack>
                                        </Box>
                                    )
                                )}
                            </Stack>

                            {/* TOTAL */}
                            <Divider />

                            <TextField placeholder="Promo Code" size="small" />

                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontSize={12}>Subtotal</Typography>
                                <Typography fontSize={12}>Rs. 3,348.00</Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontWeight="bold">Grand total</Typography>
                                <Typography fontWeight="bold">Rs. 3,348.00</Typography>
                            </Stack>

                            <Button
                                fullWidth
                                sx={{
                                    bgcolor: "#F3A32B",
                                    color: "#fff",
                                    py: 1.5,
                                    borderRadius: 2,
                                    fontWeight: "bold",
                                }}
                            >
                                Place Order
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </MainLayout>

    );
}