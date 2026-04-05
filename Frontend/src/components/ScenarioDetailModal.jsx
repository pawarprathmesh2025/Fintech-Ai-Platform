import React from 'react';
import { X, AlertCircle, TrendingUp } from 'lucide-react';

function ScenarioDetailModal({ scenario, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{scenario.name}</h2>
            <p className="text-sm text-gray-600">{scenario.type}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* AI Analysis */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h3 className="font-bold text-teal-600 mb-2 flex items-center gap-2">
              <span className="text-teal-600">●</span>
              AI Analysis
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In this scenario, buying a house at ${(scenario.housePrice / 1000).toFixed(0)}k with a substantial down payment of ${(scenario.downPayment / 1000).toFixed(0)}k is feasible given the current income and expense levels, leading to an impressive projected net worth growth to ${(scenario.netWorthChange / 1000).toFixed(0)}k over 10 years. With a strong risk score of {scenario.riskScore}/100, the buyer shows a moderate risk tolerance, which is advantageous for leveraging a mortgage with favorable long-term appreciation expectations.
            </p>
          </div>

          {/* Net Worth Projection */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Net Worth Projection</h3>
            <svg className="w-full h-56" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
              {/* Grid Lines */}
              <line x1="60" y1="160" x2="480" y2="160" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="60" y1="120" x2="480" y2="120" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="60" y1="80" x2="480" y2="80" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="60" y1="40" x2="480" y2="40" stroke="#e5e7eb" strokeWidth="1" />

              {/* Y-axis labels */}
              <text x="50" y="165" fontSize="11" fill="#9ca3af" textAnchor="end">$0k</text>
              <text x="50" y="165" fontSize="11" fill="#9ca3af" textAnchor="end">$0k</text>
              <text x="50" y="125" fontSize="11" fill="#9ca3af" textAnchor="end">$100k</text>
              <text x="50" y="85" fontSize="11" fill="#9ca3af" textAnchor="end">$200k</text>
              <text x="50" y="45" fontSize="11" fill="#9ca3af" textAnchor="end">$300k</text>

              {/* Area gradient */}
              <defs>
                <linearGradient id="netWorthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 0.05 }} />
                </linearGradient>
              </defs>

              {/* Area */}
              <path
                d="M 60 145 L 105 130 L 150 120 L 195 105 L 240 90 L 285 75 L 330 60 L 375 50 L 420 40 L 465 30 L 480 25 L 480 160 L 60 160 Z"
                fill="url(#netWorthGradient)"
              />

              {/* Line */}
              <polyline
                points="60,145 105,130 150,120 195,105 240,90 285,75 330,60 375,50 420,40 465,30 480,25"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2"
              />

              {/* X-axis */}
              <line x1="60" y1="160" x2="480" y2="160" stroke="#d1d5db" strokeWidth="2" />

              {/* X-axis labels */}
              <text x="60" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 0</text>
              <text x="150" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 2</text>
              <text x="270" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 5</text>
              <text x="380" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 8</text>
              <text x="480" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle">Year 10</text>
            </svg>
          </div>

          {/* Risk Score and Financial Breakdown Row */}
          <div className="grid grid-cols-5 gap-4 items-center">
            {/* Risk Score */}
            <div className="col-span-1 flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="6"
                    strokeDasharray={`${(scenario.riskScore / 100) * 314} 314`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-gray-900">{scenario.riskScore}</p>
                  <p className="text-xs text-gray-600">/100</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-red-500 mt-2">High</p>
              <p className="text-xs text-gray-600">Risk Score</p>
            </div>

            {/* Financial Breakdown */}
            <div className="col-span-4">
              <h3 className="font-bold text-gray-900 mb-4">Financial Breakdown</h3>
              <svg className="w-full h-40" viewBox="0 0 400 140" preserveAspectRatio="xMidYMid meet">
                {/* Y-axis labels */}
                <text x="10" y="125" fontSize="11" fill="#9ca3af">$0k</text>
                <text x="10" y="90" fontSize="11" fill="#9ca3af">$95k</text>
                <text x="10" y="55" fontSize="11" fill="#9ca3af">$190k</text>
                <text x="10" y="20" fontSize="11" fill="#9ca3af">$285k</text>

                {/* Grid lines */}
                <line x1="30" y1="120" x2="390" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="30" y1="85" x2="390" y2="85" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="30" y1="50" x2="390" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="30" y1="15" x2="390" y2="15" stroke="#e5e7eb" strokeWidth="1" />

                {/* Grouped bars for each year */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((year) => {
                  const x = 35 + year * 36;
                  return (
                    <g key={year}>
                      {/* Savings (Blue) */}
                      <rect x={x - 8} y={110} width="6" height="20" fill="#3b82f6" />
                      {/* Investments (Purple) */}
                      <rect x={x - 1} y={100} width="6" height="30" fill="#a855f7" />
                      {/* Debt (Red) */}
                      <rect x={x + 6} y={60} width="6" height="70" fill="#ef4444" />
                      {/* Year label */}
                      <text x={x} y="135" fontSize="10" fill="#9ca3af" textAnchor="middle">Y{year}</text>
                    </g>
                  );
                })}

                {/* Legend */}
                <rect x="40" y="5" width="8" height="8" fill="#3b82f6" />
                <text x="52" y="12" fontSize="11" fill="#3b82f6" fontWeight="bold">Savings</text>

                <rect x="140" y="5" width="8" height="8" fill="#a855f7" />
                <text x="152" y="12" fontSize="11" fill="#a855f7" fontWeight="bold">Investments</text>

                <rect x="280" y="5" width="8" height="8" fill="#ef4444" />
                <text x="292" y="12" fontSize="11" fill="#ef4444" fontWeight="bold">Debt</text>
              </svg>
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">AI Recommendations</h3>
            <div className="space-y-3">
              {[
                'Consider increasing your savings rate to build a larger emergency fund, which can cover at least 3-6 months of expenses.',
                'Explore different mortgage options and consult with lenders to find the best interest rates and terms that suit your financial profile.',
                'Plan for additional costs related to homeownership, such as maintenance, property tax, and insurance, which could impact cash flow.',
                'Invest in strategies for reducing debt over time, even if it is currently at $0, to maintain a healthy debt-to-income ratio for future financial moves.'
              ].map((rec, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScenarioDetailModal;
