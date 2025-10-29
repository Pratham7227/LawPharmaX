'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Star, Filter, Search, BookOpen, Calendar, Award, TrendingUp, Bookmark, Share2 } from 'lucide-react';
import Card, { CardContent, CardDescription, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const studyMaterials = [
  {
    id: 1,
    title: 'Complete Drugs and Cosmetics Act 1940 - Comprehensive Notes',
    category: 'Pharmacy Acts',
    type: 'Detailed Notes',
    format: 'PDF',
    pages: 45,
    size: '2.8 MB',
    downloads: 12847,
    rating: 4.9,
    lastUpdated: '2024-12-15',
    author: 'Dr. Rajesh Kumar',
    description: 'Comprehensive coverage of the Drugs and Cosmetics Act 1940 with recent amendments, case studies, and examination patterns.',
    keyFeatures: [
      'Section-wise Analysis',
      'Recent Amendments 2024',
      'Important Case Laws',
      'Practice Questions',
      'Quick Reference Guide'
    ],
    difficulty: 'Intermediate',
    examRelevance: 'High',
    featured: true,
  },
  {
    id: 2,
    title: 'Pharmacy Practice Regulations - State-wise Compilation',
    category: 'State Regulations',
    type: 'Reference Guide',
    format: 'PDF',
    pages: 78,
    size: '4.2 MB',
    downloads: 8934,
    rating: 4.7,
    lastUpdated: '2024-12-10',
    author: 'Pharmacy Council of India',
    description: 'State-wise compilation of pharmacy practice regulations across all Indian states and union territories.',
    keyFeatures: [
      'All 28 States Covered',
      'Comparative Analysis',
      'Registration Procedures',
      'Fee Structures',
      'Contact Information'
    ],
    difficulty: 'Beginner',
    examRelevance: 'Medium',
    featured: false,
  },
  {
    id: 3,
    title: 'NDPS Act 1985 - Complete Study Material',
    category: 'Drug Control',
    type: 'Study Guide',
    format: 'PDF',
    pages: 67,
    size: '3.5 MB',
    downloads: 15632,
    rating: 4.8,
    lastUpdated: '2024-12-12',
    author: 'Narcotics Control Bureau',
    description: 'Comprehensive study material on Narcotic Drugs and Psychotropic Substances Act with recent amendments.',
    keyFeatures: [
      'Updated Schedules',
      'License Procedures',
      'Penalty Matrix',
      'Court Judgments',
      'Appeal Procedures'
    ],
    difficulty: 'Advanced',
    examRelevance: 'Very High',
    featured: true,
  },
  {
    id: 4,
    title: 'Medical Device Rules 2017 - Implementation Guide',
    category: 'Medical Devices',
    type: 'Implementation Guide',
    format: 'PDF',
    pages: 89,
    size: '5.1 MB',
    downloads: 6745,
    rating: 4.6,
    lastUpdated: '2024-12-08',
    author: 'CDSCO Technical Team',
    description: 'Detailed implementation guide for Medical Device Rules 2017 with practical examples and case studies.',
    keyFeatures: [
      'Classification Framework',
      'Registration Forms',
      'QMS Requirements',
      'Timeline Charts',
      'Fee Structure'
    ],
    difficulty: 'Advanced',
    examRelevance: 'High',
    featured: false,
  },
  {
    id: 5,
    title: 'Pharmaceutical Jurisprudence - Quick Revision Notes',
    category: 'Jurisprudence',
    type: 'Quick Notes',
    format: 'PDF',
    pages: 32,
    size: '1.8 MB',
    downloads: 18945,
    rating: 4.9,
    lastUpdated: '2024-12-14',
    author: 'Prof. Anita Sharma',
    description: 'Concise revision notes covering all aspects of pharmaceutical jurisprudence for quick exam preparation.',
    keyFeatures: [
      'Bullet Point Format',
      'Memory Aids',
      'Important Dates',
      'Key Definitions',
      'Exam Tips'
    ],
    difficulty: 'Beginner',
    examRelevance: 'Very High',
    featured: true,
  },
  {
    id: 6,
    title: 'Clinical Trial Regulations - Complete Handbook',
    category: 'Clinical Research',
    type: 'Handbook',
    format: 'PDF',
    pages: 124,
    size: '7.2 MB',
    downloads: 5234,
    rating: 4.5,
    lastUpdated: '2024-12-05',
    author: 'Central Drugs Standard Control Organization',
    description: 'Comprehensive handbook on clinical trial regulations in India with international comparisons.',
    keyFeatures: [
      'GCP 2.0 Guidelines',
      'International Standards',
      'Compliance Checklists',
      'Sample Documents',
      'Regulatory Updates'
    ],
    difficulty: 'Advanced',
    examRelevance: 'Medium',
    featured: false,
  }
];

const categories = ['All', 'Pharmacy Acts', 'State Regulations', 'Drug Control', 'Medical Devices', 'Jurisprudence', 'Clinical Research'];
const types = ['All Types', 'Detailed Notes', 'Quick Notes', 'Study Guide', 'Reference Guide', 'Handbook', 'Implementation Guide'];
const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function NotesAndSummaries() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || material.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'All Levels' || material.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
  });

  const featuredMaterials = filteredMaterials.filter(material => material.featured);
  const regularMaterials = filteredMaterials.filter(material => !material.featured);

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  const examRelevanceColors = {
    'Very High': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'High': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Professional Header Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-indigo-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Premium Study Materials
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Study Notes &
              </span>
              <br />
              <span className="text-white">Learning Resources</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive collection of pharmaceutical law study materials, detailed notes, and professional resources designed for excellence in legal education.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{studyMaterials.length}+</div>
                <div className="text-blue-200 text-sm">Study Materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{studyMaterials.reduce((sum, material) => sum + material.downloads, 0).toLocaleString()}+</div>
                <div className="text-blue-200 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{studyMaterials.reduce((sum, material) => sum + material.pages, 0)}+</div>
                <div className="text-blue-200 text-sm">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{(studyMaterials.reduce((sum, material) => sum + material.rating, 0) / studyMaterials.length).toFixed(1)}</div>
                <div className="text-blue-200 text-sm">Avg Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgb(248 250 252)" className="dark:fill-slate-900"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-slate-800 shadow-sm relative -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Enhanced Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title, author, topics, or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  />
                </div>
              </div>

              {/* Enhanced Filters */}
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none min-w-[140px]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none min-w-[120px]"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none min-w-[120px]"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Quick Filters */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mr-3">Quick filters:</span>
              {['Featured', 'Most Downloaded', 'Recently Updated', 'High Rated'].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials */}
      {featuredMaterials.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Featured Content
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Premium Study Materials
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our most comprehensive and highly-rated educational resources for pharmaceutical law mastery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredMaterials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
                    <CardContent className="p-8">
                      {/* Header with Featured Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold tracking-wide">
                              ⭐ FEATURED
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[material.difficulty as keyof typeof difficultyColors]}`}>
                            {material.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <CardTitle className="text-xl mb-3 leading-tight">{material.title}</CardTitle>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">{material.author}</p>

                      {/* Material Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300 mb-6">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{material.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          <span>{material.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{material.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(material.lastUpdated).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <CardDescription className="mb-6 leading-relaxed">
                        {material.description}
                      </CardDescription>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {material.keyFeatures.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                            </div>
                          ))}
                          {material.keyFeatures.length > 3 && (
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                +{material.keyFeatures.length - 3} more features
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* File Info */}
                      <div className="flex items-center justify-between mb-6 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-medium">{material.format}</span>
                          <span>•</span>
                          <span>{material.size}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${examRelevanceColors[material.examRelevance as keyof typeof examRelevanceColors]}`}>
                          {material.examRelevance} Relevance
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </Button>
                        <Button variant="outline" size="sm" className="px-3">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="px-3">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Materials */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Complete Study Library
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive collection of notes, summaries, and study materials for all levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regularMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                            {material.category}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                            {material.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${examRelevanceColors[material.examRelevance as keyof typeof examRelevanceColors]}`}>
                            {material.examRelevance}
                          </span>
                        </div>
                        <CardTitle className="text-lg mb-2 leading-tight">{material.title}</CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{material.author}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{material.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>{material.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{material.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className={`font-medium ${difficultyColors[material.difficulty as keyof typeof difficultyColors].split(' ')[1]}`}>
                          {material.difficulty}
                        </span>
                      </div>
                    </div>

                    <CardDescription className="mb-4 leading-relaxed">
                      {material.description}
                    </CardDescription>

                    <div className="flex items-center justify-between mb-6 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-medium">{material.format}</span>
                        <span>•</span>
                        <span>{material.size}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(material.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="py-16 bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Learning Impact
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Empowering pharmaceutical professionals with quality educational content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {studyMaterials.length}+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Study Materials</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Comprehensive Resources</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {studyMaterials.reduce((sum, material) => sum + material.downloads, 0).toLocaleString()}+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Total Downloads</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Growing Community</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {(studyMaterials.reduce((sum, material) => sum + material.rating, 0) / studyMaterials.length).toFixed(1)}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Average Rating</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quality Assured</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {studyMaterials.reduce((sum, material) => sum + material.pages, 0).toLocaleString()}+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Total Pages</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Extensive Coverage</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}