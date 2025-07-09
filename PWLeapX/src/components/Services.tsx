import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF5D8] px-4 h-[500px] relative overflow-hidden mt-10">
      <div className="max-w-6xl mx-auto relative text-black">

        {/* Left Floating Labels */}
        <motion.div
          className="hidden md:flex flex-col gap-4 absolute left-4 top-10 z-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 1 } }
          }}
        >
          {[
            "Web & App Development",
            "Data Analytics & Visualization",
            "Data Science & Applied AI",
            "Chatbot Integration & Workflow Automation",
            "Backend Automation & System Integration",
            "Tech Planning & Infrastructure Deployment",
          ].map((text, i) => (
            <motion.span
              key={i}
              className="bg-white px-4 py-2 rounded-md shadow-lg font-semibold w-max"
              style={{ rotate: `${[-10, -6, 1, -3, 1, 1][i]}deg` }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Right Floating Labels */}
        <motion.div
          className="hidden md:flex flex-col gap-4 items-end absolute right-4 top-10 z-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 1 } }
          }}
        >
          {[
            "Market Research & Customer Insight",
            "Go-To-Market & Growth Strategy",
            "Pricing & Monetization Strategy",
            "Brand Messaging & Positioning",
            "Digital Marketing Strategy & Execution",
            "Content Creation & Distribution",
          ].map((text, i) => (
            <motion.span
              key={i}
              className="bg-white px-4 py-3 rounded-md shadow-lg font-semibold w-max"
              style={{ rotate: `${[6, 10, 3, 3, 6, 10][i]}deg` }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="relative z-10 text-center max-w-2xl mx-auto py-24 px-2 sm:px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 leading-snug">
            Where <br /> We Can Help You
          </h1>
          <motion.button
            onClick={() => navigate("/services-in-details")}
            className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
