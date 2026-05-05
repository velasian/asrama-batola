<script setup>
import { siteData } from '../constants/siteData'
</script>

<template>
  <section id="pengurus" class="section pengurus-section">
    <h2 class="section-title fade-in-up">{{ siteData.pengurus.title }}</h2>

    <div class="pengurus-container fade-in-up">
      <div class="inti-grid">
        <div 
          v-for="(person, index) in siteData.pengurus.inti" 
          :key="index"
          class="person-card glass-card"
        >
          <div class="avatar-container">
            <img
              v-if="person.foto"
              :src="person.foto"
              :alt="person.nama"
              class="avatar-img"
              loading="lazy"
              decoding="async"
            />
            <div v-else class="avatar-placeholder">{{ person.nama.charAt(0) }}</div>
          </div>
          <h4>{{ person.nama }}</h4>
          <span class="jabatan focus">{{ person.jabatan }}</span>
        </div>
      </div>

      <h3 class="divisi-title fade-in-up">Koordinator & Divisi</h3>
      <div class="divisi-grid">
        <details
          v-for="(divisi, index) in siteData.pengurus.divisi" 
          :key="index"
          name="pengurus-divisi"
          class="divisi-card glass-card fade-in-up"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <summary class="divisi-header">
            <span class="divisi-name">Bidang {{ divisi.nama }}</span>
            <span class="divisi-caret" aria-hidden="true">+</span>
          </summary>
          <div :id="`divisi-body-${index}`" class="divisi-body">
            <div class="co-person">
              <span class="role">CO (Koordinator)</span>
              <strong>{{ divisi.co }}</strong>
            </div>
            <div class="anggota-list" v-if="divisi.anggota.length > 0">
              <span class="role">Anggota:</span>
              <ul>
                <li v-for="(anggota, idx) in divisi.anggota" :key="idx">{{ anggota }}</li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pengurus-section {
  text-align: center;
}

.inti-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 30px;
}

.person-card {
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-top: 4px solid var(--accent-color);
}

.avatar-container {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: var(--shadow-sm);
  border: 3px solid var(--white);
  overflow: hidden;
  background: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
}

.person-card h4 {
  font-size: 13px;
  color: var(--text-dark);
  margin-bottom: 5px;
  line-height: 1.35;
}

.jabatan {
  font-size: 10.5px;
  color: var(--white);
  background: var(--primary-color-dark);
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.jabatan.focus {
  background: var(--primary-color);
}

.divisi-title {
  font-size: clamp(1.2rem, 5vw, 1.65rem);
  color: var(--primary-color-dark);
  margin-bottom: 14px;
  text-align: center;
}

.divisi-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.divisi-card {
  background: var(--white);
  overflow: hidden;
  text-align: left;
  display: block;
}

.divisi-header {
  background: var(--primary-color);
  color: white;
  width: 100%;
  min-height: 48px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  text-align: left;
  cursor: pointer;
  list-style: none;
  user-select: none;
}

.divisi-header::-webkit-details-marker {
  display: none;
}

.divisi-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1;
}

.divisi-caret {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 24px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 18px;
  line-height: 1;
  transition: transform 0.2s ease;
}

.divisi-card[open] .divisi-caret {
  transform: rotate(45deg);
}

.divisi-body {
  padding: 14px 16px 16px;
  flex-grow: 1;
}

.role {
  font-size: 12px;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 4px;
}

.co-person {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(0,0,0,0.1);
}

.co-person strong {
  font-size: 15px;
  color: var(--primary-color-dark);
}

.anggota-list ul {
  list-style: none;
  margin-top: 5px;
}

.anggota-list li {
  font-size: 14px;
  color: var(--text-dark);
  padding: 4px 0 4px 20px;
  position: relative;
}

.anggota-list li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 5px;
  top: 4px;
  font-size: 18px;
}

@media (min-width: 640px) {
  .inti-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }
}

@media (min-width: 768px) {
  .inti-grid {
    margin-bottom: 60px;
  }

  .person-card {
    padding: 30px 20px;
  }

  .avatar-container {
    width: 90px;
    height: 90px;
  }

  .person-card h4 {
    font-size: 16px;
  }

  .jabatan {
    font-size: 13px;
  }

  .divisi-title {
    margin-bottom: 24px;
  }

  .divisi-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }

  .divisi-header {
    min-height: auto;
    padding: 15px 20px;
  }

  .divisi-name {
    font-size: 16px;
  }

  .divisi-body {
    padding: 20px;
  }
}
</style>
