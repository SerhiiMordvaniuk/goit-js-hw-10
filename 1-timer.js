/* empty css                      */import{f as l}from"./assets/vendor-EyZmBGcZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let i=null;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){i=n,console.log(i)}};console.log(i);l("#datetime-picker",u);document.querySelector("button[data-start]");
//# sourceMappingURL=1-timer.js.map
