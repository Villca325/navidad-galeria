import "./Subir.css";

const Subir = () => {
  return (
    <div className="subir-container">
      <h1 className="titulo-subir">Sube tu foto navideña 🎄</h1>

      <form className="subir-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Tu nombre" />
        </div>

        <div className="input-group">
          <label htmlFor="imagen">Selecciona tu imagen:</label>
          <input type="file" id="imagen" accept="image/*" />
        </div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" 
            placeholder="Escribe una descripción para tu foto"></textarea>

        <button type="button" className="btn-subir">
          Subir imagen
        </button>
           
      </form>

      <div className="preview">
        <p>Vista previa:</p>
        <div className="preview-box">
          <p>(Sin imagen seleccionada)</p>
        </div>
      </div>
    </div>
  );
};

export default Subir;
