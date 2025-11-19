import React from 'react';
import { BoltIcon } from './Icons';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center space-x-2 mb-4 cursor-pointer w-fit"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <BoltIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BoltBlazers</span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">
              Igniting digital transformation for forward-thinking companies. We build the technology of tomorrow, today.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" onClick={(e) => {e.preventDefault(); onNavigate('home');}} className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('privacy')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} BoltBlazers. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social placeholders */}
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
               <span className="text-white text-xs">In</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
               <span className="text-white text-xs">Tw</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;