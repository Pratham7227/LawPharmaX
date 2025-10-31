import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PJ</span>
              </div>
              <span className="text-xl font-bold text-white">PharmaJuris</span>
            </div>
            <p className="text-sm leading-relaxed">
              Comprehensive pharmaceutical law education and regulatory guidance for legal professionals, pharmacists, and students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/pharmacy-laws" className="text-sm hover:text-white transition-colors">Pharmacy Laws</Link></li>
              <li><Link href="/amendments" className="text-sm hover:text-white transition-colors">Amendments</Link></li>
              <li><Link href="/penalties" className="text-sm hover:text-white transition-colors">Penalties</Link></li>
              <li><Link href="/case-references" className="text-sm hover:text-white transition-colors">Case References</Link></li>
              <li><Link href="/cases-news" className="text-sm hover:text-white transition-colors">Cases & News</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/cookies" className="text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">info@lawpharmacy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-sm text-slate-400 text-center">
            © {currentYear} PharmaJuris. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}