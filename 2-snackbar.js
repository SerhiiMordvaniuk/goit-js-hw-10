import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form"),n=document.querySelector(".delay");let t=null;n.addEventListener("input",o=>{t=o.target.value});l.addEventListener("submit",o=>{o.preventDefault();let i=document.querySelector('input[name="state"]:checked');const r=new Promise((e,a)=>{i.value==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):a(`❌ Rejected promise in ${t}ms`)});r.then(e=>{setTimeout(()=>{s.error({message:e,position:"topCenter",color:"green",messageColor:"black",close:!1,timeout:4e3,progressBar:!1,icon:!1})},t)}),r.catch(e=>{setTimeout(()=>{s.error({message:e,position:"topCenter",color:"red",messageColor:"black",close:!1,timeout:4e3,progressBar:!1,icon:!1})},t)}),l.reset()});
//# sourceMappingURL=2-snackbar.js.map
