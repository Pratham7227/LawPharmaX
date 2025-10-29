'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Scale, DollarSign, Clock, Search, Filter, FileText, Shield, Gavel, ChevronDown, ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent, CardTitle } from '../components/ui/Card';

interface Penalty {
  id: number;
  offense: string;
  section: string;
  penalty: string;
  fine: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  category: string;
  description: string;
  consequences: string[];
  precedent?: string;
}

const penaltiesData: Penalty[] = [
  {
    id: 1,
    offense: 'Manufacturing drugs without license',
    section: 'Section 18 of D&C Act',
    penalty: 'Imprisonment up to 1 year',
    fine: '₹1,00,000',
    severity: 'High',
    category: 'Manufacturing',
    description: 'Manufacturing, selling, stocking, or distributing drugs without valid manufacturing license.',
    consequences: ['License cancellation', 'Criminal prosecution', 'Immediate closure of facility', 'Seizure of stock'],
    precedent: 'State v. XYZ Pharmaceuticals (2023)'
  },
  {
    id: 2,
    offense: 'Sale of spurious drugs',
    section: 'Section 17 of D&C Act',
    penalty: 'Imprisonment 5-10 years',
    fine: '₹10,00,000',
    severity: 'Critical',
    category: 'Drug Quality',
    description: 'Manufacturing, selling, or distributing drugs that are spurious, adulterated, or of substandard quality.',
    consequences: ['Rigorous imprisonment', 'Heavy monetary penalty', 'Permanent license cancellation', 'Civil liability for damages'],
    precedent: 'Supreme Court Guidelines 2022'
  },
  {
    id: 3,
    offense: 'Practicing without registration',
    section: 'Section 42 of Pharmacy Act',
    penalty: 'Imprisonment up to 6 months',
    fine: '₹50,000',
    severity: 'Medium',
    category: 'Professional Practice',
    description: 'Practicing pharmacy without valid registration or with expired/suspended registration.',
    consequences: ['Immediate cessation of practice', 'Fine and imprisonment', 'Difficulty in future registration'],
    precedent: 'Pharmacy Council v. John Doe (2023)'
  },
  {
    id: 4,
    offense: 'Illegal possession of narcotic drugs',
    section: 'Section 21 of NDPS Act',
    penalty: 'Rigorous imprisonment 6 months-10 years',
    fine: '₹1,00,000-₹10,00,000',
    severity: 'Critical',
    category: 'Narcotic Drugs',
    description: 'Illegal possession, sale, purchase, transport, or consumption of narcotic drugs and psychotropic substances.',
    consequences: ['Rigorous imprisonment', 'Heavy fines', 'Permanent criminal record', 'Social stigma'],
    precedent: 'Narcotic Control Bureau v. ABC Pharmacy (2024)'
  },
  {
    id: 5,
    offense: 'Selling drugs beyond expiry date',
    section: 'Section 18A of D&C Act',
    penalty: 'Imprisonment up to 3 years',
    fine: '₹5,00,000',
    severity: 'High',
    category: 'Drug Safety',
    description: 'Selling, distributing, or dispensing pharmaceutical products beyond their expiry date.',
    consequences: ['License suspension', 'Criminal liability', 'Compensation to affected patients', 'Reputation damage'],
    precedent: 'Consumer Forum Order 2023'
  },
  {
    id: 6,
    offense: 'Misleading advertisements',
    section: 'Section 14 of D&C Act',
    penalty: 'Imprisonment up to 1 year',
    fine: '₹2,00,000',
    severity: 'Medium',
    category: 'Advertisement',
    description: 'Publishing misleading advertisements about drugs or making false claims about therapeutic efficacy.',
    consequences: ['Advertisement ban', 'Fine and imprisonment', 'License suspension', 'Public apology'],
    precedent: 'Advertising Standards Authority v. MedCorp (2023)'
  },
  {
    id: 7,
    offense: 'Violation of import/export regulations',
    section: 'Section 10A of D&C Act',
    penalty: 'Imprisonment up to 2 years',
    fine: '₹5,00,000',
    severity: 'High',
    category: 'Import/Export',
    description: 'Importing or exporting drugs without proper licenses or violating import/export regulations.',
    consequences: ['Customs penalty', 'Import/export license cancellation', 'Seizure of goods', 'Criminal prosecution'],
    precedent: 'Customs Tribunal Ruling 2024'
  },
  {
    id: 8,
    offense: 'Non-compliance with GMP standards',
    section: 'Rule 71 of D&C Rules',
    penalty: 'License suspension/cancellation',
    fine: '₹10,00,000',
    severity: 'High',
    category: 'Manufacturing',
    description: 'Failure to maintain Good Manufacturing Practices (GMP) standards in pharmaceutical manufacturing.',
    consequences: ['Immediate facility closure', 'Product recall', 'License cancellation', 'Heavy financial penalty'],
    precedent: 'GMP Compliance Board v. PharmaMax (2023)'
  },
  {
    id: 9,
    offense: 'Illegal online pharmacy operations',
    section: 'Rule 65A of D&C Rules',
    penalty: 'Imprisonment up to 1 year',
    fine: '₹10,00,000',
    severity: 'High',
    category: 'Digital Commerce',
    description: 'Operating online pharmacy without proper licenses or selling prescription drugs without valid prescriptions.',
    consequences: ['Website blocking', 'License cancellation', 'Criminal prosecution', 'Heavy financial penalty'],
    precedent: 'Digital Health Authority v. OnlineMeds (2024)'
  },
  {
    id: 10,
    offense: 'Failure to maintain proper records',
    section: 'Section 18B of D&C Act',
    penalty: 'Imprisonment up to 6 months',
    fine: '₹1,00,000',
    severity: 'Medium',
    category: 'Record Keeping',
    description: 'Failure to maintain proper records of drug sales, purchases, or inventory as required by law.',
    consequences: ['Regular inspection', 'Fine and penalty', 'License suspension warning', 'Enhanced monitoring'],
    precedent: 'Pharmacy Inspection Report 2023'
  }
];

