const propiedadesa = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      baño: 2,
      costo: "2.000",
      smoke: false,
      pets: true,
    },
  
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar.",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      baños: 3,
      costo: "2.500",
      smoke: true,
      pets: true,
    },
  
    
  
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      baños: 2,
      costo: "2.200",
      smoke: false,
      pets: false,
    },

    {
        nombre: "Lujoso departamento metro Alcántara",
        src: "https://http2.mlstatic.com/D_NQ_NP_764662-MLC70845488419_082023-W.webp",
        descripcion:
          "Este lujoso departamento se encuentra en la mejor ubicación de la Región Metropolitana.",
        ubicacion: "Asturias 77, Metro Escuela Militar.",
        habitaciones: 2,
        baños: 2,
        costo: "6.500",
        smoke: true,
        pets: true,
      },

  ];
  
  const card = document.getElementById("contenido");
  let html = "";
  for (let pa of propiedadesa) {
    html += `
  <div class="col-md-4 mb-4">
  <div class="card">
                <img
                  src="${pa.src}"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                  ${pa.nombre}
                  </h5>
                  <p class="card-text">
                  ${pa.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${pa.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${pa.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${pa.baños} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${pa.costo}</p>
                                                 
                  <p class=" ${pa.smoke ? "text-success" : "text-danger"}">
  
                    <i class="${
                      pa.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
                    }"></i> ${
      pa.smoke ? "Permitido fumar" : "No se permite fumar"
    }
                
                    </p>
  
                  <p class= "${pa.pets ? "text-success" : "text-danger"}">
                    <i class=" ${
                      pa.pets ? "fas fa-paw" : "fa-solid fa-ban"
                    } "></i> ${
      pa.pets ? "Mascotas permitidas" : "No se permiten mascotas"
    }
                  </p>
                </div>
              </div>
            </div>
            
             </div>
            `;
  }
  
  card.innerHTML = html;