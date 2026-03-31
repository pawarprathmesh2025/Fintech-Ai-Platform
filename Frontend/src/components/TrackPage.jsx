import React, { useState } from "react";
import { Home, BarChart2, Target, Folder, User, Plus, Utensils, ShoppingBag, Wallet, CreditCard, ShoppingCart } from "lucide-react";

export default function TrackPage() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");

  const [chartData, setChartData] = useState([
    { m: "Oct", inc: 85000, exp: 70000 },
    { m: "Nov", inc: 86000, exp: 72000 },
    { m: "Dec", inc: 95000, exp: 71000 },
    { m: "Jan", inc: 84000, exp: 69000 },
    { m: "Feb", inc: 86000, exp: 72000 },
    { m: "Mar", inc: 87000, exp: 70000 },
  ]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] font-poppins flex flex-col justify-between">

      {/* Content */}
      <div className="p-4 pb-24">

        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Track</h2>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <TopCard title="Income" value="₹85k" color="green" />
          <TopCard title="Expense" value="₹48k" color="red" />
          <TopCard title="Savings" value="43.5%" color="blue" />
        </div>

        {/* Chart */}
        <h3 className="text-lg font-semibold mb-3">Income vs Expense</h3>

        <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
          <div className="flex items-end justify-between h-44 gap-2">
            {chartData.map((item) => (
              <div key={item.m} className="relative flex flex-col items-center gap-1 group">

                {/* Bigger Tooltip */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white shadow-lg rounded-xl px-4 py-3 text-sm w-36">
                  <p className="font-medium">{item.m}</p>
                  <p className="text-green-500">income: {item.inc}</p>
                  <p className="text-red-500">expense: {item.exp}</p>
                </div>

                <div className="flex items-end gap-1">
                  <div className="w-3 bg-green-500 rounded-lg" style={{ height: item.inc / 1000 }}></div>
                  <div className="w-3 bg-red-500 rounded-lg" style={{ height: item.exp / 1000 }}></div>
                </div>
                <span className="text-xs text-gray-400">{item.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <h2 className="text-lg font-semibold mb-3">Category Breakdown</h2>

        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-6">
          <div className="relative w-32 h-32">
            <div className="w-full h-full rounded-full border-[16px] border-purple-500 border-r-orange-400 border-b-green-400 border-l-pink-400"></div>
          </div>

          <div className="text-sm w-full space-y-2">
            <Legend color="bg-orange-400" label="Food & Dining" value="25%" />
            <Legend color="bg-purple-500" label="Housing" value="52%" />
            <Legend color="bg-green-400" label="Transportation" value="9%" />
          </div>
        </div>

        {/* Transactions */}
        <h2 className="text-lg font-semibold mt-6 mb-3">Recent Transactions</h2>

        <div className="space-y-3">
          <Transaction title="Lunch at Cafe" time="Mar 6 • 2:30 PM" amount="-₹850" type="expense" />
          <Transaction title="Online Shopping" time="Mar 5 • 6:45 PM" amount="-₹2,500" type="expense" />
          <Transaction title="Monthly Salary" time="Mar 1 • 12:00 AM" amount="+₹85,000" type="income" />
          <Transaction title="Home Loan EMI" time="Mar 1 • 9:00 AM" amount="-₹25,000" type="expense" />
          <Transaction title="Grocery Shopping" time="Feb 28 • 7:15 PM" amount="-₹3,500" type="expense" />
        </div>
      </div>

      {/* Floating Button */}
      <button onClick={() => setShowModal(true)} className="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg">
        <Plus />
      </button>

      {/* Bigger Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl w-96">
            <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const updated = [...chartData];
                  updated[updated.length - 1].inc += Number(amount);
                  setChartData(updated);
                  setShowModal(false);
                  setAmount("");
                }}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg"
              >
                Add Income
              </button>

              <button
                onClick={() => {
                  const updated = [...chartData];
                  updated[updated.length - 1].exp += Number(amount);
                  setChartData(updated);
                  setShowModal(false);
                  setAmount("");
                }}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg"
              >
                Add Expense
              </button>
            </div>

            <button onClick={() => setShowModal(false)} className="mt-4 text-sm text-gray-400">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="bg-white rounded-t-3xl p-3 flex justify-around items-center shadow-lg">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<BarChart2 size={20} />} label="Track" active />
        <NavItem icon={<Target size={20} />} label="Simulate" />
        <NavItem icon={<Folder size={20} />} label="Scenarios" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>

    </div>
  );
}

function Transaction({ title, time, amount, type }) {
  const getIcon = () => {
    if (title.includes("Lunch")) return <Utensils size={18} />;
    if (title.includes("Shopping")) return <ShoppingBag size={18} />;
    if (title.includes("Salary")) return <Wallet size={18} />;
    if (title.includes("Loan")) return <CreditCard size={18} />;
    if (title.includes("Grocery")) return <ShoppingCart size={18} />;
    return <Wallet size={18} />;
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
          {getIcon()}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>
      <p className={`font-semibold ${type === "income" ? "text-green-500" : "text-red-500"}`}>
        {amount}
      </p>
    </div>
  );
}

function Legend({ color, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${color}`}></span>
        <span>{label}</span>
      </div>
      <span>{value}</span>
    </div>
  );
}

function TopCard({ title, value, color }) {
  const styles = {
    green: "bg-green-50 border border-green-200 text-green-700",
    red: "bg-red-50 border border-red-200 text-red-600",
    blue: "bg-indigo-50 border border-indigo-200 text-indigo-600",
  };

  return (
    <div className={`p-4 rounded-2xl ${styles[color]} shadow-sm`}>
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-semibold">{value}</h2>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div className={`flex flex-col items-center text-xs ${active ? "text-green-500" : "text-gray-400"}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
