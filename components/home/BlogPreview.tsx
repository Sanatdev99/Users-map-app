'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from "next/image"




interface Article {
    image: string
    category: string
    title: string
    excerpt: string
    date: string
    readTime: string
    slug: string
}

const ARTICLES: Article[] = [
    
    {
        image: '/images/7777.jpg',
        category: 'Guide',
        title: 'How to Ship Your Car: Complete Guide',
        excerpt: 'Everything you need to know about shipping your car safely and affordably.',
        date: 'January 15, 2024',
        readTime: '5 min read',
        slug: 'how-to-ship-car'
    },
    {
        image: '/images/7777.jpg',
        category: 'Tips',
        title: 'Understanding Car Shipping Costs',
        excerpt: 'Learn about the factors that affect car shipping prices and how to save money.',
        date: 'January 10, 2024',
        readTime: '4 min read',
        slug: 'cost-of-car-shipping'
    },
    {
        image: '/images/7777.jpg',
        category: 'Advice',
        title: 'Tips for First-Time Shippers',
        excerpt: 'Essential advice for anyone shipping a vehicle for the first time.',
        date: 'January 5, 2024',
        readTime: '6 min read',
        slug: 'tips-for-first-time-shippers'
    }
]

export default function BlogPreview() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">Most Recent Stories</h2>
                    <p className="text-xl md:text-xl text-gray-800">Stay informed with helpful tips, guides, and industry insights</p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 text-gray-800">
                    {ARTICLES.map((article, index) => (
                        <ArticleCard key={article.slug} article={article} index={index} />
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link 
                        href="/blog"
                        className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View All Articles
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48 md:h-56">
                <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {article.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs md:text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {article.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 transition line-clamp-2">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow line-clamp-2">{article.excerpt}</p>

                {/* CTA Link */}
                <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all w-fit"
                >
                    Read More
                    <ArrowRight size={20} />
                </Link>
                
            </div>
        </motion.article>
    )
}