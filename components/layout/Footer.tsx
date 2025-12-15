import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12 mt-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
                    {/* Company Info */}
                    <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold mb-4">United Logistics Inc</h3>
                        <p className="text-gray-400 text-sm mb-4 break-words">
                            Professional nationwide auto transport services you can trust.
                        </p>
                        <div className="flex flex-col gap-2 text-xs md:text-sm">
                            <span>USDOT: 3713977</span>
                            <span>MC: 1304594</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm md:text-base mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition">Services</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm transition">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-sm md:text-base mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Car Shipping</li>
                            <li>Motorcycle Shipping</li>
                            <li>RV & Trailer Shipping</li>
                            <li>Heavy Equipment</li>
                            <li>Boat Shipping</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-sm md:text-base mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Phone size={16} className="flex-shrink-0" />
                                <span>(610) 982-1101</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail size={16} className="flex-shrink-0" />
                                <span className="break-all">admin@uftransportation.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400 text-sm">
                                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                <span>4628 Broadway Suite A 1069<br />Allentown, PA 18104</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                        © 2025 United Logistics Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs md:text-sm">
                        <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}