// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function () {

    /* ========================================================================
       1. Hamburger Menu Functionality
       ======================================================================== */
    
    // Select DOM elements related to the hamburger menu
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const sideNavLinks = document.querySelectorAll('.side-nav-links a');

    // Function to open the side menu
    function openSideMenu() {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        sideMenu.setAttribute('aria-hidden', 'false');
        // Disable body scroll when menu is open
        document.body.style.overflow = 'hidden';
    }

    // Function to close the side menu
    function closeSideMenu() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        sideMenu.setAttribute('aria-hidden', 'true');
        // Enable body scroll when menu is closed
        document.body.style.overflow = '';
    }

    // Event listener for hamburger button to open the side menu
    if (hamburger) {
        hamburger.addEventListener('click', openSideMenu);
    } else {
        console.error('Hamburger button not found!');
    }

    // Event listener for close button inside the side menu
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSideMenu);
    } else {
        console.error('Close button not found!');
    }

    // Event listener for overlay click to close the side menu
    if (overlay) {
        overlay.addEventListener('click', closeSideMenu);
    } else {
        console.error('Overlay not found!');
    }

    // Event listeners for each navigation link inside the side menu to close the menu upon clicking
    sideNavLinks.forEach(link => {
        link.addEventListener('click', closeSideMenu);
    });

    // Optional: Close side menu with 'Escape' key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeSideMenu();
        }
    });

    /* ========================================================================
       2. Dark Mode Toggle Functionality
       ======================================================================== */

    // Select the dark mode toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Function to enable dark mode
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Change icon to sun
        localStorage.setItem('theme', 'dark');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙'; // Change icon to moon
        localStorage.setItem('theme', 'light');
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }

    // Event listener for dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    } else {
        console.error('Dark mode toggle button not found!');
    }

    // Check localStorage for theme preference on initial load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    /* ========================================================================
       3. FAQ Accordion Functionality
       ======================================================================== */

    // Select all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Function to toggle FAQ answer
    function toggleFAQ(e) {
        const question = e.currentTarget;
        const answer = question.nextElementSibling;

        // Toggle ARIA attributes for accessibility
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !isExpanded);
        answer.setAttribute('aria-hidden', isExpanded);

        // Toggle the active class for styling
        question.classList.toggle('active');
    }

    // Attach event listeners to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFAQ);
    });

    /* ========================================================================
       4. Team Members "Read More" Functionality
       ======================================================================== */

    // Select all "Read More" buttons within team members
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    // Function to toggle team member details
    function toggleTeamDetails(e) {
        const button = e.currentTarget;
        const teamMember = button.closest('.team-member');
        const details = teamMember.querySelector('.team-details');

        // Toggle ARIA attributes for accessibility
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        details.setAttribute('aria-hidden', isExpanded);

        // Toggle the active class for styling
        teamMember.classList.toggle('active');
    }

    // Attach event listeners to each "Read More" button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', toggleTeamDetails);
    });

    /* ========================================================================
       5. Newsletter Form Submission
       ======================================================================== */

    // Select the newsletter form
    const newsletterForm = document.getElementById('newsletter-form');

    // Function to handle newsletter form submission
    function handleNewsletterSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset(); // Reset the form
        } else {
            alert('Please enter a valid email address.');
        }
    }

    // Attach event listener to the newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    } else {
        console.error('Newsletter form not found!');
    }

});
