'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600 whitespace-nowrap uppercase">
							United Logistics Inc
						</Link>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
							<Link href="/" className="text-gray-900 hover:text-blue-600 transition font-bold uppercase">Home</Link>
							<Link href="/about" className="text-gray-900 hover:text-blue-600 transition font-bold uppercase">About</Link>
							<Link href="/services" className="text-gray-900 hover:text-blue-600 transition font-bold uppercase">Services</Link>
							<Link href="/blog" className="text-gray-900 hover:text-blue-600 transition font-bold uppercase">Blog</Link>
							<Link href="/contact" className="text-gray-900 hover:text-blue-600 transition font-bold uppercase">Contact</Link>
							<a href="tel:6109821101" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition font-bold uppercase">
								<Phone size={18} />
								<span className="hidden lg:inline">(630) 912-6157</span>
							</a>
							<Link href="/quote" className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold text-sm lg:text-base uppercase">
								Get Quote
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button 
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden text-gray-700"
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Menu */}
					{isOpen && (
						<div className="md:hidden pb-4 space-y-2 border-t pt-4">
							<Link href="/" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">Home</Link>
							<Link href="/about" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">About</Link>
							<Link href="/services" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">Services</Link>
							<Link href="/blog" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">Blog</Link>
							<Link href="/contact" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">Contact</Link>
							<a href="tel:6109821101" className="block text-gray-700 hover:text-blue-600 py-2 font-bold uppercase">
								(630) 912-6157
							</a>
							<Link href="/quote" className="block bg-blue-600 text-white px-6 py-2 rounded-lg text-center font-bold hover:bg-blue-700 transition uppercase">
								Get Quote
							</Link>
						</div>
					)}
				</div>
			</nav>
			
			<div className="h-16" />
		</>
	)
}