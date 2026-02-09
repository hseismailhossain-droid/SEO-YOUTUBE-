
import React, { useState } from 'react';
import { 
  Settings, 
  ChevronRight, 
  Home, 
  PlayCircle, 
  BarChart2, 
  User, 
  Gift,
  Bot
} from 'lucide-react';
import { TOOLS } from './constants';
import { ToolCard } from './components/ToolCard';
import { ToolModal } from './components/ToolModal';
import { Tool } from './types';

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="min-h-screen pb-40 flex flex-col max-w-md mx-auto bg-white shadow-xl relative">
      {/* Header */}
      <header className="px-6 pt-6 pb-2 sticky top-0 bg-white z-40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 border border-gray-200 rounded-lg shadow-sm">
             <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
             </div>
          </div>
          <span className="font-semibold text-gray-700 text-sm">Your pain</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">YouSEO For Video</h1>
        <button className="text-gray-400 hover:text-gray-600">
           <Settings className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Text */}
      <div className="px-6 py-4">
        <p className="text-gray-400 text-sm">Your all-in-one hub for YouTube Channel growth!</p>
      </div>

      {/* Grid of Tools */}
      <main className="px-6 grid grid-cols-2 gap-4 flex-1">
        {TOOLS.map((tool) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onClick={setSelectedTool} 
          />
        ))}
      </main>

      {/* AI Coach Action Bar */}
      <div className="fixed bottom-24 left-0 right-0 px-6 z-40 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all active:scale-95 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">YouTube AI Coach</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </button>
          
          <button className="w-16 h-16 bg-white border-2 border-indigo-100 rounded-3xl flex items-center justify-center shadow-lg relative active:scale-95 transition-all">
            <Gift className="w-8 h-8 text-indigo-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">1</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 max-w-md mx-auto rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <NavItem 
          icon={<PlayCircle />} 
          label="Video" 
          active={activeTab === 'video'} 
          onClick={() => setActiveTab('video')} 
        />
        <NavItem 
          icon={<Home />} 
          label="Shorts" 
          active={activeTab === 'shorts'} 
          onClick={() => setActiveTab('shorts')} 
        />
        <NavItem 
          icon={<BarChart2 />} 
          label="Analytics" 
          active={activeTab === 'analytics'} 
          onClick={() => setActiveTab('analytics')} 
        />
        <NavItem 
          icon={<User />} 
          label="Profile" 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
        />
      </nav>

      {/* Tool Modal */}
      <ToolModal 
        tool={selectedTool} 
        onClose={() => setSelectedTool(null)} 
      />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-indigo-600 scale-110' : 'text-gray-400'}`}
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
    <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'opacity-100' : 'opacity-0'}`}>
      {label}
    </span>
  </button>
);

export default App;
