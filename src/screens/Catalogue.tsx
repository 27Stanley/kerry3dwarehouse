type Props = {};

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";

import heroImageOne from "../assets/toiletRollMount.jpg";
import heroImageTwo from "../assets/bagClipPegs.webp";
import heroImageThree from "../assets/tableCableHolders.webp";

const catalogueItems = [
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

export default function Catalogue({}: Props) {
  return (
    <div>
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
          Kerry Product Catalogue
        </Typography>
        <Grid container spacing={2}>
          {catalogueItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
