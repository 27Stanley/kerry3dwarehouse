import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import ebayIcon from "../assets/EBay_logo.png";

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" color="inherit">
              © {new Date().getFullYear()} Kerry 3d Warehouse. All rights
              reserved.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <a
              href="https://www.ebay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ebayIcon}
                alt="eBay"
                style={{ width: 70, marginRight: 8 }}
              />
            </a>

            <IconButton
              aria-label="Instagram"
              color="inherit"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
