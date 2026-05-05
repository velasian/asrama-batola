<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { siteData } from '../constants/siteData'
import IconGraphic from './IconGraphic.vue'

const currentSlide = ref(0)
const totalSlides = siteData.hero.images.length
let slideInterval = null
const isRecruitmentModalOpen = ref(false)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const closeRecruitmentModal = () => {
  isRecruitmentModalOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeRecruitmentModal()
  }
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) {
    slideInterval = setInterval(nextSlide, 5000)
  }
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('nav-locked')
})

watch(isRecruitmentModalOpen, (isOpen) => {
  document.body.classList.toggle('nav-locked', isOpen)
})
</script>

<template>
  <section id="beranda" class="hero-section">
    <!-- Slider Backgrounds -->
    <div class="slider-container">
      <div 
        v-for="(img, index) in siteData.hero.images" 
        :key="index"
        :class="['slide', { active: currentSlide === index }]"
        :aria-hidden="currentSlide !== index"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
      <div class="overlay"></div>
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
      <h1 class="fade-in-up">{{ siteData.hero.title }}</h1>
      <p class="fade-in-up delay-1">{{ siteData.hero.subtitle }}</p>
      
      <!-- Changed from a link to a button triggering the modal -->
      <button 
        class="cta-btn fade-in-up delay-2" 
        @click="isRecruitmentModalOpen = true"
      >
        {{ siteData.hero.ctaText }}
      </button>

      <div class="slider-dots" aria-label="Navigasi slide hero">
        <button
          v-for="(_, index) in siteData.hero.images"
          :key="index"
          type="button"
          :class="['slider-dot', { active: currentSlide === index }]"
          :aria-label="`Tampilkan slide ${index + 1}`"
          :aria-current="currentSlide === index ? 'true' : 'false'"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <Teleport to="body">
      <div 
        v-if="isRecruitmentModalOpen" 
        class="recruitment-modal" 
        role="dialog"
        aria-modal="true"
        aria-label="Poster pendaftaran asrama"
        @click="closeRecruitmentModal"
      >
        <div class="modal-content" @click.stop>
          <button class="close-btn" type="button" aria-label="Tutup poster pendaftaran" @click="closeRecruitmentModal">
            <IconGraphic name="x" />
          </button>
          <img :src="siteData.hero.rekrutmenImage" alt="Poster open recruitment Asrama Putra Handil Bakti" class="recruitment-img" />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 78svh;
  overflow: hidden;
  background: var(--primary-color-dark);
}

.slider-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider-container .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 8s alternate linear;
  transform: scale(1.05);
  background-size: cover;
  background-position: center;
}

.slider-container .slide.active {
  opacity: 1;
  transform: scale(1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 74, 173, 0.4), rgba(0, 0, 0, 0.7));
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  width: min(calc(100% - 32px), 820px);
  margin: 0 auto;
  padding: 92px 0 52px;
  z-index: 10;
}

.hero-content h1 {
  font-size: clamp(1.85rem, 8.4vw, 3.8rem);
  line-height: 1.12;
  margin-bottom: 14px;
  font-weight: 800;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.hero-content p {
  font-size: clamp(1rem, 4vw, 1.25rem);
  max-width: 620px;
  margin-bottom: 22px;
  font-weight: 400;
  opacity: 0.9;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.cta-btn {
  background: var(--accent-color);
  color: var(--text-dark);
  min-height: 50px;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(255, 204, 0, 0.28);
}

.cta-btn:hover {
  background: var(--accent-color-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.fade-in-up.delay-1 { transition-delay: 0.2s; }
.fade-in-up.delay-2 { transition-delay: 0.4s; }

.slider-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.slider-dot {
  width: 10px;
  height: 10px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: var(--transition);
}

.slider-dot.active {
  width: 28px;
  background: var(--accent-color);
  border-color: var(--accent-color);
}

.recruitment-modal {
  position: fixed;
  inset: 0;
  min-height: 100svh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
  padding: 16px;
}

.modal-content {
  position: relative;
  width: min(92vw, 720px);
  max-height: 90svh;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.recruitment-img {
  display: block;
  width: 100%;
  max-height: 90svh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 22px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
  line-height: 1;
}

.close-btn:hover {
  background: var(--accent-color);
  transform: scale(1.1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (min-width: 768px) {
  .hero-section {
    min-height: 100svh;
  }

  .hero-content {
    width: min(90%, 820px);
    padding: 118px 0 64px;
  }

  .hero-content h1 {
    margin-bottom: 20px;
  }

  .hero-content p {
    margin-bottom: 30px;
  }

  .cta-btn {
    font-size: 18px;
    min-height: 50px;
    padding: 14px 30px;
  }
}
</style>
