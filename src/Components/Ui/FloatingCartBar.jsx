import { Box, Stack, Typography } from "@mui/material";

export default function FloatingCartBar({ count = 2, total = 1656 }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "90%", sm: 400 },
        zIndex: 1300,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          bgcolor: "#E53935",
          color: "#fff",
          px: 2,
          py: 1.5,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* LEFT - COUNT */}
        <Box
          sx={{
            border: "2px solid #fff",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {count}
        </Box>

        {/* CENTER */}
        <Typography fontWeight="bold" fontSize={16}>
          View Cart
        </Typography>

        {/* RIGHT - PRICE */}
        <Typography fontWeight="bold">
          Rs. {total.toLocaleString()}
        </Typography>
      </Stack>
    </Box>
  );
}