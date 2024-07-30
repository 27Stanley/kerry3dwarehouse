type Props = {};
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Divider,
} from "@mui/material";

export default function About({}: Props) {
  return (
    <Container
      maxWidth="xl"
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Who We Are
      </Typography>
      <Divider />
      <Typography variant="h2" gutterBottom>
        Iconic Designs Meeting Premium Construction
      </Typography>
      <Typography variant="body1" paragraph>
        For over a decade, Kerry 3D Warehouse has been at the forefront of
        creating world-renowned 3D-printed products.
      </Typography>
      <Typography variant="body1" paragraph>
        Designing and printing contemporary, functional trinkets. Engineered to
        be engagin and meet the diverse demands of your lifestyle. We take our
        commitment to quality and innovation very seriously.
      </Typography>
      <Typography variant="body1" paragraph>
        Your 3D-printed product is your companion in every creative endeavor. It
        must be durable, reliable, and ready to withstand the elements.
      </Typography>
      <Typography variant="body1" paragraph>
        At Kerry 3D Warehouse, our 3D-printed products always strive to meet the
        highest standards, ready for innovation and adventure!
      </Typography>
    </Container>
  );
}
