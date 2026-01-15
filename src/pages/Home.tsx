import PropertyCard from '../components/ui/PropertyCard';
import { propertiesData } from '../data/propertiesData';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="max-w-[1596px] mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
          {propertiesData.map((property) => (
            <PropertyCard
              key={property.propertyId}
              {...property}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
