import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

function CreateScenarioModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: 'Buy a House',
    type: 'Buy a House',
    projectionPeriod: 10,
    housePrice: 350000,
    downPayment: 70000,
    interestRate: 6.5,
    loanDuration: 30,
    propertyAppreciation: 3
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: isNaN(value) ? value : parseFloat(value)
    }));
  };

  const handleSliderChange = (value) => {
    setFormData(prev => ({
      ...prev,
      projectionPeriod: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const scenarioTypes = [
    'Buy a House',
    'Take a Loan',
    'Invest in Stocks',
    'Start a Business',
    'Save Aggressively'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Create New Scenario</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Scenario Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Scenario Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:border-teal-600 text-gray-900"
              placeholder="Enter scenario name"
            />
          </div>

          {/* Scenario Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Scenario Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-white"
            >
              {scenarioTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Projection Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Projection Period: {formData.projectionPeriod} years
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={formData.projectionPeriod}
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-900 mb-4">Scenario Parameters</h3>
          </div>

          {/* House Price & Down Payment */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">House Price ($)</label>
              <input
                type="number"
                name="housePrice"
                value={formData.housePrice}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Down Payment ($)</label>
              <input
                type="number"
                name="downPayment"
                value={formData.downPayment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-gray-50"
              />
            </div>
          </div>

          {/* Interest Rate & Loan Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Loan Duration (Years)</label>
              <input
                type="number"
                name="loanDuration"
                value={formData.loanDuration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-gray-50"
              />
            </div>
          </div>

          {/* Property Appreciation */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Property Appreciation (%)</label>
            <input
              type="number"
              step="0.1"
              name="propertyAppreciation"
              value={formData.propertyAppreciation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-gray-900 bg-gray-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition mt-8"
          >
            <Sparkles size={20} />
            Run AI Simulation
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateScenarioModal;
