import { DollarSign, TrendingUp, Zap, AlertCircle, Home, BarChart3, PiggyBank, Briefcase } from 'lucide-react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-8">
        
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Financial Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Your AI-powered financial command center</p>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
            <span>✓</span>
            New Simulation
            <span>→</span>
          </button>
        </div>

        {/* Metrics Cards Row */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-teal-600" size={24} />
              </div>
              <span className="text-green-500 text-sm font-semibold">↑ 12.4%</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$30,000</p>
            <p className="text-gray-600 text-sm font-medium">Net Worth</p>
            <p className="text-gray-400 text-xs mt-1">vs last year</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <span className="text-green-500 text-sm font-semibold">↑ 5.2%</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$2,000</p>
            <p className="text-gray-600 text-sm font-medium">Monthly Surplus</p>
            <p className="text-gray-400 text-xs mt-1">vs last month</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="text-purple-600" size={24} />
              </div>
              <span className="text-gray-400 text-sm font-semibold">—</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">2</p>
            <p className="text-gray-600 text-sm font-medium">Scenarios Run</p>
            <p className="text-gray-400 text-xs mt-1">this month</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-pink-600" size={24} />
              </div>
              <span className="text-gray-400 text-sm font-semibold">—</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">77</p>
            <p className="text-gray-600 text-sm font-medium">Avg Risk Score</p>
            <p className="text-gray-400 text-xs mt-1">portfolio</p>
          </div>
        </div>

        {/* Quick Simulate Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Simulate</h2>
          <div className="grid grid-cols-5 gap-4">
            {/* Buy a House */}
            <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-5 border border-lime-200 hover:border-lime-400 cursor-pointer transition hover:shadow-md">
              <div className="w-10 h-10 bg-lime-200 rounded-lg flex items-center justify-center mb-3">
                <Home className="text-lime-700" size={20} />
              </div>
              <p className="font-bold text-gray-900 text-sm">Buy a House</p>
              <p className="text-xs text-gray-600 mt-1">Manage property value</p>
            </div>

            {/* Take a Loan */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200 hover:border-blue-400 cursor-pointer transition hover:shadow-md">
              <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mb-3">
                <BarChart3 className="text-blue-700" size={20} />
              </div>
              <p className="font-bold text-gray-900 text-sm">Take a Loan</p>
              <p className="text-xs text-gray-600 mt-1">Debt impact analysis</p>
            </div>

            {/* Invest in Stocks */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200 hover:border-purple-400 cursor-pointer transition hover:shadow-md">
              <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="text-purple-700" size={20} />
              </div>
              <p className="font-bold text-gray-900 text-sm">Invest in Stocks</p>
              <p className="text-xs text-gray-600 mt-1">Portfolio growth</p>
            </div>

            {/* Start a Business */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200 hover:border-orange-400 cursor-pointer transition hover:shadow-md">
              <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center mb-3">
                <Briefcase className="text-orange-700" size={20} />
              </div>
              <p className="font-bold text-gray-900 text-sm">Start a Business</p>
              <p className="text-xs text-gray-600 mt-1">Revenue projection</p>
            </div>

            {/* Save Aggressively */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200 hover:border-pink-400 cursor-pointer transition hover:shadow-md">
              <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center mb-3">
                <PiggyBank className="text-pink-700" size={20} />
              </div>
              <p className="font-bold text-gray-900 text-sm">Save Aggressively</p>
              <p className="text-xs text-gray-600 mt-1">Savings growth</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Baseline Projection Chart */}
          <div className="col-span-2 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Baseline Projection</h3>
            <p className="text-sm text-gray-500 mb-6">10-year outlook without changes</p>

            {/* Chart SVG */}
            <svg className="w-full h-48" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
              {/* Grid Lines */}
              <line x1="50" y1="160" x2="550" y2="160" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="110" x2="550" y2="110" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="60" x2="550" y2="60" stroke="#e5e7eb" strokeWidth="1" />

              {/* Y-axis labels */}
              <text x="35" y="165" fontSize="12" fill="#9ca3af" textAnchor="end">$0k</text>
              <text x="35" y="115" fontSize="12" fill="#9ca3af" textAnchor="end">$175k</text>
              <text x="35" y="65" fontSize="12" fill="#9ca3af" textAnchor="end">$250k</text>

              {/* Area Chart - Gradient fill */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 0.05 }} />
                </linearGradient>
              </defs>

              {/* Path for area chart */}
              <path
                d="M 50 150 L 100 130 L 150 110 L 200 100 L 250 80 L 300 70 L 350 60 L 400 50 L 450 40 L 500 30 L 550 20 L 550 160 L 50 160 Z"
                fill="url(#chartGradient)"
              />

              {/* Line */}
              <polyline
                points="50,150 100,130 150,110 200,100 250,80 300,70 350,60 400,50 450,40 500,30 550,20"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="3"
              />

              {/* X-axis */}
              <line x1="50" y1="160" x2="550" y2="160" stroke="#d1d5db" strokeWidth="2" />

              {/* X-axis labels */}
              <text x="50" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 0</text>
              <text x="550" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 10</text>
              <text x="300" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 5</text>
            </svg>
          </div>

          {/* Financial Health */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Financial Health</h3>
            <p className="text-sm text-gray-500 mb-6">Based on your current profile</p>

            {/* Circular Progress */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 140 140">
                  {/* Background Circle */}
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  {/* Progress Circle */}
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="8"
                    strokeDasharray="226 377"
                    strokeLinecap="round"
                    transform="rotate(-90 70 70)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-gray-900">60</p>
                  <p className="text-xs text-gray-500">/ 100</p>
                </div>
              </div>
            </div>

            <p className="text-center font-bold text-amber-500 mb-6">Moderate</p>

            {/* Metrics */}
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Savings Rate</span>
                <span className="font-bold text-gray-900">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Debt-to-Income</span>
                <span className="font-bold text-gray-900">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Emergency Fund</span>
                <span className="font-bold text-gray-900">7 months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Scenarios */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Scenarios</h2>
            <a href="#" className="text-teal-600 text-sm font-semibold hover:underline">View all</a>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Scenario Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-gray-600 text-sm font-medium mb-2">Buy a House</p>
              <p className="text-3xl font-bold text-green-500 mb-2">+$103,787</p>
              <p className="text-gray-600 text-sm">Net worth change over 10 years</p>
            </div>

            {/* Scenario Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <p className="text-gray-600 text-sm font-medium mb-2">Buy a House</p>
              <p className="text-3xl font-bold text-green-500 mb-2">+$103,787</p>
              <p className="text-gray-600 text-sm">Net worth change over 10 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;