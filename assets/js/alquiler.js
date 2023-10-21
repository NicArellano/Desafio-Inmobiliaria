const propiedades_alquiler = [
    {
    id: 1,    
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: "2.000",
    smoke: false,
    pets: true
    },
    {
        id: 2,
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "2.500",
        smoke: true,
        pets: true
        },
        {
            id: 3,
            nombre: 'Condominio moderno en zona residencial',
            src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            baños: 2,
            costo: "2,200",
            smoke: false,
            pets: false
            },

            {
                id: 4,
                nombre: 'Arriendo Departamento Nº 205 en Condominio Parque Pinares, Tower 4',
                src: 'https://www.puconpropiedades.com/fotos/prop_1203_foto_22353.jpg',
                descripcion: 'Parque Pinares es un completo condominio en la primera línea del lago Villarrica, con seguridad y entretención para toda la familia. Cuenta con embarcadero y bajada de lanchas, para que disfrutes de tus actividades náuticas favoritas. El condominio ofrece una serie de áreas comunes para que puedas vivir Pucón a pleno',
                ubicacion: 'Camino Villarrica - Pucón, Pucón, Araucanía, Chile',
                habitaciones: 3,
                baños: 2,
                costo: "1.300",
                smoke: false,
                pets: false
                }
    ]


    let html_alquiler = ""
   propiedades_alquiler.forEach((propiedad) => { 
    html_alquiler += `<section id="alquiler">
    <h2>Propiedad en Alquiler</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div id="card" class="card">
          <img
            src="${propiedad.src} "
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${propiedad.nombre}
            </h5>
            <p class="card-text">
            ${propiedad.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
            <p class="text-primary">
               ${propiedad.smoke? "Permitido fumar" : "No se permite fumar" }
            </p>
            <p class="text-primary">
               ${propiedad.pets? "Mascotas permitidas" : "Mascotas no permitidas" }
            </p>
          </div>
        </div>
      </div>
      
      </div>
  </section>`})

   const alquiler = document.getElementById("alquiler")
   alquiler.innerHTML = html_alquiler