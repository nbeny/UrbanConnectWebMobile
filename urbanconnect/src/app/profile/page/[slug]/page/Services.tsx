import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { Plus, Star } from "lucide-react";
import "keen-slider/keen-slider.min.css";

interface Service {
  id: string;
  name: string;
  price: number;
  image?: string;
  icon?: React.ReactNode;
  category?: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2.5, // nombre de slides visibles sur mobile
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 3.5, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 4.5, spacing: 24 } },
    },
    loop: false,
  });

  return (
    <div ref={sliderRef} className="keen-slider py-4">
      {services.map((s) => (
        <div
          key={s.id}
          className="keen-slider__slide flex flex-col items-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 text-center text-black shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          {/* Catégorie */}
          {s.category && (
            <span className="text-xs text-purple-500 font-semibold mb-1">
              {s.category}
            </span>
          )}

          {/* Image ou icône */}
          {s.image ? (
            <img
              src={s.image}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
          ) : (
            <div className="w-full h-24 flex items-center justify-center mb-2 text-purple-500">
              {s.icon || <Star className="w-10 h-10" />}
            </div>
          )}

          <p className="text-sm font-semibold">{s.name}</p>
          <p className="text-xs text-gray-600">{s.price}€</p>
        </div>
      ))}

      {/* Slide ajouter un service */}
      <div className="keen-slider__slide flex flex-col items-center justify-center w-36 bg-white border-2 border-dashed rounded-xl cursor-pointer hover:bg-purple-50 transition-colors duration-200">
        <Plus className="w-6 h-6 text-purple-400" />
        <span className="text-xs text-purple-400 mt-1">Ajouter</span>
      </div>
    </div>
  );
};

export default ServicesCarousel;
