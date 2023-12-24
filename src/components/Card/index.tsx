import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import menu from '../../assets/asado.jpg'
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export const CardComponent: React.FC<{}> = () => {
  return (
    <Card sx={{ maxWidth: 250, boxShadow: 5, borderRadius: 5 }}>
      <CardMedia component="img" alt="menu" height="194" image={menu} />
      <CardContent sx={{textAlign: "center"}}>
        <Typography gutterBottom variant="body2" component="div" color="black">
          Empresa
        </Typography>
        <Typography variant="h6" color="black">
          Lorem Ipsum
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Typography color="black">$100</Typography>
        <Button variant="outlined" size="large">
          <MdAddShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
}
