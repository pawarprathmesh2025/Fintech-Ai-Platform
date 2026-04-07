import React, { useState } from 'react';
import { Plus, Trash2, Eye, Home, BarChart3, TrendingUp, Briefcase, PiggyBank } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import CreateScenarioModal from '../components/CreateScenarioModal';
import ScenarioDetailModal from '../components/ScenarioDetailModal';

function Scenarios() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);

  const [scenarios, setScenarios] = useState([
    {
      id: 1,
      name: 'Buy a House',
      type: 'Buy a House',
      icon: Home,
      housePrice: 350000,
      downPayment: 70000,
      interestRate: 6.5,
      loanDuration: 30,
      propertyAppreciation: 3,
      netWorthChange: 103787,
      riskScore: 77,
      chartColor: 'rgb(59, 130, 246)'
    },
    {
      id: 2,
      name: 'Buy a House',
      type: 'Buy a House',
      icon: Home,
      housePrice: 350000,
      downPayment: 70000,
      interestRate: 6.5,
      loanDuration: 30,
      propertyAppreciation: 3,
      netWorthChange: 103787,
      riskScore: 77,
      chartColor: 'rgb(20, 184, 166)'
    }
  ]);

  const handleCreateScenario = (newScenario) => {
    const scenario = {
      id: scenarios.length + 1,
      ...newScenario,
      icon: Home,
      netWorthChange: Math.floor(Math.random() * 200000) + 50000,
      riskScore: Math.floor(Math.random() * 100),
      chartColor: 'rgb(20, 184, 166)'
    };
    setScenarios([...scenarios, scenario]);
    setShowCreateModal(false);
  };

  const handleViewDetails = (scenario) => {
    setSelectedScenario(scenario);
    setShowDetailModal(true);
  };

  const handleDeleteScenario = (id) => {
    setScenarios(scenarios.filter(s => s.id !== id));
  };

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-50 min-h-screen p-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scenarios</h1>
            <p className="text-gray-500 text-sm mt-1">Create and manage your financial simulations</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition"
          >
            <Plus size={18} />
            New Scenario
          </button>
        </div>

        {/* Scenarios Grid - Compact */}
        <div className="grid grid-cols-2 gap-6">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-200 hover:shadow-md transition min-h-[240px] w-full">
              {/* Header with Icon and Delete */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Home className="text-teal-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{scenario.name}</h3>
                    <p className="text-[12px] text-gray-500">{scenario.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteScenario(scenario.id)}
                  className="text-gray-400 hover:text-red-500 transition p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Mini Chart */}
              <div className="mb-3 h-28 rounded-3xl overflow-hidden bg-slate-50">
                <svg className="w-full h-full" viewBox="0 0 320 90" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id={`grad-${scenario.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: scenario.chartColor, stopOpacity: 0.28 }} />
                      <stop offset="100%" style={{ stopColor: scenario.chartColor, stopOpacity: 0.05 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 76 L 65 58 L 120 42 L 175 32 L 230 22 L 285 15 L 310 12 L 310 90 L 10 90 Z"
                    fill={`url(#grad-${scenario.id})`}
                  />
                  <polyline
                    points="10,76 65,58 120,42 175,32 230,22 285,15 310,12"
                    fill="none"
                    stroke={scenario.chartColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">Net Worth Change</p>
                  <p className="text-xl font-semibold text-green-600">+${(scenario.netWorthChange / 1000).toFixed(0)}k</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">Risk</p>
                  <p className="text-xl font-semibold text-gray-900">{scenario.riskScore}/100</p>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(scenario)}
                className="w-full py-2 text-gray-600 hover:text-teal-600 font-semibold text-xs flex items-center justify-center gap-2 transition"
              >
                <Eye size={16} />
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showCreateModal && (
        <CreateScenarioModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateScenario}
        />
      )}

      {showDetailModal && selectedScenario && (
        <ScenarioDetailModal
          scenario={selectedScenario}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
}

export default Scenarios;
