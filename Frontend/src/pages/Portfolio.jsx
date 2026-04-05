import React from 'react';
import { DollarSign, TrendingUp, BarChart3, Percent, Plus, Trash2 } from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Sidebar from '../components/Sidebar';

const topCards = [
  {
    label: 'Total Investment',
    value: '₹50,000',
    icon: DollarSign,
    color: 'text-emerald-600',
  },
  {
    label: 'Projected Value',
    value: '₹113,313',
    icon: TrendingUp,
    color: 'text-sky-600',
  },
  {
    label: 'Total Gain',
    value: '₹63,313',
    icon: BarChart3,
    color: 'text-violet-600',
  },
  {
    label: 'Weighted Return',
    value: '8.0%/yr',
    icon: Percent,
    color: 'text-emerald-600',
  },
];

const assets = [
  { name: 'US Stocks', allocation: 40, returnRate: 10, color: '#10b981' },
  { name: 'Bonds', allocation: 25, returnRate: 5, color: '#38bdf8' },
  { name: 'Real Estate', allocation: 15, returnRate: 7, color: '#a855f7' },
  { name: 'Crypto', allocation: 10, returnRate: 20, color: '#f59e0b' },
  { name: 'Cash', allocation: 10, returnRate: 2, color: '#ef4444' },
];

const pieData = [
  { name: 'US Stocks', value: 40, color: '#10b981' },
  { name: 'Bonds', value: 25, color: '#38bdf8' },
  { name: 'Real Estate', value: 15, color: '#a855f7' },
  { name: 'Crypto', value: 10, color: '#f59e0b' },
  { name: 'Cash', value: 10, color: '#ef4444' },
];

const growthData = [
  { year: 'Year 0', stocks: 24000, bonds: 12000, realEstate: 9000, crypto: 6000, cash: 3000 },
  { year: 'Year 1', stocks: 26000, bonds: 13000, realEstate: 10000, crypto: 7000, cash: 3000 },
  { year: 'Year 2', stocks: 28000, bonds: 14000, realEstate: 11000, crypto: 9000, cash: 3000 },
  { year: 'Year 3', stocks: 30000, bonds: 15000, realEstate: 12000, crypto: 10000, cash: 3000 },
  { year: 'Year 4', stocks: 32000, bonds: 16000, realEstate: 13000, crypto: 11000, cash: 3000 },
  { year: 'Year 5', stocks: 34000, bonds: 17000, realEstate: 14000, crypto: 12000, cash: 3000 },
  { year: 'Year 6', stocks: 36000, bonds: 18000, realEstate: 15000, crypto: 13000, cash: 3000 },
  { year: 'Year 7', stocks: 38000, bonds: 19000, realEstate: 16000, crypto: 14000, cash: 3000 },
  { year: 'Year 8', stocks: 40000, bonds: 20000, realEstate: 17000, crypto: 15000, cash: 3000 },
  { year: 'Year 9', stocks: 42000, bonds: 21000, realEstate: 18000, crypto: 16000, cash: 3000 },
  { year: 'Year 10', stocks: 44000, bonds: 22000, realEstate: 19000, crypto: 17000, cash: 3000 },
];

const formatRupees = (value) => `₹${value.toLocaleString()}`;

const CustomGrowthTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg text-sm text-slate-900">
      <p className="mb-3 text-base font-semibold">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center justify-between gap-4 border-b border-slate-100 py-2 last:border-b-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="font-medium text-slate-700">{entry.name}</span>
          </div>
          <span className="font-semibold text-slate-900">{formatRupees(entry.value)}</span>
        </div>
      ))}
    </div>
  );
};

function Portfolio() {
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-50 min-h-screen p-8 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Simulator</h1>
          <p className="text-gray-500 text-sm mt-1">Design and test your investment portfolio allocation</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-6">
          {topCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <Icon size={18} className={card.color} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">{card.value}</p>
                    <p className="text-sm text-gray-500">{card.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.02fr_1.2fr] gap-6">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-gray-900">Allocation</p>
                </div>
                <p className="text-sm font-semibold text-emerald-600">100%</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Total Investment (₹)</p>
                  <input
                    type="text"
                    value="50000"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none"
                    readOnly
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Projection Period</p>
                    <span className="text-xs font-semibold text-slate-500">10 years</span>
                  </div>
                  <input type="range" min="1" max="30" value="10" className="w-full accent-emerald-500" readOnly />
                </div>
              </div>

              <div className="mt-6 max-h-[480px] space-y-4 overflow-y-auto pr-2">
                {assets.map((asset) => (
                  <div key={asset.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-slate-900">{asset.name}</p>
                        <p className="text-xs text-slate-500">{asset.allocation}% allocation</p>
                      </div>
                      <button className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="rounded-full bg-white p-3">
                      <div className="h-2 rounded-full bg-slate-200">
                        <div className="h-2 rounded-full" style={{ width: `${asset.allocation}%`, backgroundColor: asset.color }} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">Return %</p>
                      <input
                        type="text"
                        value={asset.returnRate}
                        className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-gray-900 outline-none"
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <span className="inline-flex items-center gap-2">
                  <Plus size={18} />
                  Add Asset
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-gray-900 mb-6">Portfolio Allocation</p>
              <div className="flex items-center justify-center py-8">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" innerRadius={84} outerRadius={120} paddingAngle={3}>
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                {pieData.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-gray-900 mb-4">Projected Growth</p>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={growthData}
                    margin={{ top: 12, right: 20, left: -12, bottom: 0 }}
                    barCategoryGap="20%"
                    barGap={0}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} tickFormatter={(value) => `₹${value / 1000}k`} />
                    <Tooltip content={<CustomGrowthTooltip />} cursor={{ fill: 'rgba(148,163,184,0.08)' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: 12, color: '#0f172a' }} />
                    <Bar dataKey="stocks" name="US Stocks" stackId="a" fill="#10b981" radius={0} barSize={26} />
                    <Bar dataKey="bonds" name="Bonds" stackId="a" fill="#38bdf8" radius={0} barSize={26} />
                    <Bar dataKey="realEstate" name="Real Estate" stackId="a" fill="#a855f7" radius={0} barSize={26} />
                    <Bar dataKey="crypto" name="Crypto" stackId="a" fill="#f59e0b" radius={0} barSize={26} />
                    <Bar dataKey="cash" name="Cash" stackId="a" fill="#ef4444" radius={0} barSize={26} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                {pieData.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
