import React, { useEffect, useRef, useState } from "react";

const FoundersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<"tech" | "management">("tech");

  const founders = [
    {
      name: "Devesh Mishra",
      title: "CTO PW",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751883327/1694026131307_tu3cnu.jpg",
      backText: "Tech leader with 8+ yrs experience | Now CTO @ Physics Wallah | Scaled 2+ startups",
      category: "tech",
    },
    {
      name: "Vineet Govil",
      title: "CTPO PW",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751917211/Screenshot_2025-07-08_010948_nn5gbu.png",
      backText: "CTPO, Physics Wallah | Ex-Viacom18 CTO | Ex-Dish Network India Head | Nasscom Mentor | Advisor to Startups",
      category: "tech",
    },
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
      title: "Directer",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Himanshu_Shekhar_ufdqok.jpg",
      backText: "Business leader | 10+ yrs across ops, rev growth & talent | Builds at the crossroads of tech, product & people",
      category: "tech",
    },
    {
      name: "Anurag Tiwari",
      title: "Product Manager",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751883499/120A2896_pswkax.jpg",
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
      name: "Prakash Nimbalkar",
      title: "Head - (E- Cell)",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/PRAKASH_NIMBALKAR_wduufa.jpg",
      backText: "GTM & Startup Advisor | Mentor @ MeitY, Wadhwani, NASSCOM | Marketing Consultant",
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
      name: "Dr. Sapna Nibsaiya",
      title: "Phd, Brand Equity",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916662/Dr._Sapna_Nibsaiya_yv7fpt.jpg",
      backText: "Program Leader | National Head | CA Trainer | Strategy & Economics Specialist | Consultant & SME Expert",
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
      name: "Imran Rashid",
      title: "Chief Business Officer @ PW",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882059/1689530192943_ztw247.jpg",
      backText: "Chief Business Officer @ PW | EdTech Growth Strategist | Founder @ Aptence | Product Leader with a decade of building impact-driven, data-backed solutions",
      category: "management",
    },
    {
      name: "Aditya Nema",
      title: "Business Consultant",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882060/1748720082720_yge5qd.jpg",
      backText: "trategist | Ex-Shark Tank India (1500+ pitches, 100+ founders) | Built ventures in PropTech & Wellness | Growth, Fundraising & Ops Specialist",
      category: "management",
    },  
    {
      name: "Kaiful Wara",
      title: "Banking & Finance",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882061/1745844028998_f7i9ze.jpg",
      backText: "ACAMS-Certified | AML/KYC & Compliance Pro | 7+ yrs across Banking Ops, Client Reviews & Regulatory Strategy",
      category: "management",
    },
    {
      name: "Vishal Hampiholi",
      title: "Q &  Amanager",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751882061/1732429746537_plyno9.jpg",
      backText: "Quality & Training Manager @ PW | LSSGB Certified | Ex-Great Learning, UNext, Unacademy & HDB Financial",
      category: "management",
    },
    {
      name: "Pankaj Kumar Jha",
      title: "Directer - Ops",
      company: "Physics Wallah",
      image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751881472/120A7602_veqpyo.jpg",
      backText: "Customer Experience & Ops Leader | Proven track record in Startups | Skilled in Ops Mgmt, Training, MIS & Risk Control",
      category: "management",
    },
  ];

  const filteredFounders = founders.filter((f) => f.category === category);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollAmount = 270;

    const scrollInterval = setInterval(() => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [category]);

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
      </div>

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
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .flip-card {
          background-color: transparent;
          width: 250px;
          height: 320px;
          perspective: 1000px;
          flex: 0 0 auto;
          ;
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
          height: 180px;
          object-fit: cover;
          padding:10px;
          border-radius: 15px;  
        }

        .flip-card-front .info {
          padding: 1rem;
        }

        .flip-card-back {
          background-color: #fff;
          color: black;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .scroll-container {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 1rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
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
          background:rgb(238, 107, 25);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default FoundersSection;
