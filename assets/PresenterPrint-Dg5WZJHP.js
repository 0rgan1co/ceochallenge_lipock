import{d as p,u as h,a as u,c as _,b as f,r as g,t as v,e as x,_ as y,o as n,f as i,g as e,h as a,F as b,i as N,j as k,k as P,l as V,n as S}from"./index-ul1EHcEt.js";import{N as w}from"./NoteDisplay-BbdNu42r.js";const D=p({__name:"PresenterPrint",setup(d,{expose:r}){r(),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${_.title}`});const t={slidesWithNote:f(()=>g.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return _},get themeVars(){return x},get total(){return v},NoteDisplay:w};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),j={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},W={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},z={key:0,class:"border-gray-400/50 mb-8"};function E(d,r,m,t,s,l){return n(),i("div",{id:"page-root",style:S(t.themeVars)},[e("div",j,[e("div",C,[e("h1",L,a(t.configs.title),1),e("div",T,a(new Date().toLocaleString()),1)]),(n(!0),i(b,null,N(t.slidesWithNote,(o,c)=>(n(),i("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",W,[e("div",B,[e("div",H,a(o==null?void 0:o.no)+"/"+a(t.total),1),k(" "+a(o==null?void 0:o.title)+" ",1),r[0]||(r[0]=e("div",{class:"flex-auto"},null,-1))])]),P(t.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<t.slidesWithNote.length-1?(n(),i("hr",z)):V("v-if",!0)]))),128))])],4)}const O=y(D,[["render",E],["__file","/Users/roldanjorgex/Documents/Iniciativas_ai_first/CEOChallenge_lipock/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{O as default};
