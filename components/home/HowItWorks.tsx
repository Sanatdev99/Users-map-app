'use client'
import { motion } from 'framer-motion'
import { FileText, Truck, CheckCircle, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
    const steps = [
        {
            icon: FileText,
            title: 'Get your instant quote and place an order',
            description: 'Fill out our simple form and receive an accurate quote within seconds. No hidden fees.',
            gradient: 'from-purple-50 to-purple-100',
            bgColor: 'bg-purple-600',
            accentColor: 'bg-purple-500'
        },
        {
            icon: Truck,
            title: 'We manage your door-to-door shipment',
            description: 'Our team coordinates everything from pickup to delivery with real-time tracking.',
            gradient: 'from-blue-50 to-cyan-100',
            bgColor: 'bg-blue-600',
            accentColor: 'bg-cyan-500'
        },
        {
            icon: CheckCircle,
            title: 'Accept your delivery and complete payment',
            description: 'Inspect your vehicle upon delivery and make final payment. Simple and secure.',
            gradient: 'from-emerald-50 to-teal-100',
            bgColor: 'bg-emerald-600',
            accentColor: 'bg-teal-500'
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600">Three simple steps to ship your vehicle</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-stretch">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between`}>
                                    <div>
                                        <div className="mb-6">
                                            <div className={`w-16 h-16 ${step.bgColor} rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform`}>
                                                <step.icon size={32} className="text-white" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <div className="hidden md:flex items-center justify-center px-4">
                                    <ArrowRight size={24} className="text-gray-400" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}