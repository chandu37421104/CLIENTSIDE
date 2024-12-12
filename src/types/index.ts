export interface Task {
  id: number;
  title: string;
  deadline: string;
  status: 'completed' | 'pending';
  points: number;
}

export interface FacultyTask {
  id: number;
  title: string;
  deadline: string;
  status: 'completed' | 'pending';
  points: number;
}

export interface PiTask {
  id: number;
  title: string;
  deadline: string;
  status: 'completed' | 'pending';
  points: number;
}
export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  role: 'Faculty' | 'Student' | 'PI Team';
}



export interface Student {
  name: string;
  points: number;
}