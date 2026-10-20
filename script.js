// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton'); // Perbaikan: menggunakan titik koma (;)

// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() { // Perbaikan: addEventListener (L besar)
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
