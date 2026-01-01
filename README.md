<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
Template Name: Darkness
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
-->

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
  <title>Wise Khameleon Testing 2 - Este no se hace Deploy si hay un index.html</title>

  <!-- Fuentes -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto :wght@400;500;700&display=swap" rel="stylesheet">

  <!-- Iconos Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css ">

  <!-- Estilos del template -->
  <link rel="stylesheet" href="layout/styles/layout.css" type="text/css" />

  <!-- Estilo del botón personalizado -->
  <style>
    /* Estilo del botón */
    #btn-subida {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 30px;
      background: linear-gradient(to right, #00415b, #18005b);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 5px; /* Ajusta el margen superior */
      align-items: center; /* Centra verticalmente */
      justify-content: center; /* Centra horizontalmente */
      gap: 8px; /* Espacio entre ícono y texto */
      transition: all 0.5s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: visible; /* Evita que el botón se corte */
      white-space: nowrap; /* Evita que el texto se rompa */
      /* overflow: hidden; */
    }

    #btn-subida::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 80%);
      transform: rotate(25deg);
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }

    #btn-subida:hover::before {
      opacity: 1;
    }

    #btn-subida:hover {
      background: linear-gradient(to right, #00575b, #3a00ff);
      transform: scale(0.95);
    }

    #btn-subida:active {
      transform: scale(0.9);
    }

    #btn-subida i.fas.fa-cloud {
      font-size: 18px;
    }

    /* Reducir tamaño del logo */
    #logo h1 {
      font-size: 10px;
    }
    #logo p {
      font-size: 14px;
    }

    /* Topnav start */
     #topnav ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
  }

  #topnav li {
    display: block;
    line-height: normal;
    padding: 5px 0;
  }

  #topnav a {
    display: inline-block;
    text-align: center;
  }
    /* Topnav end */
  </style>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2578423485218635"
     crossorigin="anonymous"></script>
</head>

<body id="top">
  <script>

  window.onload = async () => {
    try {
      const res = await fetch("https://whitekhameleon.ddns.net/ngrok-url");
      const data = await res.json();
      const ngrokURL = data.url;

      // Actualiza el botón de subida
      const subirBtn = document.getElementById("btn-subida");
      if (subirBtn && ngrokURL) {
        subirBtn.href = `${ngrokURL}/subida`;
        subirBtn.innerHTML = '<i class="fas fa-cloud"></i> Subir archivo (ngrok)';
      }
    } catch (err) {
      console.error("No se pudo obtener la URL ngrok:", err);
      // Opcional: Oculta el botón si no hay conexión con el backend
      const subirBtn = document.getElementById("btn-subida");
      if (subirBtn) {
        subirBtn.style.display = "none";
      }
    }
  };
  </script>

  <div class="wrapper">
    <div id="header">
      <div id="logo">
        <h1><a href="https://wisekhameleon.github.io">Wise Khameleon Shrine</a></h1>
        <p>A wisdom repository</p>
      </div>
      <div id="topnav">
        <ul>
          <li class="active"><a href="https://wisekhameleon.github.io/ ">Inicio</a></li>
          <li><a href="pages/style-demo.html">Style Demo</a></li>
          <li><a href="pages/full-width.html">Full Width</a></li>
          <li class="last"><a href="#">A Long Link Text</a></li>
          <li><a id="btn-subida" href="#"><i class="fas fa-cloud"></i>Mi nube<i class="fa-solid fa-house-tsunami"></i></a></li>
        </ul>
      </div>
      <br class="clear" />
    </div>
  </div>

  <!-- Contenido adicional como imágenes, noticias, etc. -->
  <div class="wrapper">
    <div id="latest">
      <div class="fl_left"><a href="#"><img src="images/demo/575x300.gif" alt="" /></a></div>
      <div class="fl_right">
        <h2>Cursus penati saccum ut.</h2>
        <p>Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Cursuspenatisaccum ut curabitur nulla tellus tor.</p>
        <ul>
          <li><a href="#"><img src="images/demo/100x100.gif" alt="" /></a></li>
          <li><a href="#"><img src="images/demo/100x100.gif" alt="" /></a></li>
          <li class="last"><a href="#"><img src="images/demo/100x100.gif" alt="" /></a></li>
        </ul>
      </div>
      <br class="clear" />
    </div>
  </div>

  <!-- Más contenido... -->
  <!-- Aquí puedes incluir más bloques como "intro", "container", etc., según sea necesario -->

  <div class="wrapper">
    <div id="footer">
      <div id="newsletter">
        <h2>Stay In The Know !</h2>
        <p>Please enter your email to join our mailing list</p>
        <form action="#" method="post">
          <fieldset>
            <legend>News Letter</legend>
            <input type="text" value="Enter Email Here&hellip;" onfocus="this.value=(this.value=='Enter Email Here&hellip;')? '' : this.value ;" />
            <input type="submit" name="news_go" id="news_go" value="GO" />
          </fieldset>
        </form>
        <p>To unsubscribe please <a href="#">click here &raquo;</a></p>
      </div>
      <br class="clear" />
    </div>
  </div>

  <div class="wrapper">
    <div id="copyright">
      <p class="fl_left">Copyright &copy; 2014 - All Rights Reserved - <a href="#">Domain Name</a></p>
      <p class="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
      <br class="clear" />
    </div>
  </div>
</body>
</html>
