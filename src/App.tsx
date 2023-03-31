import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";

import Navbar from "@/components/Navbar";
import Dashboard from "@/scenes/Dashboard";
import Predictions from "@/scenes/Predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />}/>
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
