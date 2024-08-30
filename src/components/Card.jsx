import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tsvParse } from 'd3-dsv';

const Card = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Propiedades.tsv')
      .then((response) => response.text())
      .then((text) => {
        const parsedData = tsvParse(text);
        setData(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al leer el archivo TSV:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/Project/${id}`);
  };

  return (
    <section className='flex pt-3'>
      {data.map((item, index) => (
        <article
          key={index}
          className='relative w-full cursor-pointer'
          onClick={() => handleCardClick(item.ID)}
        >
          <img
            src={item.Images}
            alt={item.Title}
            className='absolute inset-0 object-cover h-56 w-96 rounded-2xl'
          />
          <aside className='relative z-10 p-6 text-white'>
            <span className='bg-green-500 px-1 rounded-xl text-sm'>{item.Status}</span>
            <h2 className='font-bold pt-1 text-lg text-balance'>
              {item.Title}
            </h2>
          </aside>
        </article>
      ))}
    </section>
  );
};

export default Card;
