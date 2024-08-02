type Props = {};
import { Button, TextField, Typography, Container, Grid } from "@mui/material";

export default function Logout({}: Props) {
  return (
    <Container
      maxWidth="sm"
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Logout Screen
      </Typography>
    </Container>
  );
}
