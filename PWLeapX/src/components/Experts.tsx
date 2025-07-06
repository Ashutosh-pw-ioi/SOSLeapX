import React, { useEffect, useRef, useState } from "react";

const FoundersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<"tech" | "management">("tech");

  const founders = [
    {
      name: "Sumeet Hanagandi",
      title: "CEO",
      company: "Sample Set LLC",
      image: "https://media.istockphoto.com/id/1309075603/photo/young-business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=CBxjjyvD3TYGGoB8pWCVT5RocqxB1V6Iu4ZCY-eoIYc=",
      backText: "Data-driven strategies transforming industries across continents.",
      category: "tech",
    },
    {
      name: "PlaySuper",
      title: "",
      company: "",
      image: "https://media.istockphoto.com/id/1276966601/photo/beautiful-business-woman-is-writing-something-down-while-sitting-in-the-office-desk.jpg?s=612x612&w=0&k=20&c=VIo1xEjt_X38oZRAZrdOfYQK7buXGZWAarjcN4HXMwY=",
      backText: "India's first Gaming Commerce company turning in-game rewards into reality.",
      category: "tech",
    },
    {
      name: "Manan Sahai",
      title: "CEO",
      company: "Beyond Veda",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/saurabh-min.JPG?updatedAt=1749837457042",
      backText: "Leading healthcare revolution with Ayurveda and AI.",
      category: "tech",
    },
     {
      name: "Sumeet Hanagandi",
      title: "CEO",
      company: "Sample Set LLC",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662",
      backText: "Data-driven strategies transforming industries across continents.",
      category: "tech",
    },
    {
      name: "PlaySuper",
      title: "",
      company: "",
      image: "https://media.istockphoto.com/id/1293906513/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=QQ-CE-ayo31H52ic0S1O62m3F2__Y_B82-MKZCS2-RQ=",
      backText: "India's first Gaming Commerce company turning in-game rewards into reality.",
      category: "tech",
    },
    {
      name: "Sumeet Hanagandi",
      title: "CEO",
      company: "Sample Set LLC",
      image: "https://images.unsplash.com/photo-1659100946849-9b8851df6965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZSUyMGltYWdlJTIwcHJvZmVzc2lvbmFsJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      backText: "Data-driven strategies transforming industries across continents.",
      category: "tech",
    },
    {
      name: "PlaySuper",
      title: "",
      company: "",
      image: "https://media.istockphoto.com/id/1308542628/photo/young-business-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=pGz9vgby9CStcjvSX1Oc9rj1XqXn2Yw_5sPS4w5Vy74=",
      backText: "India's first Gaming Commerce company turning in-game rewards into reality.",
      category: "tech",
    },
    {
      name: "Manan Sahai",
      title: "CEO",
      company: "Beyond Veda",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/saurabh-min.JPG?updatedAt=1749837457042",
      backText: "Leading healthcare revolution with Ayurveda and AI.",
      category: "tech",
    },
    {
      name: "PlaySuper",
      title: "",
      company: "",
      image: "https://media.istockphoto.com/id/1309075603/photo/young-business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=CBxjjyvD3TYGGoB8pWCVT5RocqxB1V6Iu4ZCY-eoIYc=",
      backText: "India's first Gaming Commerce company turning in-game rewards into reality.",
      category: "tech",
    },
    {
      name: "Sumeet Hanagandi",
      title: "CEO",
      company: "Sample Set LLC",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662",
      backText: "Data-driven strategies transforming industries across continents.",
      category: "tech",
    },
    {
      name: "Manan Sahai",
      title: "CEO",
      company: "Beyond Veda",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/62baf27a-2f8f-4289-93a3-dc9a559d5eaf.png",
      backText: "Leading healthcare revolution with Ayurveda and AI.",
      category: "management",
    },
    {
      name: "Kanav Rishi Kumar",
      title: "Proprietor",
      company: "Woody's Pizzeria",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nimbalkar-min.JPG?updatedAt=1749631912481",
      backText: "Built a thriving food business with unique customer experience.",
      category: "management",
    },
    {
      name: "Tanisha Goyal",
      title: "Founder",
      company: "HR Maven",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/sapna-min.JPG?updatedAt=1749837456863",
      backText: "Empowering organizations with modern HR tools.",
      category: "management",
    },
    {
      name: "Kanav Rishi Kumar",
      title: "Proprietor",
      company: "Woody's Pizzeria",
      image: "https://media.istockphoto.com/id/1489669316/photo/attractive-young-businessman-using-a-digital-tablet-while-standing-in-front-of-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=zL4t0nVba1S7RKdXhcIMXh8ye8-U1DV_ChxbwEG8lG4=",
      backText: "Built a thriving food business with unique customer experience.",
      category: "management",
    },
    {
      name: "Tanisha Goyal",
      title: "Founder",
      company: "HR Maven",
      image: "https://media.istockphoto.com/id/2121827514/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9TOnGlHwC2be_TtbV6WeVf_YPn5dZ24BDVVtRWUrvs=",
      backText: "Empowering organizations with modern HR tools.",
      category: "management",
    },
    {
      name: "Manan Sahai",
      title: "CEO",
      company: "Beyond Veda",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/62baf27a-2f8f-4289-93a3-dc9a559d5eaf.png",
      backText: "Leading healthcare revolution with Ayurveda and AI.",
      category: "management",
    },
    {
      name: "Kanav Rishi Kumar",
      title: "Proprietor",
      company: "Woody's Pizzeria",
      image: "https://media.istockphoto.com/id/1309075603/photo/young-business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=CBxjjyvD3TYGGoB8pWCVT5RocqxB1V6Iu4ZCY-eoIYc=",
      backText: "Built a thriving food business with unique customer experience.",
      category: "management",
    },  
    {
      name: "Tanisha Goyal",
      title: "Founder",
      company: "HR Maven",
      image: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/sapna-min.JPG?updatedAt=1749837456863",
      backText: "Empowering organizations with modern HR tools.",
      category: "management",
    },
    {
      name: "Kanav Rishi Kumar",
      title: "Proprietor",
      company: "Woody's Pizzeria",
      image: "https://media.istockphoto.com/id/1293906513/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=QQ-CE-ayo31H52ic0S1O62m3F2__Y_B82-MKZCS2-RQ=",
      backText: "Built a thriving food business with unique customer experience.",
      category: "management",
    },
    {
      name: "Tanisha Goyal",
      title: "Founder",
      company: "HR Maven",
      image: "https://media.istockphoto.com/id/1276966601/photo/beautiful-business-woman-is-writing-something-down-while-sitting-in-the-office-desk.jpg?s=612x612&w=0&k=20&c=VIo1xEjt_X38oZRAZrdOfYQK7buXGZWAarjcN4HXMwY=",
      backText: "Empowering organizations with modern HR tools.",
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
