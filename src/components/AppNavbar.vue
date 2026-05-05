<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import IconGraphic from './IconGraphic.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (isDropdownOpen.value && !isMobileMenuOpen.value) {
    isDropdownOpen.value = false
  }
}

const handleResize = () => {
  if (window.innerWidth > 900) {
    closeMobileMenu()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isDropdownOpen.value = false
}

const toggleDropdown = (e) => {
  if (e) e.preventDefault()
  isDropdownOpen.value = !isDropdownOpen.value
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('nav-locked')
})

watch(isMobileMenuOpen, (isOpen) => {
  document.body.classList.toggle('nav-locked', isOpen)
})
</script>

<template>
  <header :class="['navbar', { 'navbar-scrolled': isScrolled, 'navbar-menu-open': isMobileMenuOpen }]">
    <div class="logo-box">
      <img
        src="../assets/images/logo_asrama.jpg"
        class="logo-img"
        alt="Logo Asrama"
        width="45"
        height="45"
        decoding="async"
        @error="$event.target.src='https://placehold.co/100x100/004aad/white?text=Asrama'"
      />
      <span class="logo-text">Asrama Putra Handil Bakti</span>
    </div>

    <button
      class="hamburger"
      type="button"
      @click="toggleMobileMenu"
      aria-label="Menu navigasi"
      aria-controls="main-navigation"
      :aria-expanded="isMobileMenuOpen"
    >
      <span :class="['bar', { 'bar-open-1': isMobileMenuOpen }]"></span>
      <span :class="['bar', { 'bar-open-2': isMobileMenuOpen }]"></span>
      <span :class="['bar', { 'bar-open-3': isMobileMenuOpen }]"></span>
    </button>

    <nav id="main-navigation" :class="['nav-links', { 'nav-open': isMobileMenuOpen }]" aria-label="Navigasi utama">
      <a href="#beranda" @click="closeMobileMenu">Beranda</a>
      <a href="#galeri" @click="closeMobileMenu">Galeri</a>
      
      <div :class="['dropdown', { 'dropdown-active': isDropdownOpen }]" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
        <button
          type="button"
          class="dropdown-toggle"
          @click="toggleDropdown"
          aria-controls="about-submenu"
          :aria-expanded="isDropdownOpen"
        >
          Tentang <span class="caret"><IconGraphic name="chevron-down" /></span>
        </button>
        <div id="about-submenu" class="dropdown-menu">
          <a href="#pengurus" @click="closeMobileMenu">Pengurus</a>
          <a href="#fasilitas" @click="closeMobileMenu">Fasilitas</a>
          <a href="#aturan" @click="closeMobileMenu">Aturan</a>
        </div>
      </div>
      
      <a href="#lokasi" @click="closeMobileMenu">Lokasi</a>
      <a href="#kontak" @click="closeMobileMenu">Kontak</a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: transparent;
  color: var(--white);
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: var(--transition);
}

.navbar-scrolled,
.navbar-menu-open {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: var(--shadow-md);
  color: var(--primary-color-dark);
}

.logo-box {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 10px;
}

.logo-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  flex: 0 0 auto;
}

.logo-text {
  font-size: clamp(14px, 4vw, 18px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.2px;
  max-width: 190px;
}

.navbar hr { display: none; }

.nav-links {
  position: absolute;
  top: calc(100% + 10px);
  left: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 0;
  padding: 0 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  color: var(--primary-color-dark);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(0, 51, 127, 0.08);
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  transition: max-height 0.35s ease, opacity 0.25s ease, visibility 0.25s ease, padding 0.25s ease;
}

.nav-open {
  max-height: min(72svh, 520px);
  padding: 12px 10px;
  overflow-y: auto;
  visibility: visible;
  opacity: 1;
}

.nav-links a,
.dropdown-toggle {
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  transition: var(--transition);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.nav-links a:hover,
.dropdown-toggle:hover {
  color: var(--accent-color);
  background: rgba(0, 74, 173, 0.06);
}

.nav-links a::after,
.dropdown-toggle::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 3px;
  bottom: -6px;
  left: 0;
  background: var(--accent-color);
  transition: var(--transition);
  border-radius: 2px;
}

.nav-links a:hover::after,
.dropdown-toggle:hover::after {
  width: 100%;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.dropdown-toggle {
  gap: 5px;
}

.caret {
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.dropdown:hover .caret,
.dropdown-active .caret {
  transform: rotate(180deg);
}

.dropdown-menu {
  display: none;
  width: 100%;
  padding: 4px 0 8px;
  background: rgba(0, 74, 173, 0.05);
  border-radius: 12px;
}

.dropdown-menu a {
  padding: 10px 16px;
  color: var(--text-dark);
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

.dropdown-menu a::after {
  display: none;
}

.dropdown-menu a:hover {
  background: var(--bg-light);
  color: var(--primary-color);
}

.hamburger {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 1001;
  width: 44px;
  height: 44px;
  color: inherit;
  border-radius: 999px;
  transition: var(--transition);
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.14);
}

.bar {
  width: 30px;
  height: 3px;
  background-color: currentColor;
  border-radius: 3px;
  transition: var(--transition);
}

.dropdown-active .dropdown-menu {
  display: flex;
  flex-direction: column;
}

.bar-open-1 { transform: translateY(9px) rotate(45deg); }
.bar-open-2 { opacity: 0; }
.bar-open-3 { transform: translateY(-9px) rotate(-45deg); }

@media (min-width: 901px) {
  .navbar {
    padding: 24px 5%;
  }

  .navbar-scrolled {
    padding: 15px 5%;
  }

  .logo-box {
    gap: 15px;
  }

  .logo-img {
    width: 45px;
    height: 45px;
  }

  .logo-text {
    max-width: none;
    font-size: 20px;
    letter-spacing: 0.5px;
  }

  .hamburger {
    display: none;
  }

  .nav-links {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0;
    max-height: none;
    overflow: visible;
    visibility: visible;
    opacity: 1;
    color: inherit;
    background: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    transition: none;
  }

  .nav-links a,
  .dropdown-toggle {
    width: auto;
    min-height: auto;
    padding: 0;
    border-radius: 0;
    font-size: 16px;
  }

  .nav-links a:hover,
  .dropdown-toggle:hover {
    background: transparent;
  }

  .dropdown {
    width: auto;
    flex-direction: row;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(15px);
    display: block;
    background: var(--white);
    min-width: 180px;
    width: auto;
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1002;
  }

  .dropdown:hover .dropdown-menu,
  .dropdown-active .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(5px);
  }

  .dropdown-menu a {
    display: block;
    min-height: auto;
    padding: 10px 20px;
    font-size: 14px;
    text-align: left;
  }
}
</style>
