const express = require("express");
const app = express();
const PORT = 3000;

const anggota = [
  { nama: "Lamdan Handika", nim: "20250040085" },
  { nama: "Hadi Arsa Winata", nim: "20250040191" },
  { nama: "Marisa Oktaviani", nim: "20250040069" },
  { nama: "Mohamad Hafidz Maulana Syahputra", nim: "20250040063" }
];

const matkul = [
  "Bahasa Indonesia dan Budaya",
  "Sistem Paralel dan Terdistribusi",
  "Rekayasa Perangkat Lunak",
  "Kompleksitas Algoritma",
  "Interaksi Manusia dan Komputer",
  "Jaringan Komputer",
  "Pemrograman Berbasis Platform",
  "Metode Numerik"
];

function halaman(judul, isi) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${judul} - Kelompok 4</title>
<style>
body{font-family:Arial,sans-serif;margin:0;background:#f1f5f9;color:#263238}
header{background:#174a7e;color:white;text-align:center;padding:22px}
nav{background:#12395f;text-align:center;padding:14px}
nav a{color:white;text-decoration:none;margin:8px;font-weight:bold}
main{max-width:850px;margin:28px auto;background:white;padding:25px;border-radius:10px}
h2{color:#174a7e}li{margin:10px 0}
table{width:100%;border-collapse:collapse}
th,td{border:1px solid #ccc;padding:10px;text-align:left}
th{background:#e7f0f8}
footer{text-align:center;padding:18px;color:#64748b}
</style>
</head>
<body>
<header><h1>Website Kelompok 4</h1><p>Pemrograman Berbasis Platform</p></header>
<nav>
<a href="/beranda">Beranda</a>
<a href="/identitas">Identitas</a>
<a href="/matkul">Mata Kuliah</a>
<a href="/anggota">Anggota</a>
<a href="/kontak">Informasi</a>
</nav>
<main>${isi}</main>
<footer>Kelompok 4 PBP &copy; 2026</footer>
</body></html>`;
}

app.get("/", (req,res) => res.redirect("/beranda"));

app.get("/beranda", (req,res) => {
  res.send(halaman("Beranda", `
    <h2>Selamat Datang</h2>
    <p>Selamat datang di website Kelompok 4 mata kuliah Pemrograman Berbasis Platform.</p>
    <p>Website ini dibuat untuk memenuhi tugas pembuatan Web Server menggunakan Node.js dan Express.js.</p>
  `));
});

app.get("/identitas", (req,res) => {
  res.send(halaman("Identitas Kelompok", `
    <h2>Identitas Kelompok 4</h2>
    <table>
      <tr><th>Keterangan</th><th>Data</th></tr>
      <tr><td>Nama Kelompok</td><td>Kelompok 4</td></tr>
      <tr><td>Mata Kuliah</td><td>Pemrograman Berbasis Platform</td></tr>
      <tr><td>Program Studi</td><td>Teknik Informatika</td></tr>
      <tr><td>Project</td><td>Pembuatan Web Server</td></tr>
      <tr><td>Teknologi</td><td>Node.js dan Express.js</td></tr>
    </table>
  `));
});

app.get("/matkul", (req,res) => {
  const daftar = matkul.map(nama => `<li>${nama}</li>`).join("");
  res.send(halaman("Daftar Mata Kuliah", `<h2>Daftar Mata Kuliah</h2><ol>${daftar}</ol>`));
});

app.get("/anggota", (req,res) => {
  const baris = anggota.map((orang,i) =>
    `<tr><td>${i+1}</td><td>${orang.nama}</td><td>${orang.nim}</td></tr>`
  ).join("");
  res.send(halaman("Anggota Kelompok", `
    <h2>Anggota Kelompok 4</h2>
    <table><tr><th>No.</th><th>Nama</th><th>NIM</th></tr>${baris}</table>
  `));
});

app.get("/kontak", (req,res) => {
  res.send(halaman("Informasi Tugas", `
    <h2>Informasi Tugas</h2>
    <p><b>Nama tugas:</b> Pembuatan Web Server Kelompok</p>
    <p><b>Mata kuliah:</b> Pemrograman Berbasis Platform</p>
    <p><b>Kelompok:</b> 4</p>
    <p><b>Deadline:</b> Jumat, 20 November 2026</p>
    <p><b>Teknologi:</b> Node.js dan Express.js</p>
  `));
});

app.use((req,res) => {
  res.status(404).send(halaman("404", `
    <h2>404 - Halaman Tidak Ditemukan</h2>
    <p>Alamat halaman tidak tersedia.</p>
    <a href="/beranda">Kembali ke Beranda</a>
  `));
});

app.listen(PORT, () => {
  console.log("Web server Kelompok 4 berjalan.");
  console.log("Buka browser: http://localhost:" + PORT + "/beranda");
});
