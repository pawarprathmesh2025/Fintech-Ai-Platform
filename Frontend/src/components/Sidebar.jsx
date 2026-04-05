import { Home, Zap, GitCompare, Briefcase, TrendingUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Dashboard', icon: Home, path: '/dashboard' },
    { label: 'Scenarios', icon: Zap, path: '/scenarios' },
    { label: 'Compare', icon: GitCompare, path: '/compare' },
    { label: 'Portfolio', icon: Briefcase, path: '/portfolio' },
    { label: 'Tracker', icon: TrendingUp, path: '/tracker' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 cursor-pointer" onClick={() => navigate('/dashboard')}>
        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <div>
          <p className="font-bold text-gray-900 text-lg">FinSim</p>
          <p className="text-xs text-gray-500 font-medium">AI Scenario Lab</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          const Icon = item.icon;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
                isActive
                  ? 'bg-teal-50 text-teal-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* AI Powered Section */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-4 border border-teal-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
            <span className="text-white text-xs font-bold">●</span>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900">AI Powered</p>
            <p className="text-xs text-gray-600 mt-2 leading-snug">Simulate any financial decision and see its 30-year impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
