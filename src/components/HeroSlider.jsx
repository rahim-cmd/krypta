import { useState,useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image: "/images/slides/slider-mainbg-001.jpg",
    title: "BIM Consulting Services",
    subtitle: "Smart planning, accurate execution",
    
  },
  {
    image: "/images/slides/slider-mainbg-002.jpg",
    title: "Architectural BIM Solutions",
    subtitle: "Design with precision & clarity",
    
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
           
          </div>
        </div>
      ))}

      <button className="nav prev" onClick={prevSlide}>❮</button>
      <button className="nav next" onClick={nextSlide}>❯</button>
    </div>
  );
}
