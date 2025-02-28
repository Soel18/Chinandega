// src/components/HistoricalFigure.tsx
import React from "react";

interface HistoricalFigureProps {
  name: string;
  description: string;
  imageUrl: string;
}

const HistoricalFigure: React.FC<HistoricalFigureProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="p-6 bg-green-100 min-h-screen shadow-2xl rounded-lg transition-all ease-in-out duration-300">
    <div className="flex items-center bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto border-2 border-yellow-900 hover:bg-yellow-50">
      <div className="flex-1 bg-green-100">
        <h2 className="text-2xl font-bold text-green-600">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-lg ml-4 border-2 border-green-500 transition-all ease-in-out duration-300" />
    </div>
    </div>
  );
};

export default HistoricalFigure;
