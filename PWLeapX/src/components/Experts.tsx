import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight,Linkedin} from "lucide-react";

const FoundersSection = () => {
  const scrollRef = useRef(null);
  const [category, setCategory] = useState("tech");

  const founders = [
    {
      name: "Janishar Ali",
      title: "VP,Ex- founder Curious jr",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/Janishar_Ali_Anwar_vhenm4.jpg",
      backText: "Vice President PhysicsWallah | Ex-Founder CuriousJr (Acquired by PhysicsWallah) | Ex-Founder MindOrks (Largest Java Community)",
      category: "tech",
    },
     {
      name: "Himanshu Shekhar",
      title: "Director",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Himanshu_Shekhar_ufdqok.jpg",
      backText: "Business leader | 10+ yrs across ops, rev growth & talent | Builds at the crossroads of tech, product & people",
      category: "tech",
    },
    {
      name: "Anurag Tiwari",
      title: "Product Manager",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752517778/_Anurag_Tiwari_m62y1l.svg",
      backText: "AGM @ Physics Wallah | Tech-savvy leader | Passionate about building & scaling products & programs",
      category: "tech",
    },
    {
      name: "Nitin Manjunath",
      title: "Software enginner",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916666/NITIN_M_wr0ici.jpg",
      backText: "Regional President & Product Evangelist | Ex-Swire Group | Drove $42M APAC growth @ Amazon | Opened S. America markets | Retail & Biz Dev Pro",
      category: "tech",
    },
    {
      name: "Shubham Gautam",
      title: "Founder @ EnjoyAlgorithms",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/SHUBHAM_GAUTAM_dd7qyd.jpg",
      backText: "Founder @ EnjoyAlgorithms | Professor @ PW Institute of Innovation | Founder @EnjoyMathematics | Super 30 | IIT BHU",
      category: "tech",
    },
    {
      name: "Saurabh Moharikar",
      title: "PG - Data Science",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/SAURABH_MOHARIKAR_ubp8yy.jpg",
      backText: "Business Ops leader (10+ yrs) with deep ML & analytics expertise | Specializes in translating strategy into data-backed execution",
      category: "tech",
    },
    {
      name: "Syed Zabi Ulla",
      title: "Java & DSA Mentor",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916665/SYED_ZABI_ULLA_gbhmh5.jpg",
      backText: "Mentor @ PW | Trainer @ Jio | Ex-Unacademy | Full Stack Java Instructor (Gen India Cert.) | HackerRank Gold | CodeChef Contributo",
      category: "tech",
    },
    {
      name: "Kaibalya Biswal",
      title: "Data Science & ML ",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/KAIBALYA_BISWAL__gzbush.jpg",
      backText: "Ex- Boost Sol 2years of experience as Data scientist",
      category: "tech",
    },
    {
      name: "Gopal Sharma",
      title: "COO PW",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Gopal_Sharma_v0yfsp.jpg",
      backText: "COO, Physics Wallah | IIT-BHU Gold Medalist | Ex-Ola, Mu Sigma, Avail | Blending ops with curiosity to reshape education",
      category: "management",
    },
    {
      name: "Raunaq Mustafa",
      title: "GM, Program Head",
      company: "Physics Wallah",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d73443e5-a742-4290-b60c-d469ccc35ae2.png",
      backText: "GM, Program Head @ PW SOS",
      category: "management",
    },
    {
      name: "Amrit Raj",
      title: "Advisory |Startupsl GTM|",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882059/1663932068913_deji6i.jpg",
      backText: "10+ yrs in Strategy & Gen Mgmt | Ex-GoI Advisor | TFI Fellow | IIM-B, BIT | Built across EdTech, Infra, Policy, Startups & Nonprofits",
      category: "management",
    },
    {
      name: "Prakash Nimbalkar",
      title: "Head - (E- Cell)",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/PRAKASH_NIMBALKAR_wduufa.jpg",
      backText: "GTM & Startup Advisor | Mentor @ MeitY, Wadhwani, NASSCOM | Marketing Consultant",
      category: "management",
    },
    {
      name: "Dr. Sapna Nibsaiya",
      title: "Phd, Brand Equity",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916662/Dr._Sapna_Nibsaiya_yv7fpt.jpg",
      backText: "Program Leader | National Head | CA Trainer | Strategy & Economics Specialist | Consultant & SME Expert",
      category: "management",
    },    
    {
      name: "Pankaj Kumar Jha",
      title: "Director - Ops",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751881472/120A7602_veqpyo.jpg",
      backText: "Customer Experience & Ops Leader | Proven track record in Startups | Skilled in Ops Mgmt, Training, MIS & Risk Control",
      category: "management",
    },
    {
      name: "Aditya Nema",
      title: "Business Consultant",
      company: " ",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882060/1748720082720_yge5qd.jpg",
      backText: "Strategist | Ex-Shark Tank India (1500+ pitches, 100+ founders) | Built ventures in PropTech & Wellness | Growth, Fundraising & Ops Specialist",
      category: "management",
    }, 
    {
      name: "Anukul Nitin Narkhede",
      title: "Sr. Manager",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882062/120A7614_feac7g.jpg",
      backText: "Sr. Manager @ PW IOI | Founder @ Solvedout (50K+ downloads) | EdTech Ops & Strategy Expert | Ex-Startup Consultant",
      category: "management",
    },  
    {
      name: "Vishal Hampiholi",
      title: "Sales Strategist",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1752140613/Vishal_sir_image_ydqyoc.svg",
      backText: "Quality & Training Manager @ PW | LSSGB Certified | Ex-Great Learning, UNext, Unacademy & HDB Financial",
      category: "management",
    },
    

    {
      name: "Ashutosh Tiwari",
      title: "Founding Team",
      company: "PW LeapX",
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752414082/Ashutosh_Tiwari_uuyqqj.svg",
      backText: "Founding Team Member @ PW LeapX",
      category: "poc",
      link: "https://www.linkedin.com/in/ashutosh-tiwari-97024a2a1/",
      email: "saurabhprasad@pwioi.com"
    },
    {
      name: "Rishabh Jain",
      title: "Founding Team",
      company: "PW LeapX",
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752414083/Rishabh_Jain_uk6ajq.svg",
      backText: "Founding Team Member @ PW LeapX",
      category: "poc",
      link: "https://www.linkedin.com/in/rishabh-jain-9a62052a1/",
      email: "saurabhprasad@pwioi.com"
    },
    {
      name: "Vikas Bhansali",
      title: "Head- Corporate Partnership & Career Excellence",
      company: "Physics Wallah",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFEVXRFd7Q1Xg/profile-displayphoto-shrink_400_400/B56ZbS2fJ.GoAo-/0/1747294222002?e=1757548800&v=beta&t=PZzOJdZ1_3HSqvW8jMSsWFTYGBk5PMsL8YCKtY5n6ss",
      backText: "Head- Corporate Partnership & Career Excellence @Physics Wallah",
      category: "poc",
      link: "https://www.linkedin.com/in/vikasbhansali/",
      email: "vikash@pwioi.com"
    }, 
    {
      name: "Kaiful Wara",
      title: "Senior Manager - Lead",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752517778/Kaiful_Wara_ti6bt5.svg",
      backText: "Senior Manager - Lead @Physics Wallah",
      category: "poc",
      link: "https://www.linkedin.com/in/kaifulwara/",
      email: "kaifulwara@pwioi.com"
    },
    {
      name: "Saurabh Prasad",
      title: "Functional Lead - Career Services",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752414087/Saurabh_Prasad_mavqbb.svg",
      backText: "Functional Lead - Career Services @Physics Wallah",
      category: "poc",
      link: "https://www.linkedin.com/in/saurabh-prasad/",
      email: "saurabhprasad@pwioi.com"
    },  
    
  ];

  const filteredFounders = founders.filter((f) => f.category === category);

 const scrollLeft = () => {
      const container = scrollRef.current as HTMLDivElement | null;
      if (container) {
        container.scrollTo({
          left: container.scrollLeft - 270,
          behavior: "smooth",
        });
      }
    };

    const scrollRight = () => {
      const container = scrollRef.current as HTMLDivElement | null;
      if (container) {
        container.scrollTo({
          left: container.scrollLeft + 270,
          behavior: "smooth",
        });
      }
    };
  return (
    <section className="bg-[#fefbf5] px-4 md:px-10 py-20" id="experts">
      <h2 className="section-title">Our Execution Experts</h2>
      <p className="section-subtitle">
        Meet our talented team of professionals who bring expertise and innovation to every project
      </p>

      <div className="button-group">
        <button
          className={category === "tech" ? "active" : ""}
          onClick={() => setCategory("tech")}
        >
          Tech Expert
        </button>
        <button
          className={category === "management" ? "active" : ""}
          onClick={() => setCategory("management")}
        >
          Management Expert
        </button>
        <button
          className={category === "poc" ? "active" : ""}
          onClick={() => setCategory("poc")}
        >
          Your POC
        </button>
      </div>

      <div className="scroll-wrapper">
        <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="scroll-container" ref={scrollRef}>
          {filteredFounders.map((founder, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={founder.image} alt={founder.name} />
                  <div className="info">
                    <h3 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{founder.name}</h3>
                    <p>{founder.title}</p>
                    <p style={{ color: "#555", fontSize: "0.9rem" }}>{founder.company}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <p style={{ fontSize: "0.95rem" }}>{founder.backText}</p>
                  {founder.category === "poc" && founder.link && (
                    <a href={founder.link} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>
      </div>

      <style>{`
        .flip-card {
          background-color: transparent;
          width: 250px;
          height: 320px;
          perspective: 1000px;
          flex: 0 0 auto;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .flip-card-front {
          background: #fef3c7;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flip-card-front img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          padding: 10px;
          border-radius: 15px;  
        }

        .flip-card-front .info {
          padding: 1rem;
        }

        .flip-card-back {
          background: linear-gradient(135deg, rgb(244, 167, 74), rgb(236, 158, 23));
          color: white;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .flip-card-back::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }

        .flip-card-back p {
          position: relative;
          z-index: 1;
          line-height: 1.5;
        }

        .flip-card-back a {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: white;
          font-size: 1.5rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

          :hover {
            color:rgb(7, 132, 148);
          }
        }

        

        .scroll-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .scroll-container {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 1rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
          flex: 1;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .scroll-btn {
          background: #E68C32;
          color: white;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        .scroll-btn:hover {
          background: #d67a28;
          transform: scale(1.1);
        }

        .scroll-btn:active {
          transform: scale(0.95);
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }

        .button-group {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .button-group button {
          background: #fef3c7;
          border: none;
          padding: 0.6rem 1.2rem;
          margin: 0 0.5rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .button-group .active {
          background: #E68C32;
          color: white;
        }

        @media (max-width: 768px) {
          .scroll-btn {
            width: 40px;
            height: 40px;
          }
          
          .scroll-wrapper {
            gap: 0.5rem;
          }
        }
        @media (max-width: 480px) {
          .button-group button {
            margin-bottom: 1rem;
          }
        }
      `}</style>

    </section>
  );
};

export default FoundersSection;