import * as React from "react";
import {
  Box,
  Typography,
  Modal,
  Stack,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DetailModal({ open, setOpen, image }) {
  const handleClose = () => setOpen(false);

  const [qty, setQty] = React.useState(1);

  return (
    <Modal
      open={open}
      onClose={handleClose}
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
          height: { xs: "auto", md: "80vh" },
          bgcolor: "#fff",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* MAIN CONTAINER */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          height="100%"
        >
          {/* LEFT IMAGE */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: 250, md: "100%" },
              backgroundImage: image ? `url(${image})` :
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8B_B2OV26TBhGd0IcfNDnhsrILbYdAMVDZg&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* RIGHT CONTENT */}
          <Stack
            sx={{
              width: { xs: "100%", md: "50%" },
              p: 3,
              position: "relative",
              justifyContent: "space-between",
            }}
          >
            {/* TOP CONTENT */}
            <Stack spacing={2}>
              {/* CLOSE */}
              <Stack direction="row" justifyContent="flex-end">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>

              {/* TITLE */}
              <Typography fontSize={22} fontWeight="bold">
                Arabian Nuggets (With Fries)
              </Typography>

              {/* PRICE */}
              <Typography fontSize={18} fontWeight="bold">
                Rs. 699.00
              </Typography>

              {/* ACCORDION STYLE BOXES */}
              
              <Box
                sx={{
                  bgcolor: "#f3f3f3",
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Typography fontWeight="bold">
                  Instructions
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Any special requests?"
                  sx={{
                    mt: 2,
                    bgcolor: "#fff",
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Stack>

            {/* BOTTOM BAR */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              mt={3}
            >
              {/* QUANTITY */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  sx={{
                    minWidth: 40,
                    bgcolor: "#ff6b00",
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
                    bgcolor: "#ff6b00",
                    color: "#fff",
                  }}
                >
                  +
                </Button>
              </Stack>

              {/* ADD TO CART */}
              <Button
                fullWidth
                sx={{
                  bgcolor: "#ff6b00",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Rs. 699.00 Add To Cart
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}