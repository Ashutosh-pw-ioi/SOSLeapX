
import { Lightbulb, TrendingUp, Cog, Megaphone, Shield, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development and implementation guidance.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Data-driven approaches to accelerate your business growth and market expansion.'
    },
    {
      icon: Cog,
      title: 'Process Improvement',
      description: 'Streamline operations and enhance efficiency through proven methodologies.'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Modern marketing strategies that drive engagement and conversions.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your business.'
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Expert guidance for international market entry and expansion strategies.'
    }
  ];

  return (
    <section className="bg-[#FFF5D8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Can Help You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across multiple domains to provide comprehensive support for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#F4A460]"
              >
                <div className="bg-[#E68C32] p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#F4A460] transition-colors duration-300 group-hover:scale-110 transform">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E68C32] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;