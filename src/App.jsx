import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Componentes
import NavBar from "./Componentes/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/home";
import Subir from "./Componentes/Subir/Subir";
import Snowfall from "react-snowfall";  
function App() {
  return (


    <StrictMode>
      <BrowserRouter  basename="/navidad-galeria">
        <div className="App">
          <Snowfall
          color="#FFFFFF"
          snowflakeCount={80} // puedes ajustar cantidad
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            pointerEvents: "none", // ❗ evita que interfiera con clics
          }}
          />
          <NavBar />

          {/* RUTAS */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subir" element={<Subir />} />
            {/* Redireccionar a la página de inicio */}
           <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
