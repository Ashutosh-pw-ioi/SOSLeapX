
const Clients = () => {
  const clientTypes = [
    {
      title: 'Enterprise Corporations',
      description: 'Large-scale organizations seeking strategic transformation and operational excellence.',
      features: ['Fortune 500 Companies', 'Global Market Leaders', 'Industry Innovators'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Growing Startups',
      description: 'Fast-growing startups ready to scale their operations and expand their market reach.',
      features: ['Tech Startups', 'Funded Companies', 'Scale-up Ventures'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Small & Medium Businesses',
      description: 'Established SMBs looking to optimize processes and drive sustainable growth.',
      features: ['Local Businesses', 'Regional Players', 'Family Enterprises'],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="bg-[#FFF5D8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Who We Work With</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            We partner with organizations of all sizes, from ambitious startups to established enterprises
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              > 
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {client.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {client.description}
                </p>

                <div className="space-y-2">
                  {client.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#E68C32] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;