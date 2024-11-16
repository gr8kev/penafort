import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "./Brands.css"; // Import your updated CSS file

interface Product {
  brand: string;
  name: string;
  image: string;
  description: string;
  price: string; // Updated to a single price field
}

const brands = [
  {
    name: "Codorniu",
    description: "Rich and smooth taste from aged barrels.",
    price: "₦4,800",
  },
  {
    name: "Codorniu Vintage Brut",
    description: "A premium drink for special moments.",
    price: "₦10,400",
  },
  {
    name: "Anna de Codorniu Brut Blanc",
    description: "Bold flavors with a hint of agave.",
    price: "₦22,100",
  },
  {
    name: "Anna de Codorniu Brut Rose",
    description: "Refreshing and delightful for any occasion.",
    price: "₦22,100",
  },
  {
    name: "Calmo-legaris-Vine De",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦113,750",
  },
  {
    name: "Bach Rose (can)",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦4,800",
  },
  {
    name: "Nuviana brut",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦7,800",
  },
  {
    name: "Brut Rose Mont-ferrant",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦10,400",
  },
  {
    name: "Parxet Brut Rose",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦11,700",
  },
  {
    name: "La Vicalanda Reserva 2016",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦24,050",
  },
  {
    name: "Finca El Rubio",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦32,500",
  },
  {
    name: "Royal Carlton Brut",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦14,950",
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
    name: brand.name,
    image: images[index % images.length],
    description: brand.description,
    price: brand.price,
  };
});

const Brands: React.FC = () => {
  return (
    <div className="wrapper bg-black">
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
                priority
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
              <p className="product-price">{product.price}</p>
            </div>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            {/* Add to Cart Button */}
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
