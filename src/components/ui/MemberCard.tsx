/* import React from 'react';
interface MemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="w-[376px] bg-[var(--color-gray-08)] border border-[var(--color-gray-15)] rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:border-[var(--color-primary-60)] hover:shadow-[0_20px_50px_rgba(112,59,247,0.25)]">

      <div className="relative w-full overflow-visible mb-14">
        <div className="rounded-xl overflow-hidden">
          <img src={imageUrl} alt={name} className="w-full h-[300px] object-cover" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 px-6 py-3 rounded-full bg-[var(--color-primary-60)] flex items-center justify-center shadow-xl z-10">
          <img src={"/assets/icons/twitter.svg"} alt="Twitter" className="w-5 h-5" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-1 text-center">{name}</h3>
      <p className="text-[var(--color-gray-60)] text-[16px] mb-6 text-center">{position}</p>

      <button className="w-full flex items-center justify-between bg-[var(--color-gray-10)] hover:bg-[var(--color-gray-15)] rounded-full px-5 py-3 transition group border border-[var(--color-gray-15)]">
        <span className="flex items-center gap-2 text-[22px]">
          <span>Say Hello 👋</span>
        </span>

        <span className="w-12 h-12 rounded-full bg-[var(--color-primary-60)] -mr-3 flex items-center justify-center transition group-hover:scale-110">
          <img src={"/assets/icons/telegramicon.svg"} alt="Arrow" className="w-7 h-7" />
        </span>
      </button>

    </div>
  );
};

export default MemberCard;
 */











import React from 'react';

interface MemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="
      w-full
      max-w-[350px]       /* زدنا العرض شوي */
      2xl:max-w-[390px]   /* زدنا العرض على 1920px كمان */
      min-w-[280px]
      bg-[var(--color-gray-08)] 
      border border-[var(--color-gray-15)] 
      rounded-2xl p-6 
      flex flex-col items-center 
      transition-all duration-300 
      hover:border-[var(--color-primary-60)] 
      hover:shadow-[0_20px_50px_rgba(112,59,247,0.25)]
    ">

      <div className="relative w-full overflow-visible mb-14">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-[240px] md:h-[260px] xl:h-[285px] 2xl:h-[310px] object-cover" 
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 px-6 py-3 rounded-full bg-[var(--color-primary-60)] flex items-center justify-center shadow-xl z-10">
          <img src={"/assets/icons/twitter.svg"} alt="Twitter" className="w-5 h-5" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-1 text-center">{name}</h3>
      <p className="text-[var(--color-gray-60)] text-[16px] mb-6 text-center">{position}</p>

      <button className="
        w-full 
        flex items-center justify-between 
        bg-[var(--color-gray-10)] 
        hover:bg-[var(--color-gray-15)] 
        rounded-full px-5 py-3 
        transition group 
        border border-[var(--color-gray-15)]
      ">
        <span className="flex items-center gap-2 text-[18px] md:text-[20px] xl:text-[22px]">
          <span>Say Hello 👋</span>
        </span>

        <span className="
          w-10 h-10 md:w-11 md:h-11 xl:w-12 xl:h-12 
          rounded-full 
          bg-[var(--color-primary-60)] 
          -mr-3 
          flex items-center justify-center 
          transition 
          group-hover:scale-110
        ">
          <img src={"/assets/icons/telegramicon.svg"} alt="Arrow" className="w-6 h-6 md:w-7 md:h-7" />
        </span>
      </button>

    </div>
  );
};

export default MemberCard;