let header=document.getElementsByTagName('header')[0];
let footer=document.getElementsByTagName('footer')[0];


header.innerHTML=`<div class="topnav">
<img class="sombrero" src="img/klipartz.com.png" alt="logo">
<a class="active" href="#home"><i class="fa-solid fa-house"></i>Home</a>
<a href="#news"><i class="fa-solid fa-newspaper"></i>Servicios</a>
<a href="#contact">Contacto</a>
<div class="topnav-right">
  <a href="#search">Search</a>
  <a href="#about">About</a>
</div>
</div>`



footer.innerHTML=`<div class="footericons">
<i class="fa-brands fa-twitter fa-lg"></i><i class="fa-brands fa-meta fa-lg"></i><i class="fa-brands fa-instagram fa-lg"></i>
</div>
<div class="footertext">
Copyright 1999-2022 by Juncitos Data. All Rights Reserved.
</div>`