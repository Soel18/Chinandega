import { Typography } from '@material-tailwind/react';

export default function Cultura() {
  // Información de las imágenes y sus descripciones
  const imagenes = [
    {
      src: 'https://www.travelmagazine.es/galerias-noticias/galerias/3952/guerreros-de-oro-el-cano-visit-panama-full.jpg',
      alt: 'Herencia indígena',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La región de Chinandega fue habitada por diversas tribus indígenas, como los Chorotegas, quienes dejaron una huella significativa en la cultura local. Esta influencia se puede ver en los nombres de lugares, en ciertas tradiciones y en la gastronomía. Aunque la población indígena original disminuyó con la llegada de los colonizadores, algunas costumbres y el idioma chorotega han perdurado a lo largo de los años.',
      link: 'https://www.facebook.com/cparlamentonic/videos/programa-herencia-cultural-lunes-2-de-diciembre-de-2024/1271660820688942/', 
    },
    {
      src: 'https://www.mapanicaragua.com/wp-content/uploads/2020/07/Sopa-de-Queso.jpg',
      alt: 'Gastronomía',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La comida en Chinandega refleja la tradición agrícola de la región, con platos típicos que aprovechan la abundante producción de maíz, arroz, frijoles y otros cultivos locales.',
      link:'https://www.tn8.tv/departamentos/sabores-de-invierno-delicias-gastronomicas-en-chinandega/' 
    },
    {
      src: 'https://www.mapanicaragua.com/wp-content/uploads/2020/07/San-pascual-Bail%C3%B3n0.jpg',
      alt: 'Fiestas y celebraciones',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Chinandega es conocida por sus celebraciones festivas, que incluyen tanto eventos religiosos como culturales.'
    },
    {
      src: 'https://www.nicaraguacreativa.com/wp-content/uploads/2024/04/440869908_466876189070618_2359511210435563210_n-1200x900.jpg',
      alt: 'Música y danza',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La música de Chinandega está influenciada por los estilos tradicionales nicaragüenses como el punto, el son nica y la marimba. Las danzas folclóricas también son una parte importante de la cultura, y las comunidades celebran eventos con danzas en las que se muestran los trajes tradicionales, a menudo de colores brillantes.' ,
      link: 'https://www.mapanicaragua.com/cultura-de-chinandega/'
    },
    {
      src: 'https://nuevaya.com.ni/wp-content/uploads/2014/07/caraceNos.png',
      alt: 'Artesanía',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'En Chinandega, la producción artesanal también juega un papel importante. Las cerámicas de la región, elaboradas con técnicas ancestrales, son muy conocidas, así como la creación de sombreros de palma y tejidos que reflejan la habilidad artesanal de los chinandeganos.',
      link: 'https://www.mined.gob.ni/mapatradicionesculturapopular/chinandega-2/'
    },
    {
      src: 'https://www.mapanicaragua.com/wp-content/uploads/2020/07/Parroquia-Nuestra-Se%C3%B1ora-de-Santa-Ana.jpg',
      alt: 'Religión',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'En cuanto a la religión, chinandega al igual que todo el pais es un estado laico, sin embargo hay mayor predominancia del catolicismo en Chinandega, y muchas de sus celebraciones están centradas en la devoción a los santos y vírgenes. A lo largo del año, las fiestas religiosas como las procesiones de la Virgen de la Asunción son muy significativas para la comunidad.',
      link: 'https://www.mapanicaragua.com/festividades-religiosas-de-chinandega/'
    },
    {
      src: 'https://www.mapanicaragua.com/wp-content/uploads/2020/07/Parroquia-Templo-Santuario-de-Nuestra-Se%C3%B1ora-Guadalupe.jpg',
      alt: 'Patrimonio histórico',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Chinandega también es un lugar con una gran carga histórica. A lo largo de su historia, la ciudad ha sido testigo de numerosos eventos, desde la época precolombina hasta la Revolución Sandinista. Además, la influencia colonial se percibe en algunos de sus edificios y monumentos, lo que le da una mezcla de lo antiguo y lo moderno.',
      link: 'https://www.visitanicaragua.com/chinandega/'
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Cultura de Chinandega
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        {/* Texto */}
        <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-lg leading-relaxed text-gray-700 font-patrick mt-16">
            Chinandega es un municipio de Nicaragua  que tiene una rica herencia cultural influenciada tanto por sus tradiciones indígenas como por la llegada de colonizadores españoles. Su cultura refleja una mezcla de elementos precolombinos, coloniales y modernos, lo que le otorga una identidad única dentro de Nicaragua.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Esta influencia se refleja en el nombre de lugares y en la gastronomía local,  que aprovechan la riqueza de los cultivos como maíz, frijoles y plátano. Las festividades también son un componente clave, destacándose las celebraciones religiosas y eventos como los carnavales, donde se celebran con música, danza y comparsas, mostrando la vibrante cultura popular de la región.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Además de su tradición agrícola, la ciudad de Chinandega es conocida por su producción artesanal, destacándose en la fabricación de cerámica y sombreros de palma, y por su música folclórica influenciada por el punto, son nica y la marimba.
          </p>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 w-full mt-8 flex justify-center">
          <img
            src="https://www.el19digital.com/files/articulos/281793.jpg"
            alt="Economia1"
            className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Sección de Historia con imágenes */}
      <section className="container mx-auto px-8 py-36 mt-12 bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-3xl shadow-lg">
        <div className="mb-20 grid place-items-center text-center">
          <Typography variant="lead" className="!text-black lg:w-6/12 mt-10">
          Tradición, hospitalidad, folklore.
          </Typography>
        </div>

        {/* Galería de imágenes históricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {imagenes.map((imagen, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a href={imagen.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                />
              </a>
              <h3 className="text-xl font-semibold mt-4 text-black">{imagen.alt}</h3>
              <p className="mt-2 text-lg text-gray-700 px-4">
                {imagen.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Video al final con margen superior */}
        <div className="flex justify-center mt-16">
          <iframe
            src="https://www.youtube.com/embed/tXFjgZ1FIh8"
            title="Cultura de Chinandega"
            width="100%"
            height="500"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg  object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}
