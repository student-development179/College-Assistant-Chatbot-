
export enum ChatCategory {
  COLLEGE_INFO = 'College Info',
  ACADEMICS = 'Academics',
  FACULTY = 'Faculty',
  TIMETABLE = 'Timetable',
  HOLIDAYS = 'Holidays',
  STUDENT_PORTAL = 'Student Portal',
  SMALL_TALK = 'Small Talk',
  BRANCHES_KNOWLEDGE = 'Branches Knowledge',
  FEES_INFO = 'Fees Info',
  CAREERS = 'Careers',
  FALLBACK = 'Fallback'
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: ChatCategory;
  options?: string[]; // New for selectable buttons
}

export interface ChatResponse {
  id: number;
  keyword: string;
  response: string;
  category: ChatCategory;
  branch?: string;
}
