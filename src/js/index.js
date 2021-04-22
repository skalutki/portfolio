import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

fetch("https://api.github.com/users/skalutki/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const {name, html_url, homepage, description } = repo;
      const project = document.querySelector(".projects-js");
      const img = new Image();
      img.src = "../assets/icons/Github Icon.png"
      
    
    if (homepage && description){
        const myTemplate = `
        <article class="project">
              <div class="project__header">
                <span class="project__header--icon"></span>
                <span class="project__header--icon"></span>
                <span class="project__header--icon"></span>
              </div>
              <div class="project__content">
                <img src="../assets/icons/Github__Icon.png" class="project__avatar" alt="" />
                                  
                <h3 class="project__title project__grid">
                    <span class="project__label">project:</span>
                    <span class="project__title--name">${name}</span>
                </h3>
                <p class="project__description project__grid">
                    <span class="project__label">description:</span>
                    <span class="project__description--name">${description}</span>
                </p>
                <p class="project__demo project__grid">
                    <span class="project__label">demo: </span>
                        <span>&lt;<span class="project__demo--name"><a href="${homepage}" class="project__link" title="Project demo link">see here</a></span>&gt;
                    </span>
                </p>

                <p class="project__repo project__grid">
                    <span class="project__label">github: </span>
                        <span>&lt;<span class="description__list--project-source"><a href="${html_url}" class="project__link" title="Project repository link">source code</a></span>&gt;
                    </span>
                </p>
                
              </div>
            </article>
        `;

        project.innerHTML += myTemplate;
    } 
     
    }
  })
  .catch((error) => {
    console.log("Not connection to API");
  });
