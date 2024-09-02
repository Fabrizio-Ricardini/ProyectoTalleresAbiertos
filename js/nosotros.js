const us = [
  {
    id: 1,
    name: "Fabrizio",
    surname: "Ricardini",
    role: "Proyect Manager / Desarrollo",
    linkedin: "https://www.linkedin.com/in/fabrizio-ricardini/ ",
    photo: "../src/nosotros/Fabrizio-Ricardini.jpg",
    color: "container-card-c1",
  },
  {
    id: 2,
    name: "Santiago",
    surname: "Friedrich",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/santiago-martin-claros-friedrich-122323223/",
    photo: "../src/nosotros/santiago_fried.jpeg",
    color: "container-card-c2",
  },
  {
    id: 3,
    name: "Dante",
    surname: "Lugo",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/dantelugo/",
    photo: "../src/nosotros/dante_lugo.jpg",
    color: "container-card-c3",
  },
  {
    id: 4,
    name: "Rocio",
    surname: "Acosta",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/acosta-rocio/",
    photo: "../src/nosotros/rocio_acosta.jpeg",
    color: "container-card-c4",
  },
  {
    id: 5,
    name: "Maia",
    surname: "Romero",
    role: "Información",
    linkedin: "https://www.linkedin.com/in/maia-romero18/",
    photo: "../src/nosotros/MaiaAylenRomero.jpg",
    color: "container-card-c5",
  },
  {
    id: 6,
    name: "Araceli",
    surname: "Pimentel",
    role:"Diseño",
    linkedin: "https://www.linkedin.com/in/araceli-pimentel/",
    photo: "../src/nosotros/Araceli_Pimentel.png",
    color: "container-card-c1",
  },
  {
    id: 7,
    name: "Julieta",
    surname: "Ojeda",
    role: "Información",
    linkedin: "https://www.linkedin.com/in/julietaaylenojeda/",
    photo: "../src/nosotros/Julieta_ojeda.png",
    color: "container-card-c2",
  },
  {
    id: 8,
    name: "Ana",
    surname: "Pergola",
    role: "Diseño",
    linkedin: "https://www.linkedin.com/in/anapergola/",
    photo: "../src/nosotros/AnaPergola.jpg",
    color: "container-card-c3",
  },
  {
    id: 9,
    name: "Alan",
    surname: "Vargas",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/vargasalan03/",
    photo: "../src/nosotros/Vargas_Alan.jpeg",
    color: "container-card-c4",
  },
  {
    id: 10,
    name: "Axel",
    surname: "Appella",
    role: "Información",
    linkedin: "https://www.linkedin.com/in/axel-appella-a54512255/",
    photo: "../src/nosotros/AxelAppella.jpeg",
    color: "container-card-c5",
  },
  {
    id: 11,
    name: "Axel",
    surname: "Leguero",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/axel-leguero/",
    photo: "../src/nosotros/AxelLeguero.jpeg",
    color: "container-card-c1",
  },
  {
    id: 12,
    name: "Gonzalo",
    surname: "Erceg",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/gonzalo-erceg/",
    photo: "../src/nosotros/GonzaloErceg.webp",
    color: "container-card-c2",
  },
  {
    id: 13,
    name: "Gustavo",
    surname: "Heredia",
    role: "Diseño / Desarrollo",
    linkedin: "https://www.linkedin.com/in/gustavo-heredia-49b01621b/",
    photo: "../src/nosotros/Gustavo_Heredia.png",
    color: "container-card-c3",
  },
  {
    id: 14,
    name: "Camilo",
    surname: "Enriquez",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/camiloenz/",
    photo: "../src/nosotros/camiloEnriquez.jpg",
    color: "container-card-c4",
  },
];

const card = document.getElementById("card-template");


us.map((obj) => {
  if (obj.id % 2 !== 0) {
    card.innerHTML += `
            
                <div class="card mb-3 border border-0 col-md-12 container-card">
                    <div class="row g-0 container-card-1">
                        <div class="col-md-4 div-info-1">
                            <img src="${obj.photo}" class="img-fluid rounded-start rounded cards-imgs">
                        </div>
                        <div class="col-md-8 div-info-2 d-flex ">
                            <div class="card-body border-start container-card-info container-card-info-a ${obj.color} align-middle">
                                <h4 class="card-title">${obj.name} <b>${obj.surname}</b></h4>
                                <p class="card-text">${obj.role}</p>
                                <p class="card-text text-with-icon"><a class="text-secondary" href="${obj.linkedin}"><i class="material-icons icon-class"> link </i> Linkedin</a></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                     
    `;
  } else {
    card.innerHTML += `
          
           <div class="card mb-3 border border-0 col-md-12 ms-auto container-card">
                <div class="row g-0 container-card-2">
                    <div class="col-md-8  div-info-2 d-flex">
                        <div class="card-body border-end container-card-info container-card-info-b ${obj.color} align-middle d-flex align-items-end flex-column mb-3 ">
                            <h4 class="card-title name-title">${obj.name} <b>${obj.surname}</b></h4>
                            <p class="card-text">${obj.role}</p>
                            <p class="card-text text-with-icon"><a class="text-secondary" href="${obj.linkedin}"><i class="material-icons icon-class">link</i> Linkedin</a></p>
                        </div>
                    </div>
                    <div class="col-md-4  div-info-1">
                        <img src="${obj.photo}" class="img-fluid rounded-start rounded cards-imgs">
                    </div>
                </div>
            </div>
                
    `;
  }
});
