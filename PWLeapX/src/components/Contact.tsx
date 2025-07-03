import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#fefbf5] p-10 shadow-lg">
      {/* Left Form */}
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2
          className="text-3xl font-bold"
          variants={fadeIn}
          custom={0}
        >
          Get in <span className="text-yellow-500">Touch</span>
        </motion.h2>
        <motion.input
          type="tel"
          placeholder="Company *"
          className="w-full p-3 rounded-md bg-gray-50 border"
          variants={fadeIn}
          custom={3}
          required
        />
        <motion.input
          type="text"
          placeholder="Name *"
          className="w-full p-3 rounded-md bg-gray-50 border"
          variants={fadeIn}
          custom={1}
          required
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-50 border"
          variants={fadeIn}
          custom={2}
          required
        />
        <motion.input
          type="tel"
          placeholder="Phone Number *"
          className="w-full p-3 rounded-md bg-gray-50 border"
          variants={fadeIn}
          custom={3}
          required
        />
        
        <div className="relative flex items-center justify-between">
          <motion.button
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          variants={fadeIn}
          custom={4}
        >
          Submit
        </motion.button>

        <motion.div
          className="flex space-x-8 items-center pt-4"
          variants={fadeIn}
          custom={5}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">📞</span>
            <div>
              <p className="text-sm font-medium text-gray-600">PHONE</p>
              <a
                href="tel:+917042333674"
                className="text-yellow-500 hover:underline"
              >
                +91-9481912068
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✉️</span>
            <div>
              <p className="text-sm font-medium text-gray-600">EMAIL</p>
              <a
                href="mailto:studentsuccess@pwioi.com"
                className="text-yellow-500 hover:underline"
              >
                studentsuccess@pwioi.com
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hidden md:block w-full md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/a2360798-168e-4e05-a17e-f33988bfaa1e.png"
          alt="Customer Support"
          className="w-90% h-[400px] ml-auto mr-auto "
        />
      </motion.div>
    </div>
  );
};

export default Contact;
