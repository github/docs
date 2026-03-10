---
title: "{% data variables.product.prodname_pages %} documentation"
shortTitle: "{% data variables.product.prodname_pages %}"
intro: '{% data variables.product.prodname_pages %} turns any {% data variables.product.github %} repository into a live website—no separate hosting required.'
introLinks:
  quickstart: /pages/quickstart
  overview: /pages/getting-started-with-github-pages/what-is-github-pages
changelog:
  label: pages
layout: discovery-landing
includedCategories:
  - Learn about GitHub Pages
  - Set up a GitHub Pages site
  - Managing a GitHub Pages site
  - Troubleshoot a GitHub Pages site error
redirect_from:
  - /categories/20/articles
  - /categories/95/articles
  - /categories/github-pages-features
  - /categories/96/articles
  - /categories/github-pages-troubleshooting
  - /categories/working-with-github-pages
  - /github/working-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
children:
  - /quickstart
  - /getting-started-with-github-pages
  - /setting-up-a-github-pages-site-with-jekyll
  - /configuring-a-custom-domain-for-your-github-pages-site
---
Saya tidak dapat mengakses laman web yang anda berikan (https://sazwan96.github.io) kerana ia mengembalikan status ralat **404 (Not Found)**. Ini bermakna laman web tersebut tidak wujud atau tidak dapat diakses buat masa ini.

Untuk membantu anda mencapai matlamat mewujudkan laman web yang memaparkan semua pemilikan Muhamad Sazwan Bin Ismail, berikut adalah beberapa langkah yang boleh anda pertimbangkan:

1.  **Pengesanan Laman Web**: Sahkan semula alamat URL yang tepat. Jika ini adalah laman GitHub Pages, pastikan repositori dengan nama `sazwan96.github.io` telah **wujud** dan kandungannya telah **diterbitkan** dengan betul.
2.  **Mencipta Laman Web Baharu**: Jika anda ingin memulakannya dari awal, anda boleh menggunakan **GitHub Pages** untuk mencipta laman web peribadi secara percuma. Caranya:
    *   Cipta repositori baharu dengan nama yang tepat, iaitu `sazwan96.github.io`.
    *   Repositori ini boleh mengandungi fail `index.html` sebagai halaman utama.
    *   Anda boleh menggunakan pelbagai tema atau penjana laman statik (seperti Jekyll) untuk membina laman web yang lebih kompleks.
3.  **Kandungan Laman Web**: Untuk memaparkan "semua pemilikan", anda perlu mengumpul dan menyusun maklumat terlebih dahulu. Ini mungkin termasuk senarai syarikat, projek, aset digital, atau pencapaian yang ingin dikongsi secara umum.
4.  **Semakan Status Domain**: Jika anda yakin laman web itu sepatutnya wujud, cuba akses semula selepas beberapa ketika. Kadangkala terdapat kelewatan dalam pengaktifan laman web baru.

Jika anda memerlukan bantuan lanjut untuk mereka bentuk laman web atau mengatur kandungannya, sila berikan lebih banyak maklumat tentang apa yang ingin anda paparkan. Saya sedia membantu!
Baik, mari kita teruskan dengan panduan yang lebih terperinci untuk membina laman web peribadi anda di GitHub Pages. Saya akan berikan langkah demi langkah serta contoh kod ringkas yang boleh anda ubah suai.

## 🚀 **Langkah Membina Laman Web Peribadi di GitHub Pages**

### 1. **Cipta Repositori GitHub**
   - Log masuk ke akaun GitHub anda.
   - Klik butang **New repository**.
   - Nama repositori **mesti** `sazwan96.github.io` (gantikan `sazwan96` dengan username GitHub anda).
   - Pilih **Public**.
   - Tandakan **Add a README file**.
   - Klik **Create repository**.

### 2. **Sediakan Fail Index**
   - Dalam repositori baru, klik **Add file** > **Create new file**.
   - Namakan fail `index.html`.
   - Salin kod HTML ringkas di bawah dan ubah suai mengikut maklumat anda.

### 3. **Terbitkan Laman Web**
   - Selepas menyimpan fail `index.html`, GitHub Pages akan secara automatik menerbitkan laman web anda.
   - Laman web boleh diakses di `https://sazwan96.github.io` dalam masa 1-2 minit.

---

## 📄 **Contoh Kod HTML Asas (Boleh Ubah Suai)**

```html
<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhamad Sazwan Bin Ismail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #1e3a5f;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            border-bottom: 2px solid #1e3a5f;
            padding-bottom: 5px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
        .company {
            font-weight: bold;
            color: #0f2b4b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Muhamad Sazwan Bin Ismail</h1>
        <p><strong>Pengasas Teknologi & Usahawan Digital</strong></p>
        <p>Email: sazwan96@gmail.com | GitHub: @sazwan96</p>

        <div class="section">
            <h2>Pemilikan Syarikat</h2>
            <ul>
                <li><span class="company">Sazwan Solutions</span> – AI, Blockchain, Automasi (2019–kini)</li>
                <li><span class="company">Sazwan Hobby Shop</span> – E-dagang & NFT (2023–kini)</li>
                <li><span class="company">End AI Global</span> – Inisiatif AI Sumber Terbuka (2024–kini)</li>
                <li><span class="company">Fairbase</span> – Keselamatan & Pengurusan Data (2024–kini)</li>
                <li><span class="company">Sazwan Digital</span> – Perkhidmatan Digital (2024–kini)</li>
                <li><span class="company">Muhamad Sazwan Bin Ismail Enterprise</span> – Konsultansi Digital (2023–2024)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Projek Utama</h2>
            <ul>
                <li>🤖 AI Engine untuk Automasi Industri</li>
                <li>🖼️ Sistem NFT & Blockchain Kolektibel</li>
                <li>🌐 End AI Global – Model AI Etikal</li>
                <li>🔐 SHA-256 Hash Simulation (GitHub)</li>
                <li>⚡ Smart Power Grid Monitoring</li>
                <li>📄 Digital Resume Generator (Giblub)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Kemahiran Teknikal</h2>
            <p>Python, JavaScript, Solidity, Rust, TensorFlow, PyTorch, Docker, Kubernetes, GCP, AWS, Azure, dan banyak lagi.</p>
        </div>

        <div class="section">
            <h2>Rakan Industri</h2>
            <p>Microsoft, Google, Meta, Salesforce, HubSpot, SAP, TNB, Petronas, ByteDance, Alipay, dan lain-lain.</p>
        </div>

        <div class="section">
            <h2>Pengesahan Identiti Digital</h2>
            <p><strong>SHA-256:</strong> 32D8A53CC4C299E60424CD0DE96D3B06575D51...</p>
            <p><strong>Laman Web:</strong> <a href="https://sazwan96.github.io">https://sazwan96.github.io</a></p>
        </div>

        <footer>
            <p>© 2025 Muhamad Sazwan Bin Ismail. Hak Cipta Terpelihara.</p>
        </footer>
    </div>
</body>
</html>
```

### 4. **Ubah Suai Kandungan**
   - Gantikan maklumat dalam kod di atas dengan data peribadi anda yang lebih lengkap.
   - Anda boleh tambah gambar, pautan ke profil LinkedIn, GitHub, dan lain-lain.

### 5. **Menggunakan Tema atau Framework**
   - Jika mahu reka bentuk yang lebih menarik, anda boleh gunakan framework seperti **Bootstrap** atau **Tailwind CSS**.
   - Contohnya, tambah pautan Bootstrap dalam `<head>`:
     ```html
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
     ```

### 6. **Domain Sendiri (Pilihan)**
   - Jika anda ada domain sendiri (contoh: sazwan.com), anda boleh konfigurasikan GitHub Pages untuk menggunakan domain tersebut.
   - Caranya:
     * Dalam repositori, pergi ke **Settings** > **Pages**.
     * Di bawah **Custom domain**, masukkan nama domain anda.
     * Di laman pihak pendaftar domain, tambah rekod CNAME yang menunjuk ke `sazwan96.github.io`.

### 7. **Mengemaskini Laman**
   - Setiap kali anda `git push` perubahan ke repositori, laman web akan dikemas kini secara automatik.

---

## 💡 **Tips Tambahan**
- **Gunakan README.md** untuk memberikan keterangan ringkas tentang repositori.
- **Tambahkan gambar profil** dengan memuat naik fail gambar ke repositori dan rujuk dalam HTML.
- **Gunakan GitHub Pages dengan Jekyll** jika anda mahu blog atau dokumentasi yang lebih tersusun.

Sekiranya anda memerlukan bantuan lebih lanjut, seperti mereka bentuk laman yang lebih interaktif atau menambah borang hubungan, beritahu saya. Sedia membantu!
