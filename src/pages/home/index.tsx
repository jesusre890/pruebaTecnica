import { Box, Container, Grid, Pagination} from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components/Header";
import { CardComponent } from "../../components";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { MenuComponent } from "../../components/Menu";


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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent:"end",
    borderRadius: 20,
    backgroundColor: "#F86260",
    "&:hover": {
      backgroundColor: "#F86260",
    },
    marginTop:-40,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Container maxWidth="xl">
      <>
        <Box
          sx={{
            justifyContent: { sm: "center", md: "center", lg: "flex-end" },
            ml: { lg: 50, md: 30 },
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>

          <HeaderComponent title="Platos" description="" />
          <div>
            <Grid
              container
              spacing={5}
              justifyContent={"center"}
              maxWidth={900}
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
                background: "#e0e0e0",
              }}
              size="large"
            />
          </Box>
          <MenuComponent/>
        </Box>
      </>
    </Container>
  );
};
