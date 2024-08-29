const us = [
  {
    id: 1,
    name: "Santiago",
    surname: "Friedrich",
    role: "abc",
    linkedin: "abc",
    photo: "../img/santiago_fried.jpeg",
    color: "container_card_c1",
  },
  {
    id: 2,
    name: "Dante",
    surname: "Lugo",
    role: "abc",
    linkedin: "https://www.linkedin.com/in/dantelugo",
    photo: "../img/dante_lugo.jpg",
    color: "container_card_c2",
  },
  {
    id: 3,
    name: "Rocio",
    surname: "Acosta",
    role: "Desarrollo",
    linkedin: "https://www.linkedin.com/in/acosta-rocio/",
    photo: "../img/rocio_acosta.jpeg",
    color: "container_card_c3",
  },
  {
    id: 4,
    name: "Maia",
    surname: "Romero",
    role: "Información",
    linkedin: "https://www.linkedin.com/in/maia-romero18/",
    photo: "../img/MaiaAylenRomero.jpg",
    color: "container_card_c4",
  },
  {
    id: 5,
    name: "Araceli",
    surname: "Pimentel",
    role:"Diseño",
    linkedin: "https://www.linkedin.com/in/araceli-pimentel/",
    photo: "../img/logo_pescar.jpg",
    color: "container_card_c5",
  },
  {
    id: 6,
    name: "Julieta",
    surname: "Ojeda",
    role: "Información",
    linkedin: "https://www.linkedin.com/in/julietaaylenojeda",
    photo: "../img/Julieta_ojeda.png",
    color: "container_card_c1",
  },
  {
    id: 7,
    name: "Ana",
    surname: "Pergola",
    role: "Diseño",
    linkedin: "https://www.linkedin.com/in/anapergola/",
    photo: "../img/AnaPergola.jpg",
    color: "container_card_c2",
  },
  {
    id: 8,
    name: "Alan",
    surname: "Vargas",
    role: "Desarrollo",
    linkedin: "www.linkedin.com/in/vargasalan03",
    photo: "../img/Vargas_Alan.jpeg",
    color: "container_card_c3",
  },
];

const card = document.getElementById("card-template");


us.map((obj) => {
  if (obj.id % 2 !== 0) {
    card.innerHTML += `
            
                <div class="card mb-3 card_a border border-0 col-md-12 container_card">
                    <div class="row g-0 container_card_2">
                        <div class="col-md-4 div_info_1">
                            <img src="${obj.photo}" class="img-fluid rounded-start rounded cards_imgs">
                        </div>
                        <div class="col-md-8 div_info_2">
                            <div class="card-body border-start container_card_info container_card_info_a ${obj.color} align-middle">
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
          
           <div class="card mb-3 border border-0 card_b col-md-12 ms-auto container_card">
                <div class="row g-0 container_card_2">
                    <div class="col-md-8  div_info_2">
                        <div class="card-body border-end container_card_info container_card_info_b ${obj.color} align-middle d-flex align-items-end flex-column mb-3 ">
                            <h4 class="card-title titulo_nombre">${obj.name} <b>${obj.surname}</b></h4>
                            <p class="card-text">${obj.role}</p>
                            <p class="card-text text-with-icon"><a class="text-secondary" href="${obj.linkedin}"><i class="material-icons icon-class">link</i> Linkedin</a></p>
                        </div>
                    </div>
                    <div class="col-md-4  div_info_1">
                        <img src="${obj.photo}" class="img-fluid rounded-start rounded cards_imgs">
                    </div>
                </div>
            </div>
                
    `;
  }
});
