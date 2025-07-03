import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

const Experts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('tech');

  const experts = [
    {
      name: 'Gopal Sharma',
      designation: 'COO at PW',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/62baf27a-2f8f-4289-93a3-dc9a559d5eaf.png',
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Janishar Ali',
      designation: 'Head of Program at PWIOI',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662',
      linkedin: '#',
      category: 'tech'
    },
    {
      name: 'Prakash Nimbalkar',
      designation: 'Head of Program at PWIOI',
     image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nimbalkar-min.JPG?updatedAt=1749631912481',
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Dr. Sapna Nisbaiya',
      designation: 'Strategic Academic Head at PWIOI',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/sapna-min.JPG?updatedAt=1749837456863',
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Raunaq Mustafa',
      designation: 'GM, Program Head at PW SOS',
      image:'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d73443e5-a742-4290-b60c-d469ccc35ae2.png', 
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Soumen Banerjee',
      designation: 'GM at PW SOS',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/dbd25a79-9044-40cb-ab9a-e0f513e43743.png',
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Aditya Nema',
      designation: 'Business Consultant',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      category: 'management'
    },
    {
      name: 'Anurag Tiwari',
      designation: 'Product Manager at PWIOI',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFLWlQYiT0C8A/profile-displayphoto-shrink_400_400/B56ZaHJhemGQAg-/0/1746024143286?e=1756339200&v=beta&t=KI6xR-BHC4w-3Dt8-IYWoERN5KFX4VEXplRzIvnn_30',
      linkedin: '#',
      category: 'tech'
    },
    {
      name: 'Syed Zabi Ulla',
      designation: 'Java Mentor at PWIOI',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Syed%20Zabi%20-%20Syed%20Zabi%20Ulla%20(1)-min.JPG?updatedAt=1749837457137',
      linkedin: '#',
      category: 'tech'
    },
    {
      name: 'Saurabh Moharikar',
      designation: 'Data Scientist',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/saurabh-min.JPG?updatedAt=1749837457042',
      linkedin: '#',
      category: 'tech'
    },
    {
      name: 'Satya Sai Neerukonda',
      designation: 'DSA Mentor at PWIOI',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/satyasai-min.JPG?updatedAt=1749836127534',
      linkedin: '#',
      category: 'tech'
    }
  ];

  const filteredExperts = experts.filter(expert => expert.category === activeFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleFilterChange = (filter: 'tech' | 'management') => {
    setActiveFilter(filter);
    // Reset scroll position when filter changes
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="experts" className="bg-[#E68C32] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Execution Experts</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Meet our talented team of professionals who bring expertise and innovation to every project
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => handleFilterChange('tech')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === 'tech'
                  ? 'bg-white text-[#E68C32] shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/50'
              }`}
            >
              Tech Experts
            </button>
            <button
              onClick={() => handleFilterChange('management')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === 'management'
                  ? 'bg-white text-[#E68C32] shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/50'
              }`}
            >
              Management Experts
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#F4A460] hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#F4A460] hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredExperts.map((expert, index) => (
              <div
                key={`${expert.category}-${index}`}
                className="group bg-white rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform min-w-[280px] flex-shrink-0"
              >
                <div className="relative mb-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                  <p className="text-[#E68C32] font-semibold mb-2">{expert.designation}</p>
                  
                  <a
                    href={expert.linkedin}
                    className="inline-flex items-center justify-center bg-[#E68C32] p-3 rounded-full hover:bg-[#F4A460] transition-colors duration-300 transform"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;