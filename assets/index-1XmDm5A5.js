(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const c=[{img:"codo-codo.jpg",ubicacion:"CABA",titulo:"FULLSTACK NODE.JS",instituto:"BA-CODO A CODO 4.0",anio:"2024",resenia:"Curso de 198 H/r. Frontend y Backend: HTML/CSS, JavaScript, Node.js, Express, MySQL, GIT y GitHub. Metodologías ágiles, persistencia de datos, servidores, protocolos de comunicación, y arquitecturas MVC y REST. Aplicaciones web dinámicas y escalables utilizando tecnologías Full Stack."},{img:"codo-codo.jpg",ubicacion:"CABA",titulo:"UX-UI",instituto:"BA-CODO A CODO 4.0",anio:"2023",resenia:"Curso de 208 H/r. Creación de interfaces que mejoren la experiencia del usuario. Uso de herramientas de diseño como Figma, Adobe Illustrator y Adobe Photoshop. Desarrollo de productos digitales y prototipado."},{img:"alura-.jpg",ubicacion:"Latam",titulo:"Front end G3-ONE",instituto:"Alura Latam",anio:"2022",resenia:"Programa de formación Oracle para Latinoamérica. 184h/r. Instruducción a la Programación. Front End: Html + CSS. Javascript para Web: DOM + POO + CRUD"},{img:"logo-curza.jpg",ubicacion:"Viedma",titulo:"Desarrollo Web",instituto:"Un. Comahue",anio:"2021",resenia:"Tecnicatura universitaria en Desarrollo Web (incompleta) Introducción a la programación. PHP: fundamentos + POO. Web estática + Javascript"},{img:"logo-uba.png",ubicacion:"CABA",titulo:"Arquitecta",instituto:"FADU - UBA",anio:"2006",resenia:"Título universitario de Arquitecta con especialización en Diseño de iluminación natural + Iluminación de locales comerciales"}],s={bio:c},l=document.querySelector(".contenedor_bio");console.log("hola mundo");document.addEventListener("DOMContentLoaded",()=>{d(),u()});document.querySelector(".botones").addEventListener("click",o=>{document.querySelectorAll(".botones .btn").forEach(t=>{o.target===t?(t.classList.add("active"),m(t.id)):t.classList.remove("active")})});function d(){const o=new Date;document.querySelector("footer .anio").textContent=o.getFullYear()}function u(){s.bio.forEach(o=>{const t=document.createElement("div");t.classList.add("contenedor_card"),t.innerHTML=`
            <div class="contenedor_img">
            <img src="img/${o.img}" alt="imagen ${o.titulo}">
    
            <div class="contenedor_tx">
            <div class="ubicacion">
                <i class="fa-solid fa-location-dot fa-xl" style="color: #cab7ff;"></i>
                <h3>${o.ubicacion}</h3>
            </div>
            <h2>${o.titulo}</h2>
            <h3>${o.instituto}</h3>
            <p class="contenedor_year">${o.anio}</p>
            </div>
        </div>
    
        <p>${o.resenia}</p>
        `,l.appendChild(t)})}function m(o){console.log(o)}
