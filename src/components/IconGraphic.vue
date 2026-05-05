<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <svg class="icon-graphic" viewBox="0 0 24 24" aria-hidden="true">
    <g v-if="name === 'bed'">
      <path d="M4 11V5" />
      <path d="M20 11V8a3 3 0 0 0-3-3H9v6" />
      <path d="M4 17v-6h16v6" />
      <path d="M4 17v2" />
      <path d="M20 17v2" />
      <path d="M8 11V8h4v3" />
    </g>

    <g v-else-if="name === 'wifi'">
      <path d="M4.5 9.5a11 11 0 0 1 15 0" />
      <path d="M7.8 12.8a6.4 6.4 0 0 1 8.4 0" />
      <path d="M10.8 15.9a2 2 0 0 1 2.4 0" />
      <path d="M12 19h.01" />
    </g>

    <g v-else-if="name === 'fridge'">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M7 10h10" />
      <path d="M10 7h.01" />
      <path d="M10 14h.01" />
    </g>

    <g v-else-if="name === 'book'">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
    </g>

    <g v-else-if="name === 'map-pin'">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </g>

    <g v-else-if="name === 'phone'">
      <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3A19.2 19.2 0 0 1 4.5 12 19.5 19.5 0 0 1 1.5 3.7 2 2 0 0 1 3.5 1.5h3A2 2 0 0 1 8.5 3.2l.5 3a2 2 0 0 1-.6 1.8L7.1 9.3a16 16 0 0 0 7.6 7.6l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 21 16.5Z" />
    </g>

    <g v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </g>

    <g v-else-if="name === 'whatsapp'">
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.2l1.1-4A8.4 8.4 0 1 1 20.5 11.8Z" />
      <path d="M9.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.1.1-.2.3-.1.5.5 1.1 1.4 2 2.5 2.5.2.1.4 0 .5-.1l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.2.5-1.9.5-2.9 0-7.1-3.9-7.1-7 0-.7.2-1.4.5-1.9Z" />
    </g>

    <g v-else-if="name === 'map'">
      <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </g>

    <g v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </g>

    <g v-else-if="name === 'check'">
      <path d="m5 12 4 4L19 6" />
    </g>

    <g v-else-if="name === 'chevron-down'">
      <path d="m6 9 6 6 6-6" />
    </g>

    <g v-else-if="name === 'x'">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </g>

    <g v-else>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </g>
  </svg>
</template>

<style scoped>
.icon-graphic {
  width: 1em;
  height: 1em;
  flex: 0 0 1em;
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  vertical-align: middle;
}
</style>
