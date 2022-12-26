import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  
} from "@material-ui/core";

import CardActionArea from "@mui/material/CardActionArea/CardActionArea";

import { FaCartArrowDown } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
     
        <CardHeader
          action={
            <div>
              <FaCartArrowDown color="orange" />
            </div>
          }
        />

        <CardMedia
          sx={{
            height: 144,
            backgroundSize: "contain",
          }}
          image={product.PictureUrl}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 15, fontWeight: "bold" }}
            gutterBottom
            variant="h5"
            color="common.black"
          >
            {product.Description}
          </Typography>
          <Typography
            variant="caption"
            color="common.gray"
            display="block"
            gutterBottom
          >
            {product.ShortDescription}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 20 }}
            variant="body2"
            color="warning.main"
          >
            ${product.Price} / {product.Quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
