---
theme: default
title: Lipock — Pitch Deck
info: |
  ## Lipock
  Nanocápsulas lipídicas biodegradables para la agroindustria.
highlighter: shiki
transition: slide-left
mdc: true
fonts:
  sans: Inter
  mono: Fira Code
layout: center
class: 'bg-gray-950 text-white'
---

<style>
:root {
  --slidev-theme-primary: #16a34a;
  --slidev-theme-secondary: #166534;
}

.slidev-layout {
  padding: 2.5rem 3rem !important;
}

.footnote {
  @apply text-xs text-gray-400 mt-4 italic;
}
</style>

<div class="flex flex-col justify-center h-full max-w-3xl">
  <div v-motion :initial="{ opacity: 0, y: -30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-3xl text-white font-black leading-snug mb-10">
    ¿Cuántos <span class="text-red-400">pesticidas químicos</span> tienen<br>las <span class="text-green-400">frutas y verduras</span> que comés?
  </div>
  <div v-click v-motion :initial="{ opacity: 0, x: -40 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }" class="text-8xl font-black tracking-tight text-white leading-none mb-4">
    LI<span class="text-green-400">POCK</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { duration: 400 } }" class="flex items-center gap-3 mb-6">
    <div class="w-1 h-6 bg-green-400 rounded-full"></div>
    <div class="text-lg text-gray-300 font-medium">
      Biotecnología que la agroindustria quiere y puede pagar
    </div>
  </div>
  <div v-click v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 400 } }" class="text-gray-500 text-sm">
    <span class="text-white font-semibold">CEO Challenge</span> · Jorge Roldán
  </div>
</div>

<!--
Bienvenida. Lipock es una empresa de biotecnología que resuelve el problema de la agroindustria: cómo reemplazar los químicos sintéticos — en los alimentos que comemos y en los cultivos que producimos — sin sacrificar márgenes.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

<div class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Tres dolores. Un sistema roto.</div>

# La mayoría de los productores siguen usando pesticidas químicos

<div class="text-gray-400 text-sm mb-2">Las consecuencias son <span class="text-orange-400 font-semibold">silenciosas</span>...</div>

<div class="grid grid-cols-3 gap-3 mt-1">

  <div v-click v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }" class="relative bg-red-950/20 border border-red-700/60 rounded-xl p-3 flex flex-col items-center text-center overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 to-red-400 rounded-t-xl"></div>
    <div class="text-2xl mb-1">🧑‍🤝‍🧑</div>
    <div class="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">Personas</div>
    <div class="text-4xl font-black text-white leading-none mb-1">1 de 2</div>
    <div class="text-red-300 text-xs font-semibold mb-2">alimentos tiene residuos agrotóxicos</div>
    <div class="w-full bg-red-950/50 border border-red-900/50 rounded-lg p-2 space-y-1">
      <div class="text-xs text-gray-300 font-semibold text-left mb-1">Consecuencias</div>
      <div class="text-xs text-gray-400 text-left">· Disrupción endocrina y neurotoxicidad crónica</div>
      <div class="text-xs text-gray-400 text-left">· Europa endurece los límites — el productor pierde contratos de exportación</div>
    </div>
    <div class="text-xs text-gray-600 mt-2">EFSA 2024</div>
  </div>

  <div v-click v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }" class="relative bg-orange-950/20 border border-orange-700/60 rounded-xl p-3 flex flex-col items-center text-center overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-700 to-orange-400 rounded-t-xl"></div>
    <div class="text-2xl mb-1">🌾</div>
    <div class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Producción</div>
    <div class="text-4xl font-black text-white leading-none mb-1">32%</div>
    <div class="text-orange-300 text-xs font-semibold mb-2">de los fitosanitarios de LATAM viene de China</div>
    <div class="w-full bg-orange-950/50 border border-orange-900/50 rounded-lg p-2 space-y-1">
      <div class="text-xs text-gray-300 font-semibold text-left mb-1">Consecuencias</div>
      <div class="text-xs text-gray-400 text-left">· Rentabilidad atada al precio de insumos en dólares</div>
      <div class="text-xs text-gray-400 text-left">· Cada devaluación o arancel golpea directo al margen</div>
    </div>
    <div class="text-xs text-gray-600 mt-2">CropLife Latin America</div>
  </div>

  <div v-click v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }" class="relative bg-green-950/20 border border-green-700/60 rounded-xl p-3 flex flex-col items-center text-center overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 to-green-400 rounded-t-xl"></div>
    <div class="text-2xl mb-1">🌍</div>
    <div class="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Planeta</div>
    <div class="text-4xl font-black text-white leading-none mb-1">40%</div>
    <div class="text-green-300 text-xs font-semibold mb-2">del suelo agrícola está degradado</div>
    <div class="w-full bg-green-950/50 border border-green-900/50 rounded-lg p-2 space-y-1">
      <div class="text-xs text-gray-300 font-semibold text-left mb-1">Consecuencias</div>
      <div class="text-xs text-gray-400 text-left">· Residuos que persisten décadas — impiden la transición a orgánico</div>
      <div class="text-xs text-gray-400 text-left">· La tierra es el activo más valioso — y se destruye</div>
    </div>
    <div class="text-xs text-gray-600 mt-2">FAO / Scherr & Yadav</div>
  </div>

