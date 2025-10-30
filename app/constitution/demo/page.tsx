'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users, AlertTriangle, Calendar, ChevronRight, ChevronDown, Download } from 'lucide-react';
import Link from 'next/link';

export default function PharmacyLawDetailPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Detailed sections for Drugs and Cosmetics Act
  const lawSections = [
    {
      id: 'overview',
      title: 'Overview',
      content: 'The Drugs and Cosmetics Act, 1940 is a comprehensive legislation that regulates the import, manufacture, distribution, and sale of drugs and cosmetics in India. This Act ensures the safety, efficacy, and quality of pharmaceutical products available to the public.'
    },
    {
      id: 'chapter1',
      title: 'Chapter 1: Preliminary',
      content: 'Definitions and scope of the Act including terms like drugs, cosmetics, manufacture, sale, and various regulatory authorities.'
    },
    {
      id: 'chapter2', 
      title: 'Chapter 2: Drugs Technical Advisory Board',
      content: 'Constitution and functions of the Drugs Technical Advisory Board, including advising Central and State Governments on technical matters.'
    },
    {
      id: 'chapter3',
      title: 'Chapter 3: Central Drugs Laboratory',
      content: 'Establishment and functions of Central Drugs Laboratory for testing and standardization of drugs and cosmetics.'
    },
    {
      id: 'chapter4',
      title: 'Chapter 4: Import of Drugs and Cosmetics',
      content: 'Regulations for import including licensing requirements, prohibited imports, and conditions for import permits.'
    },
    {
      id: 'chapter5',
      title: 'Chapter 5: Manufacture of Drugs and Cosmetics',
      content: 'Manufacturing licenses, good manufacturing practices, premises requirements, and quality control measures.'
    },
    {
      id: 'chapter6',
      title: 'Chapter 6: Sale of Drugs and Cosmetics',
      content: 'Retail and wholesale licensing, storage conditions, sale restrictions, and prescription requirements.'
    },
    {
      id: 'chapter7',
      title: 'Chapter 7: Clinical Trials and New Drugs',
      content: 'Regulations for conducting clinical trials, new drug approvals, and investigational new drug applications.'
    },
    {
      id: 'chapter8',
      title: 'Chapter 8: Ayurvedic, Siddha and Unani Drugs',
      content: 'Special provisions for traditional medicine systems including licensing and quality standards.'
    },
    {
      id: 'chapter9',
      title: 'Chapter 9: Patent and Proprietary Medicines',
      content: 'Regulations for patent medicines, proprietary preparations, and over-the-counter drugs.'
    },
    {
      id: 'penalties',
      title: 'Penalties and Offences',
      content: 'Imprisonment up to 3 years and/or fines up to ₹5 lakhs for manufacturing or selling spurious drugs. For adulterated drugs, penalties include imprisonment up to 1 year and/or fines up to ₹1 lakh.'
    },
    {
      id: 'amendments',
      title: 'Major Amendments',
      content: 'Significant amendments in 1964 (cosmetics inclusion), 1982 (clinical trials), 1995 (new drug approval), 2008 (medical devices), and 2013 (clinical trial regulations).'
    }
  ];

  const quickInfo = [
    {
      icon: BookOpen,
      iconColor: 'bg-blue-500',
      title: 'Overview',
      description: 'Comprehensive regulation of drugs and cosmetics import, manufacture, and sale in India'
    },
    {
      icon: Users,
      iconColor: 'bg-purple-500', 
      title: 'Who Does This Apply To?',
      description: 'Pharmaceutical manufacturers, importers, distributors, wholesalers, retailers, and pharmacists'
    },
    {
      icon: AlertTriangle,
      iconColor: 'bg-red-500',
      title: 'Penalties & Compliance',
      description: 'Imprisonment up to 3 years and/or fines up to ₹5 lakhs for violations'
    },
    {
      icon: Calendar,
      iconColor: 'bg-orange-500',
      title: 'Important Dates',
      description: 'Enacted in 1940 with major amendments in 1964, 1982, 1995, 2008, and 2013'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/constitution" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pharmacy Laws
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">💊</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Drugs and Cosmetics Act</h1>
              <p className="text-xl text-white/90">Enacted: 1940</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Detailed Sections */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Detailed Sections & Chapters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore comprehensive coverage of the Drugs and Cosmetics Act
            </p>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {lawSections.map((section, index) => (
              <div key={section.id} className="p-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pl-3 pr-3 pb-3"
                  >
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 mb-8">
          {quickInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 ${info.iconColor} rounded-xl`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {info.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 mt-8 justify-center"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            <Download className="w-5 h-5" />
            Download Full Act
          </button>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            <BookOpen className="w-5 h-5" />
            View Rules & Forms
          </button>
          <Link 
            href="/cases-news"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
            Related Cases
          </Link>
        </motion.div>
      </div>
    </div>
  );
}