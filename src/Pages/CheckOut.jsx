import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography,
    Paper,
    MenuItem, Grid,
    Select
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../Components/Layouts/MainLayout";
import { BaseUrl } from "../Components/util";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { action } from "../Redux/Slice/cart";



export default function CheckoutPage() {

    const [open, setOpen] = useState(false);

    // form State //

    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [altMobile, setAltMobile] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [email, setEmail] = useState("");
    const [instruction, setInstruction] = useState("");
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const items = useSelector((cartData) => cartData.cart.items)
    const dilvery = useSelector((cartData) => cartData.cart.dilvery)
    const total = useSelector((cartData) => cartData.cart.total)


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const type = useSelector((state) => state.order.ordertype);

    const { ClearCart } = action



    console.log("hh" + type);
    let orderType = type;
    let grandTotal = 0;

    if (orderType === "Delivery") {
        grandTotal = total + dilvery

    } else {
        grandTotal = total
    }



    const pickUp = false


    const submitOrder = async () => {
        try {
            const orderId = localStorage.getItem("orderId");

            setLoading(true)
            if (orderId) {
                alert("You have already placed an order. Please wait for it to be processed.")
                setLoading(false)
                return
            }

            if (!items.length) {
                alert("Your cart is empty. Please add items to your cart before placing an order.")
                setLoading(false)
                return
            }
            if (!fullName || !mobile || !altMobile || !address || !email || !items.length) {
                alert("Please Enter All valid Fileds")
                setLoading(false)
                return
            }


            let OID = `ORD0${Date.now()}`
            localStorage.setItem('orderId', OID)

            let obj = {
                OrderItems: items,
                delivery: dilvery,
                totalBill: grandTotal,
                total,
                fullName,
                mobile,
                altMobile,
                address,
                landmark,
                email,
                instruction,
                OrderType: orderType,
                orderStatus: "pending",
                isAccepted: "",
                oderID: OID,
                isDelivery: false
            }

            let respose = await axios.post(`${BaseUrl}/order/post`, obj)
            console.log(respose.data)
            alert(respose.data.message || "Your order Successfuly Submited..")

            setFullName("")
            setAltMobile("")
            setLandmark("")
            setAddress("")
            setMobile("")
            setEmail("")
            setInstruction("")
            setLoading(false)
            navigate('/order')
            dispatch(ClearCart())

        } catch (error) {
            setLoading(false)
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

    return (
        <MainLayout>

            {loading &&
                <Backdrop
                    open={loading}
                    sx={{
                        color: "#fff",
                        zIndex: 9999,
                        backdropFilter: "blur(6px)", // 🔥 blur effect
                        backgroundColor: "rgba(0,0,0,0.3)", // slight dark
                    }}
                >
                    <CircularProgress
                        size={70}
                        thickness={5}
                        sx={{
                            color: "#F3A32B", // 🔥 orange color
                        }}
                    />
                </Backdrop>

            }
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    px: { xs: 2, md: 4 },
                    py: { xs: 2, md: 4 },
                    mt: "0px",

                }}
            >

                {/* LEFT SIDE FORM */}
                <Box
                    sx={{
                        flex: 1,
                        width: { xs: "100%", md: "50%" },
                        bgcolor: "#fff",
                        borderRadius: "16px",
                        p: { xs: 2, md: 4 },
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                        alignSelf: "flex-start",
                    }}
                >

                    <Typography fontWeight="bold" fontSize={14} mb={"20px"} sx={{color:'#f3a32b'}}>
                        {type == "Pickup"
                            ? "Pickup selected. Want delivery instead? Change it from the ⬆️ top side dropdown above."
                            : "Delivery selected. Want to pick it up instead? Change it from the ⬆️ top side dropdown above."}
                    </Typography>

                    {type == "Pickup" ? (
                        <>
                            <Stack spacing={3}>

                                {/* TAKEAWAY BOX */}
                                <Box
                                    sx={{
                                        bgcolor: "#f5f5f5",
                                        p: 2,
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography fontSize={14}>
                                        This is a <b>TAKEAWAY ORDER 🛍️</b>
                                    </Typography>

                                    <Typography fontSize={13} mt={1}>
                                        You have to collect your order from
                                    </Typography>

                                    <Typography fontWeight="bold" fontSize={14} mt={1}>
                                        Bitey Pizza, Fast Food and BBQ
                                    </Typography>

                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <LocationOnIcon fontSize="small" color="error" />
                                        <Typography fontSize={12}>
                                            Plot R, 753, Federal B Area Dastagir Yaseenabad,
                                            Karachi, Pakistan
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        onClick={() =>
                                            window.open(
                                                "https://maps.app.goo.gl/Anq1kuBnNUggb4RD8"
                                            )
                                        }
                                        fontSize={12}
                                        color="primary"
                                        sx={{ cursor: "pointer" }}
                                    >
                                        View Location
                                    </Typography>

                                    <Typography fontSize={12}>
                                        Phone: 03188201074
                                    </Typography>
                                </Box>

                                {/* FORM TITLE */}
                                <Typography fontWeight="bold" fontSize={14}>
                                    JUST A LAST STEP, PLEASE FILL YOUR INFORMATION BELOW
                                </Typography>

                                {/* NAME */}
                                <TextField
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    fullWidth
                                    size="small"
                                    placeholder="Full Name *"
                                />

                                {/* MOBILE */}
                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={2}
                                >
                                    <TextField
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        fullWidth
                                        size="small"
                                        placeholder="Mobile Number *"
                                    />

                                    <TextField
                                        value={altMobile}
                                        onChange={(e) => setAltMobile(e.target.value)}
                                        fullWidth
                                        size="small"
                                        placeholder="Alternate Number"
                                    />
                                </Stack>

                                {/* EMAIL */}
                                <TextField
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    size="small"
                                    placeholder="Email Address"
                                />

                                {/* BRANCH */}
                                <Select
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    displayEmpty
                                    fullWidth
                                    sx={{
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 2,
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Branch
                                    </MenuItem>

                                    <MenuItem value="Yaseenabad, Plot no R 753, Block 9">
                                        Bitey - Yaseenabad, Plot no R 753, Block 9
                                    </MenuItem>
                                </Select>

                                {/* PAYMENT */}
                                <Box>
                                    <Typography fontSize={13} mb={1}>
                                        Payment Information
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderColor: "green",
                                            color: "black",
                                            py: 1.5,
                                            borderRadius: 2,
                                        }}
                                    >
                                        Pay at Pickup
                                    </Button>
                                </Box>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Paper
                                sx={{
                                    p: { xs: 2, md: 4 },
                                    borderRadius: 3,
                                    boxShadow: "none",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Checkout
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    mb={2}
                                >
                                    This is a <b>Delivery Order 🚚</b>
                                    <br />
                                    Just a last step, please enter your details:
                                </Typography>

                                <Grid container spacing={2}>

                                    {/* NAME */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Full Name *"
                                            value={fullName}
                                            onChange={(e) =>
                                                setFullName(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* PHONE */}
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Mobile Number *"
                                            value={mobile}
                                            onChange={(e) =>
                                                setMobile(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Alternate Mobile Number"
                                            value={altMobile}
                                            onChange={(e) =>
                                                setAltMobile(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* ADDRESS */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Delivery Address *"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* LANDMARK */}
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Nearest Landmark"
                                            value={landmark}
                                            onChange={(e) =>
                                                setLandmark(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* EMAIL */}
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* INSTRUCTIONS */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Delivery Instructions"
                                            value={instruction}
                                            onChange={(e) =>
                                                setInstruction(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    {/* PAYMENT */}
                                    <Grid item xs={12}>
                                        <Typography
                                            color="#4caf50"
                                            fontWeight="bold"
                                            mb={1}
                                        >
                                            Payment Information
                                        </Typography>

                                        <Box
                                            sx={{
                                                border: "2px solid #4caf50",
                                                borderRadius: 2,
                                                width: "100%",
                                                textAlign: "center",
                                                py: 1.5,
                                                color: "#4caf50",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Cash on Delivery
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </>
                    )}
                </Box>

                {/* RIGHT SIDE CART */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "40%" },
                        bgcolor: "#fff",
                        borderRadius: "16px",
                        p: 3,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                        position: { md: "sticky" },
                        top: "90px",
                        alignSelf: "flex-start",
                    }}
                >
                    <Stack spacing={2}>

                        <Typography
                            fontWeight="800"
                            fontSize={"24px"}
                            textAlign={"center"}
                        >
                            Your Order
                        </Typography>

                        {items.map((item, i) => (
                            <Stack key={i} spacing={1}>
                                <Stack direction="row" spacing={1}>
                                    <Box sx={{ width: 50, height: 50 }}>
                                        <img
                                            src={item.image}
                                            width="100%"
                                            style={{
                                                borderRadius: "8px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>

                                    <Stack flex={1}>
                                        <Typography
                                            fontSize={13}
                                            fontWeight="bold"
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography fontSize={12}>
                                            Qty : {item.qty}
                                        </Typography>
                                    </Stack>

                                    <Typography fontSize={12}>
                                        Rs. {item.price}
                                    </Typography>
                                </Stack>

                                <Divider />
                            </Stack>
                        ))}

                        <TextField
                            placeholder="Promo Code"
                            size="small"
                            fullWidth
                        />

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Typography fontSize={12}>Subtotal</Typography>
                            <Typography fontSize={12}>
                                Rs. {total}
                            </Typography>
                        </Stack>

                        {orderType === "Delivery" && (
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography fontSize={12}>
                                    Delivery
                                </Typography>

                                <Typography fontSize={12}>
                                    Rs. {dilvery}
                                </Typography>
                            </Stack>
                        )}

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Typography fontWeight="bold">
                                Grand total
                            </Typography>

                            <Typography fontWeight="bold">
                                Rs. {grandTotal}
                            </Typography>
                        </Stack>

                        <Button
                            fullWidth
                            sx={{
                                bgcolor: "#F3A32B",
                                color: "#fff",
                                py: 1.5,
                                borderRadius: 2,
                                fontWeight: "bold",
                                "&:hover": {
                                    bgcolor: "#db911f",
                                },
                            }}
                            onClick={submitOrder}
                        >
                            Place Order
                        </Button>

                        <Typography
                            sx={{ cursor: "pointer" }}
                            mt={"10px"}
                            textAlign={"center"}
                            color="#f3a32b"
                            onClick={() => navigate("/")}
                        >
                            add more item go to Home
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </MainLayout>

    );
}