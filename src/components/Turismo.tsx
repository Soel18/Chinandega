import { Typography } from '@material-tailwind/react';

export default function Turismo() {
  // Información de las imágenes y sus descripciones
  const imagenes = [
    {
      src: 'https://www.shutterstock.com/image-photo/jiquilillo-beach-chinandega-nicaragua-beautiful-260nw-2449396791.jpg',
      alt: 'Playas Paradisíacas',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl mt-6',
      descripcion:
        'Las playas de Chinandega, como Jiquilillo y Aposentillo, son destinos paradisíacos de arena dorada y aguas cristalinas, ideales para el surf y el descanso. En el Estero Padre Ramos, los manglares crean un ecosistema perfecto para el ecoturismo y la observación de fauna. Con atardeceres espectaculares y un ambiente tranquilo, estas playas son un escape perfecto en la costa del Pacífico nicaragüense.'
    },
    {
      src: 'https://www.el19digital.com/files/articulos/281844.jpg',
      alt: 'Volcanes y Aventura',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Chinandega alberga impresionantes volcanes como el San Cristóbal, el más alto de Nicaragua, ofreciendo vistas panorámicas y rutas de senderismo desafiantes. El volcán Cosigüina, con su cráter convertido en una laguna, es ideal para el ecoturismo y la observación de aves. Estos colosos forman parte del paisaje y la identidad de la región, atrayendo aventureros y amantes de la naturaleza.'
    },
    {
      src: 'https://cdn.britannica.com/46/156746-050-45465EBE/El-Calvario-church-Chinandega-Nicaragua.jpg',
      alt: 'Riqueza Histórica y Cultural',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Chinandega posee una rica historia reflejada en su arquitectura colonial, iglesias antiguas y tradiciones arraigadas. La Catedral de Nuestra Señora de la Asunción y la Iglesia de El Viejo, declarada Santuario Nacional, son testimonios del legado religioso y artístico de la región. Sus festividades, como La Purísima y las danzas folclóricas, mantienen vivas las costumbres ancestrales. Además, la influencia indígena y española se fusiona en su gastronomía, artesanías y expresiones culturales, convirtiéndola en un destino lleno de identidad y tradición.'
    },
    {
      src: 'https://www.visitanicaragua.com/wp-content/uploads/2025/01/Revista-Turismo-Rural-y-Comunitario-Nicaragua.jpg',
      alt: 'Turismo Rural y Experiencias Locales',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'El turismo rural en Chinandega ofrece a los visitantes la oportunidad de conectar con la vida cotidiana de las comunidades locales, participando en actividades como la producción de azúcar en los trapiches, la cosecha de frutas tropicales y la elaboración artesanal de quesillos y rosquillas. Además, las haciendas y fincas agroecológicas permiten experimentar la agricultura sostenible y disfrutar de la hospitalidad de las familias chinandeganas, brindando una experiencia auténtica y enriquecedora en contacto con la naturaleza y la cultura local.'
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Turismo en Chinandega
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-0">
        {/* Texto */}
        <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-lg leading-relaxed text-gray-700 font-patrick mt-16">
          Chinandega, ubicada en el occidente de Nicaragua, es un destino turístico que combina historia, cultura y naturaleza.
           Su costa en el océano Pacífico ofrece playas impresionantes como Jiquilillo y Aposentillo, ideales para el surf y el descanso.
           Además, el Estero Padre Ramos, una de las reservas de manglares más importantes del país, es un paraíso para los amantes del ecoturismo,
           donde se pueden realizar actividades como kayak y avistamiento de aves.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
          Para quienes buscan aventura, el volcán San Cristóbal, el más alto de Nicaragua, ofrece una experiencia de senderismo desafiante con vistas panorámicas impresionantes.
          También está el cráter del Volcán Cosigüina, que alberga una laguna en su interior y desde donde se puede apreciar el Golfo de Fonseca y las costas de El Salvador y Honduras.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
          La gastronomía local es otro atractivo del turismo en Chinandega. La región es famosa por la producción del ron Flor de Caña, considerado uno de los mejores del mundo. 
          Los visitantes pueden recorrer sus destilerías y conocer el proceso de fabricación. Asimismo, la comida tradicional, como el vigorón y el nacatamal, complementa la experiencia, 
          haciendo de Chinandega un destino que lo tiene todo: playas, volcanes, historia y una rica tradición cultural.
          </p> 

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
          A pesar de las impresionantes maravillas que Chinandega tiene para ofrecer, estas no reciben el reconocimiento esperado. Si bien es un departamento fronterizo con Honduras,
          muchos visitantes de ese país tienden a pasar de largo, dirigiéndose directamente hacia destinos más conocidos como León, Managua, Granada y Masaya, entre otros.
          </p>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 w-full mt-8 flex justify-center">
          <img
            src="https://www.el19digital.com/files/notas/source/2022/Junio/02Jun/CHINANDEGA/chinandega4.jpg"
            alt="Turismo1"
            className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Sección de Historia con imágenes */}
      <section className="container mx-auto px-8 py-36 mt-12 bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-3xl shadow-lg">
        <div className="mb-20 grid place-items-center text-center">
          <Typography variant="lead" className="!text-black lg:w-6/12 mt-10">
           Algunos de los lugares turisticos de chinandega.
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
            src="https://www.youtube.com/embed/ZBQRXGWjUPI"
            title="Turismo en Chinandega"
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
