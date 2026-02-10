// Menggunakan Intersection Observer untuk animasi scroll yang smooth
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Memilih semua element dengan class 'reveal' untuk dianimasikan
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Fungsi pesan sapaan sesuai tugas praktikum
function showMessage() {
    alert("Halo! Terima kasih sudah mampir ke portofolio Fadhli Fajrial Habibie.");
}

console.log("Portfolio Loaded Successfully!");