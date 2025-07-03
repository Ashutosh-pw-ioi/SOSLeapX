
import { Award, TrendingUp, Users, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Success Rate',
      description: 'Projects completed successfully'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries',
      description: 'Global reach and impact'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  return (
    <section className="bg-[#FFF5D8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leaps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The numbers that showcase our commitment to excellence and the impact we've made
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-[#E68C32] to-[#F4A460] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="bg-white p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-[#E68C32]" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.label}
                </h3>
                
                <p className="text-white/90 text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;