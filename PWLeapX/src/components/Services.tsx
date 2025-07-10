import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const handleServiceClick = (serviceId:string) => {
    // Navigate to services details with service ID
    window.location.href = `/services-details?service=${serviceId}`;
  };

  const handleKnowMoreClick = () => {
    // Navigate to services details page without specific service (shows all)
    window.location.href = '/services-details';
  };

  return (
    <section className="bg-[#FFF5D8] px-4 h-[500px] relative overflow-hidden mt-10" id="services">
      <div className="max-w-6xl mx-auto relative text-black">

        {/* Left Floating Labels - Tech Services */}
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
            { text: "Web & MVP Development", id: "web-mvp-development" },
            { text: "Data Analytics & Visualization", id: "data-analytics-visualization" },
            { text: "Data Science & Applied AI", id: "data-science-applied-ai" },
            { text: "Chatbot Integration & Workflow Automation", id: "chatbot-integration-workflow-automation" },
            { text: "Backend Automation & System Integration", id: "backend-automation-system-integration" },
            { text: "Tech Planning & Infrastructure Deployment", id: "tech-planning-infrastructure-deployment" },
          ].map((item, i) => (
            <motion.span
              key={i}
              className="bg-white px-4 py-2 rounded-md shadow-lg font-semibold w-max cursor-pointer hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 group"
              style={{ rotate: `${[-10, -6, 1, -3, 1, 1][i]}deg` }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              onClick={() => handleServiceClick(item.id)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.text}</span>
              <ArrowRight className="w-4 h-4 text-[#E68C32] group-hover:translate-x-1 transition-transform duration-200" />
            </motion.span>
          ))}
        </motion.div>

        {/* Right Floating Labels - Management Services */}
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
            { text: "Market Research & Customer Insight", id: "market-research-customer-insight" },
            { text: "Go-To-Market & Growth Strategy", id: "go-to-market-growth-strategy" },
            { text: "Pricing & Monetization Strategy", id: "pricing-monetization-strategy" },
            { text: "Brand Messaging & Positioning", id: "brand-messaging-positioning" },
            { text: "Digital Marketing Strategy & Execution", id: "digital-marketing-strategy-execution" },
            { text: "Content Creation & Distribution", id: "content-creation-distribution" },
          ].map((item, i) => (
            <motion.span
              key={i}
              className="bg-white px-4 py-3 rounded-md shadow-lg font-semibold w-max cursor-pointer hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 group"
              style={{ rotate: `${[6, 10, 3, 3, 6, 10][i]}deg` }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              onClick={() => handleServiceClick(item.id)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.text}</span>
              <ArrowRight className="w-4 h-4 text-[#E68C32] group-hover:translate-x-1 transition-transform duration-200" />
            </motion.span>
          ))}
        </motion.div>

        {/* Mobile Service Cards */}
        <div className="md:hidden flex flex-col gap-3 px-4 pt-16 pb-20">
          <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              // Tech Services
              { text: "Web & MVP Development", id: "web-mvp-development", category: "Tech" },
              { text: "Data Analytics & Visualization", id: "data-analytics-visualization", category: "Tech" },
              { text: "Data Science & Applied AI", id: "data-science-applied-ai", category: "Tech" },
              { text: "Chatbot Integration & Workflow Automation", id: "chatbot-integration-workflow-automation", category: "Tech" },
              { text: "Backend Automation & System Integration", id: "backend-automation-system-integration", category: "Tech" },
              { text: "Tech Planning & Infrastructure Deployment", id: "tech-planning-infrastructure-deployment", category: "Tech" },
              // Management Services
              { text: "Market Research & Customer Insight", id: "market-research-customer-insight", category: "Management" },
              { text: "Go-To-Market & Growth Strategy", id: "go-to-market-growth-strategy", category: "Management" },
              { text: "Pricing & Monetization Strategy", id: "pricing-monetization-strategy", category: "Management" },
              { text: "Brand Messaging & Positioning", id: "brand-messaging-positioning", category: "Management" },
              { text: "Digital Marketing Strategy & Execution", id: "digital-marketing-strategy-execution", category: "Management" },
              { text: "Content Creation & Distribution", id: "content-creation-distribution", category: "Management" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white px-4 py-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 group"
                onClick={() => handleServiceClick(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{item.text}</span>
                    <ArrowRight className="w-4 h-4 text-[#E68C32] group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <span className="text-xs text-[#E68C32] font-medium">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <motion.div
          className="relative z-10 text-center max-w-2xl mx-auto py-24 px-2 sm:px-4 hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 leading-snug">
            Where <br /> We Can Help You
          </h1>
          <motion.button
            onClick={handleKnowMoreClick}
            className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Mobile Know More Button */}
        <div className="md:hidden text-center pb-8">
          <motion.button
            onClick={handleKnowMoreClick}
            className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Services;