'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Scale, FileText, Users, Award, Star, PlayCircle, Download } from 'lucide-react';
import Button from './components/ui/Button';
import Card, { CardContent, CardDescription, CardTitle } from './components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                Premium Legal Education Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Master
                <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Pharmacy Law
                </span>
                <span className="block text-4xl lg:text-5xl text-slate-300">
                  & Judiciary
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Comprehensive legal education platform designed for pharmacy professionals and judiciary aspirants. Access real case studies, detailed regulations, and expert-curated content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                <Download className="w-5 h-5 mr-2" />
                Free Resources
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="flex justify-center text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-slate-400 text-xs">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-slate-400 text-xs">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-slate-400 text-xs">Free Access</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          {/* Multi-layer wave effect for smooth natural look */}
          <svg viewBox="0 0 1440 120" className="w-full h-auto relative">
            {/* Background wave layer with subtle animation */}
            <path 
              d="M0,64L120,69.3C240,75,480,85,720,80C960,75,1200,53,1320,42L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
              fill="white" 
              className="dark:fill-slate-900 opacity-30 wave-animated"
            />
            {/* Middle wave layer */}
            <path 
              d="M0,80L120,85.3C240,91,480,101,720,96C960,91,1200,69,1320,58L1440,48L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
              fill="white" 
              className="dark:fill-slate-900 opacity-60 wave-animated"
            />
            {/* Main wave layer */}
            <path 
              d="M0,96L120,101.3C240,107,480,117,720,112C960,107,1200,85,1320,74L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
              fill="white" 
              className="dark:fill-slate-900"
            />
          </svg>
          
          {/* Additional gradient overlay for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white/10 to-transparent dark:from-slate-900/10 pointer-events-none"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Premium Features
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Everything You Need for Legal Excellence
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive resources, expert-curated content, and interactive learning tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: 'Comprehensive Pharmacy Laws',
                description: 'Access detailed information on Drugs & Cosmetics Act, NDPS Act, Medical Device Rules, and all pharmaceutical regulations.',
                href: '/pharmacy-laws',
                color: 'from-blue-500 to-blue-600',
                stats: '10+ Laws',
                featured: true,
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Judiciary Preparation',
                description: 'Complete course materials covering Constitutional, Criminal, Civil, Administrative, IP, and Environmental Law.',
                href: '/judiciary-preparation',
                color: 'from-emerald-500 to-emerald-600',
                stats: '6 Courses',
                featured: true,
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Study Materials & Notes',
                description: 'Premium downloadable study guides, case summaries, quick revision notes, and comprehensive documentation.',
                href: '/notes-summaries',
                color: 'from-purple-500 to-purple-600',
                stats: '50+ Resources',
                featured: true,
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Cases & News',
                description: 'Latest legal developments, court judgments, regulatory changes, and breaking news in pharmaceutical law.',
                href: '/cases-news',
                color: 'from-orange-500 to-red-600',
                stats: 'Daily Updates',
                featured: true,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={feature.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {feature.title}
                        </CardTitle>
                        {feature.featured && (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <CardDescription className="mb-6 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {feature.stats}
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy Laws of India Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Scale className="w-4 h-4" />
              Pharmaceutical Framework
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Pharmacy Laws of India
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive guide to pharmaceutical legislation and regulations governing the drug industry
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: 'Drugs & Cosmetics Act',
                  subtitle: '1940',
                  color: 'bg-gray-100 dark:bg-gray-800',
                  icon: '💊',
                  description: 'Foundation law for drug regulation'
                },
                {
                  title: 'Pharmacy Act',
                  subtitle: '1948',
                  color: 'bg-red-100 dark:bg-red-900/30',
                  icon: '🏥',
                  description: 'Professional regulation and education'
                },
                {
                  title: 'NDPS Act',
                  subtitle: '1985',
                  color: 'bg-green-100 dark:bg-green-900/30',
                  icon: '🚫',
                  description: 'Controlled substances regulation'
                },
                {
                  title: 'Magic Remedies Act',
                  subtitle: '1954',
                  color: 'bg-blue-100 dark:bg-blue-900/30',
                  icon: '📢',
                  description: 'Advertisement control'
                },
                {
                  title: 'Price Control Order',
                  subtitle: '2013',
                  color: 'bg-orange-100 dark:bg-orange-900/30',
                  icon: '💰',
                  description: 'Drug price regulation'
                },
                {
                  title: 'Medical Devices Rules',
                  subtitle: '2017',
                  color: 'bg-purple-100 dark:bg-purple-900/30',
                  icon: '🩺',
                  description: 'Medical device regulation'
                },
                {
                  title: 'Clinical Trials Rules',
                  subtitle: '2019',
                  color: 'bg-purple-100 dark:bg-purple-900/30',
                  icon: '🧪',
                  description: 'Research guidelines'
                },
                {
                  title: 'Online Pharmacy Rules',
                  subtitle: '2018',
                  color: 'bg-teal-100 dark:bg-teal-900/30',
                  icon: '💻',
                  description: 'E-pharmacy regulation'
                },
              ].map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={article.title === 'Drugs & Cosmetics Act' ? '/constitution/demo' : '/constitution'}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 ${article.color} rounded-xl flex items-center justify-center text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          {article.icon}
                        </div>
                        
                        <CardTitle className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </CardTitle>
                        
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">
                          {article.subtitle}
                        </p>
                        
                        <CardDescription className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
                          {article.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-8"
            >
              <Link href="/constitution">
                <Button className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore All Pharmacy Laws
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Ready to Master Pharmacy Law?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our comprehensive legal education platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Free Resources
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
              ✓ 100% Free Access  ✓ No Registration Required  ✓ Updated Content
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}