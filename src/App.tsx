import React from 'react';
import PropertyCard from './components/ui/PropertyCard';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
            <PropertyCard
                title="Seaside Serenity Villa"
                description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood."
                price={550000}
                bedrooms={4}
                bathrooms={3}
                location="California, USA"
                propertyType="Villa"
                propertyId="seaside"
            />
        </div>
    );
};

export default App;
