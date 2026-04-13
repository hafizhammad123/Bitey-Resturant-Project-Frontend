import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🔥 fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// 📍 move map to current location
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

export default function AdderssModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  const [position, setPosition] = React.useState([24.9263, 67.0822]); // Karachi

  // 📍 current location
  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newPos = [pos.coords.latitude, pos.coords.longitude];
      setPosition(newPos);
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: 420 },
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 24,
          p: 2.5,
        }}
      >
        <Stack spacing={2}>
          {/* HEADER */}
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="700">
              Add new Address
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* ADDRESS */}
          <Stack spacing={1}>
            <Typography>Address</Typography>
            <TextField
              placeholder="Enter your complete street address"
              fullWidth
            />
          </Stack>

          {/* REGION */}
          <Stack spacing={1}>
            <Typography>Region</Typography>
            <TextField
              value="Karachi"
              fullWidth
              disabled
            />
          </Stack>

          {/* INFO */}
          <Typography fontSize={13} color="#777">
            To change your area/region, use location button.
          </Typography>

          {/* 🔥 REAL MAP */}
          <Box sx={{ height: 220, borderRadius: 2, overflow: "hidden" }}>
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <ChangeMapView center={position} />

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position} />
            </MapContainer>

            {/* BUTTON OVER MAP */}
            <Button
              onClick={handleCurrentLocation}
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#fff",
                color: "#000",
                textTransform: "none",
                boxShadow: 2,
              }}
            >
              Current Location
            </Button>
          </Box>

          {/* SAVE BUTTON */}
          <Button
            fullWidth
            sx={{
              bgcolor: "#ddd",
              color: "#999",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Save Address
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}