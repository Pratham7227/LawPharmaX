'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, HeadphonesIcon } from 'lucide-react';
import Card, { CardContent, CardTitle } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Support',
    content: 'support@lawpharmacademy.com',
    link: 'mailto:support@lawpharmacademy.com',
    description: 'Get detailed responses to your queries',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Live Chat',
    content: 'Available 9 AM - 6 PM IST',
    link: '#',
    description: 'Instant help for quick questions',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Headquarters',
    content: 'Mumbai, Maharashtra, India',
    link: '#',
    description: 'Serving students globally',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Response Time',
    content: 'Within 4-6 hours',
    link: '#',
    description: 'Fast and reliable support',
  },
];

const supportTypes = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Student Support',
    description: 'Help with studies, content access, and learning guidance',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Technical Support',
    description: 'Platform issues, account problems, and technical assistance',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'General Inquiries',
    description: 'Partnership opportunities, feedback, and general questions',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    supportType: 'general',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '', supportType: 'general' });
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto p-4"
        >
          <Card className="border-2 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle className="text-2xl mb-4 text-emerald-600 dark:text-emerald-400">
                Message Sent Successfully!
              </CardTitle>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Thank you for contacting LawPharm Academy. Our support team will review your message and respond within 4-6 hours.
              </p>
              <div className="space-y-3">
                <Button onClick={() => setIsSubmitted(false)} className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Another Message
                </Button>
                <a
                  href="/"
                  className="block w-full py-2 text-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  Return to Homepage
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-600 via-teal-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Have questions about pharmacy laws or need help with your studies? Our dedicated support team is here to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the type of support you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {supportTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-t-4 border-t-emerald-500">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-linear-to-r ${type.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg mb-3 text-slate-900 dark:text-slate-100">{type.title}</CardTitle>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Multiple ways to reach our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-emerald-600 dark:text-emerald-400">
                        {info.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2 text-slate-900 dark:text-slate-100">{info.title}</CardTitle>
                    <a
                      href={info.link}
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 font-medium block mb-2"
                    >
                      {info.content}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Fill out the form below and we'll respond within 4-6 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-emerald-100 dark:border-emerald-900/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Enter your full name"
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Support Type
                        </label>
                        <select
                          name="supportType"
                          value={formData.supportType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="student">Student Support</option>
                          <option value="technical">Technical Issue</option>
                          <option value="content">Content Question</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>

                      <Input
                        label="Subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Please provide details about your inquiry. The more specific you are, the better we can help you."
                        required
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How often is the content updated?',
                answer: 'Our content is regularly updated to reflect the latest amendments and changes in pharmacy laws. Major updates are published quarterly, with critical changes added immediately. We also send notifications to users about important updates.',
              },
              {
                question: 'Is this platform free to use?',
                answer: 'Yes, all core features of LawPharm Academy are completely free. We believe in making quality legal education accessible to everyone. Some premium features may be introduced in the future, but the essential content will always remain free.',
              },
              {
                question: 'Can I download study materials for offline use?',
                answer: 'Yes, we provide downloadable PDF summaries, study notes, and case references for offline studying. These materials are available in the Notes & Summaries section and are regularly updated.',
              },
              {
                question: 'Do you provide personalized guidance or tutoring?',
                answer: 'While our platform is primarily self-serve, you can contact us for specific questions about using the platform effectively. We also provide guidance on study strategies and how to navigate complex legal topics.',
              },
              {
                question: 'How can I report errors or suggest improvements?',
                answer: 'We welcome feedback! You can report errors or suggest improvements through this contact form, selecting "Content Question" as the support type. We review all feedback and make updates accordingly.',
              },
              {
                question: 'Is there mobile app available?',
                answer: 'Currently, LawPharm Academy is a responsive web platform that works perfectly on all devices. We are considering developing a dedicated mobile app based on user demand and feedback.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}