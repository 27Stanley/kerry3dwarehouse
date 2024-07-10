type Props = {};
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Button, Typography } from "@mui/material";

import heroImageOne from "../assets/toiletRollMount.jpg";
import heroImageTwo from "../assets/bagClipPegs.webp";
import heroImageThree from "../assets/tableCableHolders.webp";

const heroCarousellItems = [
  {
    name: "Toilet Roll Wall Mounts",
    description: "Description for Item 1",
    image: heroImageOne,
  },
  {
    name: "Bag Clip Pegs",
    description: "Description for Item 2",
    image: heroImageTwo,
  },
  {
    name: "Tableside Cable Holders",
    description: "Description for Item 3",
    image: heroImageThree,
  },
];

type ItemProps = {
  item: {
    name: string;
    description: string;
    image: string;
  };
};

function Item({ item }: ItemProps) {
  return (
    <Paper sx={{ height: "80vh", mt: 2, boxShadow: "none" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="65vh"
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "auto", height: "70vh" }}
        />
        <Typography variant="h4" sx={{ mt: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {item.description}
        </Typography>
        <Button sx={{ mt: 2, p: 2 }} variant="contained" color="primary">
          View Our Range
        </Button>
      </Box>
    </Paper>
  );
}

export default function Landing({}: Props) {
  return (
    <div>
      <Carousel sx={{ mb: 4, mt: 4, overflow: "hidden" }}>
        {heroCarousellItems.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
