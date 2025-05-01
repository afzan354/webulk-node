

# WhatsApp Message Sender via Excel

Aplikasi sederhana berbasis Node.js untuk mengirim pesan WhatsApp secara otomatis menggunakan daftar nomor dan pesan dari file Excel.

## 🔧 Requirements

Pastikan kamu sudah menginstal hal-hal berikut sebelum menjalankan aplikasi:

- [Node.js](https://nodejs.org/) (v14 atau lebih tinggi)
- NPM (biasanya sudah terinstall bersama Node.js)
- WhatsApp Web (karena aplikasi ini menggunakan `whatsapp-web.js`)

## 📦 Dependencies

Library yang digunakan dalam proyek ini:

- `whatsapp-web.js`: Untuk menghubungkan WhatsApp Web dan mengirim pesan.
- `xlsx`: Untuk membaca file Excel (.xlsx).
- `qrcode-terminal`: Untuk menampilkan QR Code di terminal.

## 📥 Cara Install

1. **Clone repository** (jika kamu upload ke GitHub):

   ```bash
   git clone https://github.com/afzan354/webulk-node.git
   cd webulk-node
   ```

2. **Install dependencies:**

   ```bash
   npm init -y
   npm install whatsapp-web.js xlsx qrcode-terminal
   ```

3. **Siapkan file Excel:**
   - File harus bernama `tes.xlsx`
   - Sheet pertama harus memiliki 2 kolom: **Nomor WhatsApp** dan **Pesan**
   - Contoh format:
     ```
     | Nomor           | Pesan               |
     |------------------|---------------------|
     | 628123456789      | Halo! Ini pesan 1   |
     | 628987654321      | Halo! Ini pesan 2   |
     ```

## ▶️ Cara Menjalankan

1. Jalankan aplikasi menggunakan perintah:

   ```bash
   node index.js
   ```

2. Aplikasi akan menampilkan **QR Code** di terminal.  
   - Buka WhatsApp di ponsel kamu.
   - Pilih menu "WhatsApp Web" dan **scan QR Code** tersebut.

3. Setelah terhubung, aplikasi akan otomatis membaca file Excel dan **mengirim pesan ke setiap nomor** yang tercantum.

## 📝 Catatan Penting

- Pastikan koneksi internet stabil saat menjalankan aplikasi.
- Jangan tutup terminal selama proses pengiriman pesan.
- Format nomor WhatsApp harus benar (gunakan format internasional tanpa tanda +), contoh: `628123456789`.
- Hapus baris header di Excel jika tidak ingin dikirim sebagai pesan.

## 📁 Struktur Proyek

```
nama-folder/
│
├── index.js              # Script utama untuk membaca file dan mengirim pesan
├── tes.xlsx              # File Excel dengan data nomor dan pesan
├── package.json          # Metadata proyek dan dependencies
└── README.md             # Dokumentasi ini
```

---