</div>

<!--
3,7 millones de toneladas de pesticidas al año, el doble que en 1990. Los productores usan lo que conocen, pero las consecuencias son claras: residuos en alimentos, daño silencioso a la salud, y pérdida de acceso a mercados de exportación.
-->

---
layout: center
class: 'bg-gradient-to-br from-gray-950 to-green-950 text-white'
---

<div class="text-center max-w-3xl mx-auto">
  <div class="text-green-400 text-sm font-semibold uppercase tracking-widest mb-6">La pregunta que nos hicimos</div>
  <div class="text-2xl font-bold text-white leading-relaxed">
    ¿Cómo podríamos hacer que los biopesticidas sean tan <span class="text-red-400">efectivos y baratos</span>
    para que la agroindustria pueda <span class="text-green-400">reducir el uso de insumos químicos</span>,
    sin sacrificar rentabilidad ni rendimiento,
    y al mismo tiempo <span class="text-green-400">cuidar la tierra</span>?
  </div>
</div>

---
layout: default
class: 'bg-gray-950 text-white'
---

# Nanocápsulas lipídicas — la solución

<div class="grid grid-cols-3 gap-6 mt-4 mb-6 items-center">
  <div class="rounded-2xl overflow-hidden border border-gray-700 h-48">
    <img src="/images/nanocapsulas-estructura.png" class="w-full h-full object-cover" />
  </div>
  <div class="rounded-2xl overflow-hidden border border-green-800 h-48">
    <img src="/images/planta-campo.jpg" class="w-full h-full object-cover" />
  </div>
  <div class="rounded-2xl overflow-hidden border border-gray-700 h-48">
    <img src="/images/plagas-objetivo.png" class="w-full h-full object-cover" />
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mb-6">
  <div class="bg-green-950/30 border border-green-800 rounded-2xl p-5 text-center">
    <div class="text-5xl font-black text-green-400">80%</div>
    <div class="text-sm text-gray-400 mt-2">menos volatilidad</div>
  </div>
  <div class="bg-green-950/30 border border-green-800 rounded-2xl p-5 text-center">
    <div class="text-5xl font-black text-green-400">12 meses</div>
    <div class="text-sm text-gray-400 mt-2">estabilidad real</div>
  </div>
  <div class="bg-green-950/30 border border-green-800 rounded-2xl p-5 text-center">
    <div class="text-5xl font-black text-green-400">25×</div>
    <div class="text-sm text-gray-400 mt-2">menos dosis necesaria</div>
  </div>
</div>

<div class="text-center text-gray-400 text-base">Biodegradables · Comestibles · Cera de carnauba + aceites esenciales</div>

<div class="text-xs text-gray-500 text-center mt-3">Múnera-Echeverri et al., Colloids and Interfaces, 2024 · MDPI | Patente provisional USPTO · Licencia U. Antioquia</div>

<!--
Nuestra tecnología NLC: tres imágenes hablan por sí solas. Nanocápsulas, formulaciones, y las plagas objetivo. Los números: 80% menos volatilidad, 12 meses estable, 25 veces menos dosis.
-->

---
layout: center
class: 'bg-gray-950 text-white'
---

