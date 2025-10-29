'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, Search, FileText, CheckCircle, AlertTriangle, Clock, ChevronDown, ChevronUp, ArrowRight, Bell, Download } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

interface Amendment {
  id: string;
  title: string;
  year: number;
  effectiveDate: string;
  status: 'Active' | 'Pending' | 'Superseded';
  category: string;
  impact: 'High' | 'Medium' | 'Low';
  description: string;
  affectedSections: string[];
  details: string;
}

const amendments: Amendment[] = [
  {
    id: 'AMD-2024-001',
    title: 'Digital Prescription Management Act',
    year: 2024,
    effectiveDate: 'March 15, 2024',
    status: 'Active',
    category: 'Technology',
    impact: 'High',
    description: 'Mandatory implementation of digital prescription systems for all registered pharmacies.',
    affectedSections: ['Section 12', 'Section 24', 'Appendix A'],
    details: 'This amendment requires all pharmacies to implement digital prescription management systems by December 2024. The new system must comply with national security standards and provide audit trails for all prescription transactions.'
  },
  {
    id: 'AMD-2023-015',
    title: 'Controlled Substances Reporting Enhancement',
    year: 2023,
    effectiveDate: 'January 10, 2024',
    status: 'Active',
    category: 'Controlled Substances',
    impact: 'High',
    description: 'Enhanced reporting requirements for controlled substance dispensing and inventory management.',
    affectedSections: ['Section 45', 'Section 46', 'Section 47'],
    details: 'Pharmacies must now report controlled substance transactions within 24 hours and maintain enhanced inventory tracking systems with monthly reconciliation requirements.'
  },
  {
    id: 'AMD-2023-012',
    title: 'Telepharmacy Services Regulation',
    year: 2023,
    effectiveDate: 'September 1, 2023',
    status: 'Active',
    category: 'Remote Services',
    impact: 'Medium',
    description: 'New guidelines for providing telepharmacy services and remote patient consultation.',
    affectedSections: ['Section 18', 'Section 19'],
    details: 'Establishes framework for telepharmacy operations including licensing requirements, technology standards, and patient safety protocols for remote pharmaceutical services.'
  },
  {
    id: 'AMD-2023-008',
    title: 'Generic Drug Substitution Guidelines',
    year: 2023,
    effectiveDate: 'June 15, 2023',
    status: 'Active',
    category: 'Drug Substitution',
    impact: 'Medium',
    description: 'Updated protocols for generic drug substitution and patient notification requirements.',
    affectedSections: ['Section 32', 'Section 33'],
    details: 'Pharmacists must now provide written notification to patients when substituting generic medications and maintain records of all substitution decisions.'
  },
  {
    id: 'AMD-2022-025',
    title: 'Pharmaceutical Waste Management',
    year: 2022,
    effectiveDate: 'November 30, 2022',
    status: 'Superseded',
    category: 'Environmental',
    impact: 'Low',
    description: 'Revised procedures for disposal of expired and unused pharmaceutical products.',
    affectedSections: ['Section 28', 'Section 29'],
    details: 'Updated environmental protection measures for pharmaceutical waste disposal, including new requirements for hazardous drug handling and disposal documentation.'
  }
];

const categories = ['All Categories', 'Technology', 'Controlled Substances', 'Remote Services', 'Drug Substitution', 'Environmental'];
const years = ['All Years', '2024', '2023', '2022', '2021'];
const impacts = ['All Impacts', 'High', 'Medium', 'Low'];
const statuses = ['All Statuses', 'Active', 'Pending', 'Superseded'];

const impactColors = {
  High: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
  Medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  Low: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
};

const statusColors = {
  Active: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
  Pending: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  Superseded: 'bg-slate-100 dark:bg-slate-900/30 text-slate-800 dark:text-slate-300'
};

