const whatsappButton = document.querySelector('.whatsapp-button img');

whatsappButton.addEventListener('mouseover', () => {
    whatsappButton.style.animationPlayState = 'paused';
});

whatsappButton.addEventListener('mouseout', () => {
    whatsappButton.style.animationPlayState = 'running';
});
