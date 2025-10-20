import { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { uploadToCloudinary } from "../cloudinary.js";
import "./Subir.css";

const Subir = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Manejar selección de imagen
  const handleImagenChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      // Validar tamaño (máximo 5MB)
      if (archivo.size > 5 * 1024 * 1024) {
        setMensaje("⚠️ La imagen es muy grande. Máximo 5MB");
        return;
      }

      // Validar tipo
      if (!archivo.type.startsWith("image/")) {
        setMensaje("⚠️ Solo se permiten imágenes");
        return;
      }

      setImagen(archivo);
      // Crear preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(archivo);
      setMensaje(""); // Limpiar mensajes previos
    }
  };

  // Subir imagen
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!nombre.trim()) {
      setMensaje("⚠️ Por favor ingresa tu nombre");
      return;
    }

    if (!imagen) {
      setMensaje("⚠️ Por favor selecciona una imagen");
      return;
    }

    setSubiendo(true);
    setMensaje("📤 Subiendo imagen a Cloudinary...");

    try {
      // 1. Subir imagen a Cloudinary
      const cloudinaryData = await uploadToCloudinary(imagen);
      
      setMensaje("💾 Guardando información...");

      // 2. Guardar información en Firestore
      await addDoc(collection(db, "fotos"), {
        nombre: nombre.trim(),
        descripcion: descripcion.trim(),
        urlImagen: cloudinaryData.url,
        publicId: cloudinaryData.publicId,
        width: cloudinaryData.width,
        height: cloudinaryData.height,
        fecha: serverTimestamp(),
      });

      // Éxito
      setMensaje("✅ ¡Imagen subida con éxito!");
      
      // Limpiar formulario
      setNombre("");
      setDescripcion("");
      setImagen(null);
      setPreview(null);
      
      // Limpiar input file
      document.getElementById("imagen").value = "";

      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setMensaje(""), 3000);

    } catch (error) {
      console.error("Error al subir imagen:", error);
      setMensaje("❌ Error al subir la imagen. Intenta de nuevo.");
      setMensaje(`❌ Error: ${error.message}`);
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <div className="subir-container">
      <h1 className="titulo-subir">Sube tu foto navideña 🎄</h1>

      {mensaje && (
        <div className={`mensaje ${mensaje.includes("✅") ? "exito" : mensaje.includes("❌") ? "error" : "info"}`}>
          {mensaje}
        </div>
      )}

      <form className="subir-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={subiendo}
            maxLength={50}
          />
        </div>

        <div className="input-group">
          <label htmlFor="imagen">Selecciona tu imagen:</label>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            onChange={handleImagenChange}
            disabled={subiendo}
          />
          <small style={{color: "#666", fontSize: "0.85rem"}}>
            Máximo 5MB. Formatos: JPG, PNG, GIF
          </small>
        </div>

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          placeholder="Escribe una descripción para tu foto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          disabled={subiendo}
          maxLength={200}
        />
        <small style={{color: "#666", fontSize: "0.85rem", display: "block", marginTop: "-15px"}}>
          {descripcion.length}/200 caracteres
        </small>

        <button
          type="submit"
          className="btn-subir"
          disabled={subiendo}
        >
          {subiendo ? "⏳ Subiendo..." : "🎄 Subir imagen"}
        </button>
      </form>

      <div className="preview">
        <p>Vista previa:</p>
        <div className="preview-box">
          {preview ? (
            <img src={preview} alt="Preview" className="img-preview" />
          ) : (
            <p>(Sin imagen seleccionada)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subir;