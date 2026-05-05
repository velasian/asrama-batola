<script setup>
import { siteData } from '../constants/siteData'
import IconGraphic from './IconGraphic.vue'

const toPhoneHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`
const primaryPhone = siteData.kontak.telepon[0]
</script>

<template>
  <section id="kontak" class="section kontak-section">
    <h2 class="section-title fade-in-up">{{ siteData.kontak.title }}</h2>

    <div class="mobile-contact-panel glass-card fade-in-up">
      <div class="mobile-contact-copy">
        <span>Kontak Cepat</span>
        <h3>Butuh informasi pendaftaran?</h3>
        <p>Hubungi pengurus lewat WhatsApp atau telepon langsung.</p>
      </div>

      <div class="mobile-contact-actions">
        <a :href="siteData.kontak.daftarLink" target="_blank" rel="noopener noreferrer">
          <IconGraphic name="whatsapp" />
          <span>Daftar via WA</span>
        </a>
        <a :href="toPhoneHref(primaryPhone)">
          <IconGraphic name="phone" />
          <span>Telepon</span>
        </a>
      </div>

      <a class="mobile-contact-email" :href="`mailto:${siteData.kontak.email}`">
        <IconGraphic name="mail" />
        <span>{{ siteData.kontak.email }}</span>
      </a>
    </div>

    <div class="contact-wrapper">
      <div class="contact-card glass-card fade-in-up">
        <div class="contact-icon">
          <IconGraphic name="map-pin" />
        </div>
        <div class="contact-info">
          <h3>Alamat</h3>
          <p>{{ siteData.kontak.alamat }}</p>
        </div>
      </div>

      <div class="contact-card glass-card fade-in-up" style="transition-delay: 0.15s">
        <div class="contact-icon">
          <IconGraphic name="phone" />
        </div>
        <div class="contact-info">
          <h3>Telepon</h3>
          <a v-for="telp in siteData.kontak.telepon" :key="telp" :href="toPhoneHref(telp)">{{ telp }}</a>
        </div>
      </div>

      <div class="contact-card glass-card fade-in-up" style="transition-delay: 0.3s">
        <div class="contact-icon">
          <IconGraphic name="mail" />
        </div>
        <div class="contact-info">
          <h3>Email</h3>
          <a :href="`mailto:${siteData.kontak.email}`">{{ siteData.kontak.email }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kontak-section {
  text-align: center;
}

.contact-wrapper {
  display: none;
  grid-template-columns: 1fr;
  gap: 16px;
}

.mobile-contact-panel {
  display: grid;
  gap: 14px;
  padding: 20px;
  background: var(--white);
  text-align: left;
}

.mobile-contact-copy span {
  display: block;
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.mobile-contact-copy h3 {
  color: var(--primary-color-dark);
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 4px;
}

.mobile-contact-copy p {
  color: var(--text-light);
  font-size: 13px;
  line-height: 1.45;
}

.mobile-contact-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mobile-contact-actions a,
.mobile-contact-email {
  min-height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  color: var(--primary-color-dark);
  background: var(--bg-light);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.mobile-contact-actions a:first-child {
  background: #25d366;
  color: #ffffff;
}

.mobile-contact-actions svg,
.mobile-contact-email svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}

.mobile-contact-email {
  justify-content: flex-start;
  overflow-wrap: anywhere;
}

.contact-card {
  background: var(--white);
  padding: 22px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  font-size: 28px;
  background: var(--bg-light);
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--primary-color);
}

.contact-info h3 {
  font-size: 18px;
  color: var(--primary-color-dark);
  margin-bottom: 6px;
}

.contact-info p, .contact-info a {
  display: block;
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 5px;
  text-decoration: none;
  font-weight: 500;
  overflow-wrap: anywhere;
}

.contact-info a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

@media (min-width: 768px) {
  .mobile-contact-panel {
    display: none;
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .contact-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 38px 22px;
  }

  .contact-icon {
    width: 76px;
    height: 76px;
    flex-basis: 76px;
    font-size: 36px;
  }

  .contact-info h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
}
</style>
