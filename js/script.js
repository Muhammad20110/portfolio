const projects = [
    {
        id: 1,
        title: "Pokemon",
        image: "../images/projects/pokemon.png",
        link: "https://shimmering-fairy-8d6fde.netlify.app/",
        tech: "HTML, CSS, JS"
    },
    {
        id: 2,
        title: "Tezkor Portfolio",
        image: "../images/projects/pizzaShop.png",
        link: "https://unique-parfait-6e129c.netlify.app/",
        tech: "HTML, CSS"
    },
    {
        id: 3,
        title: "Davlatlar",
        image: "../images/projects/renderCountries.png",
        link: "https://resilient-toffee-5030f6.netlify.app/",
        tech: "JavaScript, API"
    }
];

const projectContainer = document.getElementById('project-container');

function renderProjects() {
    projectContainer.innerHTML = "";

    projects.forEach(project => {
        const card = `
            <div class="project-card" data-id="${project.id}">
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="overlay">
                        <a class="view" href="${project.link}" target="_blank" class="view-btn">Ko'rish</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <span>${project.tech}</span>
                </div>
            </div>
        `;
        projectContainer.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});