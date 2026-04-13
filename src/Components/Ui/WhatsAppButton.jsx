import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton({
  phone = "923001234567", // apna number yahan daalo (without +)
  message = "Hello, I want to order",
}) {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (


    <Box
      sx={{
        position: "fixed",
        bottom:isMobile ? 86 : 16,
        right: 16,
        zIndex: 1300,
      }}
    >
      <IconButton
        onClick={handleClick}
        sx={{
          bgcolor: "#25D366",
          color: "#fff",
          width: 56,
          height: 56,
          boxShadow: 3,
          "&:hover": {
            bgcolor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
}