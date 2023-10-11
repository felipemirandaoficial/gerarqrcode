document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateBtn').addEventListener('click', function() {
        var inputValue = document.getElementById('inputText').value.trim();

        if (inputValue !== '') {
            // Limpa a imagem atual
            document.getElementById('qrcodeImage').src = '';

            // Monta a URL da API com o texto fornecido
            var apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=' + encodeURIComponent(inputValue);

            // Atualiza a imagem com o QR Code gerado
            document.getElementById('qrcodeImage').src = apiUrl;
        } else {
            alert('Por favor, insira um texto ou link antes de gerar o QR Code.');
        }
    });
});