import React, { useState } from 'react';
import PillInfo from './PillInfo';

interface PropertyCardProps {
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  propertyType?: string;
  propertyId: 'seaside' | 'metropolitan' | 'cottage';
}

const propertyImages = {
  seaside: '/assets/images/properties/property1.webp',
  metropolitan: '/assets/images/properties/property2.webp',
  cottage: '/assets/images/properties/property3.webp',
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  description,
  price,
  bedrooms,
  bathrooms,
  location,
  propertyType,
  propertyId,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const needsReadMore = description.length > 100;
  const shortDescription = description.substring(0, 100) + '...';

  return (
    <div
      className={`
    bg-[var(--color-gray-08)]
    rounded-xl
    border-2
    ${isExpanded
          ? 'border-[var(--color-primary-60)] shadow-[0_20px_50px_rgba(112,59,247,0.4)] scale-105 z-50'
          : 'border-white shadow-md'
        }
    overflow-hidden
    flex
    flex-col
    w-full
    relative
    transition-all
    duration-500
    ease-in-out
    group
    hover:scale-[1.02]
    hover:shadow-[0_20px_50px_rgba(112,59,247,0.3)]
    md:mx-4  
    lg:mx-0  
  `}
    >
      {isExpanded && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl z-10" />
      )}

      <div
        className="
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          lg:h-[318px]
          mt-4
          lg:mt-10
          mb-3
          lg:mb-8
          overflow-hidden
          rounded-lg
          relative
          mx-auto
          w-[calc(100%-48px)]
          lg:w-full
          lg:max-w-[432px]
        "
      >
        <img
          src={propertyImages[propertyId]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div
        className="
          flex flex-col flex-1
          px-6
          lg:px-10
          pb-6
          lg:pb-10
          relative
          z-20
        "
      >
        {propertyType && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1.5 bg-[var(--color-gray-10)] text-[var(--color-primary-60)] text-sm font-semibold rounded-full border border-[var(--color-gray-10)]">
              {propertyType}
            </span>
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <div className="mb-6">
          <div
            className={`
              text-sm
              sm:text-base
              text-[var(--color-gray-40)]
              leading-relaxed
              transition-all
              duration-500
              ease-in-out
              ${isExpanded
                ? 'line-clamp-none p-4 sm:p-6 bg-[#1a1a1a]/90 rounded-xl shadow-2xl'
                : 'line-clamp-3'
              }
            `}
          >
            {isExpanded ? description : shortDescription}

            {needsReadMore && !isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="ml-2 text-[var(--color-light-90)] hover:text-[var(--color-primary-60)] font-medium text-sm underline"
              >
                Read More
              </button>
            )}
          </div>

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-3 text-[var(--color-primary-60)] hover:text-[var(--color-primary-65)] font-medium text-sm"
            >
              Show Less
            </button>
          )}
        </div>

        <PillInfo bedrooms={bedrooms} bathrooms={bathrooms} location={location} />

        <div className="flex items-center justify-between gap-4 pt-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[var(--color-gray-40)] mb-1">
              Price
            </span>
            <span className="text-2xl font-bold text-white">
              ${price.toLocaleString()}
            </span>
          </div>

          <button
            className="
              shrink-0
              px-6
              py-3
              bg-[var(--color-primary-60)]
              hover:bg-[var(--color-primary-65)]
              text-white
              font-medium
              rounded-lg
              transition-colors
              duration-300
              text-sm
            "
          >
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
