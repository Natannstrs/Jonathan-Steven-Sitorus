// ─── Typing Animation (Diperbaiki) ───────────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        const words = ["Programming", "Design", "3D Modeling"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        // Cari elemen tempat teks akan diketik
        const typedTextElement = document.getElementById("typed-text");

        // Jika elemen tidak ditemukan, hentikan fungsi agar tidak eror
        if (!typedTextElement) return;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Menghapus huruf
                typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Mengetik huruf
                typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            // Atur kecepatan: ngetik lebih lambat (100ms), hapus lebih cepat (40ms)
            let typeSpeed = isDeleting ? 40 : 100;

            // Jika kata sudah selesai diketik
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Jeda 2 detik sebelum mulai menghapus
                isDeleting = true;
            } 
            // Jika kata sudah selesai dihapus (kosong)
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
                typeSpeed = 500; // Jeda 0.5 detik sebelum mengetik kata baru
            }

            setTimeout(type, typeSpeed);
        }

        // Mulai animasi
        setTimeout(type, 500); // Beri delay sedikit saat web baru dibuka
    });
