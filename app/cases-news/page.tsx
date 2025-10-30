'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Search, Filter, ArrowRight, ExternalLink, Bookmark, Share, TrendingUp, AlertTriangle, CheckCircle, Users, BookOpen } from 'lucide-react';
import Card, { CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const latestNews = [
  {
    id: 1,
    title: 'Toxic Cough Syrup Deaths: Sresan Pharmaceutical Case',
    summary: 'Cluster of child deaths in Madhya Pradesh linked to Coldrif cough syrup containing extremely high levels of toxic Diethylene Glycol (DEG), leading to regulatory crackdown.',
    content: 'In early October 2025, a cluster of child deaths (in children under 5) in Chhindwara district, Madhya Pradesh was linked to consumption of Coldrif cough syrup manufactured by Sresan Pharmaceutical (Tamil Nadu). Laboratory testing revealed extremely high levels of toxic industrial solvent Diethylene Glycol (DEG) — about 48% in one batch, far exceeding the permissible limit of 0.1%. The Central Drugs Standard Control Organisation (CDSCO) declared certain batches spurious and initiated wide-ranging inspections. Sresan Pharmaceutical\'s license is under threat, factory sealed, and owner S. Ranganathan arrested. Two senior drug inspectors in Tamil Nadu were suspended for failing to inspect the facility. The case exposes serious regulatory gaps in quality control, inadequate inspections, and lack of batch testing, prompting advisories about cough syrup use in young children.',
    category: 'Critical Safety Alert',
    date: '2025-10-30',
    source: 'CDSCO Investigation Report',
    impact: 'Critical',
    status: 'Under Investigation',
    tags: ['Child Safety', 'Spurious Drugs', 'DEG Contamination', 'CDSCO', 'Regulatory Failure'],
    relatedLaws: ['Drugs and Cosmetics Act, 1940', 'Criminal Provisions', 'Quality Control'],
    keyActors: ['Sresan Pharmaceutical', 'CDSCO', 'Tamil Nadu Drug Control', 'S. Ranganathan'],
    implications: [
      'Serious quality control breaches in paediatric medicines',
      'Regulatory enforcement gaps exposed',
      'Public health impact: kidney failure and deaths in children',
      'Need for stricter batch testing protocols'
    ],
    outcomes: [
      'Manufacturing licence under threat',
      'Factory sealed and owner arrested',
      'Two drug inspectors suspended',
      'State-wide bans on implicated syrup',
      'Urgent checks on paediatric cough syrups'
    ]
  },
  {
    id: 2,
    title: 'ORS Mislabeling Case: FSSAI vs Beverage Companies',
    summary: 'PIL filed against misuse of "ORS" term by beverage companies, leading to FSSAI directive and subsequent court challenge by major brands including Johnson & Johnson subsidiary.',
    content: 'A public interest litigation (PIL) was filed by paediatrician Dr Sivaranjini Santosh (Hyderabad) pointing out misuse of "ORS" term by sugar-loaded drinks masquerading as ORS, posing serious health risks. The Food Safety and Standards Authority of India (FSSAI) issued an advisory (October 2025) banning use of "ORS" (alone or with prefixes/suffixes) for any food/beverage product not satisfying WHO-approved ORS formulation. Major brands, including Johnson & Johnson subsidiary (JNTL Consumer Health), challenged the directive citing large stocks and earlier permissions. On October 17, 2025, Delhi High Court granted interim stay on certain FSSAI orders, pausing full enforcement until companies are given opportunity of hearing. The case highlights intersection of food-safety regulation, consumer protection, health rights, and corporate liability for misleading branding.',
    category: 'Consumer Protection',
    date: '2025-10-17',
    source: 'Delhi High Court & FSSAI',
    impact: 'High',
    status: 'Court Stay Granted',
    tags: ['ORS Mislabeling', 'FSSAI', 'Consumer Protection', 'Misleading Claims', 'Child Health'],
    relatedLaws: ['Food Safety and Standards Act, 2006', 'Consumer Protection Act, 2019', 'Medical Standards'],
    keyActors: ['Dr Sivaranjini Santosh', 'FSSAI', 'Johnson & Johnson/JNTL', 'Delhi High Court'],
    implications: [
      'Medical terms cannot be casually used in commercial beverages',
      'Products using medical terms must meet required formulation standards',
      'Corporate liability for misleading branding established',
      'Children\'s health protection prioritized in regulatory decisions'
    ],
    legalTimeline: [
      'PIL filed by paediatrician',
      'FSSAI directive banning ORS misuse',
      'Corporate challenge to directive',
      'Delhi High Court interim stay granted',
      'Ongoing regulatory enforcement'
    ]
  },
  {
    id: 3,
    title: 'JJ Hospital Cough Syrup Case (Mumbai, 1986)',
    summary: 'Historic case where 14 children died after consuming DEG-contaminated cough syrup, leading to stricter glycerin quality checks and early drug regulation reforms.',
    content: '14 children died after consuming a cough syrup contaminated with Diethylene Glycol (DEG) — a toxic industrial chemical mistakenly used instead of glycerin. This tragic incident was caused by negligence in raw material testing by the manufacturer, highlighting critical gaps in pharmaceutical quality control during the 1980s. The case became a landmark in Indian pharmaceutical regulation history and led to significant reforms in drug manufacturing standards and testing protocols.',
    category: 'Historical Case',
    date: '1986-01-01',
    source: 'Mumbai Health Department',
    impact: 'Critical',
    status: 'Landmark Case',
    tags: ['DEG Contamination', 'Historical Case', 'Child Deaths', 'Mumbai', 'Quality Control'],
    relatedLaws: ['Drugs and Cosmetics Act, 1940', 'IPC Section 304A'],
    keyActors: ['Mumbai Health Department', 'Manufacturer', 'JJ Hospital'],
    lawsInvolved: [
      'Drugs and Cosmetics Act, 1940 — Sections 17A (adulteration), 18(a)(i), and 27(a)',
      'IPC Section 304A — causing death by negligence'
    ],
    causes: [
      'Negligence in raw material testing by manufacturer',
      'Toxic industrial chemical used instead of glycerin',
      'Lack of proper quality control measures',
      'Inadequate regulatory oversight in the 1980s'
    ],
    impactDetails: [
      'Led to stricter glycerin quality checks',
      'Early discussions about drug regulation reform',
      'Increased awareness about pharmaceutical safety',
      'Foundation for modern quality control standards'
    ]
  },
  {
    id: 4,
    title: 'Gambia Deaths Linked to Indian Syrups (2022)',
    summary: '66 children in The Gambia died after taking contaminated cough syrups exported from India by Maiden Pharmaceuticals, causing international regulatory crisis.',
    content: '66 children in The Gambia (Africa) died after taking Maiden Pharmaceuticals\' cough syrups exported from India. The syrups were contaminated with Diethylene Glycol (DEG) and Ethylene Glycol, both toxic industrial chemicals. This international tragedy severely damaged India\'s pharmaceutical export reputation and led to WHO issuing a global alert. The case highlighted critical gaps in export quality control and international pharmaceutical safety standards.',
    category: 'International Crisis',
    date: '2022-10-01',
    source: 'WHO Global Alert',
    impact: 'Critical',
    status: 'International Investigation',
    tags: ['International Crisis', 'DEG Contamination', 'Export Quality', 'WHO Alert', 'Maiden Pharmaceuticals'],
    relatedLaws: ['Drugs and Cosmetics Act, 1940', 'IPC Sections 304A, 274, 420'],
    keyActors: ['Maiden Pharmaceuticals', 'WHO', 'Gambian Health Ministry', 'Indian Drug Regulators'],
    lawsInvolved: [
      'Drugs and Cosmetics Act — Sections 18(a)(i), 27(a)',
      'IPC Section 304A — causing death by negligence',
      'IPC Section 274 — adulteration of drugs',
      'IPC Section 420 — cheating and misbranding'
    ],
    causes: [
      'Contamination with DEG and Ethylene Glycol',
      'Inadequate export quality control',
      'Failure in international compliance standards',
      'Lack of proper testing for exported medicines'
    ],
    impactDetails: [
      'WHO issued global alert',
      'India\'s export reputation severely affected',
      'Enhanced international scrutiny of Indian pharma exports',
      'Stricter export quality control measures implemented'
    ]
  }
];

const categories = ['All', 'Critical Safety Alert', 'Consumer Protection', 'Historical Case', 'International Crisis'];
const impactLevels = ['All', 'Critical', 'High', 'Medium', 'Low'];

export default function CasesNews() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImpact, setSelectedImpact] = useState('All');
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const filteredNews = latestNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
    const matchesImpact = selectedImpact === 'All' || news.impact === selectedImpact;
    
    return matchesSearch && matchesCategory && matchesImpact;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      case 'High': return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30';
      case 'Medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Low': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      default: return 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Final':
      case 'Implemented':
      case 'Binding':
      case 'Landmark Case':
        return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'Ongoing':
      case 'Under Consultation':
      case 'Under Investigation':
      case 'Court Stay Granted':
      case 'International Investigation':
        return <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
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
              <TrendingUp className="w-4 h-4" />
              Latest Legal Updates
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Cases & News</span>
              <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Legal Updates
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest legal developments, court judgments, regulatory changes, and policy updates in pharmaceutical law
            </p>
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-slate-800 relative -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search news, cases, or legal updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border border-slate-300 dark:border-slate-600 rounded-lg"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Impact Filter */}
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {impactLevels.map(impact => (
                  <option key={impact} value={impact}>Impact: {impact}</option>
                ))}
              </select>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Updates', value: filteredNews.length, color: 'blue' },
                { label: 'This Month', value: filteredNews.filter(n => new Date(n.date) > new Date('2025-10-01')).length, color: 'green' },
                { label: 'Critical Impact', value: filteredNews.filter(n => n.impact === 'Critical').length, color: 'red' },
                { label: 'Active Cases', value: filteredNews.filter(n => n.status === 'Active' || n.status === 'Ongoing').length, color: 'orange' },
              ].map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-center`}>
                  <div className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm text-${stat.color}-600 dark:text-${stat.color}-400`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News List */}
            <div className="lg:col-span-2 space-y-6">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div onClick={() => setSelectedNews(selectedNews === news.id ? null : news.id)} className="cursor-pointer">
                    <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(typeof news.impact === 'string' ? news.impact : 'Medium')}`}>
                            {typeof news.impact === 'string' ? news.impact : 'Medium'}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            {news.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          {getStatusIcon(news.status)}
                          <span className="text-xs">{news.status}</span>
                        </div>
                      </div>

                      <CardTitle className="text-xl mb-3 text-slate-900 dark:text-slate-100">
                        {news.title}
                      </CardTitle>

                      <CardDescription className="text-slate-600 dark:text-slate-400 mb-4">
                        {news.summary}
                      </CardDescription>

                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(news.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" />
                            {news.source}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {selectedNews === news.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
                        >
                          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            {news.content}
                          </p>
                          
                          {/* Key Actors (for detailed cases) */}
                          {(news as any).keyActors && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Key Actors
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {(news as any).keyActors.map((actor: string, actorIndex: number) => (
                                  <span key={actorIndex} className="px-3 py-2 rounded-lg text-sm bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                    {actor}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Implications (for detailed cases) */}
                          {(news as any).implications && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Key Implications
                              </h4>
                              <ul className="space-y-2">
                                {(news as any).implications.map((implication: string, impIndex: number) => (
                                  <li key={impIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                    {implication}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Outcomes (for detailed cases) */}
                          {(news as any).outcomes && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Outcomes & Actions
                              </h4>
                              <ul className="space-y-2">
                                {(news as any).outcomes.map((outcome: string, outIndex: number) => (
                                  <li key={outIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                    {outcome}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Legal Timeline (for ORS case) */}
                          {(news as any).legalTimeline && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Legal Timeline
                              </h4>
                              <div className="space-y-3">
                                {(news as any).legalTimeline.map((step: string, stepIndex: number) => (
                                  <div key={stepIndex} className="flex items-start gap-3">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                      {stepIndex < (news as any).legalTimeline.length - 1 && (
                                        <div className="w-0.5 h-6 bg-blue-200 dark:bg-blue-800 mt-1"></div>
                                      )}
                                    </div>
                                    <span className="text-sm text-slate-700 dark:text-slate-300 pt-0.5">
                                      {step}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Laws Involved (for historical cases) */}
                          {(news as any).lawsInvolved && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Laws Involved
                              </h4>
                              <ul className="space-y-2">
                                {(news as any).lawsInvolved.map((law: string, lawIndex: number) => (
                                  <li key={lawIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                                    {law}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Causes (for historical cases) */}
                          {(news as any).causes && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Causes
                              </h4>
                              <ul className="space-y-2">
                                {(news as any).causes.map((cause: string, causeIndex: number) => (
                                  <li key={causeIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                                    {cause}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Impact Details (for historical cases - different from implications) */}
                          {(news as any).impactDetails && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Impact & Reforms
                              </h4>
                              <ul className="space-y-2">
                                {(news as any).impactDetails.map((impactItem: string, impactIndex: number) => (
                                  <li key={impactIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                                    {impactItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Related Laws */}
                          {news.relatedLaws.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Related Laws
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {news.relatedLaws.map((law, lawIndex) => (
                                  <span key={lawIndex} className="px-3 py-2 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                    {law}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                  </div>
                </motion.div>
              ))}

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                    No updates found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'CDSCO Notifications', href: '#' },
                      { label: 'Supreme Court Judgments', href: '#' },
                      { label: 'Ministry Circulars', href: '#' },
                      { label: 'State FDA Updates', href: '#' },
                      { label: 'Patent Office News', href: '#' },
                    ].map((link, index) => (
                      <a key={index} href={link.href} className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories Overview */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category, index) => {
                      const count = latestNews.filter(n => n.category === category).length;
                      return (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">{category}</span>
                          <span className="text-slate-900 dark:text-slate-100 font-medium">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Subscribe to Updates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Stay Updated</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Get notified about latest legal updates and important changes
                  </p>
                  <Button className="w-full">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Subscribe to Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}