# Detalle de la solución

<div class="mt-4">
  <img src="/images/modo-accion-dual.png" class="w-full rounded-2xl" />
</div>

---
layout: default
class: 'bg-gray-950 text-white'
---

<div class="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Ventaja competitiva</div>

<div class="w-full">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b border-gray-700">
        <th class="text-gray-400 font-normal text-left py-2 pr-4 w-1/4">Atributo clave</th>
        <th class="py-2 px-3 w-1/7">
          <div class="bg-white/10 border border-blue-400 rounded-xl px-3 py-2 text-center">
            <div class="text-blue-300 font-black text-base">Lipock</div>
            <div class="text-gray-400 text-xs font-normal">Colombia</div>
          </div>
        </th>
        <th class="text-center py-2 px-3 w-1/7">
          <div class="text-gray-300 font-semibold text-sm">Unibaio</div>
          <div class="text-gray-500 text-xs font-normal">Argentina</div>
        </th>
        <th class="text-center py-2 px-3 w-1/7">
          <div class="text-gray-300 font-semibold text-sm">Eden Research</div>
          <div class="text-gray-500 text-xs font-normal">UK</div>
        </th>
        <th class="text-center py-2 px-3 w-1/7">
          <div class="text-gray-300 font-semibold text-sm">Vexel</div>
          <div class="text-gray-500 text-xs font-normal">Greedex</div>
        </th>
        <th class="text-center py-2 px-3 w-1/7">
          <div class="text-gray-300 font-semibold text-sm">Sintético conv.</div>
          <div class="text-gray-500 text-xs font-normal">Abamectina</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="text-gray-300 py-3 pr-4">Sin residuo en suelo ni alimento</td>
        <td class="text-center py-3 px-3 bg-white/5"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-yellow-400 text-base">~</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="text-gray-300 py-3 pr-4">Principio activo 100% natural (GRAS)</td>
        <td class="text-center py-3 px-3 bg-white/5"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="text-gray-300 py-3 pr-4">Reducción de dosis ≥ 20x</td>
        <td class="text-center py-3 px-3 bg-white/5"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-yellow-400 text-base">~</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-yellow-400 text-base">~</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="text-gray-300 py-3 pr-4">Materias primas producibles en Latam</td>
        <td class="text-center py-3 px-3 bg-white/5"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
      </tr>
      <tr>
        <td class="text-gray-300 py-3 pr-4">Sin solventes tóxicos en producción</td>
        <td class="text-center py-3 px-3 bg-white/5"><span class="text-green-400 text-lg">✓</span></td>
        <td class="text-center py-3 px-3"><span class="text-yellow-400 text-base">~</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
        <td class="text-center py-3 px-3"><span class="text-red-400 text-lg">✗</span></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-4 text-gray-600 text-xs">✓ confirmado · ~ parcial o en desarrollo · ✗ no aplica / no documentado</div>

---
layout: default
class: 'bg-gray-950 text-white'
---

# La oportunidad de mercado

<div class="text-gray-400 text-xs mb-3">El negocio está en convertir una fracción del mercado de <span class="text-white font-semibold">pesticidas químicos</span> — que ya existe, ya se compra, ya se presupuesta.</div>

<div class="grid grid-cols-3 gap-4 mb-3">

<div class="bg-green-950/40 border border-green-700 rounded-xl p-4 text-center">
  <div class="text-green-300 text-xs font-semibold uppercase tracking-wider mb-1">TAM · Mercado total</div>
  <div class="text-4xl font-black text-white">USD 15B</div>
  <div class="text-xs text-gray-400 mt-1">Pesticidas químicos en Latinoamérica</div>
  <div class="text-xs text-gray-500 mt-1">Brasil + Argentina · CropLife LATAM 2023</div>
</div>

<div class="bg-purple-950/40 border border-purple-700 rounded-xl p-4 text-center">
  <div class="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-1">SAM · Al que podemos llegar</div>
  <div class="text-4xl font-black text-white">USD 3B</div>
  <div class="text-xs text-gray-400 mt-1">Cultivos de exportación con LMR obligatorio</div>
  <div class="text-xs text-gray-500 mt-1">Aguacate, berries, cítricos, hortalizas</div>
</div>

