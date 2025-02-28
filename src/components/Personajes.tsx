// src/Personajes.tsx
import React from "react";
import HistoricalFigure from './HistoricalFigure'; // Importamos el componente

const Personajes: React.FC = () => {
  // Lista de personajes históricos
  const personajes = [
    {
      name: "Salomón Ibarra Mayorga",
      description: "Nació en la ciudad de Chinandega el 8 de septiembre de 1890. Hijo del Doctor Felipe Ibarra abogado y poeta, y de doña Eloísa Mayorga de Ibarra. Su padre fue maestro de Rubén Darío, el cual inició a este desde su niñez en la carrera literaria. En 1918 ganó el concurso para la letra del actual Himno Nacional, cuya música es de un antiguo salmo de la época colonial. En 1918 ganó el concurso para la letra del actual Himno Nacional, cuya música es de un antiguo salmo de la época colonial, adaptada por el compositor Luis Abraham Delgadillo, en el tono de Mi Bemol Mayor, acordado en el Decreto Legislativo No. 39 del 26 de febrero de 1919, pues se quería cambiar el anterior Himno La Patria Amada que se cantaba desde1910. En 1918 ganó el concurso para la letra del actual Himno Nacional, cuya música es de un antiguo salmo de la época colonial. ",
      imageUrl: "https://enel.gob.ni/wp-content/uploads/2017/09/salomn_ibarra.png"
    },
    {
      name: "Rosa Sarmiento (1844-1895), madre de Rubén Darío.",
      description: "Nació en Chinandega en 1844. Hija de Ignacio Sarmiento y de Sixta Alemán. Rosa Sarmiento fue declarada pobre de solemnidad por la municipalidad de Chinandega el 27 de mayo de 1889. Declaró que no tuvo la intención de reclamar la sucesión de su marido, no porque se creyese destituida de derecho, sino porque para ella era más satisfactorio que llevase toda la herencia, su hijo don Rubén. Así lo dio a entender Darío en la carta que le dirigió a su madre, desde San Salvador, el 10 de octubre de 1890. Rosa Sarmiento falleció el 3 de mayo de 1895.",
      imageUrl: "https://enel.gob.ni/wp-content/uploads/2015/07/rosa_sarmiento.png"
    },
    {
      name: "Tino López Guerra",
      description: "Nació en Chinandega, el 20 de julio de 1906, en el occidente del país, siendo sus padres el médico Eduardo López Robelo y doña Celina Guerra Lizano, nieta materna del presidente de Costa Rica Saturnino Lizano Gutiérrez. Tuvo seis hermanos. Se casó con Consuelo Rosales con quien procreó dos hijos: Constantino y María del Socorro. En 1927 se marchó a los Estados Unidos donde residió por varios años, luego regresó a su patria y compuso muchos corridos, su género musical más característico, que han dado a conocer a Nicaragua por todo el mundo. Falleció en Managua, el 19 de julio de 1967. ",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0c-b8wbkCKHDbBiipZzdF9_4W_o7bYwRCgg&s"
    },
    {
        name: "Vicente Padilla",
        description: "Vicente Padilla es un exjugador de béisbol nicaragüense, nacido el 28 de enero de 1977 en Chinandega. Fue un lanzador destacado en las Grandes Ligas de Béisbol (MLB), jugando para equipos como los Philadelphia Phillies, Arizona Diamondbacks, Texas Rangers y Boston Red Sox. Debutó en la MLB en 1999 y a lo largo de su carrera acumuló más de 100 victorias y 1,000 ponches. Conocido por su poderosa recta y su estilo de juego agresivo, Padilla se convirtió en un referente para el béisbol nicaragüense y un modelo a seguir para jóvenes atletas.",
        imageUrl: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/218894/headshot/67/current"
    }
  ];

  return (
    <div className="p-6 bg-green-100 min-h-screen shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-500">Personajes Históricos</h1>
      <div className="space-y-6">
        {personajes.map((personaje, index) => (
          <HistoricalFigure
            key={index}
            name={personaje.name}
            description={personaje.description}
            imageUrl={personaje.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Personajes;


/* 
Nació en la ciudad de Chinandega el 8 de septiembre de 1890. Hijo del Doctor Felipe
Ibarra abogado y poeta, y de doña Eloísa Mayorga de Ibarra. Su padre fue maestro de Rubén Darío,
el cual inició a este desde su niñez en la carrera literaria. En 1918 ganó el concurso para la letra del actual Himno Nacional,
cuya música es de un antiguo salmo de la época colonial. En 1918 ganó el concurso para la letra del actual Himno Nacional, 
cuya música es de un antiguo salmo de la época colonial, adaptada por el compositor Luis Abraham Delgadillo, en el tono de Mi Bemol Mayor, 
acordado en el Decreto Legislativo No. 39 del 26 de febrero de 1919, pues se quería cambiar el anterior Himno La Patria Amada que se cantaba desde1910. 
En 1918 ganó el concurso para la letra del actual Himno Nacional, cuya música es de un antiguo salmo de la época colonial.
*/ 

/*
Nació en Chinandega en 1844. Hija de Ignacio Sarmiento y de Sixta Alemán. 
Rosa Sarmiento fue declarada pobre de solemnidad por la municipalidad de Chinandega el 27 de mayo de 1889.
Declaró que no tuvo la intención de reclamar la sucesión de su marido, no porque se creyese destituida de derecho,
sino porque para ella era más satisfactorio que llevase toda la herencia, su hijo don Rubén. Así lo dio a entender 
Darío en la carta que le dirigió a su madre, desde San Salvador, el 10 de octubre de 1890. Rosa Sarmiento falleció el 3 de mayo de 1895.
*/

/*
Nació en Chinandega, el 20 de julio de 1906, en el occidente del país, siendo sus padres el médico 
Eduardo López Robelo y doña Celina Guerra Lizano, nieta materna del presidente de Costa Rica Saturnino Lizano Gutiérrez. Tuvo seis hermanos. 
Se casó con Consuelo Rosales con quien procreó dos hijos: Constantino y María del Socorro. En 1927 se marchó a los Estados Unidos donde residió por varios años,
luego regresó a su patria y compuso muchos corridos, su género musical más característico, que han dado a conocer a Nicaragua por todo el mundo. Falleció en Managua, el 19 de julio de 1967.
*/ 

/*
Vicente Padilla es un exjugador de béisbol nicaragüense, nacido el 28 de enero de 1977 en Chinandega. 
Fue un lanzador destacado en las Grandes Ligas de Béisbol (MLB), jugando para equipos como los 
Philadelphia Phillies, Arizona Diamondbacks, Texas Rangers y Boston Red Sox. Debutó en la MLB en 1999 y
a lo largo de su carrera acumuló más de 100 victorias y 1,000 ponches. Conocido por su poderosa recta y su estilo de juego agresivo, Padilla se convirtió en un referente para el béisbol nicaragüense y un modelo a seguir para jóvenes atletas.
*/