'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Button from './ui/Button';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/pharmacy-laws', label: 'Pharmacy Laws' },
  { href: '/constitution', label: 'Constitution' },
  { href: '/amendments', label: 'Amendments' },
  { href: '/penalties', label: 'Penalties' },
  { href: '/case-references', label: 'Case References' },
  { href: '/cases-news', label: 'Cases & News' },
  { href: '/judiciary-preparation', label: 'Judiciary Prep' },
  { href: '/notes-summaries', label: 'Notes & Study Materials' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Modern Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-3xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                PharmaJuris
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          {/* Modern Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-sm font-medium rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Modern Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Modern Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isDark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-slate-600" />}
              </div>
            </button>

            {/* Modern Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isOpen ? <X size={20} className="text-slate-700 dark:text-slate-300" /> : <Menu size={20} className="text-slate-700 dark:text-slate-300" />}
              </div>
            </button>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden border-t border-slate-200/50 dark:border-slate-700/50 py-6 backdrop-blur-xl"
            >
              <div className="grid gap-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 group"
                    >
                      <span className="relative">
                        {item.label}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}