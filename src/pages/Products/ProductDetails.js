import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [Products, SetProducts] = useState({});

  const { id } = useParams();

  const getData = async () => {
    axios
      .get("/getbyid/" + id)
      .then((response) => SetProducts(response?.data?.data?.engData));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid item xs={2}>
      <Typography
        sx={{ margin: 10, marginTop: 10, fontSize: 25, fontWeight: "bold" }}
        variant="h5"
      >
        {Products.title}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{Products.description}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>How To Use</TableCell>
              <TableCell>{Products.howToUse}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ProductDetails;
