import * as React from "react";
import {
  Box,
  Typography,
  Drawer,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../Redux/Slice/cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../util";


export default function Cart({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [cart, setCart] = React.useState([]);
  const [qty, setQty] = React.useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [extar, setExtar] = React.useState([])



  const { itemQtyInc, itemQtyDc, addItem , removeItem, ClearCart} = action

  const cartSelector = useSelector((cartItem) => cartItem.cart.items)
  const total = useSelector((cartTotal) => cartTotal.cart.total)


  useEffect(() => {
    getPopularItems();
  }, []);

  const getPopularItems = async () => {
    try {
      const getData = await axios.get(`${BaseUrl}/extraItem/get`)
      console.log(getData.data.data);

      setExtar(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const addExtraItem = (data) => {
    let extraItemData = { ...data, qty: 1 }
    dispatch(addItem(extraItemData))
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 420 },
          bgcolor: "#f5f5f5",
        },
      }}
    >
      <Stack height="100%" justifyContent="space-between">
        {/* HEADER */}
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Typography fontWeight="bold" fontSize={20}>
              Your Cart
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{
                  color: "#f3a32b",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
                onClick={() => dispatch(ClearCart())}
              >
                Clear cart
              </Typography>

              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ color: "black", fontWeight: 900 }} />
              </IconButton>
            </Stack>
          </Stack>

          <Divider />

          {/* ITEMS */}
          <Stack spacing={2} p={2}>
            {cartSelector.map((item) => (
              <Stack key={item.id} spacing={1.5}>
                <Stack direction="row" spacing={2}>
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 2,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <Stack flex={1} spacing={0.5}>
                    <Typography fontWeight="bold" fontSize={15}>
                      {item.title}
                    </Typography>

                    <Typography fontSize={12} color="#777">
                      {item.desc}
                    </Typography>

                    <Typography fontWeight="bold">
                      Rs. {item.price.toLocaleString()}.00
                    </Typography>
                  </Stack>

                  <IconButton onClick={() => dispatch(removeItem(item._id))}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Stack>

                {/* QTY */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button
                    onClick={() => dispatch(itemQtyDc(item._id))}
                    sx={{
                      minWidth: 32,
                      height: 32,
                      bgcolor: "#f3a32b",
                      color: "#fff",
                      borderRadius: "50%",
                    }}
                  >
                    -
                  </Button>

                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      border: "1px solid #ddd",
                      borderRadius: 1,
                      minWidth: 30,
                      textAlign: "center",
                    }}
                  >
                    {qty ? qty : item.qty}
                  </Box>

                  <Button
                    onClick={() => dispatch(itemQtyInc(item._id))}
                    sx={{
                      minWidth: 32,
                      height: 32,
                      bgcolor: "#f3a32b",
                      color: "#fff",
                      borderRadius: "50%",
                    }}
                  >
                    +
                  </Button>
                </Stack>

                <Divider />
              </Stack>
            ))}
          </Stack>

          {/* POPULAR ITEMS */}
          <Box px={2} pb={2}>
            <Typography fontWeight="bold" mb={1}>
              Popular Items
            </Typography>

            <Stack spacing={2}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 1.5,
                  borderRadius: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  {extar?.map((item) => {
                    return <>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          backgroundImage:
                            `url("${item.image}")`,
                          backgroundSize: "cover",
                        }}
                      />

                      <Stack flex={1}>
                        <Typography fontWeight="bold">
                          {item.title}
                        </Typography>


                        <Box
                          sx={{
                            mt: 1,
                            bgcolor: "#f3a32b",
                            color: "#fff",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: 12,
                            width: "fit-content",
                          }}
                        >
                          Rs. {item.price}.00
                        </Box>
                        <Box
                          onClick={() => addExtraItem(item)}
                          sx={{
                            mt: 1,
                            bgcolor: "#f3a32b",
                            color: "#fff",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: 14,
                            width: "fit-content",
                            fontWeight: 900,
                            cursor: "pointer"
                          }}

                        >
                          Add +
                        </Box>
                      </Stack>
                    </>
                  })}

                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* FOOTER */}
        <Box p={2} bgcolor="#fff">
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="#777">Subtotal</Typography>
              <Typography color="#777">
                Rs.{total}.00
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="bold">Grand total</Typography>
              <Typography fontWeight="bold">
                Rs.{total}.00
              </Typography>
            </Stack>

            <Typography fontSize={11} color="#999">
              *To apply Promo Code, please proceed to Checkout
            </Typography>

            <Button
              onClick={() => navigate('/checkout')}
              fullWidth
              sx={{
                bgcolor: "#f3a32b",
                color: "#fff",
                mt: 1,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Checkout
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Drawer>



  );
}