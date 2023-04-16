(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function C(t){return t instanceof Error?t.message:String(t)}async function g(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`${e.status}: ${e.statusText}`);return await e.json()}catch(e){throw new Error(C(e))}}function b(t){const e={};for(const n of t)n.category in e?e[n.category]+=n.price:e[n.category]=n.price;return e}function E(t,e){return t.reduce((n,c)=>{const o=e[c.productId];return n+o*c.quantity},0)}function I(t){const e={};for(const n of t)e[n.id]=n.price;return e}function x(t,e){const n=e.find(c=>c.id===t);return n===void 0?"":`${n.name.firstname} ${n.name.lastname}`}function F(t,e,n){let c=0,o={};const a=I(e);for(const s of t){const i=E(s.products,a);i>c&&(c=i,o=s)}const r=x(o.id,n);return{cart:o,value:c,owner:r}}function O(t,e){const n=parseFloat(t.address.geolocation.lat),c=parseFloat(t.address.geolocation.long),o=parseFloat(e.address.geolocation.lat),a=parseFloat(e.address.geolocation.long),r=6371e3,s=n*Math.PI/180,i=o*Math.PI/180,P=(o-n)*Math.PI/180,v=(a-c)*Math.PI/180,w=Math.sin(P/2)*Math.sin(P/2)+Math.cos(s)*Math.cos(i)*Math.sin(v/2)*Math.sin(v/2),q=2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w));return r*q}function A(t){if(t.length<2)return null;let e=-1,n=[t[0],t[1]];for(let c=0;c<t.length;c++)for(let o=c+1;o<t.length;o++){const a=O(t[c],t[o]);a>e&&(e=a,n=[t[c],t[o]])}return n}let l=[],d=[],M=[],u=!1;function L(){const t=document.querySelector("#cache-status");t!==null&&(u?t.textContent="API data is cached":t.textContent="API data is not cached")}async function S(){u=!1,L();const t=document.querySelector("#loading");t!==null&&(t.textContent="Loading data..."),l=await g("https://fakestoreapi.com/users"),d=await g("https://fakestoreapi.com/products"),M=await g("https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"),u=!0,L(),t!==null&&(t.textContent="")}async function f(t){switch(u||await S(),t){case"task1":console.log("---------- task 1 ----------"),console.log(l),console.log(d),console.log(M),console.log("------------------------------");break;case"task2":{const e=b(d);console.log("---------- task 2 ----------"),console.log(e),console.log("------------------------------");break}case"task3":{console.log("---------- task 3 ----------"),console.log(F(M,d,l)),console.log("------------------------------");break}case"task4":{console.log("---------- task 4 ----------"),console.log(A(l)),console.log("------------------------------");break}}}const h=document.querySelector("#task-1");h==null||h.addEventListener("click",()=>{f("task1")});const p=document.querySelector("#task-2");p==null||p.addEventListener("click",()=>{f("task2")});const m=document.querySelector("#task-3");m==null||m.addEventListener("click",()=>{f("task3")});const y=document.querySelector("#task-4");y==null||y.addEventListener("click",()=>{f("task4")});const k=document.querySelector("#refetch");k==null||k.addEventListener("click",()=>{S()});
