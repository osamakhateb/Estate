import React from 'react';

interface MemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="
      h-full
      max-h-[517px]      
      min-h-[280px]
      w-auto
      bg-gray-08
      border border-gray-15
      rounded-2xl p-6 
      flex flex-col items-center 
      transition-all duration-300 
      hover:border-primary-60
      hover:shadow-[0_20px_50px_rgba(112,59,247,0.25)]
    ">

      <div className="relative w-full overflow-visible mb-14">
        <div className="rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto aspect-[316/253] object-cover"
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[76px] h-[52px] rounded-full bg-primary-60 flex items-center justify-center shadow-xl z-10">
          <img
            src={"/assets/icons/twitter.svg"}
            alt="Twitter"
            className="w-6 h-6"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white text-center -mt-2">{name}</h3>
      <p className="text-gray-60 text-[18px] mb-2 mt-1 text-center">{position}</p>

      <button className="
        w-full 
        flex items-center justify-between 
        bg-gray-10
        hover:bg-gray-15
        rounded-full px-5 py-3 
        transition group 
        border border-gray-15
        mt-2
      ">

        <span className="flex items-center font-medium text-[18px]">
          <span>Say Hello 👋</span>
        </span>
        <span className="w-11 h-11 rounded-full bg-primary-60 -mr-3 flex items-center justify-center">
          <img
            src={"/assets/icons/telegramicon.svg"}
            alt="Arrow"
            className="w-5 h-5"
          />
        </span>
      </button>

    </div>
  );
};

export default MemberCard;