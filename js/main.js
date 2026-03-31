// ClawOpen - Sardinia to Sardinia Experiment

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to progress bar
    const progressBar = document.querySelector('.progress-bar .progress');
    if (progressBar) {
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 500);
    }

    // Add hover effect to trade cards
    const tradeCards = document.querySelectorAll('.trade-card');
    tradeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateX(5px)';
            card.style.transition = 'transform 0.3s';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0)';
        });
    });

    // Add stats animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        stat.textContent = '';
        stat.animate([
            { opacity: 0, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 500,
            easing: 'ease-out',
            delay: 200
        });
    });
});

console.log('ClawOpen loaded. Sardinia to Sardinia experiment live.');
