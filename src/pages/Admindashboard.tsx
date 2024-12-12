import { useState, FC, useEffect } from 'react';
import axios from 'axios';
import { Home, TrophyIcon, Gift, UserPlus } from 'lucide-react';

// Import the other page components
import { Adminenroll } from './Adminenroll';
import { Adminreward } from './Adminreward';


// Type definitions
interface NavButtonProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  active: boolean;
}

// API Base URL (Update based on backend URL)
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Main Admin Dashboard Component
const AdminDashboard: FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]); // Stores leaderboard data
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Leaderboard Data
  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/admin/leaderboards`);
      setLeaderboardData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      setLoading(false);
    }
  };

  // Render selected page
  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'enroll':
        return <Adminenroll />;
      case 'leaderboard':
        return <Leaderboard data={leaderboardData} fetchLeaderboard={fetchLeaderboard} />;
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
            onClick={() => {
              setCurrentPage('leaderboard');
              fetchLeaderboard(); // Fetch leaderboard data on click
            }}
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
        {loading ? <p>Loading...</p> : renderPage()}
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
        active ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
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

// Leaderboard Component
const Leaderboard: FC<{ data: any[]; fetchLeaderboard: () => void }> = ({ data, fetchLeaderboard }) => (
  <div className="bg-white shadow-md rounded-lg p-8">
    <h2 className="text-2xl font-bold">Leaderboard</h2>
    <p className="mt-4">Role-specific rankings of participants:</p>
    {data.map((roleLeaderboard, index) => (
      <div key={index} className="mt-6">
        <h3 className="text-xl font-bold">{roleLeaderboard.role}</h3>
        <ul className="mt-2">
          {roleLeaderboard.leaderboard.map((user: any, i: number) => (
            <li key={i} className="p-2 border-b border-gray-300">
              <span className="font-medium">{i + 1}. {user.name}</span> - {user.totalPoints} points
            </li>
          ))}
        </ul>
      </div>
    ))}
    <button
      onClick={fetchLeaderboard}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Refresh Leaderboard
    </button>
  </div>
);

export default AdminDashboard;
