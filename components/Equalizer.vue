<script setup>
import { ref, computed } from 'vue'

const precio = ref(80)
const hectareas = ref(1000)
const concentracion = ref(0.5)

const dosis = computed(() => 128 * (concentracion.value / 100))
const costoHaApp = computed(() => dosis.value * precio.value)

// Weighted monthly apps across 3 crops: arándano 1.3 (avg 12-20/yr) + palta 1.2 + cítricos 0.9
const appsMonthTotal = computed(() => (1.3 + 1.2 + 0.9))
const litrosMes = computed(() => hectareas.value * appsMonthTotal.value * dosis.value)
const mrr = computed(() => litrosMes.value * precio.value)
const arr = computed(() => mrr.value * 12)

function fmt(n) {
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K'
  return '$' + n.toFixed(0)
}
</script>

<template>
  <div class="bg-gray-900 border border-gray-700 rounded-xl p-4">
    <div class="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Ecualizador interactivo — mueve los sliders</div>

    <div class="grid grid-cols-3 gap-6 mb-4">
      <!-- Slider: Precio/L -->
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-400 text-xs">Precio/litro</span>
          <span class="text-green-400 text-sm font-black">${{ precio }}/L</span>
        </div>
        <input type="range" v-model.number="precio" min="40" max="150" step="5"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style="accent-color:#22c55e; background:#374151;" />
        <div class="flex justify-between text-gray-600 text-xs mt-0.5">
          <span>$40</span><span>$150</span>
        </div>
      </div>

      <!-- Slider: Hectáreas -->
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-400 text-xs">Hectáreas totales</span>
          <span class="text-blue-400 text-sm font-black">{{ hectareas.toLocaleString() }} ha</span>
        </div>
        <input type="range" v-model.number="hectareas" min="200" max="3000" step="100"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style="accent-color:#3b82f6; background:#374151;" />
        <div class="flex justify-between text-gray-600 text-xs mt-0.5">
          <span>200</span><span>3,000</span>
        </div>
      </div>

      <!-- Slider: Concentración -->
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-400 text-xs">Concentración</span>
          <span class="text-purple-400 text-sm font-black">{{ concentracion.toFixed(1) }}%</span>
        </div>
        <input type="range" v-model.number="concentracion" min="0.2" max="1.0" step="0.1"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style="accent-color:#a855f7; background:#374151;" />
        <div class="flex justify-between text-gray-600 text-xs mt-0.5">
          <span>0.2%</span><span>1.0%</span>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div class="grid grid-cols-4 gap-3">
      <div class="bg-gray-800 rounded-lg p-3 text-center">
        <div class="text-gray-500 text-xs uppercase tracking-wider mb-1">Dosis/ha/app</div>
        <div class="text-white text-lg font-black">{{ dosis.toFixed(2) }} L</div>
      </div>
      <div class="bg-gray-800 rounded-lg p-3 text-center">
        <div class="text-gray-500 text-xs uppercase tracking-wider mb-1">Costo/ha/app</div>
        <div class="text-white text-lg font-black">{{ fmt(costoHaApp) }}</div>
      </div>
      <div class="bg-gray-800 rounded-lg p-3 text-center">
        <div class="text-gray-500 text-xs uppercase tracking-wider mb-1">MRR / cliente</div>
        <div class="text-green-400 text-lg font-black">{{ fmt(mrr) }}</div>
      </div>
      <div class="bg-green-950/40 border border-green-700 rounded-lg p-3 text-center">
        <div class="text-gray-500 text-xs uppercase tracking-wider mb-1">ARR / cliente</div>
        <div class="text-green-400 text-xl font-black">{{ fmt(arr) }}</div>
      </div>
    </div>

    <div class="text-gray-600 text-xs mt-2 text-center">Base: 3 cultivos (arándano 1–1.7x/mes · palta 1.2x · cítricos 0.9x) · mezcla {{ (128).toLocaleString() }} L/ha</div>
  </div>
</template>
