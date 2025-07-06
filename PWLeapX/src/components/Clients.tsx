// import React from 'react';

// const Clients: React.FC = () => {
//   return (
//     <section className="bg-[#fefbf5] py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold text-black mb-6">Who We Work With</h2>
//         <p className="text-gray-700 text-lg max-w-5xl mx-auto mb-12">
//           At LeapX, we collaborate with early-stage startups, aspiring founders, and grassroots innovators who are driven by purpose but may lack access to structured guidance and execution support. Whether you're shaping your first idea, building an MVP, or facing operational roadblocks post-launch, if you're committed to building something impactful, LeapX is your execution partner.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center max-w-4xl mx-auto">
//           <button className="w-full max-w-[220px] bg-[#F4A460] text-black text-lg font-semibold py-4 px-4 rounded shadow  cursor-text">
//             Early-Stage Startups
//           </button>
//           <button className="w-full max-w-[220px] bg-[#F4A460] text-black text-lg font-semibold py-4 px-4 rounded shadow  cursor-text">
//             Aspiring Founders
//           </button>
//           <button className="w-full max-w-[220px] bg-[#F4A460] text-black text-lg font-semibold py-4 px-4 rounded shadow  cursor-text">
//             Grassroots Innovators
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;



const Clients = () => {
  const clientTypes = [
    {
      title: 'For Early-Stage Startups',
      description: 'Turn your vision into a scalable reality with expert-backed support. We help you move from idea to execution seamlessly.',
      features: ['Validate and shape your vision', 'Build MVPs faster', 'Overcome early hurdles'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'For Aspiring Founders',
      description: 'Start your journey with the right guidance and resources. LeapX gives you the clarity to launch with impact.',
      features: ['Turn ideas into action', 'Access expert guidance', 'Launch with confidence'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'For Grassroots Innovators',
      description: 'Empowering changemakers with hands-on execution support. No matter your background, your innovation matters.',
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

        <div className="grid lg:grid-cols-3 gap-8">
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
