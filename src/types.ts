export type Module = 'recruiter' | 'candidate' | 'trainee' | 'marketplace';

export interface Interview {
  id: string;
  jobTitle: string;
  company: string;
  status: 'active' | 'closed';
  candidatesCount: number;
  avgScore: number;
  createdAt: string;
  endingDate: string;
  agentAvatar: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  fitScore: number;
  confidenceScore: number;
  date: string;
  duration: string;
  recommendation: 'Recommended' | 'Review' | 'Rejected';
  cvUrl?: string;
}

export interface TrainingAgent {
  id: string;
  name: string;
  role: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  mastery: number;
  avgScore: number;
  sessions: number;
  avatar: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'Technical' | 'Behavioral' | 'Scenario' | 'Communication' | 'Problem-solving';
  difficulty: 'Low' | 'Medium' | 'Hard';
}
