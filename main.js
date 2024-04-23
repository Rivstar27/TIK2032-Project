 // Mengubah warna latar belakang secara acak
 function changeBackgroundColor() {
    var colors = ['#f5f5f5', '#e6e6e6', '#d9d9d9', '#cccccc'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Memanggil fungsi untuk mengubah warna latar belakang setiap kali halaman dimuat
changeBackgroundColor();