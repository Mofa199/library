function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/header.html', 'header-placeholder');
    loadComponent('components/footer.html', 'footer-placeholder');

    // We need to wait for the header to be loaded before we can add event listeners
    setTimeout(() => {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const langToggle = document.getElementById('lang-toggle');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
            });
        }

        if (langToggle) {
            langToggle.addEventListener('click', () => {
                if (langToggle.textContent === 'FR') {
                    langToggle.textContent = 'EN';
                    // Add translation logic here
                } else {
                    langToggle.textContent = 'FR';
                    // Add translation logic here
                }
            });
        }

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
            });
        }
    }, 500);


    // Fade-in animations for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
