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
    Biotecnología que la agroindustria puede pagar
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

# La mayoría de los productores usa pesticidas químicos

<div class="text-gray-400 text-base mb-4">Es lo que conocen. Pero tiene <span class="text-orange-400 font-semibold">consecuencias silenciosas</span>.</div>

<div class="grid grid-cols-2 gap-6 mb-4">

  <div class="bg-red-950/30 border border-red-700 rounded-2xl p-4">
    <div class="flex items-center gap-4 mb-3">
      <div class="text-5xl font-black text-white">1 de 2</div>
      <div>
        <div class="text-sm text-gray-400">alimentos en tu plato tiene residuos</div>
        <div class="text-xs text-gray-500 mt-1">EFSA 2024</div>
      </div>
    </div>
    <div class="flex justify-center gap-2 my-3">
      <span class="text-2xl">🍎</span><span class="text-2xl">🍎</span><span class="text-2xl">🍎</span><span class="text-2xl">🍎</span><span class="text-2xl">🍎</span><span class="text-2xl opacity-20">🍏</span><span class="text-2xl opacity-20">🍏</span><span class="text-2xl opacity-20">🍏</span><span class="text-2xl opacity-20">🍏</span><span class="text-2xl opacity-20">🍏</span>
    </div>
    <div class="flex justify-center gap-4 text-xs text-gray-400">
      <span>🍎 con residuos</span><span class="opacity-40">🍏 sin residuos</span>
    </div>
  </div>

  <div class="bg-orange-950/30 border border-orange-700 rounded-2xl p-4">
    <div class="flex items-center gap-4 mb-3">
      <div class="text-5xl font-black text-white">½ kg</div>
      <div>
        <div class="text-sm text-gray-400">de pesticidas por persona, cada año</div>
        <div class="text-xs text-gray-500 mt-1">FAO 2023</div>
      </div>
    </div>
    <div class="flex items-end justify-center gap-8 my-3">
      <div class="flex flex-col items-center">
        <div class="bg-orange-700/60 rounded-t-lg w-12" style="height: 32px"></div>
        <div class="text-xs text-gray-400 mt-1">1990 · ¼ kg</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="bg-orange-500 rounded-t-lg w-12" style="height: 64px"></div>
        <div class="text-xs text-white font-bold mt-1">2023 · ½ kg</div>
      </div>
    </div>
    <div class="text-center text-orange-400 text-sm font-semibold">Se duplicó en 30 años</div>
  </div>

</div>

<div v-click class="grid grid-cols-2 gap-6">
  <div class="bg-orange-950/20 border border-orange-800 rounded-2xl p-4 text-center">
    <div class="text-lg font-black text-orange-400 mb-1">Disrupción endocrina</div>
    <div class="text-gray-500 text-sm">Alteran hormonas reproductivas y metabólicas</div>
  </div>
  <div class="bg-orange-950/20 border border-orange-800 rounded-2xl p-4 text-center">
    <div class="text-lg font-black text-orange-400 mb-1">Neurotoxicidad</div>
    <div class="text-gray-500 text-sm">Daño neurológico crónico por organofosforados</div>
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
    ¿Cómo podríamos hacer que los biocompuestos naturales sean tan <span class="text-green-400">baratos y estables</span> como los aditivos sintéticos,
    para que la agroindustria pueda <span class="text-green-400">reducir el uso de insumos químicos</span>
    sin sacrificar rentabilidad ni rendimiento?
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

<div class="grid grid-cols-3 gap-6 mt-4 mb-4">

<div class="bg-green-950/40 border border-green-700 rounded-2xl p-5 text-center">
  <div class="text-green-300 text-xs font-semibold uppercase tracking-wider mb-2">TAM · Mercado total</div>
  <div class="text-5xl font-black text-white">USD 4,8B</div>
  <div class="text-sm text-gray-400 mt-2">Bioinsumos en Latinoamérica</div>
  <div class="text-xs text-gray-500 mt-1">Crece 17% al año · Mordor Intelligence</div>
</div>

