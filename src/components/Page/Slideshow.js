import React, { useState, useEffect } from 'react';
import './Home.css';

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="thumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    setIndex((index + 1) % images.length);
  }

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  }

  const images = [
    'https://image.made-in-china.com/2f0j00NaRbKhZfhQoe/Xian-Ke-Lai-High-germination-cyclamen-persicum-seed-cyclamen-Flower-Bulb.webp',
    'https://png.pngtree.com/background/20230612/original/pngtree-close-up-of-red-poinsettia-flowers-picture-image_3182057.jpg',
    'https://agricultural.faharas.net/wp-content/uploads/2022/09/The-right-time-to-plant-a-cymbidium-orchid.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbwLS7UZwKNTzXKYGg0s6k2JnKRojJs9zZHcAZVNMvtCUwhhO7Yu_S4f3aRQL9SAM-tWqpA1-ytuSVHzjBLZ_fXroZ5goa7dAiCZr9hNKkmvUsBODFwn6oIodw08N0OETgvOdQyhyphenhyphen6toA/w1200-h630-p-k-no-nu/DSC06321.jpg',
    'https://www.almrsal.com/wp-content/uploads/2018/01/%D9%86%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%88%D8%B1%D9%83%D9%8A%D8%AF.jpg',
    'https://donyayadonya.com/public/storage/app/1669724845.png',
    'https://cdn.salla.sa/neBKm/iG83w33wpD9aIqm0EvmE3NKFVCma8zzLp6uAx8Z5.jpg',
  ];

  return (
    <div className="slideshow">
      <img className="mainImg" src={images[index]} alt="Slide" />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={images} image={setIndex} index={index} />
    </div>
  )
}

export default Slideshow;