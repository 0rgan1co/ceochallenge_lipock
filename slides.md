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

<div class="text-center max-w-4xl mx-auto">
  <div class="text-6xl text-white font-black leading-snug">
    ¿Saben cuántos <span class="text-red-400">pesticidas</span> tienen<br>las <span class="text-green-400">frutas y verduras</span> que comemos?
  </div>
</div>

---
layout: cover
background: /images/lipock-microscopia.png
class: 'text-white'
---

<div class="flex flex-col items-center justify-center h-full text-center backdrop-blur-sm bg-black/60 rounded-3xl p-12">
  <div class="text-7xl font-black tracking-tight text-white mb-3">
    LI<span class="text-green-400">POCK</span>
  </div>
  <div class="text-xl text-green-300 font-medium mb-4">
    Biotecnología que la industria puede pagar
  </div>
  <div class="mt-8 text-gray-400 text-sm">
    <span class="text-white font-semibold">CEO Challenge</span> · Jorge Roldán · Lipock
  </div>
</div>

<!--
Bienvenida. Lipock es una empresa de biotecnología que resuelve el problema de la agroindustria: cómo reemplazar los químicos sintéticos — en los alimentos que comemos y en los cultivos que producimos — sin sacrificar márgenes.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

# La mayoría de los productores agrícolas usa pesticidas químicos

<div class="text-gray-400 text-base mb-6">Es lo que conocen, lo que siempre funcionó. Pero tiene consecuencias.</div>

<div class="bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-3 mb-6 text-center">
  <span class="text-2xl font-black text-white">3,7M de toneladas de pesticidas al año</span>
  <span class="text-gray-400 text-base ml-2">— el doble que en 1990</span>
  <span class="text-gray-500 text-xs ml-2">FAO 2023</span>
</div>

<div class="grid grid-cols-3 gap-6 mt-2 mb-8">
  <div class="bg-red-950/40 border border-red-700 rounded-2xl p-5 text-center">
    <div class="text-6xl font-black text-white mb-2">54,6%</div>
    <div class="text-base text-gray-300">de alimentos con residuos de pesticidas</div>
    <div class="text-xs text-gray-500 mt-1">EFSA 2024</div>
  </div>
  <div class="bg-red-950/40 border border-red-700 rounded-2xl p-5 text-center">
    <div class="text-6xl font-black text-white mb-2">4+</div>
    <div class="text-base text-gray-300">químicos diferentes en una sola fruta</div>
    <div class="text-xs text-gray-500 mt-1">EWG 2025</div>
  </div>
  <div class="bg-orange-950/40 border border-orange-700 rounded-2xl p-5 text-center">
    <div class="text-6xl font-black text-white mb-2">-40%</div>
    <div class="text-base text-gray-300">activos permitidos para exportar a UE</div>
    <div class="text-xs text-gray-500 mt-1">LMR endurecidos cada año</div>
  </div>
</div>

<div v-click class="bg-orange-950/20 border border-orange-800 rounded-2xl p-6">
  <div class="text-orange-300 text-sm font-semibold uppercase tracking-wider mb-4 text-center">Las consecuencias son silenciosas</div>
  <div class="grid grid-cols-3 gap-6 text-center">
    <div>
      <div class="text-2xl font-black text-white mb-1">Disrupción endocrina</div>
      <div class="text-gray-400 text-sm">Alteran hormonas tiroideas, reproductivas y metabólicas</div>
    </div>
    <div>
      <div class="text-2xl font-black text-white mb-1">Neurotoxicidad</div>
      <div class="text-gray-400 text-sm">Daño neurológico crónico por organofosforados</div>
    </div>
    <div>
      <div class="text-2xl font-black text-white mb-1">Pérdida de mercados</div>
      <div class="text-gray-400 text-sm">Si no cumple LMR, no entra a UE ni EE.UU.</div>
    </div>
  </div>
</div>

<div class="mt-4 text-xs text-gray-500">
  EFSA 2024 · DOI: 10.2903/j.efsa.2024.8589 | EWG 2025 | Systematic Review 2024 · DOI: 10.1016/j.toxrep.2024.101813
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
  <div class="text-3xl font-bold text-white leading-relaxed">
    ¿Cómo hacer que un biocompuesto natural llegue <span class="text-green-400">intacto y activo</span> —<br>
    al alimento en la mesa y al cultivo en el campo —<br>
    a un costo que la industria <span class="text-green-400">realmente pueda pagar</span>?
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
layout: default
class: 'bg-gray-950 text-white'
---

# La oportunidad de mercado

