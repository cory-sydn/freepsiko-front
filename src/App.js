import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from "./main.css"
import { theme } from './theme/Theme.js'
import Navbar from "./components/navbar/navbar.js";
import { Home } from "./components/home/home.js";
import { Login } from "./components/login/Login";
import { ChakraProvider } from '@chakra-ui/react'
export function App() {
    return (
      <BrowserRouter>
          <ChakraProvider>
      {/* <ThemeProvider theme={theme}> */}
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>} />
        <Route  exact path="/login" element={<Login/>} />
        {/* <Route  exact path="/about" element={} /> */}
      </Routes>
      {/* </ThemeProvider> */}
      </ChakraProvider>
      </BrowserRouter>

    );
  }

