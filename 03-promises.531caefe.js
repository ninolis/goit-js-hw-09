var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),promiseAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')},u={};function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({delay:e,position:t}):o({delay:e,position:t})}),e)}))}i.form.addEventListener("input",(function(e){u[e.target.name]=e.target.value})),i.form.addEventListener("submit",(function(e){if(e.preventDefault(),function(e){return Object.values(e).every((e=>e>=0))}(u)){let t,n,{delay:o,step:i,amount:a}=u;[o,i,a]=[o,i,a].map(Number),console.log(typeof o,o),console.log(typeof i,i);for(let e=0;e<a;e+=1)t=o+i*e,n=e+1,l(t,n).then((({delay:e,position:t})=>{r.Notify.success(`✅ Fulfilled promise ${t} in ${e}ms`)})).catch((({delay:e,position:t})=>{r.Notify.failure(`❌ Rejected promise ${t} in ${e}ms`)}));e.target.reset()}else r.Notify.warning("Value should not be less than 0❗")}));
//# sourceMappingURL=03-promises.531caefe.js.map
