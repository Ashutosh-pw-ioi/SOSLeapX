

const Services = () => {
  return (
    <section className="bg-[#fefbf5] py-[100px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative py-[120px] px-4 text-black overflow-hidden">
            {/* Left Floating Labels */}
            <div className="absolute left-4 top-10 flex flex-col gap-4">
              <span className=" bg-[#FFF5D8] text-black px-4 py-2 rounded-md rotate-[-10deg] shadow-lg font-semibold w-max">
                📊 Data Science & Analytics
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-2 rounded-md rotate-[-6deg] shadow-lg font-semibold w-max">
                🤖 Digital Marketing With AI
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-2 rounded-md rotate-[-3deg] shadow-lg font-semibold w-max">
                💻 Programming Courses
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
                🧠 Product Management
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-2 rounded-md rotate-[1deg] shadow-lg font-semibold w-max">
                🧠 Product Management
              </span>
            </div>

            {/* Right Floating Labels */}
            <div className="absolute right-4 top-10 flex flex-col gap-4 items-end">
              <span className=" bg-[#FFF5D8] text-black px-4 py-3 rounded-md rotate-[10deg] shadow-lg font-semibold w-max">
                👨‍💻 Software Development
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
                🏦 Banking & Finance
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
                🔐 Cybersecurity Courses
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-3 rounded-md rotate-[6deg] shadow-lg font-semibold w-max">
                🏦 Banking & Finance
              </span>
              <span className=" bg-[#FFF5D8] text-black px-4 py-3 rounded-md rotate-[3deg] shadow-lg font-semibold w-max">
                🔐 Cybersecurity Courses
              </span>
            </div>

            {/* Center Content */}
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Where We Can Help You</h1>
              <p className="text-gray-600 mb-8 text-lg">Gain real-world job ready skills for the future.</p>
              <button className="bg-[#E68C32] hover:bg-[#F4A460] text-white font-semibold py-3 px-6 rounded-lg transition-transform hover:scale-105 shadow-lg">
                Get Started →
              </button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Services;