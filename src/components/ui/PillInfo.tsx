interface PillInfoProps {
  bedrooms: number;
  bathrooms: number;
  location: string;
}

const PillInfo = ({ bedrooms, bathrooms, location }: PillInfoProps) => {
  return (
    <div className="flex items-center gap-2 w-full mb-4 flex-nowrap overflow-x-auto">
      <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gray-10)] border border-gray-800 rounded-full">
        <img src={"/assets/icons/Bathroom.svg"} alt="Bedrooms" className="w-4 sm:w-5 h-4 sm:h-5" />
        <span className="text-xs sm:text-sm text-white font-medium">
          {bedrooms}-Bedroom
        </span>
      </div>

      <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gray-10)] border border-gray-800 rounded-full">
        <img src={"/assets/icons/Bathroom.svg"} alt="Bathrooms" className="w-4 sm:w-5 h-4 sm:h-5" />
        <span className="text-xs sm:text-sm text-white font-medium">
          {bathrooms}-Bathroom
        </span>
      </div>

      <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gray-10)] border border-gray-800 rounded-full">
        <img src={"/assets/icons/Villa.svg"} alt="Location" className="w-4 sm:w-5 h-4 sm:h-5" />
        <span className="text-xs sm:text-sm text-white font-medium truncate max-w-[100px] sm:max-w-[140px]">
          {location}
        </span>
      </div>
    </div>
  );
};

export default PillInfo;
