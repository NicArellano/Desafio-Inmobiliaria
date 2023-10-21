

const propiedades_venta = [
  {
    id: 1,
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: false

  },
  {
    id: 2,
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: "1.200",
    smoke: true,
    pets: true

  },

  {
    id: 3,
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '67 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: false,
    pets: true

  },

  {
    id: 4,
    nombre: 'Departamento Nº406 en Condominio Costa Pucón 4, Torre 4',
    src: 'https://www.puconpropiedades.com/fotos/prop_1062_foto_20588.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: 'Centro, Pucón, Araucanía, Chile',
    habitaciones: 4,
    baños: 3,
    costo: "9.600",
    smoke: true,
    pets: true

  }

]


let html_venta = ""
propiedades_venta.forEach((propiedad) => {
  html_venta += ` <section id="venta">
    <h2>Propiedad en Venta</h2>
    <div class="col">
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
            ${propiedad.pets? "Mascotas Permitidas" : "No se permiten mascotas" }
            </p>
          </div>
        </div>
      </div>
      
      </div>
  </section>`})
const venta = document.getElementById("venta")
venta.innerHTML = html_venta



