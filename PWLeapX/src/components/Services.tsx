const Services = () => {
  return (
    <section className="bg-[#FFF5D8] py-10 px-4">
      <div className="max-w-6xl mx-auto relative overflow-hidden text-black">

        {/* Left Floating Labels (hidden on small screens) */}
        <div className="hidden md:flex flex-col gap-4 absolute left-4 top-10 z-0">
          <span className="bg-white px-4 py-2 rounded-md rotate-[-10deg] shadow-lg font-semibold w-max">
            📊 Data Analytics
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[-6deg] shadow-lg font-semibold w-max">
            🤖 Data Science & AI
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[-3deg] shadow-lg font-semibold w-max">
            💻 Web Development 
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
            🧠 App Development
          </span>
          <span className="bg-white px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
            🧠 Product Management
          </span>
        </div>

        {/* Right Floating Labels (hidden on small screens) */}
        <div className="hidden md:flex flex-col gap-4 items-end absolute right-4 top-10 z-0">
          <span className="bg-white px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
            🏦 Strategy Development
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[10deg] shadow-lg font-semibold w-max">
            👨‍💻 Market Research
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
            🔐 Digital Marketing
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
            🔐 Business Analytics
          </span>
          <span className="bg-white px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
            🏦 Product Development
          </span>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto py-24 px-2 sm:px-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Where We Can Help You
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            Gain real-world job ready skills for the future.
          </p>
          <button className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-lg transition-transform hover:scale-105 shadow-lg">
            Know More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
