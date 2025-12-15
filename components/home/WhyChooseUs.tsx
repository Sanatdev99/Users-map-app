"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const items = [
    {
     
      title: "Insurance Coverage and Safety",
      desc:
        "United Logistics Inc is fully licensed, insured, and partnered with trusted auto carriers. Your vehicle is always transported safely by experienced professionals.",
      bullets: [
        "FMCSA Licensed",
        "BBB Accredited",
        "DOT Certified",
        "Insured Partners",
      ],
      image: "/images/Insurance.jpg",
    },
    {
     
      title: "4+ Years Experience",
      desc:
        "More than 4 years of proven performance with thousands of vehicles delivered nationwide — supported by outstanding ratings across major platforms.",
      bullets: [
        "4+ Years in Business",
        "16,000+ Vehicles Delivered",
        "Nationwide Coverage",
        "4.9-Star Rated",
      ],
      image: "/images/experience.jpg",
    },
    {
     
      title: "Expert Team",
      desc:
        "Our logistics specialists ensure a smooth, reliable, and transparent shipping process every step of the way.",
      bullets: ["Professional Team", "Dedicated Agents", "Clear Communication"],
      image: "/images/Team.jpg",
    },
    {
      
      title: "Competitive Pricing",
      desc:
        "Accurate quotes, no hidden fees, and industry-backed pricing tools ensure you always receive a fair and affordable transport cost.",
      bullets: ["Transparent Pricing", "Instant Quotes", "No Hidden Fees"],
      image: "/images/pricing.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            United Logistics Inc?
          </span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Driven by Experience, Powered by Innovation — Your Trusted Auto Transport Partner
        </p>
      </motion.div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT BLOCK */}
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative">
                <p className="absolute -top-12 left-0 text-7xl md:text-8xl font-extrabold text-gray-200 select-none">
                  
                </p>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                {item.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 text-[16px]"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE BLOCK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${i % 2 === 1 ? "md:order-1" : ""}`}
            >
              <div className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-sm border border-white/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
