import React from 'react';

interface PriceValueProps {
  value: number;
}

const PriceValue: React.FC<PriceValueProps> = ({ value }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);

  return (
    <div>
      <div className="text-lg text-gray-500 mb-2 font-medium">Price</div>
      <div className="text-[32px] font-bold text-gray-900">
        {formattedPrice}
      </div>
    </div>
  );
};

export default PriceValue;