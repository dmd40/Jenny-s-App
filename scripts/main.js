document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const closeCelebrationBtn = document.getElementById('closeCelebration');
    const celebrationSound = document.getElementById('celebrationSound');

    yesBtn.addEventListener('click', () => {
        // Play sound
        celebrationSound.play();
        
        // Show celebration 
        celebration.style.display = 'flex';
        
        // Create confetti
        createConfetti();
    });

    noBtn.addEventListener('mouseover', () => {
        // Move button to random position
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Change text temporarily
        const originalText = noBtn.textContent;
        noBtn.textContent = 'Think about it!';
        
        setTimeout(() => {
            noBtn.textContent = originalText;
        }, 1000);
    });

    closeCelebrationBtn.addEventListener('click', closeCelebration);

    function closeCelebration() {
        celebration.style.display = 'none';
    }

    function createConfetti() {
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * window.innerWidth;
            const animationDuration = Math.random() * 3 + 2;
            
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = color;
            confetti.style.left = `${left}px`;
            confetti.style.animationDuration = `${animationDuration}s`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }
});

