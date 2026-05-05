<script setup>
import { siteData } from '../constants/siteData'
import { onMounted, onUnmounted, ref } from 'vue'
import IconGraphic from './IconGraphic.vue'

const isModalOpen = ref(false)
const selectedImage = ref('')

const openModal = (imgSrc) => {
  selectedImage.value = imgSrc
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent bg scrolling
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => { selectedImage.value = '' }, 300)
  document.body.style.overflow = ''
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="galeri" class="section gallery-section">
    <h2 class="section-title fade-in-up">{{ siteData.galeri.title }}</h2>
    <p class="gallery-hint fade-in-up">Geser untuk melihat foto lainnya.</p>

    <div class="gallery-container">
      <button
        v-for="(img, index) in siteData.galeri.items" 
        :key="index"
        type="button"
        class="gallery-item glass-card fade-in-up"
        :style="`transition-delay: ${index * 0.15}s`"
        :aria-label="`Buka gambar ${img.caption}`"
        @click="openModal(img.src)"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
          decoding="async"
          @error="$event.target.src='https://placehold.co/600x400/004aad/white?text=Gambar+Galeri'"
        />
        <div class="gallery-overlay">
          <span>{{ img.caption }}</span>
          <div class="zoom-icon">
            <IconGraphic name="search" />
          </div>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div 
        class="modal-backdrop" 
        :class="{ 'modal-open': isModalOpen }" 
        :aria-hidden="!isModalOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Pratinjau gambar galeri"
        @click="closeModal"
      >
        <div class="modal-content" @click.stop>
          <button class="close-btn" type="button" aria-label="Tutup pratinjau galeri" @click="closeModal">
            <IconGraphic name="x" />
          </button>
          <img
            v-if="selectedImage"
            :src="selectedImage"
            alt="Galeri fullscreen"
            @error="$event.target.src='https://placehold.co/1200x800/004aad/white?text=Gambar+Galeri'"
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-section {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 42px 0 26px;
  width: 100%;
  border-radius: 0;
  overflow: hidden;
}

.gallery-section .section-title {
  width: min(calc(100% - 28px), var(--container-width));
  margin-left: auto;
  margin-right: auto;
}

.gallery-hint {
  width: min(calc(100% - 28px), var(--container-width));
  margin: -14px auto 18px;
  color: var(--text-light);
  font-size: 13px;
  text-align: center;
}

.gallery-container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 14px 16px;
  scroll-padding-left: 14px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.gallery-container::-webkit-scrollbar {
  display: none;
}

.gallery-item {
  position: relative;
  flex: 0 0 min(78vw, 320px);
  aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: pointer;
  border-radius: var(--border-radius);
  scroll-snap-align: start;
  border: 0;
  padding: 0;
  text-align: left;
  font: inherit;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 51, 127, 0.9) 0%, rgba(0, 74, 173, 0.4) 50%, transparent 100%);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 1;
  transition: opacity 0.4s ease;
}

.gallery-overlay span {
  font-weight: 600;
  font-size: 16px;
  transform: translateY(0);
  transition: transform 0.4s ease;
}

.zoom-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  transform: translate(-50%, -50%) scale(0.5);
  font-size: 24px;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
}

.modal-backdrop.modal-open {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  position: relative;
  max-width: 92vw;
  max-height: 90vh;
  max-height: 90svh;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.modal-backdrop.modal-open .modal-content {
  transform: scale(1);
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  max-height: 90svh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.55);
  border: none;
  color: white;
  font-size: 22px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--accent-color);
}

@media (min-width: 640px) {
  .gallery-section {
    width: min(calc(100% - 64px), var(--container-width));
    border-radius: var(--border-radius-lg);
  }

  .gallery-section .section-title,
  .gallery-hint {
    width: auto;
  }

  .gallery-hint {
    display: none;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    overflow: visible;
    padding: 0;
    scroll-snap-type: none;
  }

  .gallery-item {
    flex: initial;
  }
}

@media (min-width: 900px) {
  .gallery-section {
    padding: 64px 32px;
  }

  .gallery-container {
    gap: 24px;
  }
}

@media (hover: hover) {
  .gallery-overlay {
    opacity: 0;
  }

  .gallery-overlay span {
    font-size: 18px;
    transform: translateY(20px);
  }

  .zoom-icon {
    opacity: 0;
  }

  .gallery-item:hover .gallery-overlay,
  .gallery-item:hover .zoom-icon {
    opacity: 1;
  }

  .gallery-item:hover .gallery-overlay span {
    transform: translateY(0);
  }

  .gallery-item:hover .zoom-icon {
    transform: translate(-50%, -50%) scale(1);
  }

  .close-btn {
    top: -48px;
    right: 0;
    background: transparent;
    font-size: 40px;
  }
}
</style>
