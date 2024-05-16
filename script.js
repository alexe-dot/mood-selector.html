function updateMoodMessage() {
    const selector = document.getElementById('moodSelector');
    const mood = selector.value;
    const messageElement = document.getElementById('moodMessage');

    let message;
    switch (mood) {
        case 'fericit':
            message = "Sa aveti o zi minunata si plina de bucurii!";
            break;
        case 'energic':
            message = "E timpul sa faci lucrurile! Esti plin de energie!";
            break;
        case 'increzator':
            message = "Un moment perfect pentru niste ganduri profunde.";
            break;
        case 'calm':
            message = "Bucurati-va de linistea si calmul diminetii.";
            break;
        default:
            message = "Selectati o stare de spirit pentru a vedea mesajul.";
    }

    messageElement.textContent = message;
}