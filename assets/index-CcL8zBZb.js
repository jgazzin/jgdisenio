(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=[{img:"codo-codo.jpg",ubicacion:"CABA",titulo:"FULLSTACK NODE.JS",instituto:"BA-CODO A CODO 4.0",anio:"2024",resenia:"Curso de 198 H/r. Frontend y Backend: HTML/CSS, JavaScript, Node.js, Express, MySQL, GIT y GitHub. Metodologías ágiles, persistencia de datos, servidores, protocolos de comunicación, y arquitecturas MVC y REST. Aplicaciones web dinámicas y escalables utilizando tecnologías Full Stack."},{img:"codo-codo.jpg",ubicacion:"CABA",titulo:"UX-UI",instituto:"BA-CODO A CODO 4.0",anio:"2023",resenia:"Curso de 208 H/r. Creación de interfaces que mejoren la experiencia del usuario. Uso de herramientas de diseño como Figma, Adobe Illustrator y Adobe Photoshop. Desarrollo de productos digitales y prototipado."},{img:"alura-.jpg",ubicacion:"Latam",titulo:"Front end G3-ONE",instituto:"Alura Latam",anio:"2022",resenia:"Programa de formación Oracle para Latinoamérica. 184h/r. Instruducción a la Programación. Front End: Html + CSS. Javascript para Web: DOM + POO + CRUD"},{img:"logo-curza.jpg",ubicacion:"Viedma",titulo:"Desarrollo Web",instituto:"Un. Comahue",anio:"2021",resenia:"Tecnicatura universitaria en Desarrollo Web (incompleta) Introducción a la programación. PHP: fundamentos + POO. Web estática + Javascript"},{img:"logo-uba.png",ubicacion:"CABA",titulo:"Arquitecta",instituto:"FADU - UBA",anio:"2006",resenia:"Título universitario de Arquitecta con especialización en Diseño de iluminación natural + Iluminación de locales comerciales"}],u=[{nombre:"HTML",icono:"Frame 2html.svg",categoria:"programacion"},{nombre:"CSS",icono:"Frame 2css.svg",categoria:"programacion"},{nombre:"Javascript",icono:"Frame 2js.svg",categoria:"programacion"},{nombre:"Sass",icono:"image 19sass.svg",categoria:"programacion"},{nombre:"PHP",icono:"Frame 2php.svg",categoria:"programacion"},{nombre:"SQL",icono:"Frame 2sql.svg",categoria:"programacion"},{nombre:"GitHub",icono:"Frame 2git.svg",categoria:"programacion"},{nombre:"Figma",icono:"g-1.png",categoria:"disenio"},{nombre:"Autocad",icono:"icons8-autocad-144.svg",categoria:"disenio"},{nombre:"Coreldraw",icono:"g-2.png",categoria:"disenio"},{nombre:"Photoshop",icono:"g-3.png",categoria:"disenio"},{nombre:"Edición AI",icono:"logos-edicion.png",categoria:"disenio"},{nombre:"Creatividad",icono:"c-1.svg",categoria:"competencias"},{nombre:"Organización",icono:"c-2.svg",categoria:"competencias"},{nombre:"Comunicación",icono:"c-3.svg",categoria:"competencias"}],p=[{titulo:"Tienda Online",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",imagen:"ejemplo-web.jpg",link1:"https://jgdisenio.github.io/proyecto-1/",link2:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"Sistema Gestión Obras",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",imagen:"ejemplo-web.jpg",link1:"https://jgdisenio.github.io/proyecto-1/",link2:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"Plataforma Juegos",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",imagen:"ejemplo-web.jpg",link1:"https://jgdisenio.github.io/proyecto-1/",link2:"https://jgdisenio.github.io/proyecto-1/"}],m=[{titulo:"Landing político",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",link:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"Cotización de landing",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",link:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"Landing moderna",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",link:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"blog noticias",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",link:"https://jgdisenio.github.io/proyecto-1/"},{titulo:"Difusión de notas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",link:"https://jgdisenio.github.io/proyecto-1/"}],r={bio:d,skills:u,works:p,otros:m},g=document.querySelector(".contenedor_bio"),s=document.querySelector(".contenedor_skills"),l=document.querySelector(".contenedor_work");console.log("hola mundo");document.addEventListener("DOMContentLoaded",()=>{h(),f(),b(),v()});document.querySelector(".botones").addEventListener("click",o=>{document.querySelectorAll(".botones .btn").forEach(i=>{o.target===i?(i.classList.add("active"),L(i.id)):i.classList.remove("active")})});function h(){const o=new Date;document.querySelector("footer .anio").textContent=o.getFullYear()}function f(){r.bio.forEach(o=>{const i=document.createElement("div");i.classList.add("contenedor_card"),i.innerHTML=`
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
        `,g.appendChild(i)})}function b(){const o=r.skills.map(c=>c.categoria);[...new Set(o)].forEach(c=>{const n=document.createElement("div");n.classList.add("contenedor_boxs"),n.innerHTML=`
            <div class="contenedor_header">
                <i class="fa-solid fa-code fa-xl" style="color: #cab7ff;"></i>
                <h3>${c}</h3>
            </div>`,s.appendChild(n);const e=document.createElement("div");e.classList.add("contenedor_icons"),r.skills.filter(t=>t.categoria===c).forEach(t=>{const a=document.createElement("div");a.classList.add("icon_skills"),a.innerHTML=`
                <img src="img/${t.icono}" alt="${t.nombre}">
                <h3>${t.nombre}</h3>
            `,e.appendChild(a)}),s.appendChild(e)})}function v(){r.works.forEach(o=>{const i=document.createElement("div");i.classList.add("work__item"),i.innerHTML=`
            <img class="work__imagen" src="public/img/${o.imagen}" alt="${o.titulo}">
            <div class="work__info">
                <h3>${o.titulo}</h3>
                <p>${o.descripcion}</p>
                <div class="enlaces">
                    <a href="${o.link1}">web<i class="fa-solid fa-arrow-up-right-from-square fa-lg" style="color: #c0c0c0;"></i></a>
                    <a href="${o.link2}">gitHub<i class="fa-solid fa-arrow-up-right-from-square fa-lg" style="color: #c0c0c0;"></i></a>
                </div>
            </div>
        `,l.appendChild(i)}),y()}function y(){r.otros.forEach(o=>{const i=document.createElement("div");i.classList.add("otros__item"),i.innerHTML=`
            <h3>${o.titulo}</h3>
            <p>${o.descripcion}</p>
            <div class="enlaces">
                <a href="${o.link}">web<i class="fa-solid fa-arrow-up-right-from-square fa-lg" style="color: #c0c0c0;"></i></a>
            </div>    
        `,l.appendChild(i)})}function L(o){window.location.hash=`section_${o}`}
