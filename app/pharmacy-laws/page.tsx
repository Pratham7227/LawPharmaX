'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, FileText, AlertCircle, Calendar, Building, Scale, Download, ExternalLink, ChevronRight } from 'lucide-react';
import Card, { CardContent, CardDescription, CardTitle } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const pharmacyLaws = [
  {
    id: 1,
    title: 'Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954',
    section: 'Act No. 21 of 1954',
    category: 'Advertisement Control',
    summary: 'Prohibits advertisements of drugs and remedies that claim to cure certain diseases and magic remedies that claim miraculous powers.',
    details: 'Comprehensive act that controls objectionable advertisements of drugs in magic remedies. Prohibits advertisements claiming to cure diseases like cancer, diabetes, epilepsy, and sexual disorders. Covers definition of drugs, magic remedies, and objectionable advertisements with strict penalties.',
    keyProvisions: [
      'Definition of drugs and magic remedies (Section 2)',
      'Prohibition of objectionable advertisements (Section 3)',
      'Diseases for which ads are prohibited (Section 3)',
      'Magic remedy advertisement controls',
      'Exemptions for qualified medical practitioners',
      'Powers of government to prohibit ads (Section 6)'
    ],
    penalties: 'First conviction: imprisonment up to 6 months and/or fine up to ₹1,000; subsequent conviction: imprisonment up to 1 year and/or fine up to ₹5,000',
    lastUpdated: '2023',
    authority: 'Central Drugs Standard Control Organization (CDSCO)',
  },
  {
    id: 2,
    title: 'Drugs and Cosmetics Act, 1940',
    section: 'Act No. 23 of 1940',
    category: 'Drug Control',
    summary: 'Primary legislation regulating the import, manufacture, distribution and sale of drugs and cosmetics throughout India.',
    details: 'Comprehensive act covering drug licensing (Forms 20, 21, 25), Good Manufacturing Practices (GMP), clinical trials, import/export permits, quality standards, and penalties. Recently amended in 2024 to include provisions for online pharmacy regulation and digital health technologies.',
    keyProvisions: [
      'Drug licensing and registration (Sections 18-22)',
      'Manufacturing standards and GMP requirements',
      'Clinical trial regulations (Schedule Y)',
      'Import/Export controls (Chapter IV)',
      'Quality control and testing standards',
      'Penalties and prosecutions (Chapter VIII)'
    ],
    penalties: 'Imprisonment up to 3 years and/or fine up to ₹5 lakhs for manufacturing without license',
    lastUpdated: '2024',
    authority: 'Central Drugs Standard Control Organization (CDSCO)',
  },
  {
    id: 3,
    title: 'Pharmacy Act, 1948',
    section: 'Act No. 8 of 1948',
    category: 'Practice Regulation',
    summary: 'Regulates the profession and practice of pharmacy in India, establishing educational standards and professional conduct.',
    details: 'Establishes Pharmacy Council of India (PCI), state pharmacy councils, pharmacy education standards, registration of pharmacists, and disciplinary proceedings. Amended in 2023 to include provisions for telepharmacy and digital prescription handling.',
    keyProvisions: [
      'Establishment of Pharmacy Council of India (Section 3)',
      'Registration of pharmacists (Section 24-31)',
      'Educational qualifications (Section 12)',
      'Professional conduct and ethics',
      'Disciplinary actions and appeals',
      'Continuing education requirements'
    ],
    penalties: 'Fine up to ₹1,000 for practicing without registration; suspension/cancellation of registration for misconduct',
    lastUpdated: '2023',
    authority: 'Pharmacy Council of India (PCI)',
  },
  {
    id: 4,
    title: 'Narcotic Drugs and Psychotropic Substances Act, 1985',
    section: 'Act No. 61 of 1985',
    category: 'Controlled Substances',
    summary: 'Comprehensive legislation controlling operations relating to narcotic drugs and psychotropic substances to fulfill international treaty obligations.',
    details: 'Implements UN Single Convention on Narcotic Drugs (1961) and Convention on Psychotropic Substances (1971). Covers cultivation, production, manufacture, possession, sale, purchase, transport, warehousing, use, consumption, import inter-State, export, and trans-shipment of narcotic drugs and psychotropic substances.',
    keyProvisions: [
      'Licensing for cultivation and manufacture (Chapter III)',
      'Control over medical and scientific use',
      'Import/Export authorization procedures',
      'Possession limits and medical prescriptions',
      'Special courts and procedures (Chapter VA)',
      'Forfeiture of property (Chapter VB)'
    ],
    penalties: 'Rigorous imprisonment 10-20 years and fine ₹1-2 lakhs for commercial quantity; death penalty or life imprisonment for repeat offenders',
    lastUpdated: '2024',
    authority: 'Narcotics Control Bureau (NCB)',
  },
  {
    id: 4,
    title: 'Medical Device Rules, 2017',
    section: 'GSR 78(E) dated 31st January 2017',
    category: 'Medical Devices',
    summary: 'Comprehensive regulatory framework for medical devices in India, replacing previous fragmented regulations.',
    details: 'Establishes risk-based classification (Class A to D), registration requirements, quality management systems, clinical investigation guidelines, and post-market surveillance. Aligned with international standards (ISO 13485, ISO 14971).',
    keyProvisions: [
      'Risk-based device classification system',
      'Registration and licensing procedures',
      'Quality Management System requirements',
      'Clinical investigation protocols',
      'Post-market surveillance and vigilance',
      'Import registration and testing'
    ],
    penalties: 'Imprisonment up to 3 years and/or fine up to ₹5 lakhs; suspension/cancellation of license',
    lastUpdated: '2024',
    authority: 'Central Drugs Standard Control Organization (CDSCO)',
  },
  {
    id: 5,
    title: 'New Drugs and Clinical Trials Rules, 2019',
    section: 'GSR 227(E) dated 19th March 2019',
    category: 'Clinical Research',
    summary: 'Simplified and streamlined regulatory framework for approval of new drugs and conducting clinical trials in India.',
    details: 'Replaces Schedule Y of Drugs and Cosmetics Rules, 1945. Introduces risk-based approach, single window clearance, defined timelines, and Good Clinical Practice (GCP 2.0) guidelines. Facilitates faster drug approvals while ensuring safety and efficacy.',
    keyProvisions: [
      'Simplified application process for clinical trials',
      'Risk-based categorization of clinical trials',
      'Defined timelines for regulatory approvals',
      'GCP 2.0 guidelines implementation',
      'Ethics committee strengthening',
      'Post-market surveillance requirements'
    ],
    penalties: 'Suspension/cancellation of clinical trial permission; imprisonment and fine as per Drugs and Cosmetics Act',
    lastUpdated: '2024',
    authority: 'Central Drugs Standard Control Organization (CDSCO)',
  },
  {
    id: 6,
    title: 'Consumer Protection Act, 2019',
    section: 'Act No. 35 of 2019',
    category: 'Consumer Rights',
    summary: 'Comprehensive legislation protecting consumer rights including healthcare services and pharmaceutical products.',
    details: 'Establishes Central Consumer Protection Authority (CCPA), consumer rights framework, penalties for misleading advertisements, product liability, and e-commerce regulations. Specifically addresses deficiency in medical services and pharmaceutical products.',
    keyProvisions: [
      'Consumer rights and responsibilities (Chapter II)',
      'Product liability provisions (Chapter VI)',
      'Central Consumer Protection Authority (Chapter III)',
      'Consumer mediation and arbitration',
      'Penalties for misleading advertisements',
      'E-commerce consumer protection'
    ],
    penalties: 'Imprisonment up to 5 years and/or fine up to ₹50 lakhs for misleading ads; product liability compensation',
    lastUpdated: '2023',
    authority: 'Central Consumer Protection Authority (CCPA)',
  },
  {
    id: 7,
    title: 'Biological Diversity Act, 2002',
    section: 'Act No. 18 of 2003',
    category: 'Biopiracy Prevention',
    summary: 'Regulates access to biological resources and associated traditional knowledge for commercial utilization.',
    details: 'Implements Convention on Biological Diversity. Requires prior approval for bio-survey, bio-utilization, and intellectual property rights on biological resources. Establishes National Biodiversity Authority (NBA) and benefit-sharing mechanisms.',
    keyProvisions: [
      'Prior approval for commercial utilization',
      'Benefit-sharing with local communities',
      'Protection of traditional knowledge',
      'Establishment of Biodiversity Management Committees',
      'IPR restrictions on biological resources',
      'National Biodiversity Authority powers'
    ],
    penalties: 'Imprisonment up to 5 years and/or fine up to ₹10 lakhs; confiscation of biological resources',
    lastUpdated: '2023',
    authority: 'National Biodiversity Authority (NBA)',
  },
  {
    id: 8,
    title: 'Patents Act, 1970 (as amended)',
    section: 'Act No. 39 of 1970',
    category: 'Intellectual Property',
    summary: 'Governs patent rights in India including pharmaceutical patents, with provisions for compulsory licensing and patent oppositions.',
    details: 'TRIPS-compliant patent law with pharmaceutical-specific provisions. Includes Section 3(d) preventing evergreening, compulsory licensing provisions (Section 84), and post-grant opposition procedures. Balances innovation incentives with public health access.',
    keyProvisions: [
      'Patentability criteria (Section 3)',
      'Pharmaceutical patent provisions',
      'Compulsory licensing (Section 84)',
      'Pre and post-grant oppositions',
      'Research and regulatory exemptions',
      'Patent term and extensions'
    ],
    penalties: 'Infringement damages and injunctions; criminal penalties for false marking',
    lastUpdated: '2024',
    authority: 'Controller General of Patents, Designs and Trademarks',
  },
  {
    id: 9,
    title: 'Trade Marks Act, 1999',
    section: 'Act No. 47 of 1999',
    category: 'Intellectual Property',
    summary: 'Protects pharmaceutical trademarks, brand names, and prevents consumer confusion in drug marketing.',
    details: 'Comprehensive trademark law covering pharmaceutical brands, generic drug naming, trademark oppositions, and enforcement. Special provisions for pharmaceutical trademarks to prevent confusion that could endanger public health.',
    keyProvisions: [
      'Trademark registration procedures',
      'Opposition and cancellation proceedings',
      'Pharmaceutical trademark guidelines',
      'Generic drug naming rules',
      'Enforcement and infringement remedies',
      'International trademark conventions'
    ],
    penalties: 'Imprisonment up to 3 years and/or fine up to ₹2 lakhs; damages and account of profits',
    lastUpdated: '2023',
    authority: 'Controller General of Patents, Designs and Trademarks',
  },
  {
    id: 10,
    title: 'Information Technology Act, 2000 (as amended)',
    section: 'Act No. 21 of 2000',
    category: 'Digital Health',
    summary: 'Regulates electronic transactions, digital signatures, and cybersecurity in healthcare and pharmacy sectors.',
    details: 'Provides legal framework for electronic records, digital signatures, telemedicine, e-pharmacy regulations, and data protection in healthcare. Includes provisions for electronic prescription management and digital health records.',
    keyProvisions: [
      'Electronic records and digital signatures',
      'E-pharmacy regulatory framework',
      'Telemedicine and digital health',
      'Data protection and privacy (Section 43A)',
      'Cybersecurity and data breach notification',
      'Electronic prescription management'
    ],
    penalties: 'Compensation up to ₹5 crores for data breach; imprisonment up to 3 years for unauthorized access',
    lastUpdated: '2024',
    authority: 'Ministry of Electronics and Information Technology',
  }
];

