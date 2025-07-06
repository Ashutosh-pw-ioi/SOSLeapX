const Services = () => {
  return (
    <section className="bg-[#FFF5D8] px-4 h-[500px] sm:h-[500px] md:h-[500px] lg:h-[500px] relative overflow-hidden mt-10">
      <div className="max-w-6xl mx-auto relative  text-black">

        {/* Left Floating Labels (hidden on small screens) */}
        <div className="hidden md:flex flex-col gap-4 absolute left-4 top-10 z-0">
          <span className="bg-white px-4 py-2 rounded-md rotate-[-10deg] shadow-lg font-semibold w-max">
            Web & App Development
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[-6deg] shadow-lg font-semibold w-max">
            Data Analytics & Visualization
          </span>
          
          <span className="bg-white px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
            Data Science & Applied AI
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[-3deg] shadow-lg font-semibold w-max">
            Chatbot Integration & Workflow Automation
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
            Backend Automation & System Integration
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
            Tech Planning & Infrastructure Deployment
          </span>
        </div>

        {/* Right Floating Labels (hidden on small screens) */}
        <div className="hidden md:flex flex-col gap-4 items-end absolute right-4 top-10 z-0">
          <span className="bg-white px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
            Market Research & Customer Insight
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[10deg] shadow-lg font-semibold w-max">
            Go-To-Market & Growth Strategy
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
            Pricing & Monetization Strategy
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
            Brand Messaging & Positioning
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
            Digital Marketing Strategy & Execution
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[10deg] shadow-lg font-semibold w-max">
            Content Creation & Distribution
          </span>
          
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto py-24 px-2 sm:px-4">
          <h1 className="text-5xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-snug">
            Where <br /> We Can  Help You
          </h1>
          
          <button className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg">
            Know More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
