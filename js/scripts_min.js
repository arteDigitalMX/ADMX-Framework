function getDistance(){return stickyElement.offsetTop}var stickyElement=document.getElementById("stickyElement"),stuck=!1,stickPoint=getDistance();window.onscroll=function(){var e=getDistance()-window.pageYOffset,t=window.pageYOffset;e<=0&&!stuck?(stickyElement.style.position="fixed",stickyElement.style.top="0px",stuck=!0):stuck&&t<=stickPoint&&(stickyElement.style.position="static",stuck=!1)};var myComponentElement=document.getElementById("menuResponsive");nst.init(myComponentElement);var toggleMenu=document.querySelector(".menu");toggleMenu.onclick=function(){toggleMenu.classList.toggle("open")};var spy=new Gumshoe(".mMenu a",{navClass:"active",contentClass:"none",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0}),scroll=new SmoothScroll('a[href*="#"]',{speed:500,speedAsDuration:!0});