import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="text-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our {' '}
            <span className="relative inline-block">LeapX</span>
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Get into the shoes of a PGP student, join a roundtable with an alumni,
            attend an admissions info session in your city, and get all your queries answered by our team.
          </p>
          <button className=" bg-orange-500 group relative inline-flex text-lg items-center px-6 py-3 border-2 border-orange-400 text-black rounded-full hover:bg-orange-400 hover:text-black transition duration-300">
            Explore More
            <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">↗</span>
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 order-2"
        >
          <div className="rounded-xl overflow-hidden border-2 border-orange-400 shadow-lg">
            <img
              src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1751659251/PW_Leap_X_fxqdkj.svg"
              alt="Masters' Union Experience"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
