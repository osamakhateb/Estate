
import MemberCard from '../components/ui/MemberCard';

const About = () => {
  const teamMembers = [
    {
      name: 'Max Mitchell',
      position: 'Founder',
      imageUrl: "/assets/images/team/member1.webp",
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Real Estate Officer',
      imageUrl: "/assets/images/team/member2.webp",
    },
    {
      name: 'David Brown',
      position: 'Head of Property Management',
      imageUrl: "/assets/images/team/member3.webp",
    },
    {
      name: 'Michael Turner',
      position: 'Legal Counsel',
      imageUrl: "/assets/images/team/member4.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-gray-08)] text-white">
      <section className="
        py-16 
        px-6 
        md:px-12 
        lg:px-20 
        xl:px-20
        2xl:px-[162px]
      ">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
            gap-4 md:gap-6 xl:gap-4  
            justify-items-center
            w-full
            mx-auto
            max-w-[1920px]
          "
        >
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;