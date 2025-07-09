
const AboutUs = () => {
  const cards = [
    {
      title: 'Who We Are',
      description: 'An execution-first initiative by PW School of Startups, built to empower early-stage and grassroots entrepreneurs across Bharat. From MVPs to operations to tech scaling, we don’t just advise, we execute with you. No equity. No filters. Just real support where it counts - If you are serious about building, we’re building with you.',
    },
    {
      title: 'Our Vision',
      description: 'At LeapX, our vision is to empower Bharat’s next generation of entrepreneurs as the go-to platform for on-ground startup support. We aim to build an ecosystem where innovation thrives through execution, giving every committed founder the mentorship and support to create something meaningful and sustainable.',
    },
    {
      title: 'Our Mission',
      description: 'At LeapX, we aim to help over 100 startups in the coming year bring their ideas to life with clarity, courage, and execution support.Our mission is rooted in impact, supporting founders who are building solutions, creating jobs, and shaping a better tomorrow.',
    },
    
  ];

  return (
    <section id="about" className="bg-[#FFF5D8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            // const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform border border-gray-100 hover:border-[#F4A460]"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
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