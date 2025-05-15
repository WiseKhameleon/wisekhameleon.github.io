document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("uploadAccessBtn");

  // Solicita la contraseña cuando se carga la página
  const userPassword = prompt("Contraseña para mostrar el botón de subida:");

  if (userPassword === "TuClaveSecretaDeFrontend") {
    button.style.display = "inline-block";
  }

  button.addEventListener("click", () => {
    const password = prompt("Contraseña para subir archivos:");

    // Crea un formulario en vivo
    const formHTML = `
      <form id="uploadForm" enctype="multipart/form-data">
        <input type="file" name="archivo" required><br><br>
        <button type="submit">📤 Subir archivo</button>
      </form>
      <div id="status"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHTML);

    const form = document.getElementById("uploadForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = form.elements["archivo"].files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("archivo", file);

      const res = await fetch("http://whitekhameleon.ddns.net:3737/subir", {
        method: "POST",
        headers: {
          "Authorization": "Basic " + btoa("whitekhameleon:" + password)
        },
        body: formData
      });

      if (res.status === 200) {
        status.textContent = "✅ Archivo subido correctamente.";
      } else {
        status.textContent = "⛔ Error al subir archivo. Verifica la contraseña.";
      }
    });
  });
});
