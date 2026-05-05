import hero1 from '../assets/images/Foto_bersama_1.jpg';
import hero2 from '../assets/images/Foto_bersama_2.jpg';
import hero3 from '../assets/images/asrama5_tampak_depan.jpg';

import asrama1 from '../assets/images/asrama1_halaman_depan.jpg';
import asrama3 from '../assets/images/asrama3_kamar.jpg';
import asrama4 from '../assets/images/asrama4_ruang_belajar_asrama.jpg';

import fotoKetua from '../assets/images/Rajak.jpeg';
import fotoBendahara from '../assets/images/Taufik.jpeg';
import fotoSekretaris from '../assets/images/Mulyadi.jpeg';

import rekrutmenImg from '../assets/images/Seleberan_open_recritment.jpg';

export const siteData = {
  hero: {
    title: "Selamat Datang di Asrama Putra Handil Bakti",
    subtitle: "Tempat tinggal yang aman, nyaman, dan mendukung aktivitas belajar Anda.",
    ctaText: "Daftar Sekarang",
    ctaLink: "#kontak",
    rekrutmenImage: rekrutmenImg,
    images: [
      hero1,
      hero2,
      hero3
    ]
  },
  fasilitas: {
    title: "Fasilitas Asrama",
    items: [
      {
        title: "Kamar Bersih",
        desc: "Kamar nyaman, wangi, dan cocok untuk istirahat maupun belajar.",
        icon: "bed"
      },
      {
        title: "Wifi Gratis",
        desc: "Internet cepat yang mendukung pembelajaran online.",
        icon: "wifi"
      },
      {
        title: "Kulkas",
        desc: "Di bagian dapur sudah disediakan kulkas untuk menyimpan bahan makanan.",
        icon: "fridge"
      },
      {
        title: "Ruang Belajar",
        desc: "Ruang tenang dan nyaman untuk belajar bersama.",
        icon: "book"
      }
    ]
  },
  galeri: {
    title: "Galeri Asrama",
    items: [
      { src: asrama1, alt: "Asrama 1 Halaman Depan", caption: "Asrama 1 Halaman Depan" },
      { src: asrama3, alt: "Asrama 3 Kamar", caption: "Asrama 3 Kamar" },
      { src: asrama4, alt: "Asrama 4 Ruang Belajar Asrama", caption: "Asrama 4 Ruang Belajar Asrama" }
    ]
  },
  pengurus: {
    title: "Pengurus Asrama",
    inti: [
      { jabatan: "Ketua", nama: "Rajak Jamali", foto: fotoKetua },
      { jabatan: "Bendahara", nama: "M. Taufik Rahman", foto: fotoBendahara },
      { jabatan: "Sekretaris", nama: "Mulyadi", foto: fotoSekretaris }
    ],
    divisi: [
      {
        nama: "Humas",
        co: "Ahmad Zaini",
        anggota: ["Ryan Syahrullah", "Bahran"]
      },
      {
        nama: "Kebersihan",
        co: "Ahmad Basuni",
        anggota: ["Muhammad Ridho", "Muhammad Rizky"]
      },
      {
        nama: "Keagamaan",
        co: "Abdul Ghani",
        anggota: ["Riskiyansah", "Solihin"]
      },
      {
        nama: "Perlengkapan",
        co: "M. Fahrija Suriana",
        anggota: ["Akhmad Zulkifli"]
      },
      {
        nama: "Minat & Bakat",
        co: "Mahril",
        anggota: ["Muhammad Ramadhanil", "Andi Apprianto"]
      }
    ]
  },
  aturan: {
    title: "Aturan Asrama",
    items: [
      "Menjaga kebersihan lingkungan.",
      "Dilarang membawa barang terlarang.",
      "Jam malam pukul 22.00 WITA.",
      "Tidak membuat keributan.",
      "Hormati sesama penghuni."
    ]
  },
  lokasi: {
    title: "Lokasi Asrama",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.294823263951!2d114.596648!3d-3.2768797000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423be03a8e67b%3A0x975da6669d385bb1!2sAsrama%20Putra%20Batola%20Handil%20Bakti!5e0!3m2!1sid!2sid!4v1764642755011!5m2!1sid!2sid",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Asrama%20Putra%20Batola%20Handil%20Bakti"
  },
  kontak: {
    title: "Kontak",
    alamat: "Handil Bakti, Barito Kuala, Kalimantan Selatan",
    telepon: ["+62 882-4628-4158"],
    email: "asramaputrabatola@gmail.com",
    whatsappLink: "https://wa.me/6288246284158",
    daftarLink: "https://wa.me/6288246284158?text=saya%20mau%20mendaftar%20menjadi%20anggota%20asrama%20batola"
  }
};