<div class="bg-blue-950/40 border border-blue-700 rounded-xl p-4 text-center">
  <div class="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">SOM · Meta real año 3</div>
  <div class="text-4xl font-black text-white">USD 5M</div>
  <div class="text-xs text-gray-400 mt-1">Argentina + Brasil</div>
  <div class="text-xs text-gray-500 mt-1">🇦🇷 Arándano + aguacate 🇧🇷 Primeros contratos</div>
</div>

</div>

<div v-click class="bg-green-950/30 border border-green-700 rounded-xl p-3 text-center mb-3">
  <div class="text-gray-400 text-xs mb-1">Si convertimos el <span class="text-white font-semibold">1% del mercado químico</span> a biopesticidas</div>
  <div class="text-4xl font-black text-green-400">USD 150M ARR</div>
  <div class="text-gray-400 text-xs mt-1">revenue anual recurrente</div>
</div>

<div class="grid grid-cols-2 gap-4 text-center">
  <div class="text-gray-400 text-xs">🇧🇷 Brasil · Ley 15.700 · primera ley de bioinsumos del mundo</div>
  <div class="text-gray-400 text-xs">🇦🇷 Argentina · <strong class="text-red-400">si no cumple LMR, no entra a la UE</strong></div>
</div>

<div class="footnote">CropLife LATAM · MAPA Brasil</div>

<!--
El TAM es el mercado de pesticidas químicos que ya existe: USD 15B en LATAM. El negocio de Lipock es capturar una fracción de ese gasto y convertirlo a biopesticidas. SAM: cultivos de exportación donde el LMR es obligatorio para entrar a UE y EE.UU. Con solo el 1% de conversión: USD 150M ARR.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

<div class="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Anexo · Comparación de precio</div>

<div class="grid grid-cols-3 gap-3 mb-3">

  <div class="bg-gray-900 border border-gray-700 rounded-xl p-3 flex flex-col">
    <div class="mb-2"><span class="bg-gray-800 text-gray-300 text-xs font-semibold px-2 py-0.5 rounded-full">hoy</span></div>
    <div class="text-white text-sm font-bold mb-2">Pesticida convencional</div>
    <div class="space-y-1 flex-1 text-xs">
      <div class="flex justify-between"><span class="text-gray-400">Dosis/app</span><span class="text-orange-400 font-semibold">1 L/ha</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Aplicaciones/año</span><span class="text-white font-semibold">16</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Litros totales/año</span><span class="text-white font-semibold">1600 L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Precio</span><span class="text-white font-semibold">$18/L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Residuo en suelo</span><span class="text-orange-400 font-semibold">Sí, persiste</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Dep. dólar</span><span class="text-orange-400 font-semibold">Alta (China/USA)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Certif. orgánico</span><span class="text-orange-400 font-semibold">No</span></div>
    </div>
    <div class="mt-2 bg-gray-800 rounded-lg p-2">
      <div class="text-gray-400 text-xs">gasto anual — 100 ha</div>
      <div class="text-orange-400 text-2xl font-black">$29k</div>
    </div>
  </div>

  <div class="bg-gray-900 border-2 border-blue-500 rounded-xl p-3 flex flex-col">
    <div class="mb-2"><span class="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded-full">lipock</span></div>
    <div class="text-white text-sm font-bold mb-2">Nanocápsulas lipídicas</div>
    <div class="space-y-1 flex-1 text-xs">
      <div class="flex justify-between"><span class="text-gray-400">Dosis/app</span><span class="text-green-400 font-semibold">80 ml/ha (−25x)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Aplicaciones/año</span><span class="text-white font-semibold">16</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Litros totales/año</span><span class="text-green-400 font-semibold">128 L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Precio</span><span class="text-white font-semibold">$80/L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Residuo en suelo</span><span class="text-green-400 font-semibold">No (GRAS, biodeg.)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Dep. dólar</span><span class="text-green-400 font-semibold">Baja (local)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Certif. orgánico</span><span class="text-blue-400 font-semibold">Potencial</span></div>
    </div>
    <div class="mt-2 bg-gray-800 rounded-lg p-2">
      <div class="text-gray-400 text-xs">gasto anual — 100 ha</div>
      <div class="text-green-400 text-2xl font-black">$10k</div>
      <div class="mt-1 inline-block bg-green-950 border border-green-700 text-green-300 text-xs font-semibold px-2 py-0.5 rounded-full">ahorra $19k (64%)</div>
    </div>
  </div>

  <div class="bg-gray-900 border border-gray-700 rounded-xl p-3 flex flex-col">
    <div class="mb-2"><span class="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2 py-0.5 rounded-full">unibaio (modelo)</span></div>
    <div class="text-white text-sm font-bold mb-2">Aditivo encapsulante</div>
    <div class="space-y-1 flex-1 text-xs">
      <div class="flex justify-between"><span class="text-gray-400">Dosis conv. reducida</span><span class="text-white font-semibold">0.3 L/ha (−70%)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Aplicaciones/año</span><span class="text-white font-semibold">16</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Litros totales/año</span><span class="text-white font-semibold">528 L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Precio aditivo</span><span class="text-white font-semibold">~$45/L</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Residuo en suelo</span><span class="text-orange-400 font-semibold">Sí (conv. sigue)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Dep. dólar</span><span class="text-orange-400 font-semibold">Media (mix)</span></div>
      <div class="flex justify-between"><span class="text-gray-400">Certif. orgánico</span><span class="text-orange-400 font-semibold">No</span></div>
    </div>
    <div class="mt-2 bg-gray-800 rounded-lg p-2">
      <div class="text-gray-400 text-xs">gasto anual — 100 ha</div>
      <div class="text-green-400 text-2xl font-black">$11k</div>
      <div class="mt-1 inline-block bg-green-950 border border-green-700 text-green-300 text-xs font-semibold px-2 py-0.5 rounded-full">ahorra $18k (63%)</div>
    </div>
  </div>