export default function AmendmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedImpact, setSelectedImpact] = useState('All Impacts');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [expandedAmendment, setExpandedAmendment] = useState<string | null>(null);

  const filteredAmendments = amendments.filter(amendment => {
    const matchesSearch = amendment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         amendment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || amendment.category === selectedCategory;
    const matchesYear = selectedYear === 'All Years' || amendment.year.toString() === selectedYear;
    const matchesImpact = selectedImpact === 'All Impacts' || amendment.impact === selectedImpact;
    const matchesStatus = selectedStatus === 'All Statuses' || amendment.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesYear && matchesImpact && matchesStatus;
  });

  const toggleAmendmentDetails = (amendmentId: string) => {
    setExpandedAmendment(expandedAmendment === amendmentId ? null : amendmentId);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Legal Amendments & Updates
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Stay current with the latest changes in pharmacy law and regulatory updates
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-emerald-200">Active Amendments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2024</div>
              <div className="text-emerald-200">Latest Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-emerald-200">Compliance Ready</div>
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
                  placeholder="Search amendments by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Impact Level
                </label>
                <select
                  value={selectedImpact}
                  onChange={(e) => setSelectedImpact(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                >
                  {impacts.map(impact => (
                    <option key={impact} value={impact}>{impact}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {filteredAmendments.map((amendment, index) => (
                  <motion.div
                    key={amendment.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-8 h-8 rounded-full border-4 ${
                        amendment.status === 'Active' 
                          ? 'bg-emerald-500 border-emerald-200 dark:border-emerald-800' 
                          : amendment.status === 'Pending'
                          ? 'bg-blue-500 border-blue-200 dark:border-blue-800'
                          : 'bg-slate-400 border-slate-200 dark:border-slate-700'
                      }`}></div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 min-w-0">
                      <Card className="mb-4">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-medium rounded">
                                  {amendment.year}
                                </span>
                                <span className={`px-2 py-1 text-xs font-medium rounded ${impactColors[amendment.impact as keyof typeof impactColors]}`}>
                                  {amendment.impact} Impact
                                </span>
                                <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[amendment.status as keyof typeof statusColors]}`}>
                                  {amendment.status}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {amendment.title}
                              </h3>
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>Effective: {amendment.effectiveDate}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-700 dark:text-slate-300 mb-4">
                            {amendment.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Affected Sections:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {amendment.affectedSections.map((section, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                                >
                                  {section}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded">
                              {amendment.category}
                            </span>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleAmendmentDetails(amendment.id)}
                              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                            >
                              {expandedAmendment === amendment.id ? (
                                <>
                                  Hide Details <ChevronUp className="w-4 h-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  View Details <ChevronDown className="w-4 h-4 ml-1" />
                                </>
                              )}
                            </Button>
                          </div>

                          {/* Expanded Details */}
                          {expandedAmendment === amendment.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                            >
                              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Detailed Information:
                              </h4>
                              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {amendment.details}
                              </p>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {filteredAmendments.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                  No amendments found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-linear-to-br from-slate-50 via-emerald-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-linear-to-r from-emerald-600/5 to-blue-600/5 dark:from-emerald-400/5 dark:to-blue-400/5"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Official Resources Hub
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-slate-900 to-emerald-900 dark:from-white dark:to-emerald-100 bg-clip-text text-transparent">
                Additional Resources
              </span>
              <br />
              <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                & Official Documents
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Access official documents, government notifications, compliance guides, and detailed analysis of recent amendments to stay updated with the latest legal changes
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
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Official Gazette
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Download official government notifications, legislative amendments, regulatory updates, and authenticated legal documents directly from government sources
                  </p>
                  
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>View Documents</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Latest Updates</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Monthly</span>
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
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Compliance Guide
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Step-by-step compliance guides, implementation strategies, best practices, and actionable checklists to ensure full adherence to new amendments
                  </p>
                  
                  <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Download Guide</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Compliance Rate</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">95%+</span>
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
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Impact Analysis
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Comprehensive impact analysis, risk assessments, operational implications, and strategic recommendations for your pharmaceutical practice
                  </p>
                  
                  <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Analysis Reports</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">100+ Reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Access Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Quick Access Tools</h3>
                <p className="text-slate-600 dark:text-slate-400">Essential tools for staying compliant with latest amendments</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Search className="w-6 h-6" />, label: 'Amendment Search', color: 'blue' },
                  { icon: <Bell className="w-6 h-6" />, label: 'Alert System', color: 'emerald' },
                  { icon: <Calendar className="w-6 h-6" />, label: 'Timeline View', color: 'purple' },
                  { icon: <Download className="w-6 h-6" />, label: 'Download Center', color: 'orange' },
                ].map((tool, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-white/80 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer group">
                    <div className={`w-12 h-12 bg-linear-to-br from-${tool.color}-500 to-${tool.color}-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{tool.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}