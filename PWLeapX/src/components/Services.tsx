import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  text: string;
  id: string;
}

const Services = () => {
  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services-details?service=${serviceId}`;
  };

  const handleKnowMoreClick = () => {
    window.location.href = '/services-details';
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariantsRight: Variants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const techServices: ServiceItem[] = [
    { text: 'Web & MVP Development', id: 'web-mvp-development' },
    { text: 'Data Analytics & Visualization', id: 'data-analytics-visualization' },
    { text: 'Data Science & Applied AI', id: 'data-science-applied-ai' },
    { text: 'Chatbot Integration & Workflow Automation', id: 'chatbot-integration-workflow-automation' },
    { text: 'Backend Automation & System Integration', id: 'backend-automation-system-integration' },
    { text: 'Tech Planning & Infrastructure Deployment', id: 'tech-planning-infrastructure-deployment' },
  ];

  const managementServices: ServiceItem[] = [
    { text: 'Market Research & Customer Insight', id: 'market-research-customer-insight' },
    { text: 'Go-To-Market & Growth Strategy', id: 'go-to-market-growth-strategy' },
    { text: 'Pricing & Monetization Strategy', id: 'pricing-monetization-strategy' },
    { text: 'Brand Messaging & Positioning', id: 'brand-messaging-positioning' },
    { text: 'Digital Marketing Strategy & Execution', id: 'digital-marketing-strategy-execution' },
    { text: 'Content Creation & Distribution', id: 'content-creation-distribution' },
  ];

  return (
    <>
      <section className="bg-[#FFF5D8] px-4 h-[400px] md:h-[500px] relative overflow-hidden mt-10" id="services">
        <div className="max-w-6xl mx-auto relative text-black">

          {/* Tech Services */}
          <motion.div
            className="hidden md:flex flex-col gap-4 absolute left-4 top-10 z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {techServices.map((item, i) => (
              <motion.span
                key={item.id}
                className="bg-white px-4 py-2 rounded-md shadow-lg font-semibold w-max cursor-pointer hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 group"
                style={{ rotate: `${[-10, -6, 1, -3, 1, 1][i]}deg` }}
                variants={cardVariantsLeft}
                onClick={() => handleServiceClick(item.id)}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.text}</span>
                <ArrowRight className="w-4 h-4 text-[#E68C32] group-hover:translate-x-1 transition-transform duration-200" />
              </motion.span>
            ))}
          </motion.div>

          {/* Management Services */}
          <motion.div
            className="hidden md:flex flex-col gap-4 items-end absolute right-4 top-10 z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {managementServices.map((item, i) => (
              <motion.span
                key={item.id}
                className="bg-white px-4 py-3 rounded-md shadow-lg font-semibold w-max cursor-pointer hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 group"
                style={{ rotate: `${[6, 10, 3, 3, 6, 10][i]}deg` }}
                variants={cardVariantsRight}
                onClick={() => handleServiceClick(item.id)}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.text}</span>
                <ArrowRight className="w-4 h-4 text-[#E68C32] group-hover:translate-x-1 transition-transform duration-200" />
              </motion.span>
            ))}
          </motion.div>

          {/* Mobile view */}
          <div className="md:hidden flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              className="text-4xl font-bold mb-6 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Where <br /> We Can Help You
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From cutting-edge tech solutions to strategic business growth, we provide comprehensive services to transform your ideas into reality.
            </motion.p>
            <motion.button
              onClick={handleKnowMoreClick}
              className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Desktop center content */}
          <motion.div
            className="relative z-10 text-center max-w-2xl mx-auto py-24 px-2 sm:px-4 hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 leading-snug">
              Where <br /> We Can Help You
            </h1>
            <motion.button
              onClick={handleKnowMoreClick}
              className="bg-[#E68C32] hover:bg-[#f68a6b] text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Ask Section */}
      <section className="bg-[#FFF5D8] px-4 py-1 mb-7">
        <motion.div
          className="max-w-4xl mx-auto border border-[#E68C32]/60 rounded-xl shadow-md p-4 md:p-10 text-center bg-white/70 backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-3xl font-bold text-[#E68C38] mb-4 leading-snug drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What is our Ask?
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-black">NO Equity.</span>{' '}
            <span className="text-black">NO Filters.</span> Just your{' '}
            <span className="text-[#E68C32] font-bold">INTENT</span> to build the next big thing.
          </motion.h2>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
