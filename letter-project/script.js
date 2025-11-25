const message = `Camat malam, Puput. Gimana hari ini? berat yaa pasti.

Aku tau kerjaan kamu berat. Tekanannya tinggi. Orang di sekitar kadang bikin kamu capek. Kamu udaa lewatin banyak hari berat dan kamu tetap berjuang sampe bisa ada di titik sekarang.

jangan nyerah yaa put? Aku tau kalau kamu udaa ngelakuin yang terbaik. Aku tau kamu udah berusaha sekuat tenaga. Jadi jangan terlalu keras sama diri kamu sendiri yaa.

Kalau kamu butuh cerita atau butuh ditemenin biar gak ngerasa sendirian, kamu hubungin aku. Aku ada tiap kamu butuh.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i) === '\n' ? '<br>' : message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Setelah selesai ketik, tampilkan tombol WhatsApp
        showWhatsAppButton();
      }
    }

    typeWriter();
  }, 100);
}

