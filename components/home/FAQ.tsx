'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'How long does car shipping take?',
            answer: 'Typical delivery times range from 1-10 business days depending on distance and service type. Open transport averages 3-5 days, while enclosed and classic car shipping may take 5-10 days. Expedited service is available for 1-2 day delivery.'
        },
        {
            question: 'Is my vehicle insured during transport?',
            answer: 'Yes, all vehicles are covered by carrier insurance during transport. Our carriers maintain cargo insurance coverage starting from $100,000, with higher coverage available for classic and luxury vehicles up to $250,000.'
        },
        {
            question: 'Can I put personal items in my car?',
            answer: 'You can place up to 100 lbs of personal items in the trunk, below the window line. Items must be secured and not visible. Please note that personal items are not covered by carrier insurance.'
        },
        {
            question: 'How much does car shipping cost?',
            answer: 'Costs vary based on distance, vehicle size, transport type, and season. Open transport typically ranges from $300-$1200, while enclosed shipping runs $800-$1700. Use our instant quote calculator for an accurate estimate.'
        },
        {
            question: 'Do I need to be present for pickup and delivery?',
            answer: 'Yes, you or an authorized representative (18+) must be present to sign the Bill of Lading and inspect the vehicle at both pickup and delivery. This typically takes 15-30 minutes.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, debit cards, and cash. A deposit may be required to book your shipment, with the balance due upon delivery. We also offer secure online payment options.'
        }
    ]

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our services
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-left text-base sm:text-lg text-gray-900">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    size={20}
                                    className={`text-blue-600 flex-shrink-0 ml-3 sm:ml-4 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                            
                            {/* Answer */}
                            {openIndex === index && (
                                <div 
                                    id={`faq-answer-${index}`}
                                    className="px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200"
                                >
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}