const severityColors = {
  Critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800',
  High: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
  Low: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800',
};

const categories = ['All Categories', 'Manufacturing', 'Drug Quality', 'Professional Practice', 'Narcotic Drugs', 'Drug Safety', 'Advertisement', 'Import/Export', 'Digital Commerce', 'Record Keeping'];
const severities = ['All Severities', 'Critical', 'High', 'Medium', 'Low'];

export default function Penalties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSeverity, setSelectedSeverity] = useState('All Severities');
  const [expandedPenalty, setExpandedPenalty] = useState<number | null>(null);

  const filteredPenalties = penaltiesData.filter(penalty => {
    const matchesSearch = penalty.offense.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         penalty.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         penalty.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || penalty.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'All Severities' || penalty.severity === selectedSeverity;

    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const togglePenaltyDetails = (penaltyId: number) => {
    setExpandedPenalty(expandedPenalty === penaltyId ? null : penaltyId);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gavel className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Penalties & Punishments
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Comprehensive guide to legal penalties and punishments for pharmacy law violations
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {penaltiesData.filter(p => p.severity === 'Critical').length}
              </div>
              <div className="text-red-200">Critical Offenses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {penaltiesData.filter(p => p.severity === 'High').length}
              </div>
              <div className="text-red-200">High Severity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹10L</div>
              <div className="text-red-200">Maximum Fine</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10 Years</div>
              <div className="text-red-200">Maximum Prison</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search penalties by offense, section, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-slate-900 dark:text-slate-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Severity Level
                </label>
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-slate-900 dark:text-slate-100"
                >
                  {severities.map(severity => (
                    <option key={severity} value={severity}>{severity}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Cards Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPenalties.map((penalty, index) => (
                <motion.div
                  key={penalty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded border ${severityColors[penalty.severity]}`}>
                              {penalty.severity}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded">
                              {penalty.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            {penalty.offense}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-mono mb-3">
                            {penalty.section}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                        {penalty.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">PENALTY</span>
                          </div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            {penalty.penalty}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-4 h-4 text-slate-500" />
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">FINE</span>
                          </div>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            {penalty.fine}
                          </p>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePenaltyDetails(penalty.id)}
                        className="w-full text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 justify-center"
                      >
                        {expandedPenalty === penalty.id ? (
                          <>
                            Hide Details <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                          </>
                        ) : (
                          <>
                            View Details <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </Button>

                      {/* Expanded Details */}
                      {expandedPenalty === penalty.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                        >
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Legal Consequences:
                            </h4>
                            <ul className="space-y-1">
                              {penalty.consequences.map((consequence, idx) => (
                                <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                  <div className="w-1 h-1 bg-red-500 rounded-full shrink-0"></div>
                                  {consequence}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {penalty.precedent && (
                            <div>
                              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Legal Precedent:
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                                {penalty.precedent}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPenalties.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                  No penalties found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal Resources Section */}
      <section className="py-20 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Legal Excellence Hub
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
                Legal Resources &
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Guidance
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive legal resources, expert guidance, and professional tools to navigate complex pharmaceutical law with confidence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="group border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Legal Documentation
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Access comprehensive legal documents, penalty guidelines, regulatory frameworks, and official notifications from pharmaceutical authorities
                  </p>
                  
                  <div className="flex items-center gap-3 text-red-600 dark:text-red-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Explore Documents</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Available Resources</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">500+ Documents</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="group border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Legal Protection
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Understand your legal rights, protection measures, compliance strategies, and preventive actions to safeguard your pharmaceutical practice
                  </p>
                  
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Learn Protection</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Protection Guides</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">25+ Strategies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="group border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Scale className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Expert Consultation
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Connect with qualified legal professionals, pharmaceutical law experts, and experienced consultants for personalized guidance and advice
                  </p>
                  
                  <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Get Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Expert Network</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">50+ Experts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: <Users className="w-6 h-6" />, label: 'Expert Network', value: '50+' },
              { icon: <BookOpen className="w-6 h-6" />, label: 'Legal Resources', value: '500+' },
              { icon: <Clock className="w-6 h-6" />, label: '24/7 Support', value: 'Always' },
              { icon: <Award className="w-6 h-6" />, label: 'Success Rate', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Legal Notice */}
      <section className="py-12 bg-yellow-50 dark:bg-yellow-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Important Legal Disclaimer
                    </h3>
                    <div className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed space-y-2">
                      <p>
                        The penalties and punishments listed above are for educational purposes only and may vary based on specific circumstances, 
                        jurisdiction, and recent amendments. Always consult with a qualified legal professional for accurate legal advice.
                      </p>
                      <p>
                        Penalties may be enhanced for repeat offenders or in cases involving aggravating circumstances. The actual punishment 
                        may depend on factors such as the scale of violation, intent, cooperation with authorities, and impact on public health.
                      </p>
                      <p className="font-medium">
                        This information should not be considered as legal advice and is subject to change based on legislative updates.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}