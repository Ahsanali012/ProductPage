import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from '../Products/ProductCard'
import {  CssBaseline } from "@material-ui/core";
const Products = () => {

    const productItems=[
        {
            id:1,
            Description:"Almond Brown Sugar Croissant",
            ShortDescription:"Sweet croissant with topping almonds and brown sugar",
            Price:"12.98",
            Quantity:"3 pcs",
            PictureUrl:"https://www.foodiesfeed.com/wp-content/uploads/2019/01/cozy-time-with-croissants-and-figs.jpg"


        },
        {
            id:2,
            Description:"Almond Brown Sugar Croissant",
            ShortDescription:"Sweet croissant with topping almonds and brown sugar",
            Price:"12.98",
            Quantity:"3 pcs",
            PictureUrl:"https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438__480.jpg"
        }
        ,
        {
            id:3,
            Description:"Smoke Tenderloin Slice Croissant",
            ShortDescription:"Plain croissant with smoke tenderloin beef sliced and vegetable",
            Price:"10.01",
            Quantity:"2 pcs",
            PictureUrl:"https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812__480.jpg"

        }
        ,
        {
            id:4,
            Description:"Berry Whipped Cream Croissant",
            ShortDescription:"Sweet croissant with blueberries and strawberries inside",
            Price:"8.92",
            Quantity:"3 pcs",
            PictureUrl:"https://cdn.pixabay.com/photo/2017/06/30/13/48/coffee-2458300__480.jpg"


        }
        ,
        {
            id:5,
            Description:" Chocochips Croissant",
            Price:"10.01",
            Quantity:"3 pcs",
            ShortDescription:"Sweet croissant with topping almonds and brown sugar",
            PictureUrl:"https://cdn.pixabay.com/photo/2015/02/25/13/21/croissant-648803__480.jpg"
      

        }
        ,
        {
            id:6,
            Description:"Basic Croissant",
            Price:"10.01",
            Quantity:"3 pcs",
            ShortDescription:"Sweet croissant with topping almonds and brown sugar",
            PictureUrl:"https://cdn.pixabay.com/photo/2022/10/18/15/40/pastries-7530566__480.jpg"
         

        }
    ]
  return (
  <div className="flex pt-8 ">
  <CssBaseline />
     <Grid item container rowSpacing={2} spacing={1}>
      {productItems.map((product) => (
        <Grid key={product.id} item xs={4}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  </div>
  )
};

export default Products;
