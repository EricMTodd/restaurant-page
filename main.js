(()=>{"use strict";const e=()=>{let e=document.querySelector("#container");(()=>{let t="About Us";if(document.querySelector("#container-header"))document.querySelector("#container-header").innerText=t;else{let n=document.createElement("div");n.id="container-header",n.className="primary-text",n.innerText=t,e.appendChild(n)}})(),(()=>{let t="Located in the Docks District of Morath, The Boozy Badger is a must visit for any sea-weary sailor. With fine drink, food and good company, it's the best spot you can spend your shore leave!";if(document.querySelector("#container-body"))document.querySelector("#container-body").innerText=t;else{let n=document.createElement("p");n.id="container-body",n.className="secondary-text",n.innerText=t,e.appendChild(n)}})()},t=()=>{let e=document.querySelector("#container");(()=>{let t="Contact Us";if(document.querySelector("#container-header"))document.querySelector("#container-header").innerText=t;else{let n=document.createElement("h1");n.id="container-header",n.className="primary-text",n.innerText=t,e.appendChild(n)}})(),(()=>{let t="This is the contact info.";if(document.querySelector("#container-body"))document.querySelector("#container-body").innerText=t;else{let n=document.createElement("p");n.id="container-body",n.className="secondary-text",n.innerText=t,e.appendChild(n)}})()},n=()=>{let e=document.querySelector("#container");(()=>{let t="Our Menu";if(document.querySelector("#container-header"))document.querySelector("#container-header").innerText=t;else{let n=document.createElement("h1");n.id="container-header",n.className="primary-text",n.innerText=t,e.appendChild(n)}})(),(()=>{let t="This is the menu!";if(document.querySelector("#container-body"))document.querySelector("#container-body").innerText=t;else{let n=document.createElement("p");n.id="container-body",n.className="secondary-text",n.innerText=t,e.appendChild(n)}})()};(()=>{let e=document.createElement("div");e.id="header",document.querySelector("#content").appendChild(e)})(),(()=>{let e=document.createElement("div");e.id="title",header.className="primary-text",e.innerText="The Boozy Badger",document.querySelector("#header").appendChild(e)})(),(()=>{let e=document.createElement("div");e.id="tagline",e.className="secondary-text",e.innerText="Fine Brews and Crews",document.querySelector("#header").appendChild(e)})(),(()=>{let d=document.createElement("div");d.id="nav",document.querySelector("#content").appendChild(d);let r=document.createElement("a");r.id="about-link",r.className="secondary-text",r.innerText="About",r.addEventListener("click",(t=>e())),d.appendChild(r);let c=document.createElement("a");c.id="contact-link",c.className="secondary-text",c.innerText="Contact",c.addEventListener("click",(e=>t())),d.appendChild(c);let a=document.createElement("a");a.id="menu-link",a.className="secondary-text",a.innerText="Menu",a.addEventListener("click",(e=>n())),d.appendChild(a)})(),(()=>{let e=document.createElement("img");e.id="divider",content.appendChild(e)})(),(()=>{let t=document.createElement("div");t.id="container",t.className="secondary-text",document.querySelector("#content").appendChild(t),e()})(),(()=>{let e=document.createElement("div");e.id="footer";let t=document.createElement("span");t.className="secondary-text",t.innerText="Made with ❤️ by ",e.appendChild(t);let n=document.createElement("a");n.target="_blank",n.className="secondary-text",n.innerText="Eric M. Todd",n.href="https://github.com/EricMTodd",e.appendChild(n),document.body.appendChild(e)})()})();