'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, BookOpen, Shield, Lightbulb, Globe, Zap } from 'lucide-react';
import Card, { CardContent, CardDescription, CardTitle } from '../components/ui/Card';

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Comprehensive Content',
    description: 'Complete coverage of pharmacy laws, regulations, and judiciary preparation materials with real-time updates.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Student-Focused',
    description: 'Designed specifically for pharmacy and law students preparing for professional exams and career advancement.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Expert Curated',
    description: 'Content reviewed and curated by legal and pharmacy professionals with decades of experience.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Always Updated',
    description: 'Stay current with latest amendments, case laws, and regulatory changes in real-time.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Interactive Learning',
    description: 'Engaging case studies, quizzes, and practical examples for better understanding.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Accessible Everywhere',
    description: 'Learn anytime, anywhere with our responsive design and mobile-friendly interface.',
  },
];

const stats = [
  { number: '15,000+', label: 'Students Helped', description: 'Across India and globally' },
  { number: '750+', label: 'Legal Cases', description: 'Landmark judgments covered' },
  { number: '100+', label: 'Law Sections', description: 'Comprehensive coverage' },
  { number: '98%', label: 'Success Rate', description: 'Student satisfaction' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Excellence',
    description: 'Committed to providing the highest quality educational content and learning experience.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Accessibility',
    description: 'Making quality legal education accessible to students from all backgrounds and locations.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Continuously improving our platform with cutting-edge technology and learning methodologies.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'Building a supportive community of learners, professionals, and educators.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About LawPharm Academy
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed mb-8">
              Empowering the next generation of pharmacy and legal professionals through 
              comprehensive, accessible, and expertly curated educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pharmacy-laws"
                className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-200"
              >
                Start Learning
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-slate-900 dark:text-slate-100">Our Mission</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    To revolutionize legal education by simplifying complex pharmacy regulations into clear, 
                    interactive learning experiences. We empower students and professionals to excel in their 
                    careers while ensuring quality education remains accessible to everyone, regardless of 
                    their background or location.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Eye className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-slate-900 dark:text-slate-100">Our Vision</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    To become the leading digital platform for pharmacy law education and judiciary preparation 
                    across India and beyond. We envision fostering a community of well-informed professionals 
                    who contribute to better healthcare outcomes and justice delivery systems globally.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg mb-3 text-slate-900 dark:text-slate-100">{value.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-600 dark:text-slate-400">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Platform Excellence
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover the features that make our platform the preferred choice for thousands of students and professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="mb-4 text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of students and professionals across India and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-slate-800 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Start Your Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Join our growing community of learners and take your pharmacy law knowledge to the next level. 
              Start your journey towards professional excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pharmacy-laws"
                className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Laws & Regulations
              </a>
              <a
                href="/case-references"
                className="px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse Case Studies
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}