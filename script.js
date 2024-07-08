document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    var qrInput = document.getElementById('qr-url');
    var generateBtn = document.querySelector('.submit.btn');
    var qrContainer = document.querySelector('.qr-code');
  
    // Function to generate QR code
    function generateQRCode() {
      var url = qrInput.value.trim();
      if (url) {
        // Clear the previous QR code
        qrContainer.innerHTML = '';
        // Generate the QR code and append it to the container
        new QRCode(qrContainer, {
          text: url,
          width: 256,
          height: 256,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        });
      } else {
        alert('Please enter a URL.');
      }
    }
  
    // Add event listener to the button
    generateBtn.addEventListener('click', generateQRCode);
  });
  