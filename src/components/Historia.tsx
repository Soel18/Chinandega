import { Typography } from '@material-tailwind/react';

export default function Historia() {
  // Información de las imágenes y sus descripciones
  const imagenes = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGF2HcJ_sSuZIqHvj6KR7MOmnHkOPSlpu4l5L96mSdhRpbBmcI2ynIO-sdYMcmzI-4AM&usqp=CAU',
      alt: 'Desarrollo histórico',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Chinandega, fundada en tiempos coloniales, tiene una profunda conexión con las raíces indígenas, y su nombre deriva del náhuatl. Fue un importante centro de comercio y cultura desde sus orígenes.'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJCuQwuTkEt_cf_DmR8ffP-3U90IgCafQ2w&s',
      alt: 'Eventos significativos',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'A lo largo de su historia, Chinandega ha enfrentado desafíos notables.'
    },
    {
      src: 'https://thumbs.dreamstime.com/b/bandera-chinandega-nicaragua-bucle-de-ondeando-247565849.jpg',
      alt: 'Bandera y escudo',
      classname: 'object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'A lo largo de su historia Chinandega ha contado con una bandera con tres colores: el Verde, que representa la estrecha relación del pueblo con la naturaleza, el Blanco, que simboliza la pureza, la integridad, sabiduría y paz, y el Amarrillo, que representa la lucha del pueblo por la libertad.'
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
        Historia de Chinandega
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        {/* Texto */}
        <div className="lg:w-1/2">
          <p className="text-lg leading-relaxed text-gray-700 font-patrick mt-16">
            El nombre "Chinandega" tiene sus raíces en las lenguas indígenas de la región, específicamente en el idioma náhuatl.
            Se cree que proviene de la palabra "Chinantecal" o "Xinantecatl", que significa "vecino de Chinantlán". A su vez,
            "Chinantlán" se deriva de "Chinan", que significa "cobertizo" o "bajareque provisional de habitación", y la partícula "-tlan",
            que indica lugar. Por lo tanto, "Chinandega" se traduce como "lugar de enramadas" o "habitaciones provisionales".
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Esta etimología refleja las características temporales de las estructuras habitacionales utilizadas por los habitantes originales de la región. Además,
            es interesante notar que en náhuatl, "Chinantlán" también puede interpretarse como "lugar cercado por cañas",
            derivado de "chinamitl" (cerca de cañas) y "-tlan" (lugar de abundancia).
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Estas interpretaciones etimológicas ofrecen una visión profunda de las condiciones de vida y las prácticas arquitectónicas
            de las comunidades indígenas que habitaron la zona de Chinandega antes de la llegada de los colonizadores europeos.
          </p>
        </div>
        {/* Imagen */}
        <div className="lg:w-1/2 mt-8">
          <img
            src="/image/histroria1.jpg"
            alt="Imagen histórica"
            className="w-full lg:h-[50vh] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <p className="mt-2 text-lg leading-relaxed text-black-700 font-chewy mt-2 text-center">Templo de Santa Ana</p>
          <Typography color="blue-gray" className="mt-2 text-lg leading-relaxed text-gray-700 font-chewy mt-8 text-center">
            El Templo Santa Ana de Chinandega es uno de los principales monumentos históricos y religiosos de la ciudad, ubicada en el noroeste de Nicaragua. Este templo tiene una gran importancia cultural y arquitectónica, ya que ha sido un símbolo de la fe y tradición en la región.
          </Typography>
        </div>
      </div>

      {/* Sección de Historia con imágenes */}
      <section className="container mx-auto px-8 py-36 mt-12">
        <div className="mb-20 grid place-items-center text-center -mt-6">
          <Typography variant="lead" className="!text-gray-700 lg:w-6/12 mt-10">
            Chinandega, una ciudad con raíces profundas en la cultura indígena, ha evolucionado a lo largo de los siglos
            desde su fundación hasta convertirse en un centro de desarrollo económico y cultural en Nicaragua.
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
