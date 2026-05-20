import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../assets/Images/1x/icons8-checkmark-50.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../Components/util";
import socket from "../Socket";

export default function OrderStatus({ cancelReason }) {
    const navigate = useNavigate();

    const localData = localStorage.getItem("orderInfo");
    const parsedData = JSON.parse(localData);

    const type = parsedData?.type;
    const id = localStorage.getItem("orderId");

    const [orderStatus, setOrderStatus] = useState("");
    const [deliveryCheck, setDeliveryCheck] = useState(false);
    const [dataCheck, setDataCheck] = useState({});

    const orderDone = () => {
        alert("Order complete ho gaya 🎉");
        localStorage.removeItem("orderId");
        navigate("/");
    };

    const cancelOrder = () => {
        alert("Order cancel ho gaya 😔");
        localStorage.removeItem("orderId");
        navigate("/");
    };

    const getOrderStatus = async () => {
        try {
            const response = await axios.get(
                `${BaseUrl}/order/getDetail/${id}`
            );

            const data = response.data.response;

            setOrderStatus(data?.isAccepted);
            setDeliveryCheck(data?.isDelivery);
            setDataCheck(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrderStatus();
    }, []);

    useEffect(() => {
        socket.emit("joinOrderRoom", id);

        socket.on("userUpdated", (updatedOrder) => {
            if (updatedOrder?.oderID === id) {
                setOrderStatus(updatedOrder?.isAccepted);
                setDeliveryCheck(updatedOrder?.isDelivery);
                setDataCheck(updatedOrder);
            }
        });

        return () => socket.off("userUpdated");
    }, []);

    const getContent = () => {
        // ❌ CANCELLED
        if (orderStatus === "false") {
            return {
                title: "❌ Order Cancelled",
                message:
                    "Sorry bhai, apka order cancel ho gaya 😔",
                sub:
                    cancelReason ||
                    "Maazrat! koi issue ho gaya hai 🙏",
                color: "red",
                btn: "Wait Try Again!",
                isCancelled: true,
            };
        }

        // 🚚 DELIVERED / READY
        if (deliveryCheck === true) {
            if (type === "Pickup") {
                return {
                    title: "🚴‍♂️ Order Ready!",
                    message: "Apka order ready hai",
                    sub: "Pickup kar len 🍔",
                    color: "green",
                    btn: "Order Complete",
                };
            }

            return {
                title: "🚴‍♂️ Out for Delivery!",
                message: "Rider on the way 🚴‍♂️",
                sub: "Thori dair me mil jayega 🍔",
                color: "green",
                btn: "Order Complete",
            };
        }

        // 🎉 ACCEPTED
        if (orderStatus === "true") {
            return {
                title: "🎉 Order Confirmed!",
                message: "Order accept ho gaya hai",
                sub: "Prepare ho raha hai 🍔",
                color: "green",
            };
        }

        // ⏳ PENDING
        return {
            title: "⏳ Waiting for Confirmation",
            message: "Order process ho raha hai",
            sub: "Thora intezar karein 🙏",
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
                {/* IMAGE */}
                <Box component="img" src={img} sx={{ width: 90 }} />

                {/* TITLE */}
                <Typography
                    fontSize={22}
                    fontWeight="bold"
                    color={data.color}
                >
                    {data.title}
                </Typography>

                {/* MESSAGE */}
                <Typography fontSize={14}>
                    {data.message}
                </Typography>

                {/* SUB */}
                <Typography fontSize={13} color="text.secondary">
                    {data.sub}
                </Typography>

                {/* CANCEL REASON */}
                {orderStatus === "false" && (
                    <Box
                        sx={{
                            bgcolor: "#ffe5e5",
                            p: 2,
                            borderRadius: 2,
                            width: "100%",
                        }}
                    >
                        <Typography fontSize={13} color="red">
                            Reason: {cancelReason || "No reason"}
                        </Typography>
                    </Box>
                )}

                {/* ✅ BUTTON LOGIC FIXED */}
                {orderStatus === "false" ? (
                    <Button
                        fullWidth
                        sx={{
                            bgcolor: "#f32b2b",
                            color: "#fff",
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: "bold",
                        }}
                        onClick={cancelOrder}
                    >
                        Wait Try Again!
                    </Button>
                ) : data?.btn ? (
                    <Button
                        fullWidth
                        sx={{
                            bgcolor: "#F3A32B",
                            color: "#fff",
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: "bold",
                        }}
                        onClick={orderDone}
                    >
                        {data.btn}
                    </Button>
                ) : (
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
                )}
            </Stack>
        </Box>
    );
}