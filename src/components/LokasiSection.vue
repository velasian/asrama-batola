<script setup>
import { onMounted, ref } from 'vue'
import { siteData } from '../constants/siteData'

const isMapOpen = ref(false)

onMounted(() => {
  isMapOpen.value = window.innerWidth >= 768
})
</script>

<template>
  <section id="lokasi" class="section lokasi-section">
    <h2 class="section-title fade-in-up">{{ siteData.lokasi.title }}</h2>

    <div class="location-card glass-card fade-in-up">
      <div>
        <span class="location-label">Alamat</span>
        <p>{{ siteData.kontak.alamat }}</p>
      </div>
      <div class="location-actions">
        <button type="button" class="map-toggle" @click="isMapOpen = !isMapOpen">
          {{ isMapOpen ? 'Sembunyikan Peta' : 'Lihat Peta' }}
        </button>
        <a :href="siteData.lokasi.mapLink" class="map-link" target="_blank" rel="noopener noreferrer">
          Buka Maps
        </a>
      </div>
    </div>

    <div v-if="isMapOpen" class="map-container glass-card">
      <iframe 
        :src="siteData.lokasi.mapSrc"
        title="Peta lokasi Asrama Putra Handil Bakti"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.location-card {
  display: grid;
  gap: 14px;
  padding: 18px;
  background: var(--white);
  text-align: left;
}

.location-label {
  display: block;
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.location-card p {
  color: var(--text-dark);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
}

.location-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.map-toggle,
.map-link {
  min-height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.map-toggle {
  background: var(--primary-color);
  border: 0;
  color: var(--white);
  cursor: pointer;
}

.map-link {
  background: var(--accent-color);
  color: var(--text-dark);
}

.map-container {
  width: 100%;
  height: 260px;
  margin-top: 14px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  padding: 0;
  border: 4px solid var(--white);
}

.map-container iframe {
  width: 100%;
  height: 100%;
  display: block;
}

@media (min-width: 768px) {
  .location-card {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 24px;
  }

  .location-actions {
    min-width: 260px;
  }

  .map-container {
    height: 450px;
    margin-top: 22px;
  }
}
</style>
