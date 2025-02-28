import { Typography } from '@material-tailwind/react';

export default function Problematica() {
  // Información de las imágenes y sus descripciones
  const imagenes = [
    {
      src: 'https://lalupa.press/wp-content/uploads/2020/05/PobrezaCaribe.jpg',
      alt: 'Pobreza y Desigualdad Económica',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'A pesar de ser una región con un alto potencial agrícola, muchas familias viven en condiciones de pobreza, con acceso limitado a servicios básicos y empleo bien remunerado.'
    },
    {
      src: 'https://confidencial.digital/wp-content/uploads/2022/11/Migrantes-en-el-Rio-Bravo.jpg',
      alt: 'Desempleo y Migración',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        ' La falta de oportunidades laborales genera una alta tasa de migración hacia otros departamentos o incluso al extranjero, buscando mejores condiciones de vida.'
    },
    {
      src: 'https://pbs.twimg.com/media/Gi-2r69W4AAOkjM?format=jpg&name=4096x4096',
      alt: 'Acceso a Educación y Salud',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'Aunque existen avances, el acceso a servicios de calidad en educación y salud sigue siendo una preocupación, especialmente en áreas rurales.'
    },
    {
      src: 'https://www.el19digital.com/files/notas/source/2024/Mayo/22-Mayo/ENACAL/ENACAL8.jpg',
      alt: 'Degradación Ambiental',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La explotación de recursos naturales y la falta de prácticas sostenibles contribuyen a la deforestación y otros problemas ambientales que afectan la biodiversidad de la región.'
    },
    {
      src: 'https://agendapropianicaragua.press/wp-content/uploads/2023/09/Chinandega-calles.jpg',
      alt: 'Infraestructura Deficiente',
      className: ' object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl',
      descripcion:
        'La infraestructura en algunas zonas de Chinandega sigue siendo insuficiente, afectando el transporte, la conectividad y el desarrollo económico en general.'
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Problemática en Chinandega
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        {/* Texto */}
        <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-lg leading-relaxed text-gray-700 font-patrick mt-16">
            La problemática en Chinandega abarca una serie de desafíos sociales, económicos y ambientales que afectan a la región.
            Uno de los problemas más notables es la pobreza, que afecta a una parte significativa de la población. Muchas familias
            viven en condiciones de vulnerabilidad, lo que limita el acceso a servicios básicos como educación, salud y vivienda adecuada.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            En el ámbito ambiental, Chinandega enfrenta la degradación de sus recursos naturales, especialmente en áreas rurales,
            donde la deforestación y la contaminación del agua y el aire son problemas crecientes. La actividad agrícola, aunque es una fuente importante de empleo,
            también ha contribuido a estos problemas, debido a prácticas insostenibles de cultivo.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 font-chewy mt-8">
            Otro reto importante es la falta de infraestructura adecuada, especialmente en zonas rurales, lo que dificulta el acceso a mercados,
            servicios y una movilidad eficiente. Además, la región se ve afectada por un limitado desarrollo industrial y económico,
            lo que genera una alta tasa de migración hacia otras áreas en busca de mejores oportunidades.
          </p>
        </div>
      
        {/* Imagen */}
        <div className="lg:w-1/2 w-full mt-8 flex justify-center">
          <img
            src="https://static.wixstatic.com/media/2174f4_c9441714ba284a3aae6c1f642d63a55b~mv2.jpeg/v1/fill/w_1175,h_881,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2174f4_c9441714ba284a3aae6c1f642d63a55b~mv2.jpeg"
            alt="Problematica1"
            className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Sección de Historia con imágenes */}
      <section className="container mx-auto px-8 py-36 mt-12 bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-3xl shadow-lg">
        <div className="mb-20 grid place-items-center text-center">
          <Typography variant="lead" className="!text-black lg:w-6/12 mt-10">
            Chinandega enfrenta diversas problemáticas que requieren atención y soluciones
            integrales para mejorar la calidad de vida de su población y preservar sus recursos naturales.
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
              <h3 className="text-xl font-semibold mt-6 text-black">{imagen.alt}</h3>
              <p className="mt-2 text-lg text-gray-700 px-4">
                {imagen.descripcion}
              </p>
            </div>
          ))}
        </div> 


        <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-200">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Recomendaciones
          </h2>
          <ul className="text-lg leading-relaxed text-gray-700 font-chewy mt-4 list-inside list-disc pl-10 space-y-2">
            <li>✔  Reduce, reutiliza y recicla ♻️: Minimiza los desechos reutilizando bolsas, botellas y envases. Separa la basura para reciclar papel, plástico, vidrio y cartón.</li>

            <li>✔  Ahorra agua y energía 💧⚡: Cierra el grifo mientras te cepillas los dientes y usa bombillas LED para reducir el consumo eléctrico. Apaga los electrodomésticos cuando no los uses.</li>

            <li>✔  Opta por medios de transporte sostenibles 🚲🚶‍♂️: Camina, usa la bicicleta o el transporte público siempre que sea posible. Si conduces, comparte el coche para reducir emisiones.</li>

            <li>✔  Consume de forma responsable 🛍️🌱: Apoya productos locales, compra solo lo necesario y elige opciones ecológicas o con menos empaques plásticos.</li>

            <li>✔ Planta árboles y cuida las áreas verdes 🌳🌿: Un solo árbol puede absorber toneladas de CO₂. Participa en reforestaciones o cuida parques y jardines de tu comunidad.</li>
          </ul>
        </div>


        {/* Video al final con margen superior */}
        <div className="flex justify-center mt-16">
          <iframe
            src="https://www.youtube.com/embed/ZBQRXGWjUPI"
            title="Problematica en Chinandega"
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
