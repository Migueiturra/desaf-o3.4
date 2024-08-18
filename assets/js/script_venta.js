const propiedadesv = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    baño: 1,
    costo: "5.000",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: true,
    pets: false,
  },

  {
    nombre: "Departamento acogedor en la ciudad",
    src: "https://http2.mlstatic.com/D_NQ_NP_785206-MLC70351671922_072023-O.webp",
    descripcion:
      "Vive a pasos del metro Ñuble en este pequeño pero hermoso departamento",
    ubicacion: "Santa Elena 2120, Santiago (Metro Ñuble)",
    habitaciones: 1,
    baños: 1,
    costo: "2.000",
    smoke: true,
    pets: false,
  },
];

const card = document.getElementById("contenido");
let html = "";
for (let pv of propiedadesv) {
  html += `
<div class="col-md-4 mb-4">
<div class="card">
              <img
                src="${pv.src}"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${pv.nombre}
                </h5>
                <p class="card-text">
                ${pv.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${pv.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${pv.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${pv.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${pv.costo}</p>
                                               
                <p class=" ${pv.smoke ? "text-success" : "text-danger"}">

                  <i class="${
                    pv.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
                  }"></i> ${
    pv.smoke ? "Permitido fumar" : "No se permite fumar"
  }
              
                  </p>

                <p class= "${pv.pets ? "text-success" : "text-danger"}">
                  <i class=" ${
                    pv.pets ? "fas fa-paw" : "fa-solid fa-ban"
                  } "></i> ${
    pv.pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
                </p>
              </div>
            </div>
          </div>
          
           </div>
          `;
}

card.innerHTML = html;
