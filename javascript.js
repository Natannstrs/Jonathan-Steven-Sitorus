// ─── Typing Animation ────────────────────────────────────────────
    (function () {
        const words = ["Programming", "Design", "3D Modeling"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedTextElement = document.getElementById("typed-text");

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

            // Atur kecepatan
            let typeSpeed = isDeleting ? 40 : 100; // Kecepatan hapus 40ms, ngetik 100ms

            if (!isDeleting && charIndex === currentWord.length) {
                // Jeda saat kata selesai diketik
                typeSpeed = 2000; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Pindah ke kata berikutnya setelah selesai dihapus
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Jeda sebelum mengetik kata baru
            }

            setTimeout(type, typeSpeed);
        }

        // Mulai animasi jika elemen ditemukan
        if (typedTextElement) {
            type();
        }
    })();
