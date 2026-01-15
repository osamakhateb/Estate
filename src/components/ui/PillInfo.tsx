import bedIcon from '../../../public/assets/icons/Bedroom.svg';
import bathIcon from '../../../public/assets/icons/Bathroom.svg';
import locationIcon from '../../../public/assets/icons/Villa.svg';

interface PillInfoProps {
  bedrooms: number;
  bathrooms: number;
  location: string;
}
const PillInfo = ({ bedrooms, bathrooms, location }: PillInfoProps) => {
  return (
    <div className="flex items-center gap-3 w-full overflow-x-auto mb-4">
  <div className="flex items-center gap-2 px-4 py-2 bg-[var( --color-gray-10)] border border-gray-800 rounded-full whitespace-nowrap">
    <img src={bedIcon} alt="Bedrooms" className="w-5 h-5" />
    <span className="text-sm text-white font-medium">{bedrooms}-Bedroom</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 bg-[var( --color-gray-10)] border border-gray-800 rounded-full whitespace-nowrap">
    <img src={bathIcon} alt="Bathrooms" className="w-5 h-5" />
    <span className="text-sm text-white font-medium">{bathrooms}-Bathroom</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 bg-[var( --color-gray-10)] border border-gray-800 rounded-full whitespace-nowrap">
    <img src={locationIcon} alt="Location" className="w-5 h-5" />
    <span className="text-sm text-white font-medium truncate">{location}</span>
  </div>
</div>

  );
};

export default PillInfo;
