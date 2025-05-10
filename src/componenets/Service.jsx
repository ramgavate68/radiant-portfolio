import ProductCard from './ProductCard';

const products = [
  {
    title: 'Salt Dosing Systems',
    description: 'Salt control system ensuring flavor accuracy and process efficiency.',
    images: ['/images/Product-1.jpg', '/images/Product-1-2.jpg'],
  },
  {
    title: 'Pressure Vessel For Pharma',
    description: 'Safe containment of substances for pharma with pressure control.',
    images: ['/images/pressure1.jpg', '/images/pressure2.jpg'],
  },
  {
    title: 'Stainless Steel Storage Tank',
    description: 'Storage for liquids and chemicals built to hygienic standards.',
    images: ['/images/tank1.jpg', '/images/tank2.jpg'],
  },
  {
    title: 'Mixing Vessels',
    description: 'Efficient mixing of liquids and powders for pharma industry.',
    images: ['/images/mix1.jpg', '/images/mix2.jpg', '/images/mix3.jpg'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
