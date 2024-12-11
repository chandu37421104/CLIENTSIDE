import { Task, LeaderboardEntry, FacultyTask, PiTask } from '../types';

export const tasks: Task[] = [
  { id: 1, title: "Complete Project Milestone 1", deadline: "2024-11-25", status: "completed", points: 1000 },
  { id: 2, title: "Submit Weekly Report", deadline: "2024-11-22", status: "completed", points: 500 },
  { id: 3, title: "Prepare Presentation", deadline: "2024-11-28", status: "completed", points: 800 },
  { id: 4, title: "Team Meeting Notes", deadline: "2024-11-21", status: "pending", points: 300 },
];

export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Sarah Smith", points: 5500, avatar: "S", role: "Faculty" },
  { rank: 2, name: "Alex Johnson", points: 4350, avatar: "A", role: "Faculty" },
  { rank: 1, name: "Mike Brown", points: 3200, avatar: "M", role: "Student" },
  { rank: 2, name: "Emma Davis", points: 2100, avatar: "E", role: "Student" },
  { rank: 3, name: "John Doe", points: 1800, avatar: "J", role: "Student" },
  { rank: 4, name: "Olivia Green", points: 1700, avatar: "O", role: "Student" },
  { rank: 5, name: "Lucas White", points: 1600, avatar: "L", role: "Student" },
  { rank: 1, name: "Grace Taylor", points: 1500, avatar: "G", role: "PI Team" },
  { rank: 2, name: "William Harris", points: 1450, avatar: "W", role: "PI Team" },
  { rank: 3, name: "Sophia Martinez", points: 1400, avatar: "S", role: "PI Team" },
  { rank: 3, name: "Daniel Clark", points: 1200, avatar: "D", role: "Faculty" },
  { rank: 6, name: "Liam Hall", points: 1100, avatar: "L", role: "Student" },
  { rank: 7, name: "Ava Moore", points: 1000, avatar: "A", role: "Student" },
  { rank: 4, name: "Benjamin Lee", points: 900, avatar: "B", role: "PI Team" },
];

export const studentData = {
  name: "Harika Nalabolu",
  points: 2300
};

export const facultyData = {
  name: "vihitha",
  points: 2300
};

export const facultytasks: FacultyTask[] = [
  { id: 1, title: "Student Mentor meeting", deadline: "2024-11-25", status: "pending", points: 1000 },
  { id: 2, title: "check-in with student", deadline: "2024-11-22", status: "pending", points: 500 },
  { id: 3, title: "Research ", deadline: "2024-11-28", status: "pending", points: 800 },
  { id: 4, title: "Attend FLC", deadline: "2024-11-21", status: "pending", points: 300 },
  { id: 5, title: "NRMN & CAM training", deadline: "2024-11-21", status: "pending", points: 300 },

];


export const pitasks: PiTask[] = [
  { id: 1, title: "Leading FLC meeting", deadline: "2024-11-25", status: "pending", points: 1000 },
  { id: 2, title: "weekly PI meeting", deadline: "2024-11-22", status: "pending", points: 500 },
  { id: 3, title: "Attend monthly EPP/AAAS meeting", deadline: "2024-11-28", status: "completed", points: 800 },
  { id: 4, title: "Outreach activities", deadline: "2024-11-21", status: "pending", points: 300 },

];