</div>

<div class="bg-blue-950/30 border border-blue-700/60 rounded-lg p-3 text-xs text-gray-300 leading-relaxed">
  Con 100 ha, Lipock es la opción más económica — ahorra <strong class="text-white">$19k/año</strong> vs convencional y <strong class="text-white">$560/año</strong> vs Unibaio. La venta se puede hacer enteramente por economía: sin necesitar la conversación de sustentabilidad.
</div>

<!--
Anexo precio: la propuesta de valor de Lipock funciona incluso sin la conversación de sustentabilidad.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

<div class="absolute inset-0 overflow-hidden opacity-10">
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10%" cy="20%" r="3" fill="#4ade80"/><circle cx="30%" cy="15%" r="2" fill="#4ade80"/><circle cx="50%" cy="25%" r="3" fill="#4ade80"/><circle cx="70%" cy="10%" r="2" fill="#4ade80"/><circle cx="90%" cy="22%" r="3" fill="#4ade80"/><circle cx="20%" cy="50%" r="2" fill="#4ade80"/><circle cx="40%" cy="45%" r="3" fill="#4ade80"/><circle cx="60%" cy="55%" r="2" fill="#4ade80"/><circle cx="80%" cy="48%" r="3" fill="#4ade80"/><circle cx="15%" cy="80%" r="2" fill="#4ade80"/><circle cx="35%" cy="75%" r="3" fill="#4ade80"/><circle cx="55%" cy="85%" r="2" fill="#4ade80"/><circle cx="75%" cy="78%" r="3" fill="#4ade80"/><circle cx="95%" cy="82%" r="2" fill="#4ade80"/>
    <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="#4ade80" stroke-width="0.5"/><line x1="30%" y1="15%" x2="50%" y2="25%" stroke="#4ade80" stroke-width="0.5"/><line x1="50%" y1="25%" x2="70%" y2="10%" stroke="#4ade80" stroke-width="0.5"/><line x1="70%" y1="10%" x2="90%" y2="22%" stroke="#4ade80" stroke-width="0.5"/><line x1="10%" y1="20%" x2="20%" y2="50%" stroke="#4ade80" stroke-width="0.5"/><line x1="30%" y1="15%" x2="40%" y2="45%" stroke="#4ade80" stroke-width="0.5"/><line x1="50%" y1="25%" x2="60%" y2="55%" stroke="#4ade80" stroke-width="0.5"/><line x1="70%" y1="10%" x2="80%" y2="48%" stroke="#4ade80" stroke-width="0.5"/><line x1="20%" y1="50%" x2="40%" y2="45%" stroke="#4ade80" stroke-width="0.5"/><line x1="40%" y1="45%" x2="60%" y2="55%" stroke="#4ade80" stroke-width="0.5"/><line x1="60%" y1="55%" x2="80%" y2="48%" stroke="#4ade80" stroke-width="0.5"/><line x1="20%" y1="50%" x2="35%" y2="75%" stroke="#4ade80" stroke-width="0.5"/><line x1="40%" y1="45%" x2="55%" y2="85%" stroke="#4ade80" stroke-width="0.5"/><line x1="60%" y1="55%" x2="75%" y2="78%" stroke="#4ade80" stroke-width="0.5"/><line x1="80%" y1="48%" x2="95%" y2="82%" stroke="#4ade80" stroke-width="0.5"/><line x1="15%" y1="80%" x2="35%" y2="75%" stroke="#4ade80" stroke-width="0.5"/><line x1="35%" y1="75%" x2="55%" y2="85%" stroke="#4ade80" stroke-width="0.5"/><line x1="55%" y1="85%" x2="75%" y2="78%" stroke="#4ade80" stroke-width="0.5"/><line x1="75%" y1="78%" x2="95%" y2="82%" stroke="#4ade80" stroke-width="0.5"/><line x1="90%" y1="22%" x2="80%" y2="48%" stroke="#4ade80" stroke-width="0.5"/><line x1="15%" y1="80%" x2="20%" y2="50%" stroke="#4ade80" stroke-width="0.5"/>
  </svg>
