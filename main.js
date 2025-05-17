fetch(`${BACKEND_URL}/api/saludo`)
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta del backend:", data);
    document.getElementById("respuesta").textContent = data.mensaje;
  })
  .catch(err => {
    console.error("Error al conectar con el backend:", err);
  });