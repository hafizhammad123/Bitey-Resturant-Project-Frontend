import * as React from "react";
import {
  Box,
  Typography,
  Modal,
  Stack,
  IconButton,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { action } from "../../Redux/Slice/cart";

export default function DetailModal({ open, setOpen, deatailData }) {
  const handleClose = () => setOpen(false);

  const [qty, setQty] = React.useState(1);
  const [selectedDrink, setSelectedDrink] = React.useState("Pepsi");

  const dispatch = useDispatch();
  const { addItem } = action;

  const { image, price, title } = deatailData || {};

  let total = qty * (price || 0);

  const handleAddToCart = () => {
    dispatch(addItem({ ...deatailData, qty }));
    alert("Your item added to Cart successfully 🎉");
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableScrollLock
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", md: "80%" },

          // 🔥 IMPORTANT FIX FOR MOBILE
          maxHeight: { xs: "calc(100vh - 80px)", md: "80vh" },

          bgcolor: "#fff",
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: 220, md: "100%" },
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT CONTENT (SCROLLABLE) */}
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            p: 3,
            justifyContent: "space-between",

            // 🔥 SCROLL FIX
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* TOP CONTENT */}
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="flex-end">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography fontSize={22} fontWeight="bold">
              {title}
            </Typography>

            <Typography fontSize={18} fontWeight="bold">
              Rs. {price}.00
            </Typography>

            {/* DESCRIPTION */}
            {deatailData?.itemDescription && (
              <Typography>{deatailData.itemDescription}</Typography>
            )}

            {/* DRINK OPTIONS */}
            {deatailData?.drinkOptions?.length > 0 && (
              <Box sx={{ bgcolor: "#f3f3f3", p: 2, borderRadius: 2 }}>
                <FormControl>
                  <FormLabel sx={{ fontWeight: "bold", color: "#000" }}>
                    Cold Drink
                  </FormLabel>

                  <RadioGroup
                    row
                    value={selectedDrink}
                    onChange={(e) => setSelectedDrink(e.target.value)}
                  >
                    {deatailData.drinkOptions.map((coldDrink, index) => (
                      <FormControlLabel
                        key={index}
                        value={coldDrink}
                        control={<Radio />}
                        label={coldDrink}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            )}

            {/* INSTRUCTIONS */}
            <Box sx={{ bgcolor: "#f3f3f3", p: 2, borderRadius: 2 }}>
              <Typography fontWeight="bold">Instructions</Typography>

              <TextField
                fullWidth
                placeholder="Any special requests?"
                sx={{ mt: 2, bgcolor: "#fff", borderRadius: 2 }}
              />
            </Box>
          </Stack>

          {/* BOTTOM BAR */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            mt={3}
            sx={{ position: "sticky", bottom: 0, bgcolor: "#fff", pt: 2 }}
          >
            {/* QTY */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                sx={{
                  minWidth: 40,
                  bgcolor: "#f3a32b",
                  color: "#fff",
                }}
              >
                -
              </Button>

              <Typography>{qty}</Typography>

              <Button
                onClick={() => setQty(qty + 1)}
                sx={{
                  minWidth: 40,
                  bgcolor: "#f3a32b",
                  color: "#fff",
                }}
              >
                +
              </Button>
            </Stack>

            {/* ADD TO CART */}
            <Button
              fullWidth
              onClick={handleAddToCart}
              sx={{
                bgcolor: "#f3a32b",
                color: "#fff",
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Rs. {total}.00 Add To Cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}