const categories = ['All', 'Drug Control', 'Practice Regulation', 'Controlled Substances', 'Clinical Research', 'Consumer Rights', 'Biopiracy Prevention', 'Intellectual Property', 'Medical Devices', 'Digital Health'];

export default function PharmacyLaws() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredLaws = pharmacyLaws.filter(law => {
    const matchesSearch = law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         law.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         law.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || law.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Legal Framework
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Pharmacy Laws &</span>
              <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Regulations
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive collection of Indian pharmacy laws, regulations, and compliance guidelines for professionals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Guide
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 backdrop-blur-sm">
                <ExternalLink className="w-5 h-5 mr-2" />
                Official Sources
              </Button>
            </div>
          </motion.div>
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

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 relative -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FileText className="w-6 h-6" />, number: '10+', label: 'Major Laws', color: 'blue' },
              { icon: <Calendar className="w-6 h-6" />, number: '2024', label: 'Latest Updates', color: 'green' },
              { icon: <Building className="w-6 h-6" />, number: '5+', label: 'Authorities', color: 'purple' },
              { icon: <Scale className="w-6 h-6" />, number: '100%', label: 'Compliance', color: 'orange' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-2xl flex items-center justify-center text-${stat.color}-600 dark:text-${stat.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Enhanced Search Bar */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Search Laws & Regulations
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by law name, section, or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="lg:w-80">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(0, 6).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Found <span className="font-semibold text-blue-600">{filteredLaws.length}</span> laws matching your criteria
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laws Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLaws.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                No laws found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Try adjusting your search terms or filter criteria to find relevant laws and regulations
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredLaws.map((law, index) => (
                <motion.div
                  key={law.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                              {law.category}
                            </span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
                              Updated {law.lastUpdated}
                            </span>
                          </div>
                          
                          <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {law.title}
                          </CardTitle>
                          
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <FileText className="w-4 h-4" />
                            <span className="text-sm font-medium">{law.section}</span>
                          </div>
                        </div>
                        
                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Scale className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </div>
                      </div>

                      {/* Summary */}
                      <CardDescription className="mb-6 leading-relaxed">
                        {law.summary}
                      </CardDescription>

                      {/* Authority */}
                      {law.authority && (
                        <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Regulatory Authority
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {law.authority}
                          </p>
                        </div>
                      )}

                      {/* Expandable Details */}
                      {expandedCard === law.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 space-y-4"
                        >
                          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                              Detailed Overview
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {law.details}
                            </p>
                          </div>
                          
                          {law.keyProvisions && (
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3">
                                Key Provisions
                              </h4>
                              <ul className="space-y-2">
                                {law.keyProvisions.map((provision, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm text-blue-700 dark:text-blue-300">
                                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                                    {provision}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {law.penalties && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                              <h4 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-3">
                                Penalties & Consequences
                              </h4>
                              <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
                                {law.penalties}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedCard(expandedCard === law.id ? null : law.id)}
                          className="flex-1"
                        >
                          {expandedCard === law.id ? 'Show Less' : 'Read More'}
                        </Button>
                        <Button size="sm" className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Study Guide
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}