import  { useState, FC } from 'react';
import { Home, TrophyIcon, Gift, UserPlus } from 'lucide-react';

// Import the other page components
import { Adminenroll } from './Adminenroll';

import { Adminreward } from './Adminreward';
import { Leaderboard } from './Leaderboard';


// Type definitions
interface NavButtonProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  active: boolean;
}

// Main Admin Dashboard Component
const AdminDashboard: FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'enroll':
        return <Adminenroll />;
        case 'leaderboard':
        return <Leaderboard />;
      
      case 'rewards':
        return <Adminreward />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          <NavButton 
            icon={<Home />} 
            label="Dashboard" 
            onClick={() => setCurrentPage('dashboard')}
            active={currentPage === 'dashboard'}
          />
          <NavButton 
            icon={<UserPlus />} 
            label="Enroll" 
            onClick={() => setCurrentPage('enroll')}
            active={currentPage === 'enroll'}
          />
          <NavButton 
            icon={<TrophyIcon />} 
            label="Leaderboard" 
            onClick={() => setCurrentPage('leaderboard')}
            active={currentPage === 'leaderboard'}
          />
          <NavButton 
            icon={<Gift />} 
            label="Rewards" 
            onClick={() => setCurrentPage('rewards')}
            active={currentPage === 'rewards'}
          />
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
};

// Navigation Button Component
const NavButton: FC<NavButtonProps> = ({ icon, label, onClick, active }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-full p-3 mb-2 rounded transition-colors ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'hover:bg-gray-700 text-gray-300'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  );
};

// Placeholder Components for Other Pages
const DashboardHome: FC = () => (
  <div className="bg-white shadow-md rounded-lg p-8">
    <h2 className="text-2xl font-bold">Welcome to Admin Dashboard</h2>
    <p className="mt-4">Select a section from the sidebar to get started.</p>
  </div>
);

export default AdminDashboard;