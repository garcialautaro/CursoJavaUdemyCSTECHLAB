console.time("tiempoApp");const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["J","Q","K","A"],l=[],a=document.querySelector("#pedirCarta"),n=document.querySelectorAll("small"),o=document.querySelector("#detenerJuego"),i=document.querySelector("#nuevoJuego"),s=document.querySelectorAll(".divCartas"),d=(t=2)=>{a.disabled=!1,o.disabled=!1,s.forEach(e=>e.innerText=""),l.forEach(e=>e=0),n.forEach(e=>e.innerText="0"),e=c(),l=[];for(let r=0;r<t;r++)l.push(0)},c=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(l+a);for(let n of r)for(let o of t)e.push(n+o);return _.shuffle(e)},u=()=>{if(0===e.length)throw": No hay cartas en el mazo";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},h=(e,t)=>(l[t]=l[t]+$(e),n[t].innerText=l[t],l[t]),p=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),s[t].append(r)},f=(e,t)=>{21===e&&console.warn("21, genial!"),t>21?(console.warn("Felicidades, has ganado!"),a.disabled=!0):(21===t||t>e&&e<21)&&(console.warn("Lo siento mucho, perdiste"),a.disabled=!0)},g=e=>{let t=0;do{let r=u();t=h(r,l.length-1),p(r,l.length-1),f(e,t)}while(t<=e)};return a.addEventListener("click",()=>{let e=u();l[0]=h(e,0),p(e,0),l[0]>21?g(0):21===l[0]&&g(l[0])}),o.addEventListener("click",()=>{o.disabled=!0,g(l[0])}),i.addEventListener("click",()=>{d()}),{nuevoJuego:d}})();console.timeEnd("tiempoApp");