import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const ResumenComponent: React.FC<{}> = () => {
  return (
    <Container sx={{ my: 12 }}>
      <Box
        color="#424242"
        ml={{ lg: 40, md: 40 }}
        sx={{ background: "#e0e0e0", borderRadius: 5, p: 5 }}
      >
        <Typography color="black" fontWeight={700}>
          Resumen
        </Typography>
        <Typography color="#212121" marginTop={4}>
          Ingrediente Seleccionado
        </Typography>
        <Typography color="#212121" marginTop={2}>
          Ingrediente Seleccionado
        </Typography>
        <Typography color="#212121" marginTop={2}>
          Ingrediente Seleccionado
        </Typography>
        <Typography
          color="#212121"
          marginTop={4}
          display={"flex"}
          justifyContent={"end"}
          marginRight={5}
        >
          $100
        </Typography>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            width: "100%",
            height: 50,
            borderRadius: 5,
          }}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Container>
  );
};