</div>

# Hay equipo — y queremos hacerlo articulando con el ecosistema

<div class="grid grid-cols-5 gap-3 mt-4">

<div class="flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full border-3 border-green-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/alejandro-munera.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Alejandro Múnera</div>
  <div class="text-green-400 text-xs">Químico Farmacéutico</div>
  <div class="text-gray-500 text-xs">Formulación · U. Antioquia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full border-3 border-blue-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/freimar-segura.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Freimar Segura</div>
  <div class="text-blue-400 text-xs">Químico Farmacéutico</div>
  <div class="text-gray-500 text-xs">Farmacotecnia · U. Antioquia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full border-3 border-purple-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/danilo-echeverri.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Danilo Echeverri</div>
  <div class="text-purple-400 text-xs">Ingeniero Biológico</div>
  <div class="text-gray-500 text-xs">Nanociencia · U. Nacional</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full border-3 border-orange-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/joseluis-munera.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Jose Luis Múnera</div>
  <div class="text-orange-400 text-xs">Ingeniero Agrónomo</div>
  <div class="text-gray-500 text-xs">Bioinformática · U. Nacional</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full border-3 border-cyan-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/jorge-roldan.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Jorge Roldán</div>
  <div class="text-cyan-400 text-xs">Ing. Industrial y de Sistemas</div>
  <div class="text-gray-500 text-xs">Tec de Monterrey</div>
</div>

</div>

<div class="mt-4 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Alianzas clave</div>

<div class="grid grid-cols-5 gap-3">

<div class="flex flex-col items-center text-center">
  <div class="w-20 h-20 rounded-full border-2 border-yellow-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/maty-bunge.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Maty Bunge</div>
  <div class="text-yellow-400 text-xs">Ex-Presidenta CREA</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-20 h-20 rounded-full border-2 border-blue-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/julia-mensa.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Julia Mensa</div>
  <div class="text-blue-400 text-xs">Founder Nunatak</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-20 h-20 rounded-full border-2 border-purple-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/vera-alvarez.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Vera Alvarez</div>
  <div class="text-purple-400 text-xs">Women in Science</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-20 h-20 rounded-full border-2 border-emerald-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/ruben-altman.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Rubén Altman</div>
  <div class="text-emerald-400 text-xs">ClimaTech</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden mb-2 bg-gray-800">
    <img src="/images/juanmanuel-garrido.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Juan M. Garrido</div>
  <div class="text-green-400 text-xs">El Gato y La Caja</div>
</div>

</div>


<!--
Equipo interdisciplinario + alianzas clave: CREA, INTA, Aprecid, IndieBio, UniBio, Antom. Red de acceso a productores, validación y capital inteligente.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

# La propuesta

