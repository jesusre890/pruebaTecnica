import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp={
  children: JSX.Element
};

export enum themePalette {
  BG="#FFFFF",
  PRIMARY="#F86260",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
      paper: themePalette.BG,
    },
    primary: {
      main: themePalette.PRIMARY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> =({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}