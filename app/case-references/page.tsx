'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, Scale, ExternalLink, ChevronDown, ChevronUp, ArrowRight, BookOpen, Target, Bookmark } from 'lucide-react';
import Card, { CardContent, CardDescription, CardTitle } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const landmarkCases = [
  {
    id: 1,
    caseName: 'Cipla Ltd. vs. Union of India',
    year: '2018',
    court: 'Supreme Court of India',
    citation: 'Civil Appeal No. 4252 of 2018',
    category: 'Patent Law',
    shortDescription: 'Landmark case establishing compulsory licensing under Section 84 of the Patents Act for essential medicines.',
    fullDescription: 'This case established important precedents for compulsory licensing of pharmaceutical patents when medicines are not available to the public at reasonably affordable prices. The court held that public interest and access to essential medicines takes precedence over patent monopolies in certain circumstances.',
    keyPoints: [
      'Compulsory licensing can be granted for essential medicines',
      'Public interest supersedes patent monopoly in healthcare',
      'Pricing must be reasonable and accessible to common public',
      'Working requirement must be satisfied by patentee'
    ],
    impact: 'High',
    relevantSections: ['Section 84 - Patents Act', 'Section 92 - Patents Act'],
    legalPrinciple: 'Public interest in healthcare access vs. patent protection',
  },
  {
    id: 2,
    caseName: 'Indian Pharmaceutical Association vs. Union of India',
    year: '2020',
    court: 'Delhi High Court',
    citation: 'W.P.(C) 8289/2019',
    category: 'Drug Pricing',
    shortDescription: 'Challenge to NPPA price control mechanism for essential medicines under Drug Price Control Order.',
    fullDescription: 'The pharmaceutical association challenged the price control mechanism under DPCO 2013, arguing it was arbitrary and violated fundamental rights. The court upheld the governments power to control prices of essential medicines in public interest.',
    keyPoints: [
      'DPCO 2013 pricing mechanism upheld as constitutional',
      'Government has sovereign power to control essential drug prices',
      'Price control serves larger public interest in healthcare',
      'Industry profits cannot override public health concerns'
    ],
    impact: 'High',
    relevantSections: ['DPCO 2013', 'Essential Commodities Act'],
    legalPrinciple: 'State regulation of essential commodities pricing',
  },
  {
    id: 3,
    caseName: 'Dr. Reddys Laboratories vs. Drugs Controller General',
    year: '2019',
    court: 'Bombay High Court',
    citation: 'Writ Petition No. 1247 of 2019',
    category: 'Drug Approval',
    shortDescription: 'Dispute over clinical trial requirements and accelerated approval process for new drug applications.',
    fullDescription: 'The case involved challenges to the clinical trial requirements under New Drug and Clinical Trial Rules 2019. The court clarified the regulatory framework for drug approvals and the balance between safety and innovation.',
    keyPoints: [
      'Clinical trial requirements are mandatory for patient safety',
      'Accelerated approval only for unmet medical needs',
      'Data integrity and transparency essential in drug approval',
      'Regulatory compliance cannot be compromised for speed'
    ],
    impact: 'Medium',
    relevantSections: ['Rule 122A - D&C Rules', 'Schedule Y'],
    legalPrinciple: 'Drug safety regulation vs. innovation acceleration',
  },
  {
    id: 4,
    caseName: 'Ranbaxy Laboratories vs. Central Bureau of Investigation',
    year: '2017',
    court: 'Supreme Court of India',
    citation: 'Criminal Appeal No. 897 of 2017',
    category: 'Drug Quality',
    shortDescription: 'Criminal case involving sale of spurious drugs and violations of Good Manufacturing Practices.',
    fullDescription: 'Major case involving systematic violations of GMP standards and sale of spurious drugs in international markets. The case established stringent penalties for pharmaceutical companies violating quality standards.',
    keyPoints: [
      'GMP violations constitute serious criminal offense',
      'Corporate liability extends to top management',
      'International reputation affects domestic licensing',
      'Quality control is non-negotiable in pharmaceutical industry'
    ],
    impact: 'Critical',
    relevantSections: ['Section 17 - D&C Act', 'Section 27 - D&C Act'],
    legalPrinciple: 'Corporate criminal liability for drug quality violations',
  },
  {
    id: 5,
    caseName: 'Novartis AG vs. Union of India',
    year: '2013',
    court: 'Supreme Court of India',
    citation: 'Civil Appeal Nos. 2706-2716 of 2013',
    category: 'Patent Law',
    shortDescription: 'Famous case denying patent to cancer drug Glivec, establishing strict patentability criteria.',
    fullDescription: 'Landmark judgment that denied patent to Novartis for the cancer drug Glivec, establishing that minor modifications to existing drugs do not qualify for patent protection. The case strengthened Section 3(d) of the Patents Act.',
    keyPoints: [
      'Enhanced efficacy must be demonstrated for patent grant',
      'Mere discovery of new form of known substance not patentable',
      'Section 3(d) prevents evergreening of patents',
      'Public interest considerations in patent law'
    ],
    impact: 'Critical',
    relevantSections: ['Section 3(d) - Patents Act', 'Section 25 - Patents Act'],
    legalPrinciple: 'Strict patentability standards for pharmaceuticals',
  },
  {
    id: 6,
    caseName: 'Mankind Pharma vs. Anita Drugs',
    year: '2021',
    court: 'National Consumer Disputes Redressal Commission',
    citation: 'Consumer Case No. 456 of 2021',
    category: 'Consumer Protection',
    shortDescription: 'Consumer protection case involving defective medicines and compensation for medical negligence.',
    fullDescription: 'Important case establishing liability of pharmaceutical companies for defective drugs and the right of consumers to compensation for medical harm caused by spurious or substandard medicines.',
    keyPoints: [
      'Pharmaceutical companies liable for defective products',
      'Consumer has right to compensation for medical harm',
      'Strict liability principle applies to drug manufacturers',
      'Burden of proof on manufacturer to show due diligence'
    ],
    impact: 'Medium',
    relevantSections: ['Consumer Protection Act 2019', 'Section 18 - D&C Act'],
    legalPrinciple: 'Strict liability for defective pharmaceutical products',
  }
];

