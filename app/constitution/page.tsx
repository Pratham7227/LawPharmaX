'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Scale, Users, Calendar, Search, Filter, ChevronRight, ExternalLink, Download } from 'lucide-react';
import Link from 'next/link';

export default function PharmacyLawsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Real Pharmacy Laws of India
  const pharmacyLaws = [
    {
      id: 'drugs-cosmetics-act',
      title: 'Drugs and Cosmetics Act',
      description: '1940 - Regulation of drugs and cosmetics import, manufacture, and sale',
      icon: '💊',
      color: 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
      link: '/constitution/demo',
      year: '1940'
    },
    {
      id: 'pharmacy-act',
      title: 'Pharmacy Act',
      description: '1948 - Regulation of pharmacy profession and education',
      icon: '🏥',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30',
      link: '/constitution/demo',
      year: '1948'
    },
    {
      id: 'narcotic-drugs-act',
      title: 'Narcotic Drugs and Psychotropic Substances Act',
      description: '1985 - Control of narcotic drugs and psychotropic substances',
      icon: '�',
      color: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30',
      link: '/constitution/demo',
      year: '1985'
    },
    {
      id: 'drugs-magic-remedies-act',
      title: 'Drugs and Magic Remedies Act',
      description: '1954 - Prevention of fraudulent drug advertisements',
      icon: '📢',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30',
      link: '/constitution/demo',
      year: '1954'
    },
    {
      id: 'drugs-price-control-order',
      title: 'Drugs Price Control Order',
      description: '2013 - Regulation of drug prices and availability',
      icon: '💰',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30',
      link: '/constitution/demo',
      year: '2013'
    },
    {
      id: 'medical-devices-rules',
      title: 'Medical Devices Rules',
      description: '2017 - Regulation of medical devices manufacturing and import',
      icon: '🩺',
      color: 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/30 dark:to-teal-800/30',
      link: '/constitution/demo',
      year: '2017'
    },
    {
      id: 'new-drugs-clinical-trials-rules',
      title: 'New Drugs and Clinical Trials Rules',
      description: '2019 - Guidelines for clinical trials and new drug approval',
      icon: '🧪',
      color: 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30',
      link: '/constitution/demo',
      year: '2019'
    },
    {
      id: 'online-pharmacy-rules',
      title: 'Drugs Rules (Online Pharmacy)',
      description: '2018 - Regulation of online pharmacy operations',
      icon: '�',
      color: 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30',
      link: '/constitution/demo',
      year: '2018'
    }
  ];

  const filteredSections = pharmacyLaws.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">⚕️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pharmacy Laws of India</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive guide to pharmaceutical legislation and regulations in India
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search pharmacy laws..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Pharmacy Laws Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={section.link} className="group block">
                <div className={`${section.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:scale-105`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {section.year}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/cases-news" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Pharmacy Cases
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Latest court cases and regulatory updates in pharmaceutical law
              </p>
            </Link>

            <button className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Study Materials
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive notes and analysis for pharmaceutical law studies
              </p>
            </button>

            <button className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Full Documentation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Download complete pharmacy law documents and guidelines
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}