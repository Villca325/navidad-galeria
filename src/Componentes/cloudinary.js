// Configuración de Cloudinary
// IMPORTANTE: Reemplaza TU_CLOUD_NAME con tu Cloud Name del Dashboard

export const CLOUDINARY_CONFIG = {
  cloudName: "dqzetphlf", // Reemplaza con tu Cloud Name (ejemplo: dxxxx)
  uploadPreset: "navidad_preset" // El preset que crearemos
};

// Función para subir imagen a Cloudinary usando fetch (sin dependencias)
export const uploadToCloudinary = async (file) => {
  // Validar que el archivo exista
  if (!file) {
    throw new Error("No se proporcionó ningún archivo");
  }

  // Validar Cloud Name
  if (CLOUDINARY_CONFIG.cloudName === "TU_CLOUD_NAME") {
    throw new Error("Por favor configura tu CLOUD_NAME en cloudinary.js");
  }

  // Crear FormData
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
  
  try {
    // Hacer petición a Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    
    // Verificar respuesta
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Error al subir imagen");
    }
    
    const data = await response.json();
    
    // Retornar datos útiles
    return {
      url: data.secure_url,
      publicId: data.public_id,
      width: data.width,
      height: data.height,
      format: data.format,
      size: data.bytes,
    };
  } catch (error) {
    console.error("Error en uploadToCloudinary:", error);
    throw new Error(`Error al subir: ${error.message}`);
  }
};