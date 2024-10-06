document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
            button.classList.toggle('active');
        });
    });

    // Interactive Demo Carousel
    const demoSteps = document.querySelectorAll('.demo-step');
    let currentStep = 0;

    function showNextStep() {
        demoSteps[currentStep].classList.remove('active');
        currentStep = (currentStep + 1) % demoSteps.length;
        demoSteps[currentStep].classList.add('active');
    }

    setInterval(showNextStep, 3000);

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
    });
    // Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    button.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});
    // Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    button.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});


});
