<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
Template Name: Darkness
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
-->
<script>
  window.onload = async () => {
    try {
      const res = await fetch("https://whitekhameleon.ddns.net/ngrok-url");
      const data = await res.json();
      const ngrokURL = data.url;

      // Actualiza el botón de subida
      const subirBtn = document.getElementById("btn-subida");
      if (subirBtn) {
        subirBtn.href = `${ngrokURL}/subida`;
        subirBtn.innerText = "Subir archivo (ngrok)";
      }
    } catch (err) {
      console.error("No se pudo obtener la URL ngrok:", err);
    }
  };
</script>



<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  
     <!-- Prueba fuente !-->

     
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css ">

<link href="https://fonts.googleapis.com/css2?family=Roboto :wght@400;500;700&display=swap" rel="stylesheet">

@import url('https://fonts.googleapis.com/css2?family=Roboto :wght@500&display=swap');
 <!-- Prueba fuente !-->
 
<title>Wise Khameleon</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" href="layout/styles/layout.css" type="text/css" />
<!-- prueba Head CSS !-->


<!-- prueba Head CSS !-->
</head>
<body id="top">
<div class="wrapper">
  <div id="header">
    <div id="logo">
      <h1><a href="index.html">Darkness</a></h1>
      <p>Free Website Template</p>
    </div>
    <div id="topnav">
      <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="pages/style-demo.html">Style Demo</a></li>
        <li><a href="pages/full-width.html">Full Width</a></li>
        <li class="last"><a href="#">A Long Link Text</a></li>
        <li><a id="btn-subida" href="#"><i class="fas fa-cloud"></i> Mi nube<i class="fa-solid fa-house-tsunami"></a></li>
      </ul>
    </div>
    <br class="clear" />
  </div>
</div>
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
<div class="wrapper">
  <div id="intro">
    <ul>
      <li>
        <h2>Indonectetus facilis leo nibh</h2>
        <div class="imgholder"><a href="#"><img src="images/demo/300x150.gif" alt="" /></a></div>
        <p>Morbitincidunt maurisque eros molest nunc anteget sed vel lacus mus semper. Anter dumnullam interdum eros dui urna consequam ac nisl nullam ligula vestassa. </p>
        <p>Condimentumfelis et amet tellent quisquet a leo lacus nec augue accumsan. Sagittislaorem dolor ipsum at urna et pharetium malesuada nis consectus odio.</p>
        <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
      </li>
      <li>
        <h2>Indonectetus facilis leo nibh</h2>
        <div class="imgholder"><a href="#"><img src="images/demo/300x150.gif" alt="" /></a></div>
        <p>Morbitincidunt maurisque eros molest nunc anteget sed vel lacus mus semper. Anter dumnullam interdum eros dui urna consequam ac nisl nullam ligula vestassa. </p>
        <p>Condimentumfelis et amet tellent quisquet a leo lacus nec augue accumsan. Sagittislaorem dolor ipsum at urna et pharetium malesuada nis consectus odio.</p>
        <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
      </li>
      <li class="last">
        <h2>Indonectetus facilis leo nibh</h2>
        <div class="imgholder"><a href="#"><img src="images/demo/300x150.gif" alt="" /></a></div>
        <p>Morbitincidunt maurisque eros molest nunc anteget sed vel lacus mus semper. Anter dumnullam interdum eros dui urna consequam ac nisl nullam ligula vestassa. </p>
        <p>Condimentumfelis et amet tellent quisquet a leo lacus nec augue accumsan. Sagittislaorem dolor ipsum at urna et pharetium malesuada nis consectus odio.</p>
        <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
      </li>
    </ul>
    <br class="clear" />
  </div>
</div>
<div class="wrapper">
  <div id="container">
    <div id="content">
      <h2>About This Free CSS Template</h2>
      <p>This is a W3C standards compliant free website template from <a href="http://www.os-templates.com/">OS Templates</a>.</p>
      <p>This template is distributed using a <a href="http://www.os-templates.com/template-terms">Website Template Licence</a>, which allows you to use and modify the template for both personal and commercial use when you keep the provided credit links in the footer.</p>
      <p>For more CSS templates visit <a href="http://www.os-templates.com/">Free Website Templates</a>.</p>
    </div>
    <div id="column">
      <div class="holder">
        <h2>Nullamlacus loborttis</h2>
        <ul id="latestnews">
          <li class="last"><img class="imgl" src="images/demo/80x80.gif" alt="" />
            <p><strong>Indonectetus facilis leo nibh.</strong></p>
            <p>Nullamlacus dui ipsum cons eque loborttis non euis que morbi penas dapibulum orna.</p>
            <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
          </li>
        </ul>
      </div>
    </div>
    <br class="clear" />
  </div>
</div>
<div class="wrapper">
  <div id="footer">
    <div id="newsletter">
      <h2>Stay In The Know !</h2>
      <p>Please enter your email to join our mailing list</p>
      <form action="#" method="post">
        <fieldset>
          <legend>News Letter</legend>
          <input type="text" value="Enter Email Here&hellip;"  onfocus="this.value=(this.value=='Enter Email Here&hellip;')? '' : this.value ;" />
          <input type="submit" name="news_go" id="news_go" value="GO" />
        </fieldset>
      </form>
      <p>To unsubscribe please <a href="#">click here &raquo;</a></p>
    </div>
    <div class="footbox">
      <h2>Lacus interdum</h2>
      <ul>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
        <li><a href="#">Suspendisse in neque</a></li>
        <li class="last"><a href="#">Praesent et eros</a></li>
      </ul>
    </div>
    <div class="footbox">
      <h2>Lacus interdum</h2>
      <ul>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
        <li><a href="#">Suspendisse in neque</a></li>
        <li class="last"><a href="#">Praesent et eros</a></li>
      </ul>
    </div>
    <div class="footbox">
      <h2>Lacus interdum</h2>
      <ul>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Praesent et eros</a></li>
        <li><a href="#">Lorem ipsum dolor</a></li>
        <li><a href="#">Suspendisse in neque</a></li>
        <li class="last"><a href="#">Praesent et eros</a></li>
      </ul>
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
    transition: all 0.5s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
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
</style>
  
</body>
</html>
