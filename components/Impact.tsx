import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatData } from '../types';

const data: StatData[] = [
  { name: '2022', value: 45 },
  { name: '2023', value: 78 },
  { name: '2024', value: 120 },
  { name: '2025', value: 185 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-xl">
        <p className="text-slate-200 font-bold">{`Year: ${label}`}</p>
        <p className="text-blue-400">{`Projects: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Impact: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Accelerating Growth Year Over Year
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Since our inception, BoltBlazers has maintained a relentless focus on delivery quality and client satisfaction. Our project volume reflects the trust our partners place in us.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
                <div className="text-slate-400">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-500 mb-2">250+</div>
                <div className="text-slate-400">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="h-80 w-full bg-slate-950/50 rounded-2xl p-6 border border-slate-800 shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(59, 130, 246, 0.1)'}} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-500 mt-4">Projects Delivered Successfully</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;