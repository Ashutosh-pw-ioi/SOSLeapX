import { Play } from 'lucide-react';
import { useState } from 'react';
import DemoModal from './DemoModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#E68C32] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4A460] rounded-l-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 mt-[70px]">
              <div className="flex space-x-4 text-white bg-white/30 text-500 w-fit px-4 py-2 rounded-full shadow-lg mt-[-30px]">
                Powered by PW SOS
              </div>
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Fueling Bharat's Entrepreneurs with 
                  <span className=" text-black"> Execution, Not Just GYAN</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  ❝LeapX is built on a simple belief, startups need real-time problem solving partners rather than just advisors. That's the gap we are aspiring to fill❞
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="group bg-white text-[#E68C32] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F4A460] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Explore LeapX</span>
                </button>
              </div>
            </div>

            
            <div className="relative">
              <div className="mb-[-80px] w-full h-full">
                  <img
                      src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/73eb7125-6504-4fdf-90ef-4601bf39b10e.png"
                      alt='Founders of Physics Wallah'
                  />  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;