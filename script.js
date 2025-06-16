document.addEventListener('DOMContentLoaded', () => {
    const heartEnvelope = document.getElementById('heartEnvelope');
    const letter = document.getElementById('letter');
    const flowerExplosion = document.getElementById('flowerExplosion');
    let isOpen = false;

    function explodeFlowers() {
        const numFlowers = 18;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        for (let i = 0; i < numFlowers; i++) {
            const angle = (2 * Math.PI / numFlowers) * i;
            const distance = 120 + Math.random() * 60;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const rotate = Math.random() * 360 + 'deg';
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = '🌹';
            flower.style.left = `calc(50vw - 1rem)`;
            flower.style.top = `calc(50vh - 1rem)`;
            flower.style.setProperty('--x', `${x}px`);
            flower.style.setProperty('--y', `${y}px`);
            flower.style.setProperty('--r', rotate);
            flowerExplosion.appendChild(flower);
            setTimeout(() => flower.remove(), 950);
        }
    }

    heartEnvelope.addEventListener('click', () => {
        if (!isOpen) {
            explodeFlowers();
            setTimeout(() => {
                heartEnvelope.style.display = 'none';
                letter.style.display = 'flex';
            }, 950);
            isOpen = true;
        }
    });

    // Regen aus Herzen
    const heartsBg = document.querySelector('.hearts-bg');
    const heartColors = ['#ff6b6b', '#ff1493', '#ff0000', '#ffb6c1', '#e75480', '#c71585', '#ff69b4'];
    function createFallingHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart-falling';
        heart.textContent = '❤';
        const size = Math.random() * 24 + 18;
        heart.style.fontSize = size + 'px';
        heart.style.left = Math.random() * 98 + 'vw';
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heartsBg.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createFallingHeart, 350);
}); 