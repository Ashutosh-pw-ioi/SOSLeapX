

const Clients = () => {
  const clientTypes = [
    {
      title: 'For Early-Stage Startups',
      description: 'Turn your vision into a scalable reality with expert-backed support. We help you move from idea to execution seamlessly.',
      features: ['Validate and shape your vision', 'Build MVPs faster', 'Overcome early hurdles'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'For Grassroots Innovators',
      description: 'Empowering changemakers with hands-on execution support. Doesn\'t matter what your background is, your innovation matters.',
      features: ['Get hands-on support', 'Bridge resource gaps', 'Scale your solutions'],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="bg-[#fefbf5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Who We Work With</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => {
            return (
              <div
                key={index}
                className="group bg-[#FFF5D8] rounded p-8 shadow-lg transition-all duration-300 transform border border-gray-100 hover:border-[#F4A460]"
              >
                <>
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
                </>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
