(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const f=4,l=51,v=16,m=document.querySelector(".header__main-limited-offer__offer-timer");let d=f*3600+l*60+v;function g(){const e=setInterval(()=>{const r=Math.floor(d/3600),n=Math.floor(d%3600/60),o=d%60,t=`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;m&&(m.innerHTML=t,d--),Number(t)===0&&clearInterval(e)},1e3)}const u=document.getElementById("current-img"),h=document.querySelectorAll(".content__slider-buttons__img"),p=e=>{e.addEventListener("click",r=>{const n=document.querySelector(".content__slider-buttons__img.active"),o=r.currentTarget,t=o.getAttribute("src");t&&(u==null||u.setAttribute("src",t),o==null||o.classList.add("active"),n==null||n.classList.remove("active"))})},i=document.querySelector(".select-color-arrow"),c=document.querySelector(".select-size-arrow"),y=document.querySelectorAll(".products-form__items-select"),L=e=>{e==null||e.addEventListener("touchend",r=>{const n=r.currentTarget;n.name==="color"&&n.clientHeight&&(i==null||i.classList.add("active")),n.name==="size"&&n.clientHeight&&(c==null||c.classList.add("active"))}),e==null||e.addEventListener("blur",()=>{i==null||i.classList.remove("active"),c==null||c.classList.remove("active")}),e==null||e.addEventListener("change",()=>{i==null||i.classList.remove("active"),c==null||c.classList.remove("active")})};h.forEach(e=>p(e));y.forEach(e=>L(e));g();
