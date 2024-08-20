document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const projectSections = document.querySelectorAll('.project-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('project-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    projectSections.forEach(section => {
        observer.observe(section);
    });
});
