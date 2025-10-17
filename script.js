// Create floating hearts with different styles
function createHearts() {
    const heart = document.createElement('div');
    
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
    heart.style.animationDelay = (Math.random() * 2) + 's';
    heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.filter = `hue-rotate(${Math.random() * 60 - 30}deg)`;
    
    // Add slight rotation and scale variation
    heart.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(${Math.random() * 0.5 + 0.8})`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.style.transition = 'opacity 1s ease';
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 1000);
    }, 5000);
}

// Create twinkling sparkles with different colors
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
    sparkle.style.animationDelay = (Math.random() * 2) + 's';
    
    // Random sparkle color
    const colors = ['#ff69b4', '#ffb6c1', '#ffc0cb', '#ffd700', '#ffffff'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.boxShadow = `0 0 10px 2px ${sparkle.style.background}`;
    
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.style.transition = 'opacity 0.5s ease';
        sparkle.style.opacity = '0';
        setTimeout(() => sparkle.remove(), 500);
    }, 2000);
}

// Create floating love letters
function createLoveLetter() {
    const letters = ['L', 'O', 'V', 'E', '❤️'];
    const letter = document.createElement('div');
    letter.className = 'love-letter';
    letter.textContent = letters[Math.floor(Math.random() * letters.length)];
    
    letter.style.position = 'absolute';
    letter.style.left = Math.random() * 100 + 'vw';
    letter.style.top = '100vh';
    letter.style.fontSize = (Math.random() * 20 + 10) + 'px';
    letter.style.opacity = '0';
    letter.style.color = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
    letter.style.textShadow = '0 0 10px currentColor';
    letter.style.transition = 'opacity 0.5s ease';
    letter.style.pointerEvents = 'none';
    letter.style.zIndex = '1';
    
    document.body.appendChild(letter);
    
    // Fade in
    setTimeout(() => {
        letter.style.opacity = '0.8';
        
        // Animate up
        const duration = Math.random() * 5000 + 5000;
        letter.style.transition = `transform ${duration}ms linear, opacity 1s ease`;
        letter.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
        
        // Fade out and remove
        setTimeout(() => {
            letter.style.opacity = '0';
            setTimeout(() => letter.remove(), 1000);
        }, duration - 1000);
    }, 100);
}

// Enhanced card flip with 3D effect
function flipCard() {
    const card = document.querySelector('.card');
    const cardInner = document.querySelector('.card-inner');
    
    if (!card.classList.contains('is-flipped')) {
        // Flip to back
        card.classList.add('is-flipped');
        cardInner.style.transform = 'rotateY(180deg)';
        
        // Trigger confetti and effects
        triggerConfetti();
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createHearts();
                if (i % 2 === 0) createSparkle();
            }, i * 150);
        }
        
        // Start love letters animation
        const loveLetterInterval = setInterval(createLoveLetter, 1000);
        
        // Stop love letters after 10 seconds
        setTimeout(() => {
            clearInterval(loveLetterInterval);
        }, 10000);
    } else {
        // Flip to front
        card.classList.remove('is-flipped');
        cardInner.style.transform = 'rotateY(0)';
    }
}

// Initialize the card with romantic effects
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    // Add 3D perspective to card
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.8s';
    card.style.cursor = 'pointer';
    
    // Generate hearts and sparkles at intervals
    setInterval(createHearts, 800);
    setInterval(createSparkle, 500);
    
    // Add click effect
    card.addEventListener('click', flipCard);
    
    // Add hover effect with 3D tilt
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        card.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    // Add initial animation
    setTimeout(() => {
        card.style.animation = 'subtlePulse 3s ease-in-out infinite';
    }, 1000);
    
    updateCard();
});

// Update card content
function updateCard() {
    // No form inputs to update from, just trigger the rain effect
    triggerConfetti();
}

// Rain effect
function createRain() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const raindrops = [];
    const rainCount = 200;
    const colors = ['#9ab3f5', '#a3d8f4', '#b9f3fc', '#d4f1f9', '#e8f9fd'];

    // Create raindrops
    for (let i = 0; i < rainCount; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 5 + 5,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function drawRain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        raindrops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.strokeStyle = drop.color.replace(')', `, ${drop.opacity})`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Update position
            drop.y += drop.speed;
            
            // Reset raindrop when it reaches bottom
            if (drop.y > canvas.height) {
                drop.y = Math.random() * -50;
                drop.x = Math.random() * canvas.width;
            }
        });
        
        requestAnimationFrame(drawRain);
    }
    
    drawRain();
    
    // Stop rain after 10 seconds
    setTimeout(() => {
        const fadeOut = setInterval(() => {
            if (raindrops.every(drop => drop.opacity <= 0)) {
                clearInterval(fadeOut);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }
            raindrops.forEach(drop => {
                drop.opacity = Math.max(0, drop.opacity - 0.01);
            });
        }, 30);
    }, 10000);
}

function triggerConfetti() {
    createRain();
}

// Handle window resize
window.addEventListener('resize', function() {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add keyboard support for form submission
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && (e.target.id === 'nameInput' || e.target.id === 'messageInput')) {
        updateCard();
    }
});
