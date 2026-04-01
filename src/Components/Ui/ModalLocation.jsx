import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  IconButton,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import logo from "../../assets/Images/Bitey_burger_and_pizza_logo-removebg-preview.png";

export default function ModalLocation({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  // 🔥 states
  const [orderType, setOrderType] = React.useState("delivery");
  const [area, setArea] = React.useState("");
  const [branch, setBranch] = React.useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 400 },
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Stack spacing={2} alignItems="center">
          
          {/* CLOSE BUTTON */}
          <Stack width="100%" direction="row" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* LOGO */}
          <img src={logo} alt="logo" style={{ width: 150 }} />

          {/* TITLE */}
          <Typography fontWeight="bold" fontSize={18} color="#8a8888">
            Select your order type
          </Typography>

          {/* TOGGLE BUTTONS */}
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => setOrderType("delivery")}
              sx={{
                bgcolor: orderType === "delivery" ? "#f3a32b" : "transparent",
                color: orderType === "delivery" ? "#fff" : "#999",
                borderRadius: 3,
                px: 3,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              DELIVERY
            </Button>

            <Button
              onClick={() => setOrderType("pickup")}
              sx={{
                bgcolor: orderType === "pickup" ? "#f3a32b" : "transparent",
                color: orderType === "pickup" ? "#fff" : "#999",
                borderRadius: 3,
                px: 3,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              PICK-UP
            </Button>
          </Stack>

          {/* 🔥 CONDITIONAL UI */}
          {orderType === "delivery" ? (
            <>
              <Typography fontWeight="bold" fontSize={16} color="#8a8888">
                Please select your location
              </Typography>

              <Button
                startIcon={<MyLocationIcon />}
                sx={{
                  bgcolor: "#eee",
                  borderRadius: 5,
                  textTransform: "none",
                  color: "#333",
                  px: 3,
                }}
              >
                Use Current Location
              </Button>

              <TextField
                fullWidth
                value="Karachi"
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                }}
              />

              {/* AREA DROPDOWN */}
              <FormControl fullWidth>
                <Select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  displayEmpty
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Area / Sub Region
                  </MenuItem>
                  <MenuItem value="nazimabad">Nazimabad</MenuItem>
                  <MenuItem value="gulshan">Gulshan</MenuItem>
                  <MenuItem value="clifton">Clifton</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <>
              <Typography fontWeight="bold" fontSize={16}sx={{color:'#8a8888'}} textAlign="center">
                Which outlet would you like to pick-up from?
              </Typography>

              <Button
                startIcon={<MyLocationIcon />}
                sx={{
                  bgcolor: "#eee",
                  borderRadius: 5,
                  textTransform: "none",
                  color: "#333",
                  px: 3,
                }}
              >
                Use Current Location
              </Button>

              <TextField
                fullWidth
                value="Karachi"
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                }}
              />

              {/* BRANCH DROPDOWN */}
              <FormControl fullWidth>
                <Select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  displayEmpty
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Branch
                  </MenuItem>
                  <MenuItem value="branch1">Branch 1 - Saddar</MenuItem>
                  <MenuItem value="branch2">Branch 2 - DHA</MenuItem>
                  <MenuItem value="branch3">Branch 3 - Gulshan</MenuItem>
                </Select>
              </FormControl>
            </>
          )}

          {/* SELECT BUTTON */}
          <Button
            fullWidth
            disabled={
              orderType === "delivery" ? !area : !branch
            }
            sx={{
              bgcolor:
                (orderType === "delivery" && area) ||
                (orderType === "pickup" && branch)
                  ? "#f3a32b"
                  : "#ddd",
              color:
                (orderType === "delivery" && area) ||
                (orderType === "pickup" && branch)
                  ? "#fff"
                  : "#999",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Select
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}