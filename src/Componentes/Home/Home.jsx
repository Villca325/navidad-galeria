import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import catGreenLeft from "./catGreenLeft.png";
import bearGreen from "./bearGreen.png";
import dogGreen from "./dogGreen.png";

const Home = () => {
  return (
    <main className="home">

     {/* Hero Section - Rojo Festivo */}
<section className="section red hero">
  <div className="hero-container">
    {/* Imagen izquierda */}

    <img src={dogGreen} alt="Gato verde izquierda" className="hero-img-left" />


    {/* Contenido central */}
    <div className="content text-center">
      <h1 className="decorativo">¡Feliz Navidad!</h1>
      <p className="subtitle">
        Comparte tu mascota Grinch y llena el mundo de verde
      </p>
      <Link to="/subir" className="btn-cta">
        Subir Foto
      </Link>
    </div>

    {/* Imagen derecha */}
    <img src={bearGreen} alt="Gato verde derecha" className="hero-img-right" />
  </div>
</section>


      {/* Sección de Galería - Blanco Nieve */}
      <section className="section white gallery">
        <div className="content">
          <h2 className="decorativo">Galería de Recuerdos</h2>
          <p>Explora las fotos compartidas por nuestra comunidad.</p>
          <div className="galeria-grid">
            {/* Aquí irán los componentes de imagen */}
            <div className="card">Foto 1</div>
            <div className="card">Foto 2</div>
            <div className="card">Foto 3</div>
            <div className="card">Foto 4</div>
          </div>
        </div>
      </section>

      {/* Sección Verde Grinch */}
      <section className="section green cta">
        <div className="content">
          <h2 className="decorativo">Únete a la diversión</h2>
          <p>Comparte tus fotos, comenta y celebra la Navidad con todos.</p>
    
        </div>
      </section>

      {/* Sección Dorado Cálido - detalles */}
      <section className="section gold highlight">
        <div className="content">
          <h2 className="decorativo">Destacados</h2>
          <p>Las fotos más lindas y creativas de la temporada.(ideita)</p>
        </div>
      </section>

    </main>
  );
};

export default Home;

