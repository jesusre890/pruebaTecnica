import { Box, ListItem, Typography } from "@mui/material";
import React from "react";

export const FooterComponents: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        background: "#F86260",
        direction: "column",
        display: "flex",
        justifyContent: "space-around",
        p: 2,
        pt:5
      }}
    >
      <Box>
        <Typography fontSize={12}>Política de publicidad</Typography>
        <Typography fontSize={12}>Términos y condiciones</Typography>
        <Typography fontSize={12}>Seguridad</Typography>
      </Box>
      <Box sx={{ textAlign: "center", mr:5 }}>
        <Typography>LOGO</Typography>
        <Typography fontSize={14}>correo@correo.com</Typography>
        <Typography fontSize={10} sx={{mt:5}}>2023 LOGO All right reserved</Typography>
      </Box>
      <Box sx={{ textAlign: "end" }}>
        <Typography fontSize={12}>Home</Typography>
        <Typography fontSize={12}>Empresas</Typography>
        <Typography variant="body2" fontSize={12}>
          Carritos
        </Typography>
      </Box>
    </Box>
  );
};
