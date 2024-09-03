
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
}

function scrollToProfile() {
    window.location.href = "profile.html";
}
// JavaScript to animate the skill bars when they enter the viewport
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const skillValue = skill.getAttribute('data-skill');
        skill.style.width = skillValue + '%'; // Set width based on data attribute
    });
}

// Check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scrolling to animate skills
window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('.skills');
    if (isElementInViewport(skillsSection)) {
        animateSkills();
    }
});

