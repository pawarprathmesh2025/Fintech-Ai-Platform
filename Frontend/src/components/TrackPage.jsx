import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import Sidebar from "./Sidebar";

const expenseCategories = [
  { name: "Housing", amount: 900, percentage: "30%", color: "#10b981" },
  { name: "Food", amount: 450, percentage: "15%", color: "#38bdf8" },
  { name: "Transport", amount: 360, percentage: "12%", color: "#a855f7" },
  { name: "Utilities", amount: 240, percentage: "8%", color: "#fbbf24" },
  { name: "Entertainment", amount: 300, percentage: "10%", color: "#ef4444" },
  { name: "Healthcare", amount: 240, percentage: "8%", color: "#ec4899" },
  { name: "Savings", amount: 360, percentage: "12%", color: "#22c55e" },
  { name: "Other", amount: 150, percentage: "5%", color: "#64748b" },
];

const monthlyData = [
  { month: "Jan", income: 4800, expenses: 3000 },
  { month: "Feb", income: 4700, expenses: 2900 },
  { month: "Mar", income: 5200, expenses: 3100 },
  { month: "Apr", income: 5100, expenses: 3050 },
  { month: "May", income: 4950, expenses: 2950 },
  { month: "Jun", income: 5050, expenses: 3000 },
  { month: "Jul", income: 4700, expenses: 2920 },
  { month: "Aug", income: 5100, expenses: 2850 },
  { month: "Sep", income: 5000, expenses: 2950 },
  { month: "Oct", income: 5200, expenses: 3100 },
  { month: "Nov", income: 5100, expenses: 3050 },
  { month: "Dec", income: 5300, expenses: 3200 },
];

const donutData = expenseCategories.map((category) => ({ name: category.name, value: category.amount, color: category.color }));

export default function TrackPage() {
  const [activeTab, setActiveTab] = useState("expense");

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 bg-gray-50 min-h-screen p-8 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Income & Expense Tracker</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your financial profile and track spending</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveTab("expense")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              activeTab === "expense"
                ? "bg-white text-slate-900 shadow-sm"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Expense Breakdown
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              activeTab === "monthly"
                ? "bg-white text-slate-900 shadow-sm"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Monthly Trends
          </button>
        </div>

        {activeTab === "expense" ? (
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-gray-900 mb-6">Expense Categories</p>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                      <Pie data={donutData} dataKey="value" innerRadius={72} outerRadius={120} paddingAngle={2}>
                        {donutData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                {donutData.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</p>
              <div className="space-y-4">
                {expenseCategories.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-3.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-slate-800">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">₹{item.amount}</p>
                      <p className="text-xs text-slate-500">{item.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between text-sm font-semibold text-slate-900">
                <span>Total Monthly</span>
                <span>₹3,000</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-900">Monthly Income vs Expenses</p>
              <p className="text-sm text-slate-500 mt-1">2026 projected trend</p>
            </div>
            <div className="w-full h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 8, right: 24, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} tickFormatter={(value) => `₹${value / 1000}k`} />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} cursor={{ fill: 'rgba(148,163,184,0.08)' }} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: 12, color: '#0f172a' }} />
                  <Bar dataKey="income" name="Income" fill="#10b981" radius={[10, 10, 0, 0]} barSize={28} />
                  <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[10, 10, 0, 0]} barSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
