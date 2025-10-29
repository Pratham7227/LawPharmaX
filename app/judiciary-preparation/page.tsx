'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, Filter, Search, PlayCircle, Download, CheckCircle } from 'lucide-react';
import Card, { CardContent, CardDescription, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const courses = [
  {
    id: 1,
    title: 'Constitutional Law for Pharmacy Professionals',
    category: 'Constitutional Law',
    level: 'Intermediate',
    duration: '40 hours',
    modules: 12,
    enrolled: 2847,
    rating: 4.8,
    price: 'Free',
    instructor: 'Dr. Rajesh Kumar, Constitutional Law Expert',
    description: 'Comprehensive coverage of constitutional principles affecting healthcare and pharmaceutical regulation in India.',
    topics: [
      'Fundamental Rights and Healthcare',
      'Directive Principles and Public Health',
      'Right to Health as Fundamental Right',
      'State vs Central Powers in Health',
      'Constitutional Validity of Drug Laws',
      'Article 21 and Right to Healthcare'
    ],
    syllabus: [
      'Introduction to Constitutional Framework',
      'Fundamental Rights (Articles 12-35)',
      'Directive Principles (Articles 36-51)',
      'Healthcare as Constitutional Mandate',
      'Judicial Review in Health Matters',
      'Emergency Provisions and Health'
    ],
    examPattern: 'Objective + Descriptive',
    featured: true,
  },
  {
    id: 2,
    title: 'Criminal Law in Medical Practice',
    category: 'Criminal Law',
    level: 'Advanced',
    duration: '35 hours',
    modules: 10,
    enrolled: 1923,
    rating: 4.7,
    price: 'Free',
    instructor: 'Adv. Priya Sharma, Criminal Law Specialist',
    description: 'Essential criminal law concepts for healthcare professionals, including medical negligence and professional liability.',
    topics: [
      'IPC Sections Relevant to Medical Practice',
      'Medical Negligence under Criminal Law',
      'Consent and Criminal Liability',
      'Professional Misconduct',
      'Drug-related Criminal Offenses',
      'Evidence in Medical Criminal Cases'
    ],
    syllabus: [
      'Introduction to Criminal Law',
      'IPC Sections 304A, 320, 322',
      'Medical Negligence Case Studies',
      'Consent and Criminal Liability',
      'NDPS Act Criminal Provisions',
      'Court Procedures in Medical Cases'
    ],
    examPattern: 'Case Studies + MCQs',
    featured: false,
  },
  {
    id: 3,
    title: 'Civil Law and Healthcare Rights',
    category: 'Civil Law',
    level: 'Beginner',
    duration: '30 hours',
    modules: 8,
    enrolled: 3456,
    rating: 4.9,
    price: 'Free',
    instructor: 'Justice (Retd.) Mukesh Agarwal',
    description: 'Civil law principles governing healthcare delivery, patient rights, and medical contracts.',
    topics: [
      'Contract Law in Healthcare',
      'Tort Law and Medical Negligence',
      'Patient Rights and Civil Remedies',
      'Medical Insurance Law',
      'Hospital Liability',
      'Consumer Protection in Healthcare'
    ],
    syllabus: [
      'Principles of Contract Law',
      'Medical Service Contracts',
      'Tort Law Fundamentals',
      'Negligence in Civil Law',
      'Damages and Compensation',
      'Consumer Court Procedures'
    ],
    examPattern: 'Practical Problems + Theory',
    featured: true,
  },
  {
    id: 4,
    title: 'Administrative Law in Drug Regulation',
    category: 'Administrative Law',
    level: 'Advanced',
    duration: '45 hours',
    modules: 15,
    enrolled: 1678,
    rating: 4.6,
    price: 'Free',
    instructor: 'Prof. Anita Desai, Administrative Law',
    description: 'Comprehensive study of administrative law principles in pharmaceutical regulation and drug control.',
    topics: [
      'Administrative Law Principles',
      'Delegated Legislation in Drug Law',
      'Judicial Review of Drug Policies',
      'Natural Justice in Drug Licensing',
      'Administrative Tribunals',
      'RTI in Pharmaceutical Sector'
    ],
    syllabus: [
      'Administrative Law Fundamentals',
      'Delegated Legislation',
      'Principles of Natural Justice',
      'Judicial Review Concepts',
      'Administrative Tribunals',
      'Right to Information Act'
    ],
    examPattern: 'Case Analysis + Essays',
    featured: false,
  },
  {
    id: 5,
    title: 'Intellectual Property Law for Pharmaceuticals',
    category: 'IP Law',
    level: 'Intermediate',
    duration: '38 hours',
    modules: 11,
    enrolled: 2156,
    rating: 4.8,
    price: 'Free',
    instructor: 'Dr. Suresh Menon, IP Law Expert',
    description: 'Specialized course on pharmaceutical patents, trademarks, and intellectual property protection.',
    topics: [
      'Patent Law Fundamentals',
      'Pharmaceutical Patent Strategy',
      'TRIPS Agreement and India',
      'Compulsory Licensing',
      'Patent Oppositions',
      'Trademark Law for Drugs'
    ],
    syllabus: [
      'Introduction to IP Law',
      'Patents Act 1970',
      'Pharmaceutical Patenting',
      'Patent Oppositions and Revocations',
      'Trademark Registration',
      'International IP Frameworks'
    ],
    examPattern: 'Patent Drafting + MCQs',
    featured: true,
  },
  {
    id: 6,
    title: 'Environmental Law and Pharmaceutical Industry',
    category: 'Environmental Law',
    level: 'Intermediate',
    duration: '25 hours',
    modules: 7,
    enrolled: 1234,
    rating: 4.5,
    price: 'Free',
    instructor: 'Dr. Kavita Nair, Environmental Law',
    description: 'Environmental regulations affecting pharmaceutical manufacturing and waste management.',
    topics: [
      'Environmental Protection Act',
      'Pollution Control in Pharma',
      'Waste Management Regulations',
      'Environmental Impact Assessment',
      'Green Tribunal Procedures',
      'Sustainable Manufacturing'
    ],
    syllabus: [
      'Environmental Law Framework',
      'Air and Water Pollution Laws',
      'Hazardous Waste Management',
      'Environmental Clearances',
      'NGT Procedures',
      'Corporate Environmental Responsibility'
    ],
    examPattern: 'Project Work + Viva',
    featured: false,
  }
];

const categories = ['All', 'Constitutional Law', 'Criminal Law', 'Civil Law', 'Administrative Law', 'IP Law', 'Environmental Law'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function JudiciaryPreparation() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredCourses = filteredCourses.filter(course => course.featured);
  const regularCourses = filteredCourses.filter(course => !course.featured);

  const levelColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header Section */}
      <section className="bg-linear-to-r from-teal-800 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Judiciary Preparation Courses
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Comprehensive legal education for pharmacy professionals pursuing judiciary careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses, topics, or instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Our most popular and comprehensive judiciary preparation courses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full border-2 border-teal-200 dark:border-teal-800">
                    <CardContent className="p-6">
                      {/* Featured Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-xs font-medium">
                          ⭐ Featured
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[course.level as keyof typeof levelColors]}`}>
                          {course.level}
                        </span>
                      </div>

                      {/* Course Title */}
                      <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{course.instructor}</p>

                      {/* Course Info */}
                      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.modules} modules</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <CardDescription className="mb-4">
                        {course.description}
                      </CardDescription>

                      {/* Key Topics */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Topics:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.topics.slice(0, 3).map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                          {course.topics.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                              +{course.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enrollment Info */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
                          <Users className="w-4 h-4" />
                          <span>{course.enrolled.toLocaleString()} enrolled</span>
                        </div>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          {course.price}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Start Learning
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
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

      {/* All Courses */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              All Courses
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive curriculum covering all aspects of law for judiciary preparation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {regularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[course.level as keyof typeof levelColors]}`}>
                            {course.level}
                          </span>
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                            {course.category}
                          </span>
                        </div>
                        <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{course.instructor}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <CardDescription className="mb-4">
                      {course.description}
                    </CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
                        <Users className="w-4 h-4" />
                        <span>{course.enrolled.toLocaleString()} enrolled</span>
                      </div>
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        {course.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {courses.length}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Total Courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {courses.reduce((sum, course) => sum + course.enrolled, 0).toLocaleString()}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Students Enrolled</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {(courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1)}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Average Rating</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                85%
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}