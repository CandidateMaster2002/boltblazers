import React from 'react';
import { CodeIcon, RocketIcon, BrainIcon, ShieldIcon } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Custom Development',
    description: 'Tailor-made web and mobile applications built with modern frameworks like React, Vue, and Node.js.',
    icon: <CodeIcon className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps to accelerate your digital transformation and market growth.',
    icon: <RocketIcon className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'AI & Automation',
    description: 'Leverage Gemini and other LLMs to automate workflows and create intelligent user experiences.',
    icon: <BrainIcon className="w-8 h-8 text-pink-400" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security protocols to protect your data and infrastructure from threats.',
    icon: <ShieldIcon className="w-8 h-8 text-green-400" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine creative design with technical excellence to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group cursor-pointer"
            >
              <div className="mb-6 bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;