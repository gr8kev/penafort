import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "./Brands.css"; // Import your updated CSS file

interface Product {
  brand: string;
  name: string;
  image: string;
  description: string;
  supermarketPrice: string;
  tradeFairPerBottle: string;
  tradeFairCartonPrice: string;
}

const brands = [
  { 
    name: "Codorniu", 
    description: "Rich and smooth taste from aged barrels.", 
    supermarketPrice: "4800", 
    tradeFairPerBottle: "4500", 
    tradeFairCartonPrice: "4000 * 12 = 48000" 
  },
  { 
    name: " Codorniu Vintage Brut", 
    description: "A premium drink for special moments.", 
    supermarketPrice: "10,400", 
    tradeFairPerBottle: "9,500", 
    tradeFairCartonPrice: "8000 * 6 = 48,000" 
  },
  { 
    name: "Anna de Codorniu Brut Blanc", 
    description: "Bold flavors with a hint of agave.", 
    supermarketPrice: "22,100", 
    tradeFairPerBottle: "sell:19,000, remit:18,000", 
    tradeFairCartonPrice: "17,000 * 6 = 102,000" 
  },
  { 
    name: "Anna de Codorniu Brut Rose", 
    description: "Refreshing and delightful for any occasion.", 
    supermarketPrice: "22,100", 
    tradeFairPerBottle: "sell:19,000, remit:18,000", 
    tradeFairCartonPrice: "17,000 * 6 = 102,000" 
  },
  { 
    name: "Calmo-legaris-Vine De", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "113,750", 
    tradeFairPerBottle: "sell:102,000 remit:100,000", 
    tradeFairCartonPrice: "87,500 * 3 = 262,500" 
  },
  { 
    name: "Bach Rose (can)", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "4,800", 
    tradeFairPerBottle: "4,500", 
    tradeFairCartonPrice: "4,000 * 12 = 48,000" 
  },

  { 
    name: "Bach Rose (can)", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "4,800", 
    tradeFairPerBottle: "4,500", 
    tradeFairCartonPrice: "4,000 * 12 = 48,000"
  },

  { 
    name: "Nuviana brut", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "7,800", 
    tradeFairPerBottle: "7,500", 
    tradeFairCartonPrice: "6000 * 6 = 36,000"
  },
  { 
    name: "Brut Rose Mont-ferrant", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "10,400", 
    tradeFairPerBottle: "9,500", 
    tradeFairCartonPrice: "8000 * 6 = 48,000" 
  },
  { 
    name: "Parxet Brut Rose", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "11,700", 
    tradeFairPerBottle: "sell:10,500 remit:10,000", 
    tradeFairCartonPrice: "9,000 * 6 = 54,000" 
  },

  { 
    name: "La Vicalanda Reserva 2016", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "24,050", 
    tradeFairPerBottle: "sell:20,500 remit:19,500", 
    tradeFairCartonPrice: "18,500 * 6 = 111,000" 
  },

  { 
    name: "Finca El Rubio", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "32,500", 
    tradeFairPerBottle: "sell:31,000 remit:30,000", 
    tradeFairCartonPrice: "29,500 * 6 = 154,000" 
  },

  { 
    name: "Royal Carlton Brut", 
    description: "Crisp and fruity, perfect for celebrations.", 
    supermarketPrice: "14,950", 
    tradeFairPerBottle: "13,000", 
    tradeFairCartonPrice: "11,500 * 6 = 69,000" 
  },
  
];

const images = [
  "/images/Codorniu.jpeg",
  "/images/VintageCodorniu.jpeg",
  "/images/AnnaCodorniu.jpeg",
  "/images/AnnaDeCodorniuBrut.jpeg",
  "/images/CalmoLegaris.jpeg",
  "/images/CodorniuCan.jpeg",
  "/images/CodorniuCan2.jpeg",
  "/images/Nuviana.jpeg",
  "/images/Mont-ferrant.jpeg",
  "/images/Parxet.jpeg",
  "/images/LAvicalandaReserva.jpeg",
  "/images/FincaElRubio.jpeg",
  "/images/RoyalCarlton jpeg.jpeg",
];

const products: Product[] = Array.from({ length: 25 }, (_, index) => {
    const brand = brands[index % brands.length];
    return {
      brand: brand.name,
      name: brand.name, // Corrected here
      image: images[index % images.length],
      description: brand.description,
      supermarketPrice: brand.supermarketPrice,
      tradeFairPerBottle: brand.tradeFairPerBottle,
      tradeFairCartonPrice: brand.tradeFairCartonPrice,
    };
  });

const Brands: React.FC = () => {
    return (
      <div className="wrapper">
        {/* Carousel Section */}
        <div className="mt-14">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/images/wineBanner1.png"
                  alt="Slide 1"
                  className="d-block w-100"
                  layout="responsive"
                  width={1200}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/wineBanner2.png"
                  alt="Slide 2"
                  className="d-block w-100"
                  layout="responsive"
                  width={1200}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/wineBanner3.png"
                  alt="Slide 3"
                  className="d-block w-100"
                  layout="responsive"
                  width={1200}
                  height={500}
                />
              </div>
            </div>
  
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  
        {/* Products Section */}
        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">Supermarket Price: #{product.supermarketPrice}</p>
                <p className="product-price">Trade Fair Price: #{product.tradeFairPerBottle}</p>
                <p className="product-price">Trade Fair Carton Price: #{product.tradeFairCartonPrice}</p>
              </div>
              <div className="product-description">
                {/* Description will still slide up on hover */}
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Brands;