const categories = ['All', 'Patent Law', 'Drug Pricing', 'Drug Approval', 'Drug Quality', 'Consumer Protection'];
const courts = ['All Courts', 'Supreme Court of India', 'High Courts', 'Consumer Courts'];
const impacts = ['All', 'Critical', 'High', 'Medium'];

export default function CaseReferences() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourt, setSelectedCourt] = useState('All Courts');
  const [selectedImpact, setSelectedImpact] = useState('All');
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const filteredCases = landmarkCases.filter(caseItem => {
    const matchesSearch = caseItem.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseItem.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseItem.legalPrinciple.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || caseItem.category === selectedCategory;
    const matchesCourt = selectedCourt === 'All Courts' || caseItem.court.includes(selectedCourt.replace(' of India', ''));
    const matchesImpact = selectedImpact === 'All' || caseItem.impact === selectedImpact;
    
    return matchesSearch && matchesCategory && matchesCourt && matchesImpact;
  });

  const impactColors = {
    Critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    High: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Landmark Case References
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive collection of landmark cases in Indian pharmacy law and pharmaceutical jurisprudence
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
              <div className="text-3xl font-bold mb-2">{landmarkCases.length}</div>
              <div className="text-indigo-200">Landmark Cases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {landmarkCases.filter(c => c.impact === 'Critical').length}
              </div>
              <div className="text-indigo-200">Critical Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-indigo-200">Legal Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{new Date().getFullYear()}</div>
              <div className="text-indigo-200">Updated Till</div>
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
                  placeholder="Search cases, legal principles, or court names..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Court Level
                </label>
                <select
                  value={selectedCourt}
                  onChange={(e) => setSelectedCourt(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100"
                >
                  {courts.map(court => (
                    <option key={court} value={court}>{court}</option>
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
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100"
                >
                  {impacts.map(impact => (
                    <option key={impact} value={impact}>{impact}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${impactColors[caseItem.impact as keyof typeof impactColors]}`}>
                              {caseItem.impact} Impact
                            </span>
                            <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-xs font-medium">
                              {caseItem.category}
                            </span>
                          </div>
                          <CardTitle className="text-lg mb-3 text-slate-900 dark:text-slate-100">
                            {caseItem.caseName}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{caseItem.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Scale className="w-4 h-4" />
                              <span className="truncate">{caseItem.court}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Citation */}
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <ExternalLink className="w-4 h-4 text-slate-500" />
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">CITATION</span>
                        </div>
                        <span className="text-sm font-mono text-slate-700 dark:text-slate-300">
                          {caseItem.citation}
                        </span>
                      </div>

                      {/* Short Description */}
                      <CardDescription className="mb-4 text-slate-600 dark:text-slate-400">
                        {caseItem.shortDescription}
                      </CardDescription>

                      {/* Legal Principle */}
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-l-blue-500">
                        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                          Legal Principle:
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 italic">
                          "{caseItem.legalPrinciple}"
                        </p>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {expandedCase === caseItem.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4 space-y-4"
                          >
                            {/* Full Description */}
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Detailed Analysis:
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {caseItem.fullDescription}
                              </p>
                            </div>

                            {/* Key Points */}
                            <div>
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Key Legal Points:
                              </h4>
                              <div className="space-y-2">
                                {caseItem.keyPoints.map((point, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></div>
                                    <span className="text-sm text-slate-600 dark:text-slate-300">
                                      {point}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Relevant Sections */}
                            <div>
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Relevant Legal Sections:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {caseItem.relevantSections.map((section, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded text-xs font-medium border border-emerald-200 dark:border-emerald-800"
                                  >
                                    {section}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
                          className="flex-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                          {expandedCase === caseItem.id ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-2" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-2" />
                              Read More
                            </>
                          )}
                        </Button>
                        <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Full Judgment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                  No cases found
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
      <section className="py-20 bg-linear-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-600/5 to-purple-600/5 dark:from-indigo-400/5 dark:to-purple-400/5"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Legal Research Center
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-indigo-100 bg-clip-text text-transparent">
                Advanced Legal Resources
              </span>
              <br />
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                & Research Tools
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive legal databases, advanced research tools, and professional resources for deeper case analysis and legal research excellence
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
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-blue-500/5 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Scale className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Case Law Database
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Access comprehensive database of full judgments, detailed case analysis, landmark decisions, and judicial precedents from Indian courts with advanced search capabilities
                  </p>
                  
                  <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Browse Database</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Total Cases</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">10,000+</span>
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
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ExternalLink className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Legal Citations
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Master proper citation formats, referencing guidelines, legal documentation standards, and professional writing conventions for legal documents and research papers
                  </p>
                  
                  <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Citation Guide</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Citation Formats</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">15+ Styles</span>
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
                    <Filter className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Research Tools
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Advanced search algorithms, case comparison tools, trend analysis, citation tracking, and AI-powered research assistance for comprehensive legal research and case study
                  </p>
                  
                  <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Research Tools</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">AI Accuracy</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">97%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Research Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Research Dashboard</h3>
                <p className="text-slate-600 dark:text-slate-400">Powerful tools for legal research and case analysis</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Search className="w-6 h-6" />, label: 'Smart Search', count: 'AI-Powered' },
                  { icon: <BookOpen className="w-6 h-6" />, label: 'Case Library', count: '10K+ Cases' },
                  { icon: <Target className="w-6 h-6" />, label: 'Legal Analytics', count: 'Real-time' },
                  { icon: <Bookmark className="w-6 h-6" />, label: 'Saved Research', count: 'Unlimited' },
                ].map((tool, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer group">
                    <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg">
                      {tool.icon}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">{tool.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{tool.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Statistics */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Database Statistics
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive coverage of pharmaceutical law jurisprudence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {landmarkCases.length}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Landmark Cases</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {landmarkCases.filter(c => c.impact === 'Critical').length}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Critical Impact</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {new Date().getFullYear()}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Updated Till</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {categories.length - 1}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Legal Categories</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}