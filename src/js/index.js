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
        <section class="project">
              <header class="project__header">
                <span class="project__header--icon"></span>
              </header>
              <div class="project__grid">
                <img src="../assets/icons/Github Icon.png" class="project__avatar" alt="github icon" width="24px" height="24px" />
                <div class="nie wiem czy potrzebne">
                  <!--do usunięcia w poźniejszym czasie jesli okaze sie nie potrzebne -->
                  <ul class="description__list">
                    <li class="description__list--item">
                      project: <span class="description__list--itemTitle description__list--project-title">${name}</span>
                    </li>
                    <li class="description__list--item">description: <span class="description__list--project-description"></span>${description}</li>
                    <li class="description__list--item">
                      demo: &lt;<span class="description__list--project-demo"><a href="${homepage}" class="description__list--link" title="Project demo link">see here</a></span
                      >&gt;
                    </li>
                    <li class="description__list--item">
                      github: &lt;<span class="description__list--project-source"><a href="${html_url}" class="description__list--link" title="Project repository link">source code</a></span
                      >&gt;
                    </li>
                  </ul>
                </div>
              </div>
            </section>
        `;

        project.innerHTML += myTemplate;
    } 
     
    }
  })
  .catch((error) => {
    console.log("Not connection to API");
  });
