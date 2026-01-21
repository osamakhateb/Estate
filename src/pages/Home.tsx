import PropertyCard from '../components/ui/PropertyCard';
import { propertiesData } from '../data/propertiesData';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="
        max-w-[1596px] 
        mx-auto 
        py-16
        px-4
        sm:px-6
        lg:px-8
        xl:px-20
        2xl:px-0
      ">
        <div className="
          grid
          grid-cols-1          
          md:grid-cols-2       
          xl:grid-cols-3        
          gap-6                
          xl:gap-8            
        ">
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