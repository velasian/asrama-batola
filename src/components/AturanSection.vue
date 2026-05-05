<script setup>
import { siteData } from '../constants/siteData'
import IconGraphic from './IconGraphic.vue'
</script>

<template>
  <section id="aturan" class="section aturan-section">
    <div class="aturan-container glass-card fade-in-up">
      <h2 class="section-title text-left">{{ siteData.aturan.title }}</h2>
      
      <ul class="rules-list">
        <li 
          v-for="(rule, index) in siteData.aturan.items" 
          :key="index"
          class="fade-in-up"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <span class="check-icon">
            <IconGraphic name="check" />
          </span>
          <span class="rule-text">{{ rule }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.aturan-section {
  display: flex;
  justify-content: center;
}

.aturan-container {
  max-width: 700px;
  width: 100%;
  padding: 22px 16px;
  background: var(--white);
  border-top: 5px solid var(--primary-color);
}

.text-left {
  text-align: left;
  margin-bottom: 30px;
}

.text-left::after {
  left: 0;
  transform: none;
}

.rules-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rules-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 11px 12px;
  background: var(--bg-light);
  border-radius: 8px;
  transition: var(--transition);
  border-left: 3px solid transparent;
}

.rules-list li:hover {
  background: white;
  border-left-color: var(--accent-color);
  box-shadow: var(--shadow-sm);
  transform: translateX(5px);
}

.check-icon {
  color: var(--white);
  background: var(--primary-color);
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  margin-top: 2px;
}

.rule-text {
  font-size: 14px;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .aturan-container {
    padding: 50px;
  }

  .rules-list li {
    gap: 15px;
    padding: 15px 20px;
  }

  .rule-text {
    font-size: 16px;
  }
}
</style>
