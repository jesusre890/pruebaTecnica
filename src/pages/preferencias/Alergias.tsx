import { Box, Container, Input, Typography } from "@mui/material";
import React from "react";

export const AlergiasComponents: React.FC<{}>=() => {
  return (
    <Container sx={{ my: 5 }}>
      <Box color="#424242" ml={{ lg: 40, md: 40 }}>
        <Typography variant="h5" fontWeight={700}>
          Alergias
        </Typography>
        <Typography color="#bdbdbd">
          Especifique si sufre algún tipo de alergía
        </Typography>
        <Input fullWidth sx={{ background: "#F86260", borderRadius:2 }} />
      </Box>
    </Container>
  );

  };