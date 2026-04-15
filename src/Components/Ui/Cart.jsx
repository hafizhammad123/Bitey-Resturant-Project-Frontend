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

export default function Cart({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  const [cart, setCart] = React.useState([
    {
      id: 1,
      name: "Quarter Chest Broast",
      desc: "1 Chest, 1 Wing, 1 Bun, 1 Garlic Sauce, Fries",
      price: 749,
      qty: 1,
      img: "https://images.unsplash.com/photo-1604908176997-4315d2e9a3c6",
    },
    {
      id: 2,
      name: "Full Broast",
      desc:
        "2 Legs, 2 Thighs, 2 Chests, 2 Wings, 4 Buns, 4 Garlic Sauces, Fries",
      price: 2599,
      qty: 1,
      img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    },
  ]);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

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
                onClick={clearCart}
                sx={{
                  color: "#ff3d00",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Clear cart
              </Typography>

              <IconButton onClick={handleClose}>
                <CloseIcon  sx={{color :"black" , fontWeight:900}}/>
              </IconButton>
            </Stack>
          </Stack>

          <Divider />

          {/* ITEMS */}
          <Stack spacing={2} p={2}>
            {cart.map((item) => (
              <Stack key={item.id} spacing={1.5}>
                <Stack direction="row" spacing={2}>
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 2,
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <Stack flex={1} spacing={0.5}>
                    <Typography fontWeight="bold" fontSize={15}>
                      {item.name}
                    </Typography>

                    <Typography fontSize={12} color="#777">
                      {item.desc}
                    </Typography>

                    <Typography fontWeight="bold">
                      Rs. {item.price.toLocaleString()}.00
                    </Typography>
                  </Stack>

                  <IconButton onClick={() => removeItem(item.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Stack>

                {/* QTY */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button
                    onClick={() => updateQty(item.id, "dec")}
                    sx={{
                      minWidth: 32,
                      height: 32,
                      bgcolor: "#ff6b00",
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
                    {item.qty}
                  </Box>

                  <Button
                    onClick={() => updateQty(item.id, "inc")}
                    sx={{
                      minWidth: 32,
                      height: 32,
                      bgcolor: "#ff6b00",
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
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1604908176997-4315d2e9a3c6')",
                      backgroundSize: "cover",
                    }}
                  />

                  <Stack flex={1}>
                    <Typography fontWeight="bold">
                      Peri Peri Dip
                    </Typography>
                    <Typography fontSize={12} color="#777">
                      A bold, tangy sauce with a spicy kick
                    </Typography>

                    <Box
                      sx={{
                        mt: 1,
                        bgcolor: "#ff6b00",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: 12,
                        width: "fit-content",
                      }}
                    >
                      Rs. 100.00
                    </Box>
                  </Stack>
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
                Rs. {subtotal.toLocaleString()}.00
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="bold">Grand total</Typography>
              <Typography fontWeight="bold">
                Rs. {subtotal.toLocaleString()}.00
              </Typography>
            </Stack>

            <Typography fontSize={11} color="#999">
              *To apply Promo Code, please proceed to Checkout
            </Typography>

            <Button
              fullWidth
              sx={{
                bgcolor: "#ff6b00",
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