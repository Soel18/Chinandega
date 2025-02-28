import { Typography } from '@material-tailwind/react';

export default function Economia() {
  // Información de las imágenes y sus descripciones
  const imagenes = [
    {
      src: 'https://www.el19digital.com/files/articulos/407224.jpg',
      alt: 'Agricultura y Ganadería',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La fertilidad de los suelos de Chinandega ha sido fundamental para su desarrollo agrícola. Históricamente, el departamento se dedicó al monocultivo de algodón, lo que lo posicionó como uno de los más prósperos del país. En la actualidad, la producción agrícola se ha diversificado, predominando cultivos como caña de azúcar, maní, sésamo, arroz, sorgo, soya, maíz, frijol y banano. Especialmente en Chichigalpa, los extensos cañaverales abastecen al Ingenio San Antonio, productor del reconocido ron Flor de Caña.'
    },
    {
      src: 'https://www.el19digital.com/files/notas/source/2023/Abril/15Abr/NOTAS/galeron10.jpg',
      alt: 'Industria y Comercio',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La economía industrial de Chinandega es robusta, con presencia de ingenios azucareros como el Ingenio San Antonio y el Ingenio Monte Rosa. Además, el departamento alberga industrias dedicadas al procesamiento de maní, camarón para exportación y zonas francas que generan empleo local. El comercio es igualmente dinámico, con mercados como el Central, Mercadito y de Mayoreo, además de supermercados y centros comerciales que atienden a la población.'
    },
    {
      src: 'https://www.canal4.com.ni/wp-content/uploads/2022/09/Hospital-Chinandega.webp',
      alt: 'Infraestructura Estratégica',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La ubicación de Chinandega es estratégica debido a su conexión con el puerto de Corinto, el principal puerto marítimo del país, facilitando el comercio internacional y posicionando al departamento como un eje logístico clave.'
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Economía de Chinandega
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        {/* Texto */}
        <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-lg leading-relaxed text-gray-700 font-patrick mt-16">
            Chinandega es una de las principales ciudades de Nicaragua, está marcada por su rica historia agrícola, su posición estratégica cerca de la frontera con Honduras, y su desarrollo en el sector de la manufactura y el comercio.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Chinandega es una región con una base económica fuerte en la agricultura, complementada por una creciente industria manufacturera y un comercio activo, especialmente con países vecinos. La diversificación de la economía en sectores como el turismo y la pesca sigue siendo un desafío, pero también ofrece grandes oportunidades para el desarrollo a largo plazo.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
          Chinandega tiene una economía diversificada, con una base agrícola fuerte, una industria en crecimiento y un comercio dinámico. Además, su ubicación estratégica lo convierte en un centro clave para el comercio nacional e internacional. Aunque enfrenta retos como la modernización del sector pesquero y el impulso del turismo, sigue siendo uno de los motores económicos de Nicaragua. Su economía, centrada en la agricultura y la industria azucarera, forma la base de su cultura, que se vive en el día a día a través del trabajo, las tradiciones y la comunidad.
          </p>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 w-full mt-8 flex justify-center">
          <img
            src="https://i.calameoassets.com/140705082329-ccf31f18ac664bdab447d66fc8dd21c9/large.jpg"
            alt="Economia1"
            className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Sección de Historia con imágenes */}
      <section className="container mx-auto px-8 py-36 mt-12 bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-3xl shadow-lg">
        <div className="mb-20 grid place-items-center text-center">
          <Typography variant="lead" className="!text-black lg:w-6/12 mt-10 text-gray-600">
          Sin embargo, a pesar de su base económica sólida, la región enfrenta retos como la modernización de ciertos sectores, incluidos la pesca y el turismo, pero sigue siendo una de las principales fuerzas económicas del país.
          </Typography>
        </div>

          {/* Galería de imágenes históricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {imagenes.map((imagen, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={imagen.src}
              alt={imagen.alt}
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
            />
            <Typography variant="paragraph" className="mt-2 text-lg text-gray-700">
              {imagen.descripcion}
            </Typography>
          </div>
        ))}
      </div>

        {/* Video al final con margen superior */}
        <div className="flex justify-center mt-16">
          <iframe
            src="https://www.youtube.com/embed/AxrMC7WucUM"
            title="Historia de Chinandega"
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
