<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import FasilitasSection from './components/FasilitasSection.vue'
import GaleriSection from './components/GaleriSection.vue'
import PengurusSection from './components/PengurusSection.vue'
import AturanSection from './components/AturanSection.vue'
import LokasiSection from './components/LokasiSection.vue'
import KontakSection from './components/KontakSection.vue'
import AppFooter from './components/AppFooter.vue'
import IconGraphic from './components/IconGraphic.vue'
import { siteData } from './constants/siteData'

let observer = null
const quickModal = ref(null)
const primaryPhone = siteData.kontak.telepon[0]
const primaryPhoneHref = `tel:${primaryPhone.replace(/[^\d+]/g, '')}`
const registrationLink = siteData.kontak.daftarLink
const whatsappLink = siteData.kontak.whatsappLink

const openQuickModal = (modalName) => {
  quickModal.value = modalName
}

const closeQuickModal = () => {
  quickModal.value = null
}

const handleQuickModalKeydown = (event) => {
  if (event.key === 'Escape') {
    closeQuickModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleQuickModalKeydown)
  const animatedElements = document.querySelectorAll('.fade-in-up')
  const revealAnimatedElements = () => {
    animatedElements.forEach(el => el.classList.add('visible'))
  }

  const shouldSkipScrollAnimation = window.matchMedia(
    '(max-width: 767px), (prefers-reduced-motion: reduce)'
  ).matches

  if (shouldSkipScrollAnimation || !('IntersectionObserver' in window)) {
    revealAnimatedElements()
    return
  }

  try {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -24px 0px'
    })

    animatedElements.forEach(el => {
      observer.observe(el)
    })
  } catch {
    revealAnimatedElements()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  document.removeEventListener('keydown', handleQuickModalKeydown)
  document.body.classList.remove('quick-modal-locked')
})

watch(quickModal, (modalName) => {
  document.body.classList.toggle('quick-modal-locked', Boolean(modalName))
})
</script>

<template>
  <div class="app-container">
    <AppNavbar />
    
    <main>
      <HeroSection />
      <FasilitasSection />
      <GaleriSection />
      <PengurusSection />
      <AturanSection />
      <LokasiSection />
      <KontakSection />
    </main>

    <AppFooter />

    <div class="mobile-cta-bar" aria-label="Aksi cepat mobile">
      <button type="button" @click="openQuickModal('phone')">
        Telepon
      </button>
      <a :href="registrationLink" class="mobile-cta-primary" target="_blank" rel="noopener noreferrer">
        Daftar
      </a>
      <button type="button" @click="openQuickModal('map')">
        Maps
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="quickModal"
        class="quick-modal-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="quickModal === 'phone' ? 'Pilihan kontak cepat' : 'Peta lokasi asrama'"
        @click="closeQuickModal"
      >
        <div :class="['quick-modal-card', { 'quick-modal-map-card': quickModal === 'map' }]" @click.stop>
          <button class="quick-modal-close" type="button" aria-label="Tutup modal" @click="closeQuickModal">
            <IconGraphic name="x" />
          </button>

          <template v-if="quickModal === 'phone'">
            <div class="quick-modal-icon">
              <IconGraphic name="phone" />
            </div>
            <h2>Hubungi Asrama</h2>
            <p>Pilih telepon langsung atau chat WhatsApp.</p>
            <div class="quick-contact-actions">
              <a :href="primaryPhoneHref">
                <IconGraphic name="phone" />
                <span>{{ primaryPhone }}</span>
              </a>
              <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="quick-whatsapp">
                <IconGraphic name="whatsapp" />
                <span>Chat Sekarang</span>
              </a>
            </div>
          </template>

          <template v-else>
            <div class="quick-modal-map-header">
              <div>
                <span>Lokasi</span>
                <h2>Asrama Putra Handil Bakti</h2>
              </div>
              <a :href="siteData.lokasi.mapLink" target="_blank" rel="noopener noreferrer">
                Buka Maps
              </a>
            </div>
            <iframe
              :src="siteData.lokasi.mapSrc"
              title="Peta lokasi Asrama Putra Handil Bakti"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </template>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.mobile-cta-bar {
  position: fixed;
  left: 14px;
  right: 14px;
  bottom: 12px;
  z-index: 950;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(0, 51, 127, 0.12);
  border-radius: 999px;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.mobile-cta-bar a,
.mobile-cta-bar button {
  min-height: 42px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.mobile-cta-bar .mobile-cta-primary {
  background: var(--accent-color);
  color: var(--text-dark) !important;
  box-shadow: 0 8px 18px rgba(255, 204, 0, 0.32);
}

.quick-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: rgba(7, 15, 30, 0.58);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.quick-modal-card {
  position: relative;
  width: min(100%, 420px);
  padding: 24px;
  background: var(--white);
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
}

.quick-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  color: var(--primary-color-dark);
  cursor: pointer;
}

.quick-modal-close svg {
  width: 18px;
  height: 18px;
}

.quick-modal-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  background: var(--bg-soft);
  color: var(--primary-color);
  font-size: 26px;
}

.quick-modal-card h2 {
  padding-right: 42px;
  color: var(--primary-color-dark);
  font-size: 22px;
  line-height: 1.25;
  margin-bottom: 8px;
}

.quick-modal-card p {
  color: var(--text-light);
  font-size: 14px;
  margin-bottom: 18px;
}

.quick-contact-actions {
  display: grid;
  gap: 10px;
}

.quick-contact-actions a {
  min-height: 48px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 16px;
  color: var(--primary-color-dark);
  background: var(--bg-light);
  text-decoration: none;
  font-weight: 700;
}

.quick-contact-actions svg {
  width: 19px;
  height: 19px;
}

.quick-contact-actions .quick-whatsapp {
  background: #25d366;
  color: #ffffff;
}

.quick-modal-map-card {
  width: min(100%, 560px);
  height: min(78vh, 560px);
  height: min(78svh, 560px);
  padding: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 12px;
}

.quick-modal-map-card iframe {
  width: 100%;
  height: 100%;
  border-radius: 18px;
}

.quick-modal-map-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-right: 42px;
}

.quick-modal-map-header span {
  display: block;
  color: var(--primary-color);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quick-modal-map-header h2 {
  padding-right: 0;
  margin-bottom: 0;
  font-size: 17px;
}

.quick-modal-map-header a {
  flex: 0 0 auto;
  border-radius: 999px;
  padding: 9px 13px;
  background: var(--accent-color);
  color: var(--text-dark);
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}

@media (min-width: 768px) {
  .mobile-cta-bar {
    display: none;
  }

  .quick-modal-backdrop {
    align-items: center;
  }
}
</style>
