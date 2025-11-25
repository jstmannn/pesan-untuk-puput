 const message = `Selamat malam, Puput. Gimana hari ini? Berat ya pasti.

Aku tau kerjaan kamu berat. Tekanannya tinggi. Orang di sekitar kadang bikin kamu capek. Kamu udah lewatin banyak hari berat dan kamu tetap berjuang sampai bisa ada di titik sekarang.

Jangan nyerah ya Put? Aku tau kalau kamu udah ngelakuin yang terbaik. Aku tau kamu udah berusaha sekuat tenaga. Jadi jangan terlalu keras sama diri kamu sendiri ya.

Kalau kamu butuh cerita atau butuh ditemenin biar gak ngerasa sendirian, kamu hubungin aku. Aku ada tiap kamu butuh.`;

        // Global variables
        let typingTimeout;
        let isTyping = false;

        /**
         * Show letter and start typing animation
         */
        function showLetter() {
            const introText = document.getElementById('introText');
            const startButton = document.getElementById('startButton');
            const letterBox = document.getElementById('letterBox');
            const typedText = document.getElementById('typedText');
            const bgMusic = document.getElementById('bgMusic');

            // Play background music
            bgMusic.play().catch(error => {
                console.log('Audio playback failed:', error);
            });

            // Hide intro and button with animation
            introText.classList.add('hidden');
            startButton.style.opacity = '0';
            startButton.style.transform = 'scale(0.8)';

            setTimeout(() => {
                startButton.style.display = 'none';
                letterBox.classList.add('visible');
                
                // Start typing animation
                typeWriter(message, typedText);
            }, 1000);
        }

        /**
         * Typewriter effect
         * @param {string} text - Text to type
         * @param {HTMLElement} element - Target element
         */
        function typeWriter(text, element) {
            if (isTyping) return;
            
            isTyping = true;
            let index = 0;
            element.innerHTML = '';
            element.classList.add('typing');

            function type() {
                if (index < text.length) {
                    const char = text.charAt(index);
                    element.innerHTML += char === '\n' ? '<br>' : char;
                    index++;
                    
                    // Variable typing speed for more natural effect
                    const speed = char === '.' || char === '?' || char === '!' ? 300 : 
                                  char === ',' ? 150 : 
                                  Math.random() * 30 + 40;
                    
                    typingTimeout = setTimeout(type, speed);
                } else {
                    // Typing complete
                    element.classList.remove('typing');
                    isTyping = false;
                    showSocialButtons();
                }
            }

            type();
        }

        /**
         * Show social media buttons and signature
         */
        function showSocialButtons() {
            const socialButtons = document.getElementById('socialButtons');
            const signature = document.getElementById('signature');

            setTimeout(() => {
                socialButtons.classList.add('visible');
                signature.style.display = 'block';
            }, 500);
        }

        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        });

        // Accessibility: Allow Enter key to trigger button
        document.addEventListener('DOMContentLoaded', () => {
            const startButton = document.getElementById('startButton');
            startButton.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    showLetter();
                }
            });
        });