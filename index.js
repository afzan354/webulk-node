const xlsx = require('xlsx');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Baca file Excel
const workbook = xlsx.readFile('tes.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

// Inisialisasi WhatsApp client
const client = new Client();

// Event listener untuk menampilkan QR Code sebagai ASCII
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan QR Code di atas di WhatsApp:');
});

// Event listener untuk memastikan koneksi berhasil
client.on('ready', () => {
    console.log('WhatsApp siap digunakan!');

    // Kirim pesan ke setiap nomor
    data.forEach(([nomor, pesan]) => {
        if (nomor && pesan) {
            const chatId = `${nomor}@c.us`; // Format nomor WhatsApp
            client.sendMessage(chatId, pesan)
                .then(() => {
                    console.log(`Pesan terkirim ke ${nomor}`);
                })
                .catch(err => {
                    console.error(`Gagal mengirim pesan ke ${nomor}:`, err);
                });
        } else {
            console.warn('Nomor atau pesan kosong:', nomor, pesan);
        }
    });
});

// Mulai koneksi WhatsApp Web
client.initialize();