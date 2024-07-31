import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h1"
              sx={{ mt: 2, textAlign: "center" }}
            >
              John Doe
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Contact Information</Typography>
            <Typography>Email: john.doe@example.com</Typography>
            <Typography>Phone: +1234567890</Typography>
            <Typography>Address: AB12 C45</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Designs" />
          <Tab label="Order History" />
          <Tab label="Settings" />
        </Tabs>

        {tabIndex === 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Uploaded Designs</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="https://via.placeholder.com/50" />
                </ListItemAvatar>
                <ListItemText
                  primary="Design 1"
                  secondary="Description of design 1"
                />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="https://via.placeholder.com/50" />
                </ListItemAvatar>
                <ListItemText
                  primary="Design 2"
                  secondary="Description of design 2"
                />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Order History</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Order #1234"
                  secondary="Completed on 2024-07-20"
                />
                <Typography>$45.00</Typography>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Order #1235"
                  secondary="Completed on 2024-06-18"
                />
                <Typography>$30.00</Typography>
              </ListItem>
            </List>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Account Settings</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Change Password" />
                <IconButton edge="end" aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Manage Payment Methods" />
                <IconButton edge="end" aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText primary="Update Profile Information" />
                <IconButton edge="end" aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ProfilePage;
