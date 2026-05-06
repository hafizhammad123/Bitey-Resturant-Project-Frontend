import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../assets/Images/1x/icons8-checkmark-50.png";
import { useNavigate, useNavigation } from "react-router-dom";

export default function OrderStatus({
    status = "accepted",
    type = "pickup", // "pickup" | "delivery"
    cancelReason,
}) {

    const navigate = useNavigate()

    const getContent = () => {
        // ❌ CANCELLED
        if (status === "cancelled") {
            return {
                title: "❌ Order Cancelled",
                message: "Sorry bhai, apka order cancel ho gaya 😔",
                sub: cancelReason || "Kisi wajah ki wajah se cancel hua hai",
                color: "red",
            };
        }

        // ✅ ACCEPTED
        if (status === "accepted") {
            if (type === "pickup") {
                return {
                    title: "🎉 Order Ready for Pickup!",
                    message: "Bhai apka order tayar hai 😎",
                    sub: "Aap apna order ab pick-up kar sakte hain 🛍️",
                    color: "green",
                };
            }


            // delivery case
            return {
                title: "🎉 Order Confirmed!",
                message: "Bhai apka order accept ho gaya hai 😎",
                sub: "Rider jaldi hi aapka order le kar aa raha hai 🚴‍♂️🍔",
                color: "green",
            };
        }

        // ⏳ PENDING
        return {
            title: "⏳ Waiting for Confirmation",
            message: "Bhai apka order process ho raha hai...",
            sub: "Please thori dair intezar karein 🙏",
            color: "#F3A32B",
        };
    };

    const data = getContent();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                bgcolor: "#f9f9f9",
            }}
        >
            <Stack
                spacing={3}
                alignItems="center"
                textAlign="center"
                sx={{
                    maxWidth: 400,
                    width: "100%",
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "#fff",
                    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
                }}
            >
                {/* ICON */}
                <Box
                    component="img"
                    src={img}
                    alt="status"
                    sx={{ width: 90 }}
                />

                {/* TITLE */}
                <Typography fontSize={22} fontWeight="bold" color={data.color}>
                    {data.title}
                </Typography>

                {/* MESSAGE */}
                <Typography fontSize={14}>
                    {data.message}
                </Typography>

                {/* SUB MESSAGE */}
                <Typography fontSize={13} color="text.secondary">
                    {data.sub}
                </Typography>

                {/* CANCEL REASON */}
                {status === "cancelled" && (
                    <Box
                        sx={{
                            bgcolor: "#ffe5e5",
                            p: 2,
                            borderRadius: 2,
                            width: "100%",
                        }}
                    >
                        <Typography fontSize={13} color="red">
                            Reason: {cancelReason || "No reason provided"}
                        </Typography>
                    </Box>
                )}

                {/* BUTTON */}
                <Button
                    fullWidth
                    sx={{
                        bgcolor: "#F3A32B",
                        color: "#fff",
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: "bold",

                    }}
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </Button>
            </Stack>
        </Box>
    );
}