(()=>{"use strict";const e=()=>{console.log("renderAboutContainer")},t=()=>{console.log("renderContactContainer")},n=()=>{console.log("renderMenuContainer")},d=()=>{let e=document.createElement("div");e.id="title",e.innerText="The Boozy Badger",document.querySelector("#header").appendChild(e)},i=()=>{let e=document.createElement("div");e.id="tagline",e.innerText="Fine Brews and Crews",document.querySelector("#header").appendChild(e)},r=()=>{let d=document.createElement("div");d.id="nav",document.querySelector("#content").appendChild(d);let i=document.createElement("a");i.id="about-link",i.innerText="About Us",i.addEventListener("click",(t=>e())),d.appendChild(i);let r=document.createElement("a");r.id="contact-link",r.innerText="Contact Us",r.addEventListener("click",(e=>t())),d.appendChild(r);let c=document.createElement("a");c.id="menu-link",c.innerText="Our Menu",c.addEventListener("click",(e=>n())),d.appendChild(c)},c=()=>{let e=document.createElement("div");e.id="footer";let t=document.createElement("span");t.innerText="Made with ❤️ by ",e.appendChild(t);let n=document.createElement("a");n.target="_blank",n.innerText="Eric M. Todd",n.href="https://github.com/EricMTodd",e.appendChild(n),document.body.appendChild(e)};(()=>{let e=document.createElement("div");e.id="header",document.querySelector("#content").appendChild(e)})(),d(),i(),r(),c()})();