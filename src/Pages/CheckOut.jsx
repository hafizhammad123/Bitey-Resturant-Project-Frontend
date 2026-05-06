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
    const type = useSelector((orderType) => orderType.order?.ordertype)
    let grandTotal = total + dilvery

    const {ClearCart } = action

    let obj = {
        OrderItems: items,
        delivery: dilvery,
        totalBill: grandTotal,
        fullName,
        mobile,
        altMobile,
        address,
        landmark,
        email,
        instruction,
        OrderType: type
    }

    console.log("hh" + type);

    const pickUp = false


    const submitOrder = async () => {
        try {
            setLoading(true)
            if (!fullName || !mobile || !altMobile || !address || !email) {
                alert("Please Enter All valid Fileds")
                setLoading(false)
                return
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
                p={2}
                alignItems="flex-start"
            >

                {/* LEFT SIDE FORM */}
                <Box
                    sx={{
                        flex: 1,
                        bgcolor: "#fff",
                        borderRadius: 2,
                        p: 3,
                        width: "50%"
                    }}

                >
                    <Typography fontWeight="bold" fontSize={14} mb={"20px"}>
                        {type == "Pickup" ? "Pickup selected. Want delivery instead? Change it from the ⬆️ top side dropdown above." : "Delivery selected. Want to pick it up instead? Change it from  ⬆️ top side the dropdown above."}
                    </Typography>
                    {/* <Stack direction={"row"} mb={"20px"}>
                        <Button sx={{ bgcolor: isPickUp && "orange", color: isPickUp ? "white" : "orange", border: "2px solid orange" }} onClick={() => checkType("pickUp")}>
                            Pick-up
                        </Button>
                        <Button sx={{ bgcolor: isDelivery && "orange", color: isDelivery ? "white" : "orange", border: "2px solid orange" }} onClick={() => checkType("delivery")}>
                            Delivery
                        </Button>
                    </Stack> */}

                    {type == "Pickup" ? (<>

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
                                        Plot R, 753, Federal B Area Dastagir Yaseenabad, Karachi, Pakistan
                                    </Typography>
                                </Stack>

                                <Typography onClick={() => window.open("https://maps.app.goo.gl/Anq1kuBnNUggb4RD8")} fontSize={12} color="primary">
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
                            <Stack direction="row" spacing={2}>
                                <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth size="small" placeholder="Full Name *" />
                            </Stack>

                            {/* MOBILE */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                <TextField value={mobile} onChange={(e) => setMobile(e.target.value)} fullWidth size="small" placeholder="Mobile Number *" />
                                <TextField value={altMobile} onChange={(e) => setAltMobile(e.target.value)} fullWidth size="small" placeholder="Alternate Number" />
                            </Stack>

                            {/* EMAIL */}
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth size="small" placeholder="Email Address" />

                            {/* NOTES */}

                            <Select
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                displayEmpty
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    borderRadius: 2,
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Branch
                                </MenuItem>
                                <MenuItem value="Yaseenabad, Plot no R 753, Block 9">Bitey - Yaseenabad, Plot no R 753, Block 9</MenuItem>

                            </Select>


                            {/* PAYMENT */}
                            <Box>
                                <Typography fontSize={13} mb={1}>
                                    Payment Information
                                </Typography>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "green",
                                        color: "black",
                                        px: 3,
                                        py: 1.5,
                                        borderRadius: 2,
                                    }}
                                >
                                    Pay at Pickup
                                </Button>
                            </Box>


                        </Stack>

                    </>) : (<>


                        <Box sx={{ p: { xs: 2, md: 4 }, background: "#f5f5f5" }}>
                            <Paper sx={{ p: 4, borderRadius: 3 }}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Checkout
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    This is a <b>Delivery Order 🚚</b> <br />
                                    Just a last step, please enter your details:
                                </Typography>

                                <Grid container spacing={2}>

                                    <Grid item xs={12} md={9}>
                                        <TextField
                                            fullWidth
                                            label="Full Name *"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </Grid>

                                    {/* Phone */}
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Mobile Number *"
                                            placeholder="03xx-xxxxxxx"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Alternate Mobile Number"
                                            placeholder="03xx-xxxxxxx"
                                            value={altMobile}
                                            onChange={(e) => setAltMobile(e.target.value)}
                                        />
                                    </Grid>

                                    {/* Address */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Delivery Address *"
                                            placeholder="Enter your complete address"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                        />
                                    </Grid>

                                    {/* Landmark + Email */}
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Nearest Landmark"
                                            value={landmark}
                                            placeholder="any famous place nearby"
                                            onChange={(e) => setLandmark(e.target.value)}

                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            placeholder="Enter your email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </Grid>

                                    {/* Instructions */}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Delivery Instructions"
                                            placeholder="Appartment, floor, etc"
                                            onChange={(e) => setInstruction(e.target.value)}
                                            value={instruction}
                                        />
                                    </Grid>

                                    {/* Payment */}
                                    <Grid item xs={12}>
                                        <Typography color="#4caf50" fontWeight="bold" mb={1}>
                                            Payment Information
                                        </Typography>

                                        <Box
                                            sx={{
                                                border: "2px solid #4caf50",
                                                borderRadius: 2,

                                                width: "100%",   // 🔥 full width
                                                textAlign: "center",
                                                cursor: "pointer",
                                                color: '#4caf50'
                                            }}
                                        >

                                            <Typography>Cash on Delivery</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>


                    </>)}

                </Box>

                {/* RIGHT SIDE CART (TUMHARA SAME CODE) */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        bgcolor: "#fff",
                        borderRadius: 2,
                        p: 2,
                        height: "fit-content",
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
                                        <img src={item.image} width="100%" />
                                    </Box>

                                    <Stack flex={1}>
                                        <Typography fontSize={13} fontWeight="bold">
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

                        <TextField placeholder="Promo Code" size="small" />

                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontSize={12}>Subtotal</Typography>
                            <Typography fontSize={12}>Rs. {total}</Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontSize={12}>Delivery</Typography>
                            <Typography fontSize={12}>Rs. {dilvery}</Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontWeight="bold">Grand total</Typography>
                            <Typography fontWeight="bold">Rs. {grandTotal}</Typography>
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
                            onClick={submitOrder}
                        >
                            Place Order
                        </Button>
                        <Typography sx={{ cursor: "pointer" }} mt={"10px"} textAlign={"center"} color="blue" onClick={() => navigate("/")}>add more item go to Home</Typography>
                    </Stack>
                </Box>

            </Stack>
        </MainLayout>

    );
}