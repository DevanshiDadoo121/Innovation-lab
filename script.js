// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation class when scrolling into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.card, .step').forEach(element => {
    observer.observe(element);
});

// Floating animation for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('mouseover', () => {
    document.querySelector('.scroll-indicator').style.color = '#ff6600';
});

document.querySelector('.scroll-indicator').addEventListener('mouseout', () => {
    document.querySelector('.scroll-indicator').style.color = '#fff';
});