const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.body.style.backgroundColor = entry.target.getAttribute('data-bg-color');
            }   
        });
    },
    { threshold: 0.6 }
);

sections.forEach((section) => {
    observer.observe(section);
});