<div class="bg-purple-950/40 border border-purple-700 rounded-2xl p-5 text-center">
  <div class="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">SAM · Al que podemos llegar</div>
  <div class="text-5xl font-black text-white">USD 1,2B</div>
  <div class="text-sm text-gray-400 mt-2">Cultivos de alto valor en LATAM</div>
  <div class="text-xs text-gray-500 mt-1">Aguacate, berries, cítricos, hortalizas</div>
</div>

<div class="bg-blue-950/40 border border-blue-700 rounded-2xl p-5 text-center">
  <div class="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">SOM · Meta real año 3</div>
  <div class="text-5xl font-black text-white">USD 5M</div>
  <div class="text-sm text-gray-400 mt-2">Argentina + Brasil</div>
  <div class="text-xs text-gray-500 mt-1">🇦🇷 Arándano + aguacate 🇧🇷 Primeros contratos</div>
</div>

</div>

<div v-click class="bg-green-950/30 border border-green-700 rounded-2xl p-4 text-center mb-3">
  <div class="text-gray-400 text-sm mb-1">Si capturamos el 2% del mercado total</div>
  <div class="text-5xl font-black text-green-400">USD 100M ARR</div>
  <div class="text-gray-400 text-sm mt-1">revenue anual recurrente</div>
</div>

<div class="grid grid-cols-2 gap-6 text-center">
  <div class="text-gray-400 text-sm">🇧🇷 156M ha con bioinsumos · Ley 15.700 · primera ley de bioinsumos del mundo</div>
  <div class="text-gray-400 text-sm">🇦🇷 Arándano orgánico · 95% se exporta · <strong class="text-red-400">si no cumple LMR, no entra a UE</strong></div>
</div>

<div class="footnote">CropLife LATAM · Mordor Intelligence · MAPA Brasil</div>

<!--
TAM: 4.8 mil millones, todo el mercado de bioinsumos en Latinoamérica. SAM: 1.2 mil millones, cultivos de exportación que deben cumplir LMR. SOM: 5 millones en año 3, enfocados en Argentina y Brasil. Si llegamos al 1% del total, son 48 millones de ARR.
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
  <div class="text-cyan-400 text-xs">Negocio & Estrategia</div>
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
      <circle cx="100" cy="100" r="85" fill="none" stroke="#15803d" stroke-width="30" stroke-dasharray="133.5 534" stroke-dashoffset="-213.6" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#22c55e" stroke-width="30" stroke-dasharray="80.1 534" stroke-dashoffset="-347.1" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#4ade80" stroke-width="30" stroke-dasharray="106.8 534" stroke-dashoffset="-427.2" />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <div class="text-2xl font-black text-white">18 meses</div>
        <div class="text-xs text-gray-400">runway</div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#166534]"></div><span class="text-gray-300">I+D · 40%</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#15803d]"></div><span class="text-gray-300">Campo · 25%</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#22c55e]"></div><span class="text-gray-300">Regulatorio · 15%</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-[#4ade80]"></div><span class="text-gray-300">Operaciones · 20%</span></div>
  </div>
</div>

<div class="flex flex-col justify-center">
  <div class="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Este capital desbloquea</div>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <div class="text-green-400 text-base mt-0.5">&#10003;</div>
      <div class="text-base text-white">Pilotos en cultivos estratégicos con la red de testeo de CREA</div>
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

  <div class="text-7xl font-black text-white mb-8">
    LI<span class="text-green-400">POCK</span>
  </div>

  <div class="text-3xl text-gray-200 leading-relaxed mb-10">
    "Que lo que comemos no nos enferme.<br>
    Que lo que producimos <strong class="text-green-400">no destruya el campo</strong>."
  </div>

  <div class="bg-white/5 border border-white/10 rounded-2xl px-10 py-5 inline-block">
    <div class="text-green-300 text-xl font-medium">Biotecnología que la agroindustria puede pagar.</div>
  </div>

  <div class="mt-10 text-2xl text-white font-bold italic">
    ¿Cómo podemos lograr que las plantas cuiden otras plantas?
  </div>

</div>

<!--
Cierre. La pregunta para el inversor es simple: ¿quieren estar del lado de la industria que llega tarde, o del lado de la tecnología que hace posible la transición?
-->