<div class="grid grid-cols-3 gap-5 mt-5 mb-6">

<div class="bg-green-950/40 border border-green-700 rounded-2xl p-5 text-center">
  <div class="text-green-300 text-xs font-semibold uppercase tracking-wider mb-2">TAM · Mercado total</div>
  <div class="text-5xl font-black text-white">USD 3,5B</div>
  <div class="text-sm text-gray-400 mt-2">Bioinsumos Brasil + Argentina</div>
  <div class="text-xs text-gray-500 mt-1">🇧🇷 USD 3,2B (CAGR 21%) + 🇦🇷 USD 340M (+25%)</div>
</div>

<div class="bg-purple-950/40 border border-purple-700 rounded-2xl p-5 text-center">
  <div class="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">SAM · Al que podemos llegar</div>
  <div class="text-5xl font-black text-white">USD 500M</div>
  <div class="text-sm text-gray-400 mt-2">Berries, cítricos, hortalizas de exportación</div>
  <div class="text-xs text-gray-500 mt-1">Cultivos que necesitan cumplir LMR para exportar</div>
</div>

<div class="bg-blue-950/40 border border-blue-700 rounded-2xl p-5 text-center">
  <div class="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">SOM · Meta real año 3</div>
  <div class="text-5xl font-black text-white">USD 5M</div>
  <div class="text-sm text-gray-400 mt-2">1% del SAM</div>
  <div class="text-xs text-gray-500 mt-1">Arándano ARG + primeros contratos Brasil</div>
</div>

</div>

<div v-click class="bg-green-950/30 border border-green-700 rounded-2xl p-6 text-center mb-4">
  <div class="text-gray-400 text-sm mb-1">Si capturamos el 1% del mercado total</div>
  <div class="text-5xl font-black text-green-400">USD 35M ARR</div>
  <div class="text-gray-400 text-sm mt-1">revenue anual recurrente</div>
</div>

<div class="grid grid-cols-2 gap-6 text-center">
  <div class="text-gray-400 text-sm">🇧🇷 156M ha con bioinsumos · Ley 15.700 · primera ley de bioinsumos del mundo</div>
  <div class="text-gray-400 text-sm">🇦🇷 Arándano orgánico · 95% se exporta · <strong class="text-red-400">si no cumple LMR, no entra a UE</strong></div>
</div>

<div class="footnote">Brasil Regenera 2025 · CropLife · MAPA · MarketsandMarkets</div>

<!--
TAM: 3.5 mil millones, todo el mercado de bioinsumos en Brasil y Argentina. SAM: 500 millones, los cultivos de exportación que necesitan cumplir límites de pesticidas. SOM: 5 millones en año 3, meta real. Si llegamos al 1% del total, son 35 millones de ARR.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

# Hay equipo — y queremos hacerlo articulando con el ecosistema

<div class="grid grid-cols-5 gap-4 mt-6">

<div class="flex flex-col items-center text-center">
  <div class="w-28 h-28 rounded-full border-3 border-green-500 overflow-hidden mb-3 bg-gray-800">
    <img src="/images/alejandro-munera.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Alejandro Múnera</div>
  <div class="text-green-400 text-xs">Químico Farmacéutico</div>
  <div class="text-gray-500 text-xs mt-1">Formulación<br>U. de Antioquia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-28 h-28 rounded-full border-3 border-blue-500 overflow-hidden mb-3 bg-gray-800">
    <img src="/images/freimar-segura.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Freimar Segura</div>
  <div class="text-blue-400 text-xs">Químico Farmacéutico</div>
  <div class="text-gray-500 text-xs mt-1">Farmacotecnia<br>U. de Antioquia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-28 h-28 rounded-full border-3 border-purple-500 overflow-hidden mb-3 bg-gray-800">
    <img src="/images/danilo-echeverri.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Danilo Echeverri</div>
  <div class="text-purple-400 text-xs">Ingeniero Biológico</div>
  <div class="text-gray-500 text-xs mt-1">Nanociencia<br>U. Nacional Colombia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-28 h-28 rounded-full border-3 border-orange-500 overflow-hidden mb-3 bg-gray-800">
    <img src="/images/joseluis-munera.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Jose Luis Múnera</div>
  <div class="text-orange-400 text-xs">Ingeniero Agrónomo</div>
  <div class="text-gray-500 text-xs mt-1">Bioinformática<br>U. Nacional Colombia</div>
</div>

