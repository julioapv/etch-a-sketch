(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const m of e.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function u(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(s){if(s.ep)return;s.ep=!0;const e=u(s);fetch(s.href,e)}})();const i=document.querySelector(".grid-container"),k=document.querySelector(".change-grid-button"),x=document.querySelector(".reset-grid-button"),n=document.querySelector(".normal-mode-button"),y=document.querySelector(".rainbow-mode-button"),f=document.querySelector(".opacity-mode-button"),p=document.querySelector(".eraser-mode-button"),v=document.querySelector(".grid-input"),b=document.querySelector(".grid-size-display");let a="normal",l=!1,d=16;function L(){return"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}function g(c){i.innerHTML="";const r=`
    flex: 0 0 calc(100% / ${c});
    height: calc(500px / ${c}); 
    max-height: calc(500px / ${c});
    `;i.addEventListener("mousedown",()=>{l=!0}),i.addEventListener("mouseup",()=>{l=!1}),i.addEventListener("mouseleave",()=>{l=!1});for(let u=0;u<c*c;u++){let t=document.createElement("div");t.classList.add("item"),t.style.cssText=r,t.addEventListener("mouseover",s=>{if(l){switch(a){case"rainbow":t.style.cssText=`
                    ${r}
                    background: ${L()};
                    `;break;case"normal":t.style.cssText=`
                    ${r}
                    background: black;
                    `;break;case"eraser":t.style.cssText=`
                    ${r}
                    background: white;
                    `;break;case"opacity":t.style.cssText=`
                ${r}
                background: black;
                `;let e=parseFloat(t.dataset.opacity)||0;e<1&&(e+=.1,t.dataset.opacity=e.toFixed(1),t.style.cssText=`
                        ${r}
                        background: black;
                        opacity: ${e.toFixed(1)};
                    `);break}switch(t.addEventListener("mousedown",e=>{e.preventDefault(),l=!0}),a){case"rainbow":t.style.cssText=`
                ${r}
                background: ${L()};
                `;break;case"normal":t.style.cssText=`
                ${r}
                background: black;
                `;break;case"eraser":t.style.cssText=`
                ${r}
                background: white;
                `;break;case"opacity":t.style.cssText=`
                ${r}
                background: black;
                `;let e=parseFloat(t.dataset.opacity)||0;e<1&&(e+=.1,t.dataset.opacity=e.toFixed(1),t.style.cssText=`
                        ${r}
                        background: black;
                        opacity: ${e.toFixed(1)};
                    `);break}}}),i.appendChild(t)}}function o(){n.classList.remove("active"),y.classList.remove("active"),f.classList.remove("active"),p.classList.remove("active")}n.addEventListener("click",()=>{a==="normal"?(o(),n.classList.toggle("active")):(a="normal",o(),n.classList.toggle("active"))});y.addEventListener("click",()=>{a==="rainbow"?(a="normal",o(),n.classList.toggle("active")):(a="rainbow",o(),y.classList.toggle("active"))});p.addEventListener("click",()=>{a==="eraser"?(a="normal",o(),n.classList.toggle("active")):(a="eraser",o(),p.classList.toggle("active"))});f.addEventListener("click",()=>{a==="opacity"?(a="normal",o(),n.classList.toggle("active")):(a="opacity",o(),f.classList.toggle("active"))});k.addEventListener("click",c=>{let r=v.value;v.value="",r>=1&&r<=100?(g(r),b.innerText=`Current grid size: ${r}`):(window.alert("Please introduce a valid argument, a number between 1 and 100"),g(d),b.innerText=`Current grid size: ${d}`),c.preventDefault()});x.addEventListener("click",c=>{g(d),c.preventDefault()});b.innerText=`Current grid size: ${d}`;g(d);
