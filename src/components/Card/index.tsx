import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import menu from "../../assets/asado.jpg";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  borderRadius: 5,
  bgcolor: "#fafafa",
  boxShadow: 24,
  p: 4,
};

export const CardComponent: React.FC<{}> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose=() => setOpen(false);
  const navigate=useNavigate();

  return (
    <Card sx={{ maxWidth: 250, boxShadow: 5, borderRadius: 5 }}>
      <CardMedia component="img" alt="menu" height="194" image={menu} />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="body2" component="div" color="black">
          Empresa
        </Typography>
        <Typography variant="h6" color="black">
          Lorem Ipsum
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Typography color="black">$100</Typography>
        <Button onClick={handleOpen} variant="outlined" size="large">
          <MdAddShoppingCart />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <CardMedia
              component="img"
              alt="menu"
              height="150"
              width="150"
              image={menu}
              sx={{ borderRadius: 5 }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Box>
                <Box>
                  <Typography variant="body2" component="div" color="black">
                    Empresa
                  </Typography>
                  <Typography variant="h6" color="black">
                    Lorem Ipsum
                  </Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                  <Typography variant="body2" component="div" color="#212121">
                    Ingredientes
                  </Typography>
                  <Typography variant="body2" component="div" color="#212121">
                    Ingredientes
                  </Typography>
                  <Typography variant="body2" component="div" color="#212121">
                    Ingredientes
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", mb: 2 }}>
              <Typography color="black">$100</Typography>
              <Button onClick={handleOpen} variant="outlined" size="large">
                <MdAddShoppingCart />
              </Button>
            </CardActions>
            <CardActions
              sx={{ justifyContent: "space-around" }}
              onClick={() => navigate("preferencias")}
            >
              <Button
                fullWidth
                onClick={handleOpen}
                variant="outlined"
                size="large"
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  color="black"
                >
                  Preferencias
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Modal>
      </CardActions>
    </Card>
  );
};
