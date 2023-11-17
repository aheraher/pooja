const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');

// Toggle navigation links when the button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Show the respective section when a navigation link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        // Get the href attribute value of the clicked link
        const targetSectionId = event.target.getAttribute('href');

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the section corresponding to the clicked link
        document.querySelector(targetSectionId).style.display = 'block';

        // Close the menu (if open) after selecting a section
        navLinks.classList.remove('show');
    }
});
