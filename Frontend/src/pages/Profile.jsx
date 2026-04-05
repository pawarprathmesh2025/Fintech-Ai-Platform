import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Bell, Moon, Download, HelpCircle, Shield, Star } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const accountItems = [
  { title: 'Personal Details', subtitle: 'Shradha Pawar' },
  { title: 'Location', subtitle: 'Set your location' },
  { title: 'Connected Accounts', subtitle: 'No accounts connected' },
];

const supportItems = [
  { title: 'Help & Support' },
  { title: 'Privacy Policy' },
];

export default function Profile() {
  const navigate = useNavigate();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [plan, setPlan] = useState('Free Plan');

  const handleAction = (label) => {
    window.alert(`${label} clicked`);
  };

  const handleUpgrade = () => {
    setPlan('Premium Plan');
    window.alert('Upgraded to Premium!');
  };

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className={`flex min-h-screen ${darkModeOn ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-slate-900'}`}>
      <Sidebar />
      <div className="ml-64 flex-1 p-8 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-semibold">
                SP
              </div>
              <div>
                <p className="text-2xl font-bold">Shradha Pawar</p>
                <p className="text-sm text-slate-500">abc@gmail.com</p>
              </div>
            </div>

            <div className={`rounded-[28px] p-6 shadow-sm ${darkModeOn ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${darkModeOn ? 'bg-slate-800 text-slate-100' : 'bg-white/20 text-white/90'}`}>
                    <Star size={14} />
                    {plan}
                  </div>
                  <p className={`mt-4 text-sm ${darkModeOn ? 'text-slate-400' : 'text-white/90'}`}>Upgrade for unlimited simulations & AI insights</p>
                </div>
                <button
                  type="button"
                  onClick={handleUpgrade}
                  className={`rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${darkModeOn ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-white text-emerald-700 hover:bg-slate-100'}`}
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <CardSection title="Account" darkMode={darkModeOn}>
              {accountItems.map((item) => (
                <ActionRow
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  onClick={() => handleAction(item.title)}
                  darkMode={darkModeOn}
                />
              ))}
            </CardSection>
            <CardSection title="Preferences" darkMode={darkModeOn}>
              <ToggleRow
                label="Notifications"
                enabled={notificationsOn}
                onToggle={() => setNotificationsOn((prev) => !prev)}
                icon={<Bell size={18} />}
                darkMode={darkModeOn}
              />
              <ToggleRow
                label="Dark Mode"
                enabled={darkModeOn}
                onToggle={() => setDarkModeOn((prev) => !prev)}
                icon={<Moon size={18} />}
                darkMode={darkModeOn}
              />
            </CardSection>
            <CardSection title="Data" darkMode={darkModeOn}>
              <ActionRow
                title="Export Data"
                subtitle="PDF / CSV"
                onClick={() => handleAction('Export Data')}
                icon={<Download size={18} />}
                darkMode={darkModeOn}
              />
            </CardSection>
            <CardSection title="Support" darkMode={darkModeOn}>
              {supportItems.map((item) => (
                <ActionRow
                  key={item.title}
                  title={item.title}
                  subtitle=""
                  onClick={() => handleAction(item.title)}
                  icon={item.title === 'Help & Support' ? <HelpCircle size={18} /> : <Shield size={18} />}
                  darkMode={darkModeOn}
                />
              ))}
            </CardSection>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="w-full rounded-3xl bg-red-100 px-6 py-4 text-center text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-200"
          >
            Sign Out
          </button>

          <p className={`text-center text-xs ${darkModeOn ? 'text-slate-500' : 'text-slate-400'}`}>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

function CardSection({ title, children, darkMode }) {
  return (
    <div className={`rounded-[28px] border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
      <div className={`border-b px-6 py-4 text-sm uppercase tracking-[0.25em] ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-400'}`}>{title}</div>
      <div className="space-y-2 p-4">{children}</div>
    </div>
  );
}

function ActionRow({ title, subtitle, onClick, icon, darkMode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-3xl border px-4 py-4 text-left transition ${darkMode ? 'border-slate-700 bg-slate-900 hover:bg-slate-800' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-sm ${darkMode ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-500'}`}>
            {icon || <ArrowRight size={18} className={darkMode ? 'text-slate-200' : 'text-slate-500'} />}
          </div>
          <div>
            <p className={`font-medium ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{title}</p>
            {subtitle ? <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p> : null}
          </div>
        </div>
        <ArrowRight size={18} className={darkMode ? 'text-slate-400' : 'text-slate-400'} />
      </div>
    </button>
  );
}

function ToggleRow({ label, enabled, onToggle, icon, darkMode }) {
  return (
    <div className={`flex items-center justify-between rounded-3xl border px-4 py-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-sm ${darkMode ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-500'}`}>
          {icon}
        </div>
        <p className={`font-medium ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{label}</p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className={`h-7 w-12 rounded-full p-1 transition ${enabled ? 'bg-emerald-500' : darkMode ? 'bg-slate-700' : 'bg-slate-300'}`}
      >
        <span className={`block h-5 w-5 rounded-full bg-white shadow-sm transition ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}
