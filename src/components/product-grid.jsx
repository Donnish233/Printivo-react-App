import ProductCard from "./product-card";

function Grid() {
  return (
    <>
      <div className="c-products-preview content-container mx-auto py-14 px-28 bg-white w-screen">
        <div className="c-preview__header flex align-center justify-between">
          <h3 className="font-dm w-64 h-16 text-3xl font-extrabold text-gray-800 sm:text-3xl">
            Popular Products
          </h3>
          <a className="font-sf sm:text-base text-sm" href="/all-products">
            See All Products
          </a>
        </div>
        <div className="c-preview__main mt-6 grid grid-cols-4 gap-10">
          <ProductCard
            image="images/two-sided-business-cards-by-printivo.png"
            altName="Two-sided Business Cards"
            price="15,100"
            quantity="100"
          />
          <ProductCard
            image="images/flyer-1sided.png"
            altName="A5 flyers (Single Sided)"
            price="25,800"
            quantity="100"
          />
          <ProductCard
            image="images\social-media--15.png"
            altName='Round Stickers (3.5" Diameter)'
            price="17,000"
            quantity="100"
          />
          <ProductCard
            image="images\social-media--16.png"
            altName="Simple Mugs"
            price="4,800"
            quantity="1"
          />
          <ProductCard
            image="images/postcard.jpg"
            altName="Postcards (A6)"
            price="22,300"
            quantity="50"
          />
          <ProductCard
            image="images/big rollup banner.png"
            altName="Roll Up Banners (Big Base)"
            price="65,500"
            quantity="1"
          />
          <ProductCard
            image="images/product-5-(1).png"
            altName="A2 Posters"
            price="71,100"
            quantity="100"
          />
          <ProductCard
            image="images/trifold-brochure-printing.png"
            altName="Trifold Brochures"
            price="47,500"
            quantity="100"
          />
          <ProductCard
            image="images/id-card.png"
            altName="Landscape ID Cards"
            price="4,500"
            quantity="1"
          />
          <ProductCard
            image="images/White-tshirt.png"
            altName="Off White T-shirts"
            price="6,000"
            quantity="1"
          />
          <ProductCard
            image="images/paper-bag.png"
            altName="A4 Branded Paper Bags"
            price="115,280"
            quantity="100"
          />
          <ProductCard
            image="images/courier-bag.jpeg"
            altName="A4 Courier Bags"
            price="27,500"
            quantity="100"
          />
        </div>
      </div>
    </>
  );
}

export default Grid;