<div class="flex flex-col items-center text-center">
  <div class="w-28 h-28 rounded-full border-3 border-cyan-500 overflow-hidden mb-3 bg-gray-800">
    <img src="/images/jorge-roldan.png" class="w-full h-full object-cover" />
  </div>
  <div class="font-bold text-white text-xs">Jorge Roldán</div>
  <div class="text-cyan-400 text-xs">Ing. Industrial</div>
  <div class="text-gray-500 text-xs mt-1">Operaciones & Estrategia<br>Tec de Monterrey</div>
</div>

</div>

<div class="mt-6 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Alianzas clave</div>

<div class="grid grid-cols-5 gap-4">

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

<div class="mt-4 flex items-center justify-center gap-6">
  <div class="bg-yellow-400 text-black font-black text-xs px-3 py-1.5 rounded">CREA</div>
  <div class="bg-green-700 text-white font-bold text-xs px-3 py-1.5 rounded">INTA</div>
  <div class="bg-emerald-600 text-white font-bold text-xs px-3 py-1.5 rounded">Aprecid</div>
  <div class="min-w-[40px]"><img src="/images/indiebio.webp" class="h-8 object-contain" /></div>
  <div class="bg-purple-700 text-white font-bold text-xs px-3 py-1.5 rounded">UniBio</div>
  <div class="bg-blue-900 text-white font-bold text-xs px-3 py-1.5 rounded">Antom.la</div>
</div>

<!--
Equipo interdisciplinario + alianzas clave: CREA, INTA, Aprecid, IndieBio, UniBio, Antom. Red de acceso a productores, validación y capital inteligente.
-->

---
layout: default
class: 'bg-gray-950 text-white'
---

# The Ask

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="flex flex-col justify-center">
  <div class="text-6xl font-black text-green-400 mb-2">USD 250K</div>
  <div class="text-2xl text-white mb-1">por 25% equity</div>
  <div class="text-gray-400 mb-8">Pre-money: USD 750K</div>

  <div class="space-y-3">
    <div class="flex justify-between items-center bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-3">
      <span class="text-base text-gray-300">I+D formulaciones</span>
      <span class="font-black text-green-400 text-xl">40%</span>
    </div>
    <div class="flex justify-between items-center bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-3">
      <span class="text-base text-gray-300">Pilotos de campo</span>
      <span class="font-black text-green-400 text-xl">25%</span>
    </div>
    <div class="flex justify-between items-center bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-3">
      <span class="text-base text-gray-300">Regulatorio (SENASA + UE)</span>
      <span class="font-black text-green-400 text-xl">15%</span>
    </div>
    <div class="flex justify-between items-center bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-3">
      <span class="text-base text-gray-300">Operaciones — 18 meses runway</span>
      <span class="font-black text-green-400 text-xl">20%</span>
    </div>
  </div>
</div>

<div class="flex flex-col justify-center">
  <div class="text-gray-400 text-base mb-4">Este capital desbloquea</div>
  <div class="space-y-3">
    <div class="bg-orange-950/20 border border-orange-800 rounded-xl p-4">
      <div class="text-base text-white font-bold">🌾 Piloto campo: arándano orgánico vs Botrytis</div>
    </div>
    <div class="bg-red-950/20 border border-red-800 rounded-xl p-4">
      <div class="text-base text-white font-bold">🍽️ Piloto alimentos: conservante natural en carnes</div>
    </div>
    <div class="bg-green-950/30 border border-green-800 rounded-xl p-4">
      <div class="text-base text-white font-bold">🎯 Primer contrato de suministro firmado</div>
    </div>
    <div class="bg-green-950/30 border border-green-800 rounded-xl p-4">
      <div class="text-base text-white font-bold">🌍 Registro SENASA + homologación UE</div>
    </div>
  </div>

  <div class="mt-5 bg-blue-950/30 border border-blue-700 rounded-xl p-4">
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

  <div class="text-7xl font-black text-white mb-8">
    LI<span class="text-green-400">POCK</span>
  </div>

  <div class="text-3xl text-gray-200 leading-relaxed mb-10">
    "Que lo que comemos no nos enferme.<br>
    Que lo que producimos <strong class="text-green-400">no destruya el campo</strong>."
  </div>

  <div class="bg-white/5 border border-white/10 rounded-2xl px-10 py-5 inline-block">
    <div class="text-green-300 text-xl font-medium">Biotecnología que la industria puede pagar.</div>
  </div>

  <div class="mt-10 text-2xl text-white font-bold italic">
    ¿Cómo podemos lograr que las plantas cuiden otras plantas?
  </div>

</div>

<!--
Cierre. La pregunta para el inversor es simple: ¿quieren estar del lado de la industria que llega tarde, o del lado de la tecnología que hace posible la transición?
-->
