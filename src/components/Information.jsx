import React from 'react';

const PropertyCard = () => {
  return (
    <section className="bg-black text-white p-8">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-400">PROYECTO</h2>
          <h1 className="text-4xl font-semibold">MARCHANO MAURO</h1>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-400">TIPOLOGÍA</h2>
          <p className="text-lg font-light">Vivienda unifamiliar</p>
          <h2 className="text-sm font-semibold text-gray-400 mt-4">UBICACIÓN</h2>
          <p className="text-lg font-light">Country Palos Verdes – Rosario</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-400">SUPERFICIE TOTAL</h2>
            <p className="text-lg font-light">330 M<sup>2</sup></p>
            <h2 className="text-sm font-semibold text-gray-400 pt-5">PROCESO</h2>
            <p className="text-lg font-light">TERMINADA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyCard;
