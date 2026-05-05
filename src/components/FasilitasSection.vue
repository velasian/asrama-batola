<script setup>
import { siteData } from '../constants/siteData'
import IconGraphic from './IconGraphic.vue'
</script>

<template>
  <section id="fasilitas" class="section">
    <h2 class="section-title fade-in-up">{{ siteData.fasilitas.title }}</h2>

    <div class="card-container">
      <div 
        v-for="(item, index) in siteData.fasilitas.items" 
        :key="index"
        class="card glass-card fade-in-up"
        :style="`transition-delay: ${index * 0.15}s`"
      >
        <div class="icon">
          <IconGraphic :name="item.icon" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 22px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  min-height: 142px;
  padding: 14px 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  color: var(--primary-color);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: var(--transition);
}

.card:hover .icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.card h3 {
  font-size: 14px;
  line-height: 1.25;
  color: var(--primary-color-dark);
  font-weight: 700;
}

.card p {
  color: var(--text-light);
  display: -webkit-box;
  font-size: 12px;
  line-height: 1.45;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (min-width: 960px) {
  .card-container {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    margin-top: 48px;
  }

  .card {
    display: block;
    min-height: 0;
    padding: 36px 24px;
    text-align: center;
  }

  .icon {
    font-size: 46px;
    width: 86px;
    height: 86px;
    margin-bottom: 20px;
  }

  .card h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .card p {
    display: block;
    font-size: 15px;
    overflow: visible;
  }
}
</style>
