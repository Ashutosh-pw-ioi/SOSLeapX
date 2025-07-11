import { motion } from "framer-motion";
import {useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-hot-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Contact: React.FC = () => {
   const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const url = "https://script.google.com/macros/s/AKfycbytCfFDB9NESpdDXu2olm26E8jGyuoSVdaB2-vkwgntYzsbUPYb41Z__gJvgOH69lga/exec";

  const formData = new FormData(form);
  const formBody = new URLSearchParams(formData as any).toString();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  })
  .then(res => res.text())
  .then(data => {
    toast(data);
    setFormSubmitted(true);
    form.reset();
  })
  .catch(err => console.error(err));
};
  return (
    <div id="contact" className="w-full bg-[#fefbf5] px-4 md:px-10 py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-[-50px]">
        {/* Left Form Section */}
        <motion.div
          className="space-y-6"
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

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="">
            <motion.input
              type="text"
              placeholder="Company *"
              name="Company"
              className="w-full p-3 rounded-md bg-gray-50 border"
              variants={fadeIn}
              custom={1}
              required
            />
            <motion.input
              type="text"
              placeholder="Name *"
              name="Name"
              className="w-full p-3 rounded-md bg-gray-50 border"
              variants={fadeIn}
              custom={2}
              required
            />
            <motion.input
              type="email"
              placeholder="Email *"
              name="Email"
              className="w-full p-3 rounded-md bg-gray-50 border"
              variants={fadeIn}
              custom={3}
              required
            />
            <motion.input
              type="tel"
              placeholder="Phone Number *"
              name="Phone"
              className="w-full p-3 rounded-md bg-gray-50 border"
              variants={fadeIn}
              custom={4}
              required
            />

            <motion.button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              variants={fadeIn}
              custom={5}
            >
              Submit
            </motion.button>
          </form>

          {formSubmitted && (
            <p className="text-green-500 mt-4">Form submitted successfully!</p>
          )}
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/a2360798-168e-4e05-a17e-f33988bfaa1e.png"
            alt="Customer Support"
            className="w-full max-w-md h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
