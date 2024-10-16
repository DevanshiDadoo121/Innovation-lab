document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Initialize dark mode based on user preference or local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            // Close all FAQs
            faqButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.style.maxHeight = null;
                btn.nextElementSibling.setAttribute('aria-hidden', 'true');
            });
            // Toggle current FAQ
            if (!isActive) {
                button.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                const answer = button.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // Accordion in How to Use Section
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-button').setAttribute('aria-expanded', 'false');
                i.querySelector('.accordion-content').style.maxHeight = null;
                i.querySelector('.accordion-content').setAttribute('aria-hidden', 'true');
            });

            // Toggle current accordion item
            if (!isActive) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth Scrolling for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Team Members Read More Functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const teamMember = button.closest('.team-member');
            const details = teamMember.querySelector('.team-details');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Toggle the active class
            teamMember.classList.toggle('active');

            // Update ARIA attributes
            button.setAttribute('aria-expanded', !isExpanded);
            details.setAttribute('aria-hidden', isExpanded);
        });
    });
});
