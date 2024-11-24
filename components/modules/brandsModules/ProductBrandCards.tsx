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
    name: "Anna de Codorniu Brut Blanc de Blancs",
    description: "Is a pure, lively, and feminine sparkling wine.Crafted as a tribute to the last member of the Codorniu family to bear the surname. This Cava is emblematic. It combines Chardonny with three classical cava varieties - Parellada, Macabeo, and Xarel-lo. The result? Delicate aromas, unmistakable freshness, and a unique character that dance on the palate!",
    price: "₦48,000",
  },
  {
    name: "Codorniu Vintage Brut",
    description: " Exhibits a beautiful pale straw-yellow color with fine, integrated bubbles and a persistent crown. On the nose, primary varietal aromas of citrus and almond blossom intertwine with bakery notes (such as brioche) and hints of nuts, derived from its extended aging process. A delightful choice for any occasion!",
    price: "₦48,000",
  },
  {
    name: "Anna de Codorniu Ice Rose",
    description: "Is a delightful and refreshing Cava that invites you to celebrate life. Here's a brief description: This unique rosé combines the pinot Noir Variety with Chardonnay, resulting in a highly intense fragrance and flavor f red fruits. Imagine the enticing aromas of raspberries, strawberries, and cherries, all wrapped in a pale cherry-red hue. For the perfect serve, follow these three steps: Chill your bottle of Anna de Codorniu Ice Rosé. Add three ice cubes and, if desired, a couple of red berries to a balloon glass. Pour over Anna de Codorniu Ice Rosé. Whether you're sipping it on the rocks, pairing it with red fruits, or creating daring gastronmic contrasts, this Cava is a delightful choice. Cheers to celebrating life!",
    price: "₦102,000",
  },
  {
    name: "Anna de Codorniu Brut Rosé",
    description: "Is a Vibrant and seductive Cava, showcasing the beauty of pinot Noir in sparkling rosé form. With a lvely pink hue, it offers aromas of red berries and a hint of floral notes, leading to a palate that is fresh, lively, and elegantly balanced. Deicate cherry color with strawberry tones, fine and persistent bubbles, and hints of green apple makes it a delightful choice for wine enthusiasts",
    price: "₦102,000",
  },
  {
    name: "Calmo-legaris-Vino De Lagrima Nocturno 2017",
    description: " Is a remarkable Ribera del Duero wine produced exclusively in exceptional vintages. Crafted by Bodegas Legaris, this red wine is made from grapes sourced from five different geographical areas, resulting in an elegant and genuine expression. Expect rich and intense flavors, with notes of dark fruit, toasty oak, and a touch of dark chocolate on the finish. It`s a wine to savor slowly and appreciate it`s depth and character",
    price: "₦262,500",
  },
  {
    name: "Codorniu Be Frizz Bubbly Rosé",
    description: "Is a delightful sparkling wine from Spain. Crafted with a blend of Shiraz/Syrah, Cabernet Sauvignon, and Grenache. It offers fine, smooth bubbles and fresh, bright aromas. This rosé is perfect for those who enjoy life and the smell pleasure of the Mediterranean lifestyle.",
    price: "₦48000",
  },
  {
    name: "Codorniu Be Frizz Bubbly White",
    description: "Is a delightful sparkling wine from Catalunya, Spain. With a pale straw-yellow color andd fine continuous bubbles. It offers prominent aromas of green apple, bergamot orange, and broom. The palate is very pleasant, fresh, and balanced, leaving a long fruity finish. Perfect for those who appreciate life´s small pleasures!",
    price: "₦48000",
  },
  {
    name: "Nuviana Brut Rosado",
    description: "Is a delightful Cava from spain, made with a blend of monastrell, Trepat, and Garnacha grapes. This sparkling wine boasts 29 mentions of red fruit notes, offering a vibrant and fruity experience on the palate",
    price: "₦36,000",
  },
  {
    name: "Mont-ferrant Brut Rosé",
    description: "Is a captivating Cava from the Penedés regin in Spain. Unlike other Cavas,the first must is obtained through a brief maceration of the must with the grape skins, enriching its aromas. Expect a dark red color with jam-like strawberry and raspberry scents. On the palate, it is full, round,and reminiscent of black cherry soda - delightful and unique Spanish rosé Cava crafted from Garnacha an Monastrell grpes.",
    price: "₦60,000",
  },
  {
    name: "Parxet Brut Rosé",
    description: "Is a delightful Cava crafted from 100% Pinot Noir grapes. Its intense aromas of red fruits, strawberries and raspberries stand out on the nose. Serve this sparkling wine as an aperitif or at any celebratin, and its red bubbles will earn you a reputation as the best of hosts",
    price: "₦54,000",
  },
  {
    name: "La Vicalanda Reserva 2016",
    description: "Refreshing and delightful for any occasion.",
    price: "₦111,000",
  },
  {
    name: "Finca El Rubio",
    description: "Refreshing and delightful for any occasion.",
    price: "₦154,000",
  },

  {
    name: "Royal Carlton Brut",
    description: "Bold flavors with a hint of agave.",
    price: "₦69,000",
  },



  {
    name: "Bach Extrisimo Brut Rose",
    description: "Bold flavors with a hint of agave.",
    price: "₦42,000",
  },

  {
    name: "Bach Rosado Can",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦48,000",
  },

  {
    name: "Codorniu Zero",
    description: "Bold flavors with a hint of agave.",
    price: "₦57,000",
  },

  {
    name: "La Sonatina Albarino 2022",
    description: "Bold flavors with a hint of agave.",
    price: "₦75,000",
  },


  {
    name: "Brut Rose Mont-ferrant",
    description: "A premium drink for special moments.",
    price: "₦48,000",
  },

  {
    name: " Parxet Brut",
    description: "A premium drink for special moments.",
    price: "₦66,000",
  },
  {
    name: "Nuviana Brut",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦36,000",
  },

  {
    name: "Calmo-legaris-Vine De",
    description: "A premium drink for special moments.",
    price: "₦262,500",
  },

  {
    name: "Codorniu Spiritz Orange",
    description: "Crisp and fruity, perfect for celebrations.",
    price: "₦48,000",
  },

  {
    name: "Bach Extrisimo Brut Rose",
    description: "Bold flavors with a hint of agave.",
    price: "₦42,000",
  },

  {
    name: "Calmo-legaris-Vine De",
    description: "A premium drink for special moments.",
    price: "₦262,500",
  },

  {
    name: "Codorniu Zero",
    description: "Bold flavors with a hint of agave.",
    price: "₦57,000",
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
  "/images/Bach brut Rose wine.jpeg",
  "/images/Bach Rosado Can.jpeg",
  "/images/Cordoniu Zero.jpeg",
  "/images/LaSonata.jpeg",
  "/images/Mont-ferrant-brut-reserva.jpeg",
  "/images/ParxetBrutReserva.jpeg",
  "/images/BrutNuvianaCava.jpeg",
  "/images/Calmo.jpeg",
  "/images/Cordorniu can.jpeg",
  "/images/Bach brut Rose wine.jpeg",
  "/images/CalmoLegaris.jpeg",
  "/images/Cordoniu Zero.jpeg",
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
    <div className="wrapper bg-black mb-[-32]">
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
         

      <div className="product-container grid grid-cols-1 md:grid-cols-4 gap-4">
  {products.map((product, index) => (
    <div
      className="product-card flex border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
      key={index}
    >
      {/* Left Section */}
      <div className="product-left w-2/5 flex flex-col items-center">
        {/* Product Image */}
        <Image
          src={product.image}
           alt={product.name}
           width={500}  
           height={150}
           className="product-image w-full object-cover"
            />

        {/* Product Info (Name, Price, Button) */}
        <div className="product-info w-full p-1 text-center">
          <h4 className="product-name text-[10px] font-semibold text-gray-800">
            {product.name}
          </h4>
          <p className="product-price text-red-600 text-[10px] mt-1">
            {product.price}
          </p>
          <button className="add-to-cart-btn bg-red-500 text-white mt-1 py-1 px-2 text-[9px] rounded-md hover:bg-red-600 w-full block">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="product-description w-3/5 p-2 text-gray-700 text-[9px] leading-tight">
        <p>{product.description}</p>
      </div>
    </div>
  ))}
</div>














    </div>
  );
};

export default Brands;
