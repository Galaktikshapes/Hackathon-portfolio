import npm from "https://esm.sh/npm";
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.full-screen');
    const skills = document.querySelectorAll('.skill');

    // Scroll event to trigger animations
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0 && !section.classList.contains('fade-in')) {
                section.classList.add('fade-in');
            }
        });

        // Animate skills as they come into view
        skills.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0 && !skill.classList.contains('fade-in')) {
                skill.style.animationDelay = `${Math.random() * 1.5}s`;  // Random animation delay
                skill.classList.add('fade-in');
            }
        });
    });

    // Trigger fade-in on first load for the welcome section
    document.querySelector('#welcome').classList.add('fade-in');
});
