window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const membersSection = document.getElementById("members");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                membersSection.classList.add("visible");
            }
        });
    });
    observer.observe(membersSection);
});