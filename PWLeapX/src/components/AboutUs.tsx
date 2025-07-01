import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const AboutUs = () => {
  const cards = [
    {
      title: 'Who We Are',
    //   icon: Users,
      description: 'We are a team of passionate professionals dedicated to helping businesses achieve their full potential through strategic guidance and expert execution.',
    },
    {
      title: 'Our Mission',
    //   icon: Target,
      description: 'To empower businesses worldwide by connecting them with the right expertise at the right time, enabling sustainable growth and innovation.',
    },
    {
      title: 'Our Vision',
    //   icon: Eye,
      description: 'To become the global leader in professional services, creating a world where every business has access to expert knowledge and strategic support.',
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover who we are, what drives us, and where we're heading together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            // const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#F4A460]"
              >
                {/* <div className="bg-[#E68C32] p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#F4A460] transition-colors duration-300">
                  {/* <IconComponent className="h-8 w-8 text-white" /> */}
                {/* </div> */} 
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;