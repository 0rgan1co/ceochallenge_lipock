<script setup>
import { ref } from 'vue'

const hovered = ref(null)

const data = [
  { year: '2026', arr: '$2.9M', clients: 2, hectares: '3,000', liters: '36,800 L', apps: '~15,300', height: 6, opacity: 0.5, investment: null },
  { year: '2027', arr: '$12M', clients: 8, hectares: '12,000', liters: '150,000 L', apps: '~61,200', height: 24, opacity: 0.65, investment: { label: 'Planta Argentina', amount: '$2M', flag: '🇦🇷' } },
  { year: '2028', arr: '$30M', clients: 20, hectares: '30,000', liters: '375,000 L', apps: '~153,000', height: 60, opacity: 0.75, investment: { label: 'Planta Brasil', amount: '$5M', flag: '🇧🇷' } },
  { year: '2029', arr: '$60M', clients: 40, hectares: '60,000', liters: '750,000 L', apps: '~306,000', height: 120, opacity: 0.88, investment: { label: 'Planta Chile/Perú', amount: '$5M', flag: '🇨🇱' } },
  { year: '2030', arr: '$100M', clients: 67, hectares: '100,000', liters: '1.25M L', apps: '~510,000', height: 196, opacity: 1, investment: null },
]
</script>

<template>
  <div style="display:grid; grid-template-columns:32px repeat(5,1fr); align-items:end; gap:12px; height:220px; border-left:1px solid #374151; border-bottom:1px solid #374151; padding-left:4px; padding-bottom:4px; position:relative;">
    <!-- Y axis -->
    <div style="position:absolute; left:-40px; top:0; bottom:0; display:flex; flex-direction:column; justify-content:space-between;">
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">100M</span>
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">80M</span>
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">60M</span>
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">40M</span>
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">20M</span>
      <span class="text-gray-500" style="font-size:10px; font-family:monospace;">0</span>
    </div>
    <!-- Spacer -->
    <div></div>
    <!-- Bars -->
    <div
      v-for="(d, i) in data"
      :key="d.year"
      style="display:flex; flex-direction:column; align-items:center; gap:3px; position:relative;"
      @mouseenter="hovered = i"
      @mouseleave="hovered = null"
    >
      <!-- Investment marker above the bar -->
      <div v-if="d.investment" style="display:flex; flex-direction:column; align-items:center; gap:1px; margin-bottom:2px;">
        <span style="font-size:9px; color:#f87171; font-weight:bold;">{{ d.investment.flag }} {{ d.investment.amount }}</span>
        <span style="font-size:8px; color:#fca5a5;">{{ d.investment.label }}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" style="margin-top:1px;">
          <path d="M6 8 L2 0 L10 0 Z" fill="#ef4444" opacity="0.7"/>
        </svg>
      </div>

      <span class="text-green-300" style="font-size:11px; font-weight:bold;">{{ d.arr }}</span>
      <div
        style="width:100%; border-radius:3px 3px 0 0; cursor:pointer; transition: all 0.2s;"
        :style="{
          height: d.height + 'px',
          background: hovered === i ? '#4ade80' : '#22c55e',
          opacity: hovered === i ? 1 : d.opacity,
          minHeight: '6px',
          transform: hovered === i ? 'scaleX(1.08)' : 'scaleX(1)',
        }"
      ></div>
      <span class="text-gray-400" style="font-size:11px;">{{ d.year }}</span>

      <!-- Tooltip -->
      <div
        v-if="hovered === i"
        style="position:absolute; bottom:100%; left:50%; transform:translateX(-50%); z-index:50; pointer-events:none; min-width:170px;"
        :style="{ marginBottom: d.investment ? '52px' : '8px' }"
        class="bg-gray-800 border border-green-600 rounded-lg p-2 shadow-xl"
      >
        <div class="text-green-400 text-sm font-black text-center mb-1">{{ d.year }} · {{ d.arr }}</div>
        <div class="space-y-0.5 text-xs">
          <div class="flex justify-between gap-3">
            <span class="text-gray-400">Clientes</span>
            <span class="text-white font-semibold">{{ d.clients }}</span>
          </div>
          <div class="flex justify-between gap-3">
            <span class="text-gray-400">Hectáreas</span>
            <span class="text-white font-semibold">{{ d.hectares }}</span>
          </div>
          <div class="flex justify-between gap-3">
            <span class="text-gray-400">Litros/año</span>
            <span class="text-white font-semibold">{{ d.liters }}</span>
          </div>
          <div class="flex justify-between gap-3">
            <span class="text-gray-400">Aplicaciones</span>
            <span class="text-white font-semibold">{{ d.apps }}</span>
          </div>
        </div>
        <div v-if="d.investment" class="border-t border-red-800 mt-1.5 pt-1.5">
          <div class="flex justify-between gap-3">
            <span class="text-red-400 font-semibold">{{ d.investment.flag }} CAPEX</span>
            <span class="text-red-300 font-bold">{{ d.investment.amount }}</span>
          </div>
          <div class="text-red-400" style="font-size:10px;">{{ d.investment.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
