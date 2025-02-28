import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@material-tailwind/react";

const CarouselBackground = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-[80vh]">
      <Slider {...settings} className="w-full h-full">
        {["chinandega1.svg", "chinandega2.svg", "chinandega3.svg"].map(
          (image, index) => (
            <div key={index} className="w-full h-[80vh]">
              <img
                src={`/image/${image}`}
                alt={`Chinandega ${index + 1}`}
                width={3200}
                height={4500}
                className="object-cover w-full h-full"
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

const Inicio = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Carrusel */}
      <CarouselBackground />

      {/* Texto sobre el carrusel */}
      <div className="absolute inset-0 flex items-center justify-center z-0 px-4 mt-">
        <div className="bg-white/80 rounded-xl border border-white p-8 sm:p-10 md:p-20 shadow-lg shadow-black/10 backdrop-blur-md backdrop-saturate-200 w-full max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[50%] flex items-center justify-center">
          <div className="text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-snug text-center font-bold"
            >
              “Chinandega: Un Viaje de Turismo Cultural e Historia”
            </Typography>
            <Typography
              variant="lead"
              className="mb-8 mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl !text-gray-900 text-center leading-relaxed"
            >
              Chinandega, situada en el occidente de Nicaragua, es una región
              rica en historia y biodiversidad, conocida por su agricultura,
              festividades culturales y atractivos naturales como el volcán San
              Cristóbal y las playas de Corinto.
            </Typography>
          </div>
        </div>
      </div>

      {/* Nueva sección debajo del carrusel */}
      <div className="relative z-20 bg-gray-100 py-20 px-8 sm:px-16 md:px-24 lg:px-40 mt-96">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Sección de texto */}
          <div className="lg:w-1/2 w-full text-justify">
            <Typography
              variant="h2"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center"
            >
              Descubre la riqueza de Chinandega
            </Typography>
            <Typography
              variant="paragraph"
              className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
            >
              La ciudad de Chinandega es un destino fascinante para los amantes
              de la historia y la cultura. Sus festivales tradicionales, la
              arquitectura colonial y la hospitalidad de su gente la convierten
              en un lugar especial para visitar. Además, la gastronomía de la
              región es única, destacándose por platillos como el vigorón y el
              indio viejo.
            </Typography>
            <Typography
              variant="paragraph"
              className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
            >
              Si eres un aventurero, puedes explorar el majestuoso volcán San
              Cristóbal o relajarte en las playas de aguas cristalinas en Corinto.
              Chinandega tiene algo para todos: historia, cultura y naturaleza.
            </Typography>
            <Typography
              variant="paragraph"
              className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
            >
              Chinandega tiene una población de aproximadamente 441,897 habitantes. 
              La población se distribuye en trece municipios, entre los cuales la cabecera departamental es la ciudad de Chinandega. 
              En cuanto a la religión predominante, la mayoría de los habitantes de Chinandega practican el cristianismo,
              especialmente la fe católica. Esto se refleja en las festividades locales, como las fiestas patronales en honor a Santa Ana, 
              que se celebran en julio con actividades religiosas y culturales.
            </Typography>
          </div>

          {/* Sección de imagen */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <img
              src="https://i.ytimg.com/vi/BjUs9PL6_0I/maxresdefault.jpg"
              alt="chinandega1"
              className="w-full lg:w-[300px] lg:h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
            />
          </div>
        </div>

        <Typography
          variant="paragraph"
          className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Chinandega es un departamento ubicado en el noroeste de Nicaragua, en la región del Pacífico, 
          con una extensión territorial de aproximadamente 4,926 km². 
          Limita al norte con Nueva Segovia y Honduras, al sur con León y el Océano Pacífico, 
          al este con León y al oeste con el Golfo de Fonseca. Su territorio es mayormente plano, 
          aunque cuenta con elevaciones importantes como el volcán San Cristóbal, el más alto del país. 
          El clima es cálido y seco, lo que favorece la agricultura, siendo una de las principales zonas productoras de caña de azúcar,
          maní y banano en Nicaragua.
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          La gastronomía de Chinandega es rica y variada, destacándose por el uso de ingredientes locales como el maíz, 
          el plátano y los mariscos. Entre sus platillos más representativos se encuentran el vigorón, 
          que combina yuca cocida, chicharrón y ensalada de repollo; el guiso de chilote, preparado con maíz tierno, 
          queso y crema; y la sopa de queso, una especialidad de Semana Santa hecha con queso frito, masa de maíz y leche de coco. 
          También es popular el pescado frito con tajadas, gracias a la cercanía con la costa, además del indio viejo,
          un guiso espeso con carne desmenuzada y achiote. Otros platos tradicionales incluyen la sopa de albóndigas, 
          el relleno de mondongo y los deliciosos postres como las rosquillas y perrerreques, elaborados a base de maíz y panela. 
          Esta combinación de sabores refleja la identidad culinaria de la región y su arraigada tradición gastronómica.
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Además de promocionar los distintos lugares turísticos que ofrece Chinandega, 
          también se aprovechara la pagina web para mostrar la diversa cultura que tiene el lugar, 
          así como enseñar a los diferentes personajes históricos que tienen raíces chinandeganas. 
          De esta manera pudiendo mostrar todos los aspectos que Chinandega tiene para ofrecer.
          Aprovechando la página web, también se presentara la problemática del descuido y contaminación 
          del medio ambiente en esta misma, esto, con el fin de concientizar a las personas de cuidar el medio ambiente, 
          aparte de presentar la problemática se le añadirá algunas recomendaciones sencillas que cualquier ciudadano puede aplicar, 
          de esta manera apoyando al cuido del medio ambiente.
        </Typography>
      </div>
    </div>
  );
};

export default Inicio;
