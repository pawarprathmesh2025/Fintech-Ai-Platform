import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import Sidebar from '../components/Sidebar';

const lineData = [
  { year: 'Year 0', scenarioA: 48000, scenarioB: 50000 },
  { year: 'Year 1', scenarioA: 62000, scenarioB: 54000 },
  { year: 'Year 2', scenarioA: 76000, scenarioB: 68000 },
  { year: 'Year 3', scenarioA: 90000, scenarioB: 82000 },
  { year: 'Year 4', scenarioA: 104000, scenarioB: 96000 },
  { year: 'Year 5', scenarioA: 118000, scenarioB: 110000 },
  { year: 'Year 6', scenarioA: 132000, scenarioB: 124000 },
  { year: 'Year 7', scenarioA: 146000, scenarioB: 138000 },
  { year: 'Year 8', scenarioA: 160000, scenarioB: 152000 },
  { year: 'Year 9', scenarioA: 174000, scenarioB: 166000 },
  { year: 'Year 10', scenarioA: 188000, scenarioB: 180000 },
];

const radarData = [
  { subject: 'Safety', A: 80, B: 72, fullMark: 100 },
  { subject: 'Growth', A: 88, B: 84, fullMark: 100 },
  { subject: 'Liquidity', A: 72, B: 65, fullMark: 100 },
  { subject: 'Returns', A: 92, B: 86, fullMark: 100 },
  { subject: 'Stability', A: 78, B: 70, fullMark: 100 },
];

const scenarioOptions = [
  { id: 'a', name: 'Buy a House', color: '#0ea5e9', dotClass: 'bg-sky-500' },
  { id: 'b', name: 'Buy a House', color: '#22c55e', dotClass: 'bg-emerald-500' },
];

function Compare() {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleScenario = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedScenarios = scenarioOptions.filter((scenario) => selectedIds.includes(scenario.id));

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-50 min-h-screen p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Compare Scenarios</h1>
          <p className="text-gray-500 text-sm mt-1">Select up to 4 scenarios to compare side by side</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {scenarioOptions.map((scenario) => {
            const selected = selectedIds.includes(scenario.id);
            return (
              <button
                key={scenario.id}
                onClick={() => toggleScenario(scenario.id)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? 'border-emerald-300 bg-white text-slate-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {selected && <CheckCircle2 size={16} className="text-emerald-500" />}
                <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: scenario.color }} />
                {scenario.name}
              </button>
            );
          })}
        </div>

        {selectedIds.length < 2 ? (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-8 py-14 text-center text-slate-500 shadow-sm">
            <p className="text-sm font-medium">Select at least 2 scenarios to start comparing</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Net Worth Comparison</h2>
                  <p className="text-sm text-gray-500">Projected net worth over time</p>
                </div>
              </div>
              <div className="w-full h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip
                      contentStyle={{ borderRadius: 16, border: '1px solid #e5e7eb' }}
                      formatter={(value) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: 13, color: '#0f172a' }} />
                    <Line type="monotone" dataKey="scenarioA" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, fill: '#0ea5e9' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="scenarioB" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: '#22c55e' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
              <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Risk Profile Comparison</h3>
                  </div>
                </div>
                <div className="w-full h-[360px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name={selectedScenarios[0].name} dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                      <Radar name={selectedScenarios[1].name} dataKey="B" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                    Buy a House
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Buy a House
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {selectedScenarios.map((scenario) => (
                  <div key={scenario.id} className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-5">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: scenario.color }} />
                        <p className="text-sm font-semibold text-gray-900">{scenario.name}</p>
                      </div>
                      <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        Buy a House
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-left">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-1">Net Worth Δ</p>
                        <p className="text-xl font-semibold text-emerald-600">+$194k</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-1">Risk Score</p>
                        <p className="text-xl font-semibold text-gray-900">77/100</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-1">Final NW</p>
                        <p className="text-xl font-semibold text-gray-900">$224k</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compare;
