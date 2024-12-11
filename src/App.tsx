import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Facultynavbar } from './components/Facultynavbar';
import { Pinavbar } from './components/Pinavbar';
import { Dashboard } from './pages/Dashboard';
import { Tasks } from './pages/Tasks';
import { Leaderboard } from './pages/Leaderboard';
import { Rewards } from './pages/Rewards';
import { Signin } from './pages/Signin';
import { ForgotPassword } from './pages/Forgotpassword';
import { Facultydashboard } from './pages/Facultydashboard';
import { Facultytask } from './pages/Facultytask';

import { Facultyrewards } from './pages/Facultyrewards';

import { Pitask } from './pages/Pitask';

import { Pirewards } from './pages/Pirewards';
import Admindashboard from './pages/Admindashboard';
import { Pidashboard } from './pages/Pidashboard';

function AppContent() {
  const location = useLocation();

  // Array of paths where no navbar should be shown
  const noNavbarPaths = ['/signin', '/forgotpassword' , '/admindashbord'];

  // Array to determine which navbar to show
  const facultyNavPaths = [
    '/facultydashboard',
    '/facultytask',
    
    '/facultyrewards',
  ];

  const piNavPaths = [
    '/pidashboard',
    '/pitask',
   
    '/pirewards',
  ];

  // Determine which navbar to render
  const shouldRenderFacultyNavbar = facultyNavPaths.includes(location.pathname);
  const shouldRenderPiNavbar = piNavPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!noNavbarPaths.includes(location.pathname) && (
        shouldRenderFacultyNavbar ? (
          <Facultynavbar />
        ) : shouldRenderPiNavbar ? (
          <Pinavbar />
        ) : (
          <Navbar /> // Default Navbar for students or other routes
        )
      )}

      {/* Routes Configuration */}
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Student Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/rewards" element={<Rewards />} />

        {/* Faculty Routes */}
        <Route path="/facultydashboard" element={<Facultydashboard />} />
        <Route path="/facultytask" element={<Facultytask />} />

        <Route path="/facultyrewards" element={<Facultyrewards />} />

        {/* PI Routes */}
       <Route path="/pidashboard" element={<Pidashboard />} />
        <Route path="/pitask" element={<Pitask />} />
       
        <Route path="/pirewards" element={<Pirewards />} />

        <Route path="/admindashbord" element={<Admindashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
