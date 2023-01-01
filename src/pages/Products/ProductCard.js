import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  
} from "@material-ui/core";
import { Link } from "react-router-dom";

import CardActionArea from "@mui/material/CardActionArea/CardActionArea";

import { FaCartArrowDown } from "react-icons/fa";

const ProductCard = ({ product }) => {

  
  
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea 
      
      LinkComponent={Link}
      to={`/productDetails/${product._id}`}
      >
     
        <CardHeader
          action={
            <div>
              <FaCartArrowDown color="orange" />
            </div>
          }
        />

       
        <CardContent>
          <Typography
            sx={{ fontSize: 15, fontWeight: "bold" }}
            gutterBottom
            variant="h5"
            color="common.black"
          >
            {product.engData.title}
          </Typography>
          <Typography
            variant="caption"
            color="common.gray"
            display="block"
            gutterBottom
          >
            {product.engData.description}
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
