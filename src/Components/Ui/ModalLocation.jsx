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
import axios from "axios";
import Navbar from "../Layouts/Navbar";

export default function ModalLocation({ open, setOpen }) {


  const handleClose = () => {
    let getInfo = localStorage.getItem("orderInfo");
    if (!getInfo) {
      alert("Please select your order type and location to proceed.");
      return;
    }
    setOpen(false);
  };

  // 🔥 states
  const [orderType, setOrderType] = React.useState("delivery");
  const [area, setArea] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [location, setLocation] = React.useState();
  const [loadingLocation, setLoadingLocation] = React.useState(false);

  React.useEffect(() => {
    console.log(location);

  }, [location])


  //deScturture //

  const currentLocation = () => {
    setLoadingLocation(true),
      navigator.geolocation.getCurrentPosition(


        async (position) => {


          console.log(position.coords.latitude);
          console.log(position.coords.longitude);

          let res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );

          console.log(res.data);
          setLocation(res.data.address);
          console.log(res.data.address);
          setArea(res.data.address.house_number + " " + res.data.address.road + " " + res.data.address.suburb);
          setLoadingLocation(false);
        },
        (error) => {
          console.log("Error:", error.message);
          setLoadingLocation(false);
        }
      );
  }



  const dilveryAddress = location ? `${location.house_number || ""} ${location.road || ""} ${location.suburb || ""}` : "";

  console.log("-----------------------------------" + area);

  const getAdressDilvery = (address) => {
    console.log("Delivery Address:", address);
    let obj = {
      type: "Delivery",
      address: address
    }
    localStorage.setItem("orderInfo", JSON.stringify(obj));

    handleClose();
  }


  const getAdressPickup = (address) => {
    console.log("Pickup Address:", address);
    let obj = {
      type: "Pickup",
      address: address
    }
    localStorage.setItem("orderInfo", JSON.stringify(obj));
    handleClose();
  }

  // const { house_number, suburb, road } = location;


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
                onClick={currentLocation}
              >
                {loadingLocation ? "fetching location..." : "Use Current Location"}

              </Button>

              {location && (
                <Typography fontSize={12} color="green">
                  {location?.house_number} {location?.road} {location?.suburb}
                </Typography>
              )}

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
                  <MenuItem value={dilveryAddress ? dilveryAddress : ""}>
                    {dilveryAddress ? dilveryAddress : "Select Area / Sub Region"}
                  </MenuItem>

                  <MenuItem value="nazimabad">Nazimabad</MenuItem>
                  <MenuItem value="gulshan">Gulshan</MenuItem>
                  <MenuItem value="clifton">Clifton</MenuItem>


                </Select>
              </FormControl>
            </>
          ) : (
            <>
             
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
                  <MenuItem value="Yaseenabad, Plot no R 753, Block 9">Bitey - Yaseenabad, Plot no R 753, Block 9</MenuItem>
                
                </Select>
              </FormControl>
            </>
          )}

          {/* SELECT BUTTON */}
          <Button
            fullWidth
            disabled={
              orderType === "delivery" ? !(area || location) : !branch
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
            onClick={orderType === "delivery" ? () => getAdressDilvery(area) : () => getAdressPickup(branch)}
          >
            Select
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}