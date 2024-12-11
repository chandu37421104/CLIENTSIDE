import { TaskProgress } from '../components/TaskProgress';
import { tasks, leaderboardData, facultyData } from '../data/mockData';

export const Facultydashboard = () => {
  const totalPoints = tasks
    .filter(task => task.status === 'completed')
    .reduce((sum, task) => sum + task.points, 0);

  const getBadgeInfo = () => {
    if (totalPoints >= 5000) return { type: 'Gold', color: 'yellow-500', emoji: '🏆' };
    if (totalPoints >= 3000) return { type: 'Silver', color: 'gray-400', emoji: '🥈' };
    if (totalPoints >= 1000) return { type: 'Bronze', color: 'amber-600', emoji: '🥉' };
    return null;
  };

  const badgeInfo = getBadgeInfo();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="text-dark py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {facultyData.name}! 👋
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-dark-100">
              Current Points: <span className="font-semibold">{totalPoints}</span>
            </p>
            {badgeInfo && (
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${badgeInfo.color}/10`}>
                <span className="text-lg">{badgeInfo.emoji}</span>
                <span className={`font-medium text-${badgeInfo.color}`}>
                  {badgeInfo.type} Badge
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskProgress tasks={tasks} />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Top 5 Leaders</h2>
            <div className="space-y-4">
              {leaderboardData.slice(0, 5).map((player) => (
                <div key={player.rank} className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {player.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.points} points</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                      {player.rank}
                    </div>
                    {player.points >= 5000 && <span className="text-yellow-500">🏆</span>}
                    {player.points >= 3000 && player.points < 5000 && <span className="text-gray-400">🥈</span>}
                    {player.points >= 1000 && player.points < 3000 && <span className="text-amber-600">🥉</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};