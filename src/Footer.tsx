import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ebayIcon from "./assets/EBay_logo.png";

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
            <img
              src={ebayIcon}
              alt="eBay"
              style={{ width: 70, marginRight: 8 }}
            />
            <IconButton aria-label="Instagram" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
