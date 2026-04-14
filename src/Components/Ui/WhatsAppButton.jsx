import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NavigationIcon from '@mui/icons-material/Navigation';

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

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    const y = element.getBoundingClientRect().top + window.pageYOffset + -100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (

    <>


      <Box
        sx={{
          position: "fixed",
          bottom: isMobile ? 86 : 16,
          right: 16,
          zIndex: 1300,
        }}
      >
        <IconButton
          onClick={handleClick}
          sx={{
            bgcolor: "#25D366",
            color: "#fff",
            width: isMobile ? 36 : 56,
            height: isMobile ? 36 : 56,
            boxShadow: 3,
            "&:hover": {
              bgcolor: "#1ebe5d",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize:isMobile ? 20 : 30 }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: isMobile ? 130 : 85,
          right: 16,
          zIndex: 1300,
        }}
      >
        <IconButton
          onClick={() => handleScroll("home")}
          sx={{
            bgcolor: "#e53935",
            color: "#fff",
            width: isMobile ? 36 : 56,
            height: isMobile ? 36 : 56,
            boxShadow: 3,
            "&:hover": {
              bgcolor: "#800a08",
            },
          }}
        >
          <NavigationIcon sx={{ fontSize: isMobile ? 20 : 30 }} />
        </IconButton>
      </Box>

    </>
  );
}