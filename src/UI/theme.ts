import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1B1B1B"
    }
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    body2: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "143%",
      letterSpacing: "0.17px",
      color: "#1B1B1B"
    }
  }
})
