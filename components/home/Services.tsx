"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
	const plans = [
		{
			title: "Accelerated Open Carrier",
			price: "$1105",
			badge: "EXPEDITED",
			badgeColor: "bg-gray-700",
			badgeTextColor: "text-white",
			features: [
				"Faster Pickup-Delivery For Open Transport",
				"Use your preferred dates for expedited shipping",
			],
			buttonColor: "bg-blue-600",
		},
		{
			title: "Standard Open Carrier",
			price: "$855",
			badge: "BEST",
			badgeColor: "bg-red-400",
			badgeTextColor: "text-white",
			features: [
				"Lowest Price, Best Availability For Open Transport",
				"Required flexibility for pickup timing",
			],
			buttonColor: "bg-blue-600",
		},
		{
			title: "Enclosed Carrier",
			price: "$1530",
			badge: "PREMIUM",
			badgeColor: "bg-green-500",
			badgeTextColor: "text-white",
			features: [
				"Best protection from outside elements with enclosed transport",
				"High-value vehicle protection during the shipping process",
			],
			buttonColor: "bg-blue-600",
		},
	];

	return (
		<section className="py-20 bg-white">
			{/* HEADER */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center max-w-3xl mx-auto mb-16"
			>
				<h2 className="text-4xl font-extrabold text-black">
					Super Competitive Auto Transport Pricing
				</h2>

				<p className="text-gray-500 text-xl mt-4 leading-relaxed">
					Transparent, simple, and flexible auto transport pricing across three service tiers.
				</p>
			</motion.div>

			{/* PRICING CARDS */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
				{plans.map((plan, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.15 }}
						viewport={{ once: true }}
						whileHover={{
							scale: 1.04,
							boxShadow: "0px 15px 40px rgba(0,0,0,0.12)",
						}}
						className="relative bg-white text-lg rounded-2xl border border-gray-200 p-10 pt-14 transition-all duration-500"
					>
						{/* BADGE */}
						<motion.div
							className="absolute -top-8 left-1/2 -translate-x-1/2 text-center"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2 + i * 0.1 }}
						>
							<div
								className={`px-4 py-1 rounded-full text-sm font-bold shadow ${plan.badgeColor} ${plan.badgeTextColor}`}
							>
								{plan.badge}
							</div>
							<div className="bg-white shadow px-4 py-1 rounded-b-md font-bold text-blue-900 text-lg">
								{plan.price}
							</div>
						</motion.div>

						{/* CONTENT */}
						<div className="mt-6">
							<h3 className="text-2xl font-bold text-blue-900">{plan.title}</h3>

							<ul className="mt-4 space-y-3">
								{plan.features.map((f, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: idx * 0.15 }}
										className="flex gap-2 text-gray-700 text-sm"
									>
										<CheckCircle size={18} className="text-blue-500" />
										{f}
									</motion.li>
								))}
							</ul>
						</div>

						{/* BUTTON */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							className={`mt-8 w-full ${plan.buttonColor} text-white text-lg py-3 rounded-lg font-semibold shadow-md shadow-blue-500 hover:shadow-lg transition-all`}
						>
							Choose →
						</motion.button>
					</motion.div>
				))}
			</div>

			{/* NOTE BOX */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-3xl mx-auto mt-20 border border-red-300 rounded-xl p-8 text-center bg-red-50"
			>
				<div className="-mt-10 mb-4">
					<span className="bg-zinc-200 px-4 py-2 text-red-400 font-semibold rounded-xl">Note</span>
				</div>

				<p className="text-gray-600 leading-relaxed text-lg">
					All car transport quotes include standard auto cargo insurance policies. Pricing varies 
					depending on your vehicle, location, and insurance cost. Contact us at (630) 91-6157
					for questions regarding insurance coverage for your shipment.
				</p>
			</motion.div>
		</section>
	);
}
