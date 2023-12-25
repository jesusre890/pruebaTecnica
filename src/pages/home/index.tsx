import { Box, Container, Grid, Pagination } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components/Header";
import { CardComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 3;
  const totalItems = 9;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  //const startIndex = (page - 1) * itemsPerPage;
  //const endIndex = startIndex + itemsPerPage;
  //const visibleItems = Array.from({ length: totalItems }).slice(
  //  startIndex,
  //  endIndex
  //);

  return (
    <Container maxWidth="xl">
      <>
        <Box
          sx={{
            justifyContent: { sm: "center", md: "center", lg: "flex-end" },
            ml: { lg: 30, md: 20 },
          }}
        >
          <HeaderComponent title="Platos" description="Opciones" />
          <div>
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
            >
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
              <Grid item spacing={3}>
                <CardComponent />
              </Grid>
            </Grid>
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={Math.ceil(totalItems / itemsPerPage)}
              page={page}
              onChange={handleChange}
              sx={{
                my: 3,
                boxShadow: 5,
                borderRadius: 5,
                background: "#bdbdbd",
              }}
              size="large"
            />
          </Box>
        </Box>
      </>
    </Container>
  );
};