<div class="grid grid-cols-2 gap-10 mt-4">

<div class="flex flex-col items-center justify-center">
  <div class="text-5xl font-black text-green-400 mb-1">USD 250K</div>
  <div class="text-xl text-white mb-1">por 25% equity</div>
  <div class="text-gray-500 text-sm mb-6">Pre-money: USD 750K</div>

  <div class="relative w-48 h-48">
    <svg viewBox="0 0 200 200" class="w-full h-full -rotate-90">
      <circle cx="100" cy="100" r="85" fill="none" stroke="#166534" stroke-width="30" stroke-dasharray="213.6 534" stroke-dashoffset="0" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#22c55e" stroke-width="30" stroke-dasharray="160.2 534" stroke-dashoffset="-213.6" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#4ade80" stroke-width="30" stroke-dasharray="160.2 534" stroke-dashoffset="-373.8" />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <div class="text-2xl font-black text-white">18 meses</div>
        <div class="text-xs text-gray-400">runway</div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#166534]"></div><span class="text-gray-300">I+D (Investigación y Desarrollo) · 40%</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#22c55e]"></div><span class="text-gray-300">Campo & Patentes · 30%</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#4ade80]"></div><span class="text-gray-300">Talento & Ops · 30%</span></div>
  </div>
</div>

<div class="flex flex-col justify-center">
  <div class="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Este capital desbloquea</div>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <div class="text-green-400 text-base mt-0.5">&#10003;</div>
      <div class="text-base text-white">Pilotos en cultivos estratégicos con la red de testeo de CREA (Consorcios Regionales de Experimentación Agrícola)</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-green-400 text-base mt-0.5">&#10003;</div>
      <div class="text-base text-white">Estrategia comercial para los primeros contratos e historias de éxito</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-green-400 text-base mt-0.5">&#10003;</div>
      <div class="text-base text-white">Registros de propiedad intelectual en cultivos estratégicos</div>
    </div>
  </div>

  <div class="mt-8 bg-blue-950/30 border border-blue-700 rounded-2xl p-5">
    <div class="text-sm font-bold text-blue-300 mb-1">¿Por qué GRIDx?</div>
    <div class="text-sm text-gray-300">Base científico-tecnológica alineada. Red que <strong class="text-white">acelera validación industrial</strong>.</div>
  </div>
</div>

</div>

<!--
Pedimos 250 mil dólares por el 25% de equity. El capital va a I+D, pilotos de campo, regulatorio y operaciones. GRIDx es el socio ideal por su base científico-tecnológica.
-->

---
layout: center
class: 'bg-gradient-to-br from-gray-950 via-green-950 to-gray-950 text-white'
---

<div class="text-center max-w-3xl mx-auto">

  <div class="text-7xl font-black text-white mb-6">
    LI<span class="text-green-400">POCK</span>
  </div>

  <div class="bg-white/5 border border-white/10 rounded-2xl px-10 py-5 inline-block mb-8">
    <div class="text-green-300 text-xl font-medium">Biotecnología que la agroindustria quiere y puede pagar.</div>
  </div>

  <div class="text-5xl font-black text-white mb-6 leading-tight">
    El futuro es <span class="text-green-400">biológico.</span>
  </div>

  <div class="text-2xl font-bold text-green-300 mb-6 italic">
    "Plantas que cuidan otras plantas"
  </div>

  <div class="flex justify-center gap-6 mb-8">
    <div class="flex flex-col items-center gap-2">
      <span class="text-3xl">🍎</span>
      <span class="text-sm text-gray-300 font-medium">Comida saludable</span>
    </div>
    <div class="text-gray-600 text-2xl flex items-center">·</div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-3xl">🌾</span>
      <span class="text-sm text-gray-300 font-medium">Mejor producción</span>
    </div>
    <div class="text-gray-600 text-2xl flex items-center">·</div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-3xl">🌱</span>
      <span class="text-sm text-gray-300 font-medium">Cuidar la tierra</span>
    </div>
  </div>

  <div class="text-4xl font-black text-white">
    ¿Te sumás?
  </div>

</div>

<!--
Cierre. La pregunta para el inversor es simple: ¿quieren estar del lado de la industria que llega tarde, o del lado de la tecnología que hace posible la transición?
-->
