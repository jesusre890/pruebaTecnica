import { Box, Button, CardMedia, Checkbox, Container, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import asado from '../../assets/asado.jpg'
import { AlergiasComponents } from "./Alergias";
import { ResumenComponent } from "./Resumen";
import { useNavigate } from "react-router-dom";

export const PreferenciasPage: React.FC<{}>=() => {
    const navigate = useNavigate();
  return (
    <Container sx={{ my: 10 }}>
      <Box display="flex" justifyContent="center" ml={{ lg: 30, md: 30 }}>
        <Box>
          <Typography variant="h4" color="#212121">
            Nombre del plato
          </Typography>
          <Typography color="#212121">Descripcion</Typography>
          <Typography color="#bdbdbd" maxWidth={300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography color="#212121" marginTop={5}>
            Ingredientes
          </Typography>
          <Box>
            <List>
              <ListItem>
                <Checkbox defaultChecked sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 1</Typography>
              </ListItem>
              <ListItem>
                <Checkbox sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 2</Typography>
              </ListItem>
              <ListItem>
                <Checkbox sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 3</Typography>
              </ListItem>
              <ListItem>
                <Checkbox sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 4</Typography>
              </ListItem>
              <ListItem>
                <Checkbox sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 5</Typography>
              </ListItem>
              <ListItem>
                <Checkbox sx={{ color: "#212121" }} />
                <Typography color="#212121">Ingrediente 6</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box sx={{ width: 400, overflow: "auto", p: 1 }}>
          <CardMedia
            component="img"
            alt="menu"
            height="300"
            width="150"
            image={asado}
            sx={{ borderRadius: 5 }}
          />
        </Box>
      </Box>
      <Divider />
      <AlergiasComponents />
      <ResumenComponent />
      <Box sx={{ ml:{ lg: 50, md: 50 } }}>

      <Button onClick={() => navigate("/")}>Volver</Button>
      </Box>
    </Container>
  );
}