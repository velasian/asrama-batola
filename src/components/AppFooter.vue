<script setup>
const handleImageError = (event) => {
  const target = event.target
  if (target) {
    target.src = 'https://placehold.co/100x100/004aad/white?text=Asrama'
  }
}
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img
          src="../assets/images/logo_asrama.jpg"
          alt="Logo Asrama Putra"
          class="footer-img"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
          @error="handleImageError"
        />
        <h3>Asrama Putra Handil Bakti</h3>
        <p>Tempat tinggal yang aman, nyaman, dan mendukung aktivitas belajar Anda.</p>
      </div>

      <div class="footer-links">
        <h4>Link Cepat</h4>
        <ul>
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#fasilitas">Fasilitas</a></li>
          <li><a href="#galeri">Galeri</a></li>
          <li><a href="#pengurus">Pengurus</a></li>
          <li><a href="#aturan">Aturan</a></li>
          <li><a href="#lokasi">Lokasi</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h4>Ikuti Kami</h4>
        <div class="social-links">
          <a href="https://www.instagram.com/asrama_putrabatola/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram Asrama Putra">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span class="social-text">
              <strong>Putra</strong>
              <small>@asrama_putrabatola</small>
            </span>
          </a>
          <a href="https://www.instagram.com/asrama_putribatola/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram Asrama Putri">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span class="social-text">
              <strong>Putri</strong>
              <small>@asrama_putribatola</small>
            </span>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Asrama Putra Handil Bakti | Website Resmi</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, var(--primary-color-dark) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: 34px 16px 0;
  margin-top: 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  text-align: center;
}

.footer-logo {
  max-width: 350px;
  margin: 0 auto;
}

.footer-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid white;
}

.footer-logo h3 {
  font-size: 18px;
  margin-bottom: 6px;
  font-weight: 700;
}

.footer-logo p {
  color: rgba(255,255,255,0.8);
  font-size: 13px;
  line-height: 1.45;
}

.footer-links h4, .footer-social h4 {
  font-size: 15px;
  margin-bottom: 16px;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.footer-links h4::after, .footer-social h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 26px;
  height: 2px;
  background: var(--accent-color);
}

.footer-links ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.footer-links li {
  margin-bottom: 0;
}

.footer-links a {
  display: block;
  color: rgba(255,255,255,0.86);
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--accent-color);
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 8px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  transition: var(--transition);
  padding: 8px 9px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  width: 100%;
  justify-content: center;
}

.social-link svg {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  color: var(--white);
  transition: var(--transition);
}

.social-link span {
  min-width: 0;
}

.social-text {
  display: grid;
  gap: 1px;
  text-align: left;
  line-height: 1.15;
}

.social-text strong,
.social-text small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.social-text strong {
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
}

.social-text small {
  color: rgba(255,255,255,0.72);
  font-size: 10px;
  font-weight: 500;
}

.social-link:hover {
  background: rgba(255,255,255,0.1);
  color: var(--white);
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.3);
}

.social-link:hover svg {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  padding: 16px 0 22px;
  font-size: 12px;
  color: rgba(255,255,255,0.7);
}

@media (min-width: 768px) {
  .app-footer {
    padding: 60px 5% 0;
    margin-top: 50px;
  }

  .footer-content {
    grid-template-columns: 2fr 1fr 1.2fr;
    text-align: left;
    gap: 40px;
  }
  
  .footer-logo {
    margin: 0;
  }

  .footer-img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  .footer-logo h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .footer-logo p {
    font-size: 15px;
    line-height: 1.6;
  }

  .footer-links h4, .footer-social h4 {
    font-size: 18px;
    margin-bottom: 25px;
  }

  .footer-links ul {
    display: block;
  }

  .footer-links li {
    margin-bottom: 12px;
  }

  .footer-links a {
    display: inline;
    padding: 0;
    background: transparent;
    border: 0;
    border-radius: 0;
    font-size: 15px;
  }

  .footer-links a:hover {
    padding-left: 5px;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .social-link {
    width: fit-content;
    justify-content: flex-start;
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
  }

  .social-link svg {
    width: 20px;
    height: 20px;
    flex-basis: 20px;
  }

  .social-text {
    display: inline;
    text-align: inherit;
  }

  .social-text strong {
    display: none;
  }

  .social-text small {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }

  .footer-bottom {
    padding: 25px 0;
    font-size: 14px;
  }
}
</style>
