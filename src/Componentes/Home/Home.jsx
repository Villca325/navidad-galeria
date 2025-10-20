import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./Home.css";
import catGreenLeft from "./catGreenLeft.png";
import bearGreen from "./bearGreen.png";
import dogGreen from "./dogGreen.png";
import gatoL from "./gatoL.png";

const Home = () => {
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar fotos desde Firestore
  useEffect(() => {
    cargarFotos();
  }, []);

  const cargarFotos = async () => {
    try {
      const q = query(collection(db, "fotos"), orderBy("fecha", "desc"));
      const querySnapshot = await getDocs(q);
      
      const fotosArray = [];
      querySnapshot.forEach((doc) => {
        fotosArray.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setFotos(fotosArray);
    } catch (error) {
      console.error("Error al cargar fotos:", error);
    } finally {
      setCargando(false);
    }
  };

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
          
          {cargando ? (
            <div className="cargando">
              <p>🎄 Cargando fotos navideñas...</p>
            </div>
          ) : fotos.length === 0 ? (
            <div className="sin-fotos">
              <p>🎅 Aún no hay fotos. ¡Sé el primero en compartir!</p>
              <Link to="/subir" className="btn-cta" style={{marginTop: "20px", display: "inline-block"}}>
                Subir Primera Foto
              </Link>
            </div>
          ) : (
            <div className="galeria-grid">
              {fotos.map((foto) => (
                <div key={foto.id} className="card-foto">
                  <img 
                    src={foto.urlImagen} 
                    alt={foto.nombre} 
                    className="img-galeria"
                  />
                  <div className="info-foto">
                    <h4>{foto.nombre}</h4>
                    {foto.descripcion && <p>{foto.descripcion}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
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
          <p>La foto más linda y creativa de la temporada.</p>

          <div className="galeria-grid">
              
                <div  className="card-foto">
              <img  alt="GatoDestacado"  src={gatoL} className="img-galeria img-gatoDest" />
                  <div className="info-foto">
                    <h4>Liz</h4>
                    <p>Gato en una olla</p>
                  </div>
                </div>
             
            </div>
          

        </div>
      </section>
    </main>
  );
};